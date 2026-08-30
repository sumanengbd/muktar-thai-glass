/**
 * Bind this script to a PRIVATE Google Sheet (Extensions > Apps Script).
 *
 * Tabs (created on setup / first request):
 *   Config      key | value   (optional fallback owner pin + email)
 *   Users       email | pin | role   (owner | operator)
 *   Companies      name | thickness | rate | color   (one row per company; mm/color use | )
 *   Aluminium      name | thickness | rate | color   (one row per company; mm/color use | )
 *   Locks          name | rate | style
 *   Charges        key | value   (net, extra)
 *   CutParams      key | value
 *   Quotes         id | time | name | phone | items | sqft | total | status
 *   QuoteItems     line fields including aluminium + thickness
 *
 * Deploy: Deploy > New deployment > Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Copy the /exec URL into js/config.js as window.MTG_SHEET_API
 *
 * Do NOT publish the spreadsheet as "Anyone with the link".
 */

var PIN_FAIL_MAX = 8;
var PIN_LOCK_MS = 10 * 60 * 1000;
var TZ = "Asia/Dhaka";

function setup() {
  ensureSheets_();
}

function doGet(e) {
  try {
    var action = String((e && e.parameter && e.parameter.action) || "catalog").trim();
    if (action === "catalog") return json_(publicCatalog_());
    return json_({ ok: false, error: "method" });
  } catch (err) {
    return json_({ ok: false, error: "server" });
  }
}

