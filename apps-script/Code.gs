/**
 * Bind this script to a PRIVATE Google Sheet (Extensions > Apps Script).
 *
 * Tabs (created on setup / first request):
 *   Users       email | pin | role   (owner | operator)
 *   Config      A1=pin B1   A2=email B2  (optional fallback owner)
 *   Companies      name | thickness | rate | color   (one row per company+mm+color)
 *   Aluminium      name | thickness | rate | color   (one row per company+mm+color)
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

function myFunction() {
  setup();
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
      writeGlassThicks_(body.glassThicks || []);
      writeCharges_(body.charges || {});
      writeCut_(body.cutParams || {});
      if (body.users) writeUsers_(body.users);
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
      quotes: user.role === "owner" ? readQuotes_() : [],
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

function ensureSheets_() {
  var book = ss_();
  var config = book.getSheetByName("Config") || book.insertSheet("Config");
  if (!config.getRange("A1").getValue()) {
    config.getRange("A1:B1").setValues([["pin", "1234"]]);
  }
  if (!String(config.getRange("A2").getValue() || "").trim()) {
    config.getRange("A2:B2").setValues([["email", ""]]);
  }

  var users = book.getSheetByName("Users") || book.insertSheet("Users");
  if (users.getLastRow() < 2) {
    var ownerEmail = String(config.getRange("B2").getValue() || "").trim() || "owner@gmail.com";
    var ownerPin = String(config.getRange("B1").getValue() || "").trim() || "1234";
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

function writeUsers_(list) {
  var sh = ss_().getSheetByName("Users");
  if (!sh) return;
  var rows = [["email", "pin", "role"]];
  var owners = 0;
  (list || []).forEach(function (u) {
    var email = String((u && u.email) || "").trim().toLowerCase();
    var pin = String((u && u.pin) || "").trim();
    var role = normalizeRole_(u && u.role);
    if (!email || email.indexOf("@") < 1 || !/^\d{4,8}$/.test(pin)) return;
    if (role !== "owner" && role !== "operator") role = "operator";
    rows.push([email, pin, role]);
    if (role === "owner") owners++;
  });
  if (owners < 1 || rows.length < 2) return;
  sh.clear();
  sh.getRange(1, 1, rows.length, 3).setValues(rows);
}

function findUser_(email, pin) {
  if (!/^\d{4,8}$/.test(pin) || !email || email.indexOf("@") < 1) return null;
  var users = readUsers_();
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].pin === pin) return users[i];
  }
  var cfgEmail = String(ss_().getSheetByName("Config").getRange("B2").getValue() || "").trim().toLowerCase();
  var cfgPin = String(ss_().getSheetByName("Config").getRange("B1").getValue() || "").trim();
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
      id, time, name, phone, type, size, qty, color, company, lock, net, priced.total, alu, aluMm, glassMm, aluColor
    ]);
  }

  var quotes = ss_().getSheetByName("Quotes");
  quotes.appendRow([id, time, name, phone, items.length, Math.round(sqft * 100) / 100, Math.round(total * 100) / 100, "New"]);

  var qitems = ss_().getSheetByName("QuoteItems");
  ensureQuoteItemHeader_(qitems);
  if (itemRows.length) {
    qitems.getRange(qitems.getLastRow() + 1, 1, itemRows.length, 16).setValues(itemRows);
  }

  return json_({ ok: true, id: id });
}

function readQuotes_() {
  var sh = ss_().getSheetByName("Quotes");
  var rows = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    out.push({
      id: String(rows[i][0]),
      time: String(rows[i][1]),
      name: String(rows[i][2]),
      phone: String(rows[i][3]),
      items: Number(rows[i][4]) || 0,
      sqft: Number(rows[i][5]) || 0,
      total: Number(rows[i][6]) || 0,
      status: String(rows[i][7] || "New")
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

function readCompanies_() {
  var sh = ss_().getSheetByName("Companies");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  var out = [];
  var h2 = String((rows[0] && rows[0][1]) || "").trim().toLowerCase();
  var hasThick = h2 === "thickness" || h2 === "mm";
  for (var i = 1; i < rows.length; i++) {
    var name = String(rows[i][0] || "").trim();
    var thickness = hasThick ? Number(rows[i][1]) : 5;
    var rate = Number(hasThick ? rows[i][2] : rows[i][1]);
    var color = normalizeColorId_(hasThick ? rows[i][3] : rows[i][2]);
    if (name) {
      out.push({
        name: name,
        thickness: !isNaN(thickness) && thickness > 0 ? thickness : 5,
        rate: isNaN(rate) ? 0 : rate,
        color: color
      });
    }
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
  (list || []).forEach(function (c) {
    if (c && c.name) {
      rows.push([
        String(c.name),
        Number(c.thickness) > 0 ? Number(c.thickness) : 5,
        Number(c.rate) || 0,
        normalizeColorId_(c.color)
      ]);
    }
  });
  sh.getRange(1, 1, rows.length, 4).setValues(rows);
}

function writeLocks_(list) {
  var sh = ss_().getSheetByName("Locks");
  sh.clear();
  var rows = [["name", "rate", "style"]];
  (list || []).forEach(function (l) {
    if (l && l.name) rows.push([String(l.name), Number(l.rate) || 0, String(l.style || "generic")]);
  });
  sh.getRange(1, 1, rows.length, 3).setValues(rows);
}

function ensureQuoteItemHeader_(sh) {
  sh.getRange(1, 1, 1, 16).setValues([[
    "quote_id", "time", "name", "phone", "type", "size", "qty", "color", "company",
    "lock", "net", "line_total", "aluminium", "alu_mm", "glass_mm", "alu_color"
  ]]);
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
    var thickness = Number(rows[i][1]);
    var rate = Number(rows[i][2]);
    var color = normalizeAluColorId_(rows[i][3]);
    if (name && !isNaN(thickness) && thickness > 0) {
      out.push({ name: name, thickness: thickness, rate: isNaN(rate) ? 0 : rate, color: color });
    }
  }
  return out;
}

function writeAluminium_(list) {
  var sh = ss_().getSheetByName("Aluminium");
  sh.clear();
  var rows = [["name", "thickness", "rate", "color"]];
  (list || []).forEach(function (a) {
    if (a && a.name) {
      rows.push([String(a.name), Number(a.thickness) || 0, Number(a.rate) || 0, normalizeAluColorId_(a.color)]);
    }
  });
  sh.getRange(1, 1, rows.length, 4).setValues(rows);
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
  var sh = ss_().getSheetByName("GlassThickness");
  sh.clear();
  var rows = [["mm"]];
  (list || []).forEach(function (mm) {
    var n = Number(mm);
    if (!isNaN(n) && n > 0) rows.push([n]);
  });
  sh.getRange(1, 1, rows.length, 1).setValues(rows);
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
}