function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }
    var action = String(body.action || "").trim();
    if (action === "catalog") {
      return json_(publicCatalog_());
    }
    ensureSheets_();
    if (action === "quote") {
      return handleQuote_(body);
    }
    if (isLocked_()) return json_({ ok: false, error: "locked" });
    var email = String(body.email || "").trim().toLowerCase();
    var pin = String(body.pin || "").trim();
    if (!email || !pin) return json_({ ok: false, error: "required" });
    var user = findUser_(email, pin);
    if (!user) {
      recordFail_();
      return json_({ ok: false, error: "pin" });
    }
    clearFails_();
    if (action === "save") {
      if (user.role !== "owner") return json_({ ok: false, error: "forbidden" });
      writeCompanies_(body.companies || []);
      writeLocks_(body.locks || []);
      writeAluminium_(body.aluminium || []);
      writeCharges_(body.charges || {});
      writeCut_(body.cutParams || {});
      if (Array.isArray(body.glassThicks)) writeGlassThicks_(body.glassThicks);
      if (Array.isArray(body.users)) writeUsers_(body.users, user);
    }
    return json_({
      ok: true,
      role: user.role,
      companies: readCompanies_(),
      locks: readLocks_(),
      aluminium: readAluminium_(),
      glassThicks: readGlassThicks_(),
      charges: readCharges_(),
      cutParams: readCut_(),
      quotes: (user.role === "owner" || user.role === "operator") ? readQuotes_() : [],
      users: user.role === "owner" ? readUsers_() : []
    });
  } catch (err) {
    return json_({ ok: false, error: "server" });
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function ss_() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function nowText_() {
  return Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd HH:mm");
}

var SHEET_STYLE_ = [
  ["Config", "#6b7280", 2],
  ["Users", "#5b4d9a", 3],
  ["Companies", "#0e6b86", 4],
  ["Aluminium", "#3d6f8a", 4],
  ["Locks", "#d28a1a", 3],
  ["Charges", "#2f8f5b", 2],
  ["CutParams", "#2a5f73", 2],
  ["Quotes", "#c17a20", 8],
  ["QuoteItems", "#f2a93b", 20],
  ["GlassThickness", "#0e6b86", 1]
];

function styleSheet_(sh, tabColor, cols) {
  if (!sh) return;
  if (tabColor) sh.setTabColor(tabColor);
  var n = cols || Math.max(1, sh.getLastColumn());
  var head = sh.getRange(1, 1, 1, n);
  head.setFontWeight("bold");
  head.setFontColor("#ffffff");
  head.setBackground("#0a4456");
  head.setHorizontalAlignment("center");
  head.setVerticalAlignment("middle");
  sh.setFrozenRows(1);
}

function styleSheetByName_(name) {
  for (var i = 0; i < SHEET_STYLE_.length; i++) {
    if (SHEET_STYLE_[i][0] === name) {
      styleSheet_(ss_().getSheetByName(name), SHEET_STYLE_[i][1], SHEET_STYLE_[i][2]);
      return;
    }
  }
}

function styleAllSheets_() {
  var book = ss_();
  for (var i = 0; i < SHEET_STYLE_.length; i++) {
    var spec = SHEET_STYLE_[i];
    var sh = book.getSheetByName(spec[0]);
    if (sh) styleSheet_(sh, spec[1], spec[2]);
  }
}

function configValue_(key) {
  var sh = ss_().getSheetByName("Config");
  if (!sh) return "";
  var a1 = String(sh.getRange("A1").getValue() || "").trim().toLowerCase();
  if (a1 === "key") {
    var rows = sh.getDataRange().getValues();
    for (var i = 1; i < rows.length; i++) {
      if (String(rows[i][0] || "").trim().toLowerCase() === key) {
        return String(rows[i][1] || "").trim();
      }
    }
    return "";
  }
  if (a1 === "pin") {
    if (key === "pin") return String(sh.getRange("B1").getValue() || "").trim();
    if (key === "email") return String(sh.getRange("B2").getValue() || "").trim();
  }
  return "";
}

function ensureConfigSheet_(book) {
  var config = book.getSheetByName("Config") || book.insertSheet("Config");
  var a1 = String(config.getRange("A1").getValue() || "").trim().toLowerCase();
  if (a1 === "key") return config;
  var oldPin = a1 === "pin" ? String(config.getRange("B1").getValue() || "").trim() : "";
  var oldEmail = a1 === "pin" ? String(config.getRange("B2").getValue() || "").trim() : "";
  config.clear();
  config.getRange(1, 1, 3, 2).setValues([
    ["key", "value"],
    ["pin", oldPin || "1234"],
    ["email", oldEmail]
  ]);
  return config;
}

function ensureSheets_() {
  var book = ss_();
  ensureConfigSheet_(book);

  var users = book.getSheetByName("Users") || book.insertSheet("Users");
  if (users.getLastRow() < 2) {
    var ownerEmail = configValue_("email") || "owner@gmail.com";
    var ownerPin = configValue_("pin") || "1234";
    users.clear();
    users.getRange(1, 1, 3, 3).setValues([
      ["email", "pin", "role"],
      [ownerEmail, ownerPin, "owner"],
      ["operator@gmail.com", "1234", "operator"]
    ]);
  }

  var companies = book.getSheetByName("Companies") || book.insertSheet("Companies");
  if (companies.getLastRow() < 2) {
    companies.clear();
    companies.getRange(1, 1, 2, 4).setValues([
      ["name", "thickness", "rate", "color"],
      ["Thai Glass", 5, 95, "clear"]
    ]);
  }
  ensureCompanyShape_();
  var locks = book.getSheetByName("Locks") || book.insertSheet("Locks");
  if (locks.getLastRow() < 2) {
    locks.clear();
    locks.getRange(1, 1, 2, 3).setValues([
      ["name", "rate", "style"],
      ["Sliding lock", 250, "sliding"]
    ]);
  }
  var alu = book.getSheetByName("Aluminium") || book.insertSheet("Aluminium");
  if (alu.getLastRow() < 2) {
    alu.clear();
    alu.getRange(1, 1, 2, 4).setValues([
      ["name", "thickness", "rate", "color"],
      ["Local", 1.0, 180, "silver"]
    ]);
  }
  ensureAluColorColumn_();
  var charges = book.getSheetByName("Charges") || book.insertSheet("Charges");
  if (charges.getLastRow() < 2) {
    charges.clear();
    charges.getRange(1, 1, 3, 2).setValues([
      ["key", "value"],
      ["net", 200],
      ["extra", 0]
    ]);
  }
  var cut = book.getSheetByName("CutParams") || book.insertSheet("CutParams");
  if (cut.getLastRow() < 2) {
    cut.clear();
    cut.getRange(1, 1, 5, 2).setValues([
      ["key", "value"],
      ["outerHoriz", 3.6],
      ["side", 1.1],
      ["shutterHoriz", 1.5],
      ["glassGap", 0.25]
    ]);
  }

  var quotes = book.getSheetByName("Quotes") || book.insertSheet("Quotes");
  if (quotes.getLastRow() < 1) {
    quotes.getRange(1, 1, 1, 8).setValues([[
      "id", "time", "name", "phone", "items", "sqft", "total", "status"
    ]]);
  }
  var qitems = book.getSheetByName("QuoteItems") || book.insertSheet("QuoteItems");
  ensureQuoteItemHeader_(qitems);
  styleAllSheets_();
}

function readUsers_() {
  var sh = ss_().getSheetByName("Users");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    var email = String(rows[i][0] || "").trim().toLowerCase();
    var pin = String(rows[i][1] || "").trim();
    var role = String(rows[i][2] || "").trim().toLowerCase();
    role = normalizeRole_(role);
    if (email && pin && (role === "owner" || role === "operator")) {
      out.push({ email: email, pin: pin, role: role });
    }
  }
  return out;
}

function normalizeRole_(role) {
  var r = String(role || "").trim().toLowerCase();
  if (r === "staff") return "operator";
  return r;
}

function writeUsers_(list, actor) {
  var sh = ss_().getSheetByName("Users") || ss_().insertSheet("Users");
  var rows = [["email", "pin", "role"]];
  var seen = {};
  var owners = 0;

  function addRow(email, pin, role) {
    email = String(email || "").trim().toLowerCase();
    pin = String(pin || "").trim();
    role = normalizeRole_(role);
    if (!email || email.indexOf("@") < 1 || !/^\d{4,8}$/.test(pin)) return;
    if (role !== "owner" && role !== "operator") role = "operator";
    if (seen[email]) return;
    seen[email] = true;
    rows.push([email, pin, role]);
    if (role === "owner") owners++;
  }

  var incoming = list || [];
  for (var i = 0; i < incoming.length; i++) {
    var u = incoming[i];
    if (u) addRow(u.email, u.pin, u.role);
  }
  if (actor) addRow(actor.email, actor.pin, actor.role || "owner");
  if (owners < 1 && actor) {
    var actorEmail = String(actor.email || "").trim().toLowerCase();
    for (var r = 1; r < rows.length; r++) {
      if (rows[r][0] === actorEmail) {
        rows[r][2] = "owner";
        owners++;
        break;
      }
    }
    if (owners < 1) addRow(actor.email, actor.pin, "owner");
  }
  if (rows.length < 2) return;
  sh.clear();
  sh.getRange(1, 1, rows.length, 3).setValues(rows);
  styleSheetByName_("Users");
}

function findUser_(email, pin) {
  if (!/^\d{4,8}$/.test(pin) || !email || email.indexOf("@") < 1) return null;
  var users = readUsers_();
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].pin === pin) return users[i];
  }
  var cfgEmail = String(configValue_("email") || "").trim().toLowerCase();
  var cfgPin = String(configValue_("pin") || "").trim();
  if (cfgEmail && cfgPin && email === cfgEmail && pin === cfgPin) {
    return { email: email, pin: pin, role: "owner" };
  }
  return null;
}

function tryRead_(fn, fallback) {
  try {
    return fn();
  } catch (err) {
    return fallback;
  }
}

function publicCatalog_() {
  return {
    ok: true,
    companies: tryRead_(publicCompanies_, []),
    locks: tryRead_(publicLocks_, []),
    aluminium: tryRead_(publicAluminium_, []),
    glassThicks: tryRead_(glassThicksFromCompanies_, []),
    charges: { net: 0, extra: 0 }
  };
}

function publicCompanies_() {
  return readCompanies_().map(function (c) {
    return { name: c.name, thickness: c.thickness, rate: 0, color: c.color };
  });
}

function glassThicksFromCompanies_() {
  var list = readCompanies_();
  var seen = {};
  var out = [];
  for (var i = 0; i < list.length; i++) {
    var mm = Number(list[i].thickness);
    if (!isNaN(mm) && mm > 0 && !seen[String(mm)]) {
      seen[String(mm)] = true;
      out.push(mm);
    }
  }
  return out;
}

function publicLocks_() {
  return readLocks_().map(function (l) {
    return { name: l.name, rate: 0, style: l.style };
  });
}

function publicAluminium_() {
  return readAluminium_().map(function (a) {
    return { name: a.name, thickness: a.thickness, rate: 0, color: a.color };
  });
}

function ftLabel_(ft) {
  var n = Number(ft) || 0;
  var whole = Math.floor(n + 1e-9);
  var inch = Math.round((n - whole) * 12);
  if (inch >= 12) return String(whole + 1) + " ft";
  return inch > 0 ? whole + " ft " + inch + " in" : whole + " ft";
}

function handleQuote_(body) {
  var name = String(body.name || "").trim();
  var phone = String(body.phone || "").replace(/\s+/g, "");
  var items = body.items || [];
  if (name.length < 2 || name.length > 60) return json_({ ok: false, error: "name" });
  if (!/^(?:\+?88)?01\d{9}$/.test(phone) && !/^\d{10,15}$/.test(phone)) {
    return json_({ ok: false, error: "phone" });
  }
  if (!items.length || items.length > 40) return json_({ ok: false, error: "items" });

  var id = "Q" + Utilities.formatDate(new Date(), TZ, "yyyyMMdd") + "-" +
    Utilities.getUuid().slice(0, 4).toUpperCase();
  var time = nowText_();
  var sqft = 0;
  var total = 0;
  var itemRows = [];

  for (var i = 0; i < items.length; i++) {
    var it = items[i] || {};
    var h = Number(it.heightFt) || 0;
    var w = Number(it.widthFt) || 0;
    var qty = Math.max(1, parseInt(it.qty, 10) || 1);
    var priced = priceItem_(it, h, w, qty);
    sqft += priced.sqft;
    total += priced.total;
    var size = ftLabel_(h) + " x " + ftLabel_(w);
    var type = String(it.type || "").trim();
    var color = String(it.colorLabel || it.color || "").trim();
    var company = String(it.company || "").trim();
    var lock = String(it.lock || "").trim() || "-";
    var net = it.net ? "yes" : "no";
    var alu = String(it.aluminium || "").trim();
    var aluMm = String(it.aluThick || it.alu_mm || "").trim();
    var aluColor = String(it.aluColorLabel || it.aluColor || "").trim();
    var glassMm = String(it.thickness || it.glass_mm || "").trim();
    itemRows.push([
      id, time, name, phone, type, size, qty, color, company, lock, net, priced.total, alu, aluMm, glassMm, aluColor,
      String(it.typeId || it.winType || ""),
      h,
      w,
      String(it.lockStyle || "")
    ]);
  }

  var quotes = ss_().getSheetByName("Quotes");
  quotes.appendRow([id, time, name, phone, items.length, Math.round(sqft * 100) / 100, Math.round(total * 100) / 100, "New"]);

  var qitems = ss_().getSheetByName("QuoteItems");
  ensureQuoteItemHeader_(qitems);
  if (itemRows.length) {
    qitems.getRange(qitems.getLastRow() + 1, 1, itemRows.length, 20).setValues(itemRows);
  }

  return json_({ ok: true, id: id });
}

function readQuoteItems_() {
  var sh = ss_().getSheetByName("QuoteItems");
  var map = {};
  if (!sh) return map;
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    var id = String(rows[i][0] || "").trim();
    if (!id) continue;
    if (!map[id]) map[id] = [];
    map[id].push({
      type: String(rows[i][4] || ""),
      size: String(rows[i][5] || ""),
      qty: Number(rows[i][6]) || 1,
      color: String(rows[i][7] || ""),
      company: String(rows[i][8] || ""),
      lock: String(rows[i][9] || ""),
      net: String(rows[i][10] || "").toLowerCase() === "yes",
      total: Number(rows[i][11]) || 0,
      aluminium: String(rows[i][12] || ""),
      aluMm: String(rows[i][13] || ""),
      glassMm: String(rows[i][14] || ""),
      aluColor: String(rows[i][15] || ""),
      typeId: String(rows[i][16] || ""),
      heightFt: Number(rows[i][17]) || 0,
      widthFt: Number(rows[i][18]) || 0,
      lockStyle: String(rows[i][19] || "")
    });
  }
  return map;
}

function readQuotes_() {
  var sh = ss_().getSheetByName("Quotes");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var lines = readQuoteItems_();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    var id = String(rows[i][0]);
    out.push({
      id: id,
      time: String(rows[i][1]),
      name: String(rows[i][2]),
      phone: String(rows[i][3]),
      items: Number(rows[i][4]) || 0,
      sqft: Number(rows[i][5]) || 0,
      total: Number(rows[i][6]) || 0,
      status: String(rows[i][7] || "New"),
      lines: lines[id] || []
    });
  }
  return out.reverse().slice(0, 40);
}

function props_() {
  return PropertiesService.getScriptProperties();
}

function isLocked_() {
  var until = Number(props_().getProperty("lockUntil") || 0);
  return until && Date.now() < until;
}

function recordFail_() {
  var p = props_();
  var n = Number(p.getProperty("fails") || 0) + 1;
  p.setProperty("fails", String(n));
  if (n >= PIN_FAIL_MAX) p.setProperty("lockUntil", String(Date.now() + PIN_LOCK_MS));
}

function clearFails_() {
  var p = props_();
  p.deleteProperty("fails");
  p.deleteProperty("lockUntil");
}

var COLOR_IDS = ["clear", "green", "blue", "bronze", "gray", "black", "frosted"];

function normalizeColorId_(c) {
  var s = String(c || "").trim().toLowerCase();
  for (var i = 0; i < COLOR_IDS.length; i++) {
    if (COLOR_IDS[i] === s) return s;
  }
  return "clear";
}

function defaultGlassMm_() {
  var sh = ss_().getSheetByName("GlassThickness");
  if (sh && sh.getLastRow() >= 2) {
    var mm = Number(sh.getRange(2, 1).getValue());
    if (!isNaN(mm) && mm > 0) return mm;
  }
  return 5;
}

function ensureCompanyShape_() {
  var sh = ss_().getSheetByName("Companies");
  if (!sh) return;
  var h2 = String(sh.getRange(1, 2).getValue() || "").trim().toLowerCase();
  if (h2 !== "thickness" && h2 !== "mm") {
    sh.insertColumnAfter(1);
    sh.getRange(1, 2).setValue("thickness");
    var last = sh.getLastRow();
    if (last >= 2) {
      var fill = [];
      var mm = defaultGlassMm_();
      for (var i = 0; i < last - 1; i++) fill.push([mm]);
      sh.getRange(2, 2, last - 1, 1).setValues(fill);
    }
  }
  var h4 = String(sh.getRange(1, 4).getValue() || "").trim().toLowerCase();
  if (h4 !== "color") {
    sh.getRange(1, 4).setValue("color");
    var last2 = sh.getLastRow();
    if (last2 >= 2) {
      var colors = sh.getRange(2, 4, last2 - 1, 1).getValues();
      for (var j = 0; j < colors.length; j++) {
        if (!String(colors[j][0] || "").trim()) colors[j][0] = "clear";
      }
      sh.getRange(2, 4, last2 - 1, 1).setValues(colors);
    }
  }
}

function splitPipe_(value) {
  return String(value == null ? "" : value).split("|").map(function (s) {
    return String(s).trim();
  }).filter(function (s) { return s !== ""; });
}

function joinPipe_(arr) {
  var out = [];
  (arr || []).forEach(function (x) {
    var s = String(x == null ? "" : x).trim();
    if (s && out.indexOf(s) < 0) out.push(s);
  });
  return out.join("|");
}

function parseThicks_(value, fallback) {
  var parts = splitPipe_(value);
  var out = [];
  for (var i = 0; i < parts.length; i++) {
    var n = Number(String(parts[i]).replace(/[^0-9.]/g, ""));
    if (!isNaN(n) && n > 0) {
      var seen = false;
      for (var j = 0; j < out.length; j++) if (out[j] === n) seen = true;
      if (!seen) out.push(n);
    }
  }
  if (!out.length && fallback > 0) out.push(fallback);
  return out;
}

function expandComboRow_(name, thickCell, rate, colorCell, colorFn, defaultThick) {
  var thicks = parseThicks_(thickCell, defaultThick);
  var colors = splitPipe_(colorCell).map(colorFn);
  if (!colors.length) colors = [colorFn("")];
  var rows = [];
  for (var t = 0; t < thicks.length; t++) {
    for (var c = 0; c < colors.length; c++) {
      rows.push({
        name: name,
        thickness: thicks[t],
        rate: isNaN(Number(rate)) ? 0 : Number(rate),
        color: colors[c]
      });
    }
  }
  return rows;
}

function groupCombos_(list, colorFn, defaultThick) {
  var order = [];
  var map = {};
  (list || []).forEach(function (row) {
    if (!row || !row.name) return;
    var name = String(row.name).trim();
    if (!map[name]) {
      map[name] = { name: name, thicks: [], colors: [], rate: Number(row.rate) || 0 };
      order.push(name);
    }
    var g = map[name];
    var thicks = parseThicks_(row.thickness, defaultThick);
    var colors = splitPipe_(row.color || "").map(colorFn);
    if (!colors.length) colors = [colorFn("")];
    thicks.forEach(function (mm) {
      if (g.thicks.indexOf(mm) < 0) g.thicks.push(mm);
    });
    colors.forEach(function (id) {
      if (g.colors.indexOf(id) < 0) g.colors.push(id);
    });
    if (!isNaN(Number(row.rate))) g.rate = Number(row.rate);
  });
  return order.map(function (name) { return map[name]; });
}

function readCompanies_() {
  var sh = ss_().getSheetByName("Companies");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var out = [];
  var h2 = String((rows[0] && rows[0][1]) || "").trim().toLowerCase();
  var hasThick = h2 === "thickness" || h2 === "mm";
  for (var i = 1; i < rows.length; i++) {
    var name = String(rows[i][0] || "").trim();
    if (!name) continue;
    var rate = Number(hasThick ? rows[i][2] : rows[i][1]);
    var thickCell = hasThick ? rows[i][1] : 5;
    var colorCell = hasThick ? rows[i][3] : rows[i][2];
    expandComboRow_(name, thickCell, rate, colorCell, normalizeColorId_, 5).forEach(function (row) {
      out.push(row);
    });
  }
  return out;
}

function readLocks_() {
  var sh = ss_().getSheetByName("Locks");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    var name = String(rows[i][0] || "").trim();
    var rate = Number(rows[i][1]);
    var style = String(rows[i][2] || "generic").trim() || "generic";
    if (name) out.push({ name: name, rate: isNaN(rate) ? 0 : rate, style: style });
  }
  return out;
}

function readCut_() {
  var rows = ss_().getSheetByName("CutParams").getDataRange().getValues();
  var map = {};
  for (var i = 1; i < rows.length; i++) {
    map[String(rows[i][0])] = Number(rows[i][1]);
  }
  return {
    outerHoriz: map.outerHoriz || 0,
    side: map.side || 0,
    shutterHoriz: map.shutterHoriz || 0,
    glassGap: map.glassGap || 0
  };
}

function writeCompanies_(list) {
  var sh = ss_().getSheetByName("Companies");
  sh.clear();
  var rows = [["name", "thickness", "rate", "color"]];
  groupCombos_(list, normalizeColorId_, 5).forEach(function (g) {
    rows.push([g.name, joinPipe_(g.thicks), Number(g.rate) || 0, joinPipe_(g.colors)]);
  });
  sh.getRange(1, 1, rows.length, 4).setValues(rows);
  styleSheetByName_("Companies");
}

function writeLocks_(list) {
  var sh = ss_().getSheetByName("Locks");
  sh.clear();
  var rows = [["name", "rate", "style"]];
  (list || []).forEach(function (l) {
    if (l && l.name) rows.push([String(l.name), Number(l.rate) || 0, String(l.style || "generic")]);
  });
  sh.getRange(1, 1, rows.length, 3).setValues(rows);
  styleSheetByName_("Locks");
}

function ensureQuoteItemHeader_(sh) {
  sh.getRange(1, 1, 1, 20).setValues([[
    "quote_id", "time", "name", "phone", "type", "size", "qty", "color", "company",
    "lock", "net", "line_total", "aluminium", "alu_mm", "glass_mm", "alu_color",
    "type_id", "height_ft", "width_ft", "lock_style"
  ]]);
  styleSheet_(sh, "#f2a93b", 20);
}

var ALU_COLOR_IDS = ["silver", "bronze", "black", "white", "champagne", "brown"];

function normalizeAluColorId_(c) {
  var s = String(c || "").trim().toLowerCase();
  for (var i = 0; i < ALU_COLOR_IDS.length; i++) {
    if (ALU_COLOR_IDS[i] === s) return s;
  }
  return "silver";
}

function ensureAluColorColumn_() {
  var sh = ss_().getSheetByName("Aluminium");
  if (!sh) return;
  var header = String(sh.getRange(1, 4).getValue() || "").trim().toLowerCase();
  if (header === "color") return;
  sh.getRange(1, 4).setValue("color");
  var last = sh.getLastRow();
  if (last < 2) return;
  var colors = sh.getRange(2, 4, last - 1, 1).getValues();
  for (var i = 0; i < colors.length; i++) {
    if (!String(colors[i][0] || "").trim()) colors[i][0] = "silver";
  }
  sh.getRange(2, 4, last - 1, 1).setValues(colors);
}

function readAluminium_() {
  var sh = ss_().getSheetByName("Aluminium");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    var name = String(rows[i][0] || "").trim();
    if (!name) continue;
    expandComboRow_(name, rows[i][1], rows[i][2], rows[i][3], normalizeAluColorId_, 1).forEach(function (row) {
      out.push(row);
    });
  }
  return out;
}

function writeAluminium_(list) {
  var sh = ss_().getSheetByName("Aluminium");
  sh.clear();
  var rows = [["name", "thickness", "rate", "color"]];
  groupCombos_(list, normalizeAluColorId_, 1).forEach(function (g) {
    rows.push([g.name, joinPipe_(g.thicks), Number(g.rate) || 0, joinPipe_(g.colors)]);
  });
  sh.getRange(1, 1, rows.length, 4).setValues(rows);
  styleSheetByName_("Aluminium");
}

function readGlassThicks_() {
  var sh = ss_().getSheetByName("GlassThickness");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    var mm = Number(rows[i][0]);
    if (!isNaN(mm) && mm > 0) out.push(mm);
  }
  return out;
}

function writeGlassThicks_(list) {
  var book = ss_();
  var sh = book.getSheetByName("GlassThickness");
  if (!sh) {
    if (!list || !list.length) return;
    sh = book.insertSheet("GlassThickness");
  }
  sh.clear();
  var rows = [["mm"]];
  (list || []).forEach(function (mm) {
    var n = Number(mm);
    if (!isNaN(n) && n > 0) rows.push([n]);
  });
  sh.getRange(1, 1, rows.length, 1).setValues(rows);
  styleSheetByName_("GlassThickness");
}

function readCharges_() {
  var sh = ss_().getSheetByName("Charges");
  var out = { net: 0, extra: 0 };
  if (!sh) return out;
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    out[String(rows[i][0])] = Number(rows[i][1]) || 0;
  }
  return { net: Number(out.net) || 0, extra: Number(out.extra) || 0 };
}

function writeCharges_(charges) {
  var sh = ss_().getSheetByName("Charges");
  sh.clear();
  sh.getRange(1, 1, 3, 2).setValues([
    ["key", "value"],
    ["net", Number(charges && charges.net) || 0],
    ["extra", Number(charges && charges.extra) || 0]
  ]);
  styleSheetByName_("Charges");
}

function findRateByName_(list, name) {
  var n = String(name || "").trim().toLowerCase();
  if (!n) return 0;
  for (var i = 0; i < list.length; i++) {
    if (String(list[i].name || "").trim().toLowerCase() === n) return Number(list[i].rate) || 0;
  }
  return 0;
}

function findCompanyRate_(list, name, color, thick) {
  var n = String(name || "").trim().toLowerCase();
  var col = normalizeColorId_(color);
  var t = Number(thick);
  if (!n) return 0;
  var nameOnly = 0;
  var nameThick = 0;
  for (var i = 0; i < list.length; i++) {
    if (String(list[i].name || "").trim().toLowerCase() !== n) continue;
    nameOnly = Number(list[i].rate) || 0;
    var sameThick = !t || Number(list[i].thickness) === t;
    if (sameThick) nameThick = Number(list[i].rate) || 0;
    if (sameThick && String(list[i].color || "").trim().toLowerCase() === col) {
      return Number(list[i].rate) || 0;
    }
  }
  return nameThick || nameOnly;
}

function findAluRate_(list, name, thick, color) {
  var n = String(name || "").trim().toLowerCase();
  var t = Number(thick);
  var col = normalizeAluColorId_(color);
  if (!n) return 0;
  var nameThick = 0;
  for (var i = 0; i < list.length; i++) {
    if (String(list[i].name || "").trim().toLowerCase() !== n) continue;
    if (Number(list[i].thickness) !== t) continue;
    nameThick = Number(list[i].rate) || 0;
    if (String(list[i].color || "").trim().toLowerCase() === col) {
      return Number(list[i].rate) || 0;
    }
  }
  return nameThick;
}

function priceItem_(it, h, w, qty) {
  var sqft = h * w * qty;
  if (!(sqft > 0)) sqft = Number(it.sqft) || 0;
  var glassRate = findCompanyRate_(readCompanies_(), it.company, it.colorId || it.color, it.thickness || it.glass_mm);
  var aluRate = findAluRate_(readAluminium_(), it.aluminium, it.aluThick || it.alu_mm, it.aluColor || it.alu_color);
  var lockRate = it.lock ? findRateByName_(readLocks_(), it.lock) : 0;
  var charges = readCharges_();
  var glass = sqft * glassRate;
  var frame = sqft * aluRate;
  var lock = lockRate * qty;
  var net = it.net ? charges.net * qty : 0;
  var extra = charges.extra * qty;
  return { sqft: sqft, total: glass + frame + lock + net + extra };
}

function writeCut_(cut) {
  var sh = ss_().getSheetByName("CutParams");
  sh.clear();
  sh.getRange(1, 1, 5, 2).setValues([
    ["key", "value"],
    ["outerHoriz", Number(cut.outerHoriz) || 0],
    ["side", Number(cut.side) || 0],
    ["shutterHoriz", Number(cut.shutterHoriz) || 0],
    ["glassGap", Number(cut.glassGap) || 0]
  ]);
  styleSheetByName_("CutParams");
}
