/**
 * Bind this script to a PRIVATE Google Sheet (Extensions > Apps Script).
 *
 * Tabs (created on setup / first request):
 *   Users       email | pin | role   (owner | operator)
 *   Companies      name | thickness | rate | color
 *   Aluminium      name | thickness | rate | color
 *   Locks          name | rate | style
 *   Charges        key | value   (net, extra)
 *   Shop           key | value   (name, slogan, logo)
 *   CutParams      key | value
 *   Quotes         one row per window/door (id + customer + line + room + assigned)
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
    if (action === "quote") return json_(publicQuote_(e && e.parameter && e.parameter.id));
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
    if (action === "quotePatch") {
      if (user.role !== "owner" && user.role !== "operator") {
        return json_({ ok: false, error: "forbidden" });
      }
      return quotePatch_(body);
    }
    if (action === "save") {
      if (user.role !== "owner") return json_({ ok: false, error: "forbidden" });
      writeCompanies_(body.companies || []);
      writeLocks_(body.locks || []);
      writeAluminium_(body.aluminium || []);
      writeCharges_(body.charges || {});
      writeCut_(body.cutParams || {});
      if (Array.isArray(body.glassThicks)) writeGlassThicks_(body.glassThicks);
      if (Array.isArray(body.users)) writeUsers_(body.users, user);
      if (body.shop && typeof body.shop === "object") writeShop_(body.shop);
    }
    return json_({
      ok: true,
      role: user.role,
      companies: readCompanies_(),
      locks: readLocks_(),
      aluminium: readAluminium_(),
      glassThicks: readGlassThicks_(),
      charges: readCharges_(),
      shop: readShop_(),
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

function dummyGlassSeed_() {
  var prices = {
    "Clear Float": { "4": 110, "5": 130, "6": 150, "8": 180, "10": 205, "12": 230 },
    Tinted: { "5": 145, "6": 165 },
    Reflective: { "5": 170, "5.5": 180, "6": 190 },
    Tempered: { "5": 165, "6": 190, "8": 230 }
  };
  var brands = [
    {
      name: "PHP Float Glass",
      colors: {
        "Clear Float": ["clear"],
        Tinted: ["blue", "green", "bronze", "gray"],
        Reflective: ["blue", "green", "bronze", "gray"],
        Tempered: ["clear", "blue", "green", "bronze", "gray"]
      }
    },
    {
      name: "Nasir Glass",
      colors: {
        "Clear Float": ["clear"],
        Tinted: ["bronze", "gray", "blue", "green", "black"],
        Reflective: ["bronze", "gray", "blue", "green", "frosted"],
        Tempered: ["clear", "bronze", "gray", "blue", "green", "black"]
      }
    }
  ];
  var types = ["Clear Float", "Tinted", "Tempered", "Reflective"];
  var rows = [["name", "thickness", "rate", "color"]];
  for (var b = 0; b < brands.length; b++) {
    for (var t = 0; t < types.length; t++) {
      var type = types[t];
      var name = brands[b].name + " · " + type;
      var rateMap = prices[type];
      var colors = brands[b].colors[type] || ["clear"];
      var thicks = Object.keys(rateMap);
      for (var i = 0; i < thicks.length; i++) {
        for (var c = 0; c < colors.length; c++) {
          rows.push([name, Number(thicks[i]), rateMap[thicks[i]], colors[c]]);
        }
      }
    }
  }
  return rows;
}

function dummyAluSeed_() {
  var profiles = [
    { type: "Standard", thickness: 1.2, rate: 125 },
    { type: "Sliding", thickness: 1.2, rate: 175 },
    { type: "Heavy Duty", thickness: 1.5, rate: 200 },
    { type: "Heavy Duty", thickness: 1.8, rate: 250 },
    { type: "Commercial", thickness: 2, rate: 300 }
  ];
  var brands = [
    { name: "Chung Hua Aluminium", colors: ["silver", "bronze", "champagne", "black", "white", "brown"] },
    { name: "KAI Aluminium", colors: ["silver", "bronze", "black", "champagne", "white", "brown"] },
    { name: "PHP Aluminium", colors: ["silver", "bronze", "champagne", "black", "white"] }
  ];
  var rows = [["name", "thickness", "rate", "color"]];
  for (var b = 0; b < brands.length; b++) {
    for (var p = 0; p < profiles.length; p++) {
      var name = brands[b].name + " · " + profiles[p].type;
      var colors = brands[b].colors;
      for (var c = 0; c < colors.length; c++) {
        rows.push([name, profiles[p].thickness, profiles[p].rate, colors[c]]);
      }
    }
  }
  return rows;
}

function dummyLockSeed_() {
  return [
    ["name", "rate", "style"],
    ["Crescent Lock", 200, "sliding"],
    ["Heavy Duty Crescent Lock", 400, "sliding"],
    ["Hook Lock", 250, "sliding"],
    ["Keyed Sliding Window Lock", 500, "sliding"],
    ["Casement Handle", 400, "casement"],
    ["Multi Point Handle", 800, "casement"],
    ["Espagnolette Lock", 1000, "casement"],
    ["Window Stay", 250, "casement"],
    ["Friction Stay", 500, "casement"],
    ["Basic Aluminium Door Lock", 450, "generic"],
    ["Mortise Lock", 800, "deadbolt"],
    ["Heavy Duty Mortise Lock", 1500, "deadbolt"],
    ["Cylinder Lock", 700, "deadbolt"],
    ["Door Handle Set", 700, "knob"],
    ["Sliding Door Hook Lock", 500, "sliding"],
    ["Multi Point Lock", 2500, "deadbolt"]
  ];
}

var SHEET_STYLE_ = [
  ["Users", "#5b4d9a", 3],
  ["Companies", "#0e6b86", 5],
  ["Aluminium", "#3d6f8a", 4],
  ["Locks", "#d28a1a", 3],
  ["Charges", "#2f8f5b", 2],
  ["Shop", "#0a4456", 2],
  ["CutParams", "#2a5f73", 2],
  ["Quotes", "#c17a20", 26],
  ["GlassThickness", "#0e6b86", 1]
];

function quotesHeader_() {
  return [
    "id", "time", "name", "phone", "status", "items", "sqft", "total",
    "type", "size", "qty", "color", "company", "lock", "net", "line_total",
    "aluminium", "alu_mm", "glass_mm", "alu_color", "type_id", "height_ft", "width_ft", "lock_style",
    "room", "assigned"
  ];
}

function normalizeQuoteStatus_(s) {
  var v = String(s || "").trim().toLowerCase();
  if (v === "called" || v === "booked" || v === "delivered") return v;
  return "new";
}

function deleteSheetIfExists_(book, name) {
  var sh = book.getSheetByName(name);
  if (!sh || book.getSheets().length <= 1) return;
  book.deleteSheet(sh);
}

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

function readOldConfig_(book, key) {
  var sh = book.getSheetByName("Config");
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

function ensureSheets_() {
  var book = ss_();

  var users = book.getSheetByName("Users") || book.insertSheet("Users");
  if (users.getLastRow() < 2) {
    var ownerEmail = readOldConfig_(book, "email") || "sumanengbd@gmail.com";
    var ownerPin = readOldConfig_(book, "pin") || "123456";
    users.clear();
    users.getRange(1, 1, 3, 3).setValues([
      ["email", "pin", "role"],
      [ownerEmail, ownerPin, "owner"],
      ["operator@gmail.com", "1234", "operator"]
    ]);
  }
  deleteSheetIfExists_(book, "Config");

  var companies = book.getSheetByName("Companies") || book.insertSheet("Companies");
  if (companies.getLastRow() < 2) {
    var glassRows = dummyGlassSeed_();
    companies.clear();
    companies.getRange(1, 1, glassRows.length, 4).setValues(glassRows);
  }
  ensureCompanyShape_();
  var locks = book.getSheetByName("Locks") || book.insertSheet("Locks");
  if (locks.getLastRow() < 2) {
    var lockRows = dummyLockSeed_();
    locks.clear();
    locks.getRange(1, 1, lockRows.length, 3).setValues(lockRows);
  }
  var alu = book.getSheetByName("Aluminium") || book.insertSheet("Aluminium");
  if (alu.getLastRow() < 2) {
    var aluRows = dummyAluSeed_();
    alu.clear();
    alu.getRange(1, 1, aluRows.length, 4).setValues(aluRows);
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
  var shop = book.getSheetByName("Shop") || book.insertSheet("Shop");
  if (shop.getLastRow() < 2) {
    shop.clear();
    shop.getRange(1, 1, 4, 2).setValues([
      ["key", "value"],
      ["name", ""],
      ["slogan", ""],
      ["logo", ""]
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

  migrateQuoteSheets_(book);
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
    companies: tryRead_(readCompanies_, []),
    locks: tryRead_(readLocks_, []),
    aluminium: tryRead_(readAluminium_, []),
    glassThicks: tryRead_(glassThicksFromCompanies_, []),
    charges: tryRead_(readCharges_, { net: 0, extra: 0 }),
    shop: tryRead_(readShop_, { name: "", slogan: "", logo: "" })
  };
}

function publicCompanies_() {
  return readCompanies_();
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
  return readLocks_();
}

function publicAluminium_() {
  return readAluminium_();
}

function ftLabel_(ft) {
  var safe = Math.max(0, Number(ft) || 0);
  var tenthMm = Math.round(safe * 3048);
  var wholeFt = Math.floor(tenthMm / 3048);
  tenthMm -= wholeFt * 3048;
  var inch = Math.floor(tenthMm / 254);
  tenthMm -= inch * 254;
  var mm = Math.round(tenthMm / 10);
  if (mm >= 25) {
    mm -= 25;
    inch += 1;
  }
  if (inch >= 12) {
    inch -= 12;
    wholeFt += 1;
  }
  var s = wholeFt + " ft";
  if (inch > 0) s += " " + inch + " in";
  if (mm > 0) s += " " + mm + " mm";
  return s;
}

function cellTime_(v) {
  if (Object.prototype.toString.call(v) === "[object Date]" && !isNaN(v.getTime())) {
    return Utilities.formatDate(v, TZ, "yyyy-MM-dd HH:mm");
  }
  return String(v || "");
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
    if (qty > 99) qty = 99;
    if (!(h > 0) || !(w > 0) || h > 40 || w > 40) continue;
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
      id, time, name, phone, "new", 0, 0, 0,
      type, size, qty, color, company, lock, net, priced.total,
      alu, aluMm, glassMm, aluColor,
      String(it.typeId || it.winType || ""),
      h,
      w,
      String(it.lockStyle || ""),
      String(it.room || "").trim().slice(0, 40),
      ""
    ]);
  }

  if (!itemRows.length) return json_({ ok: false, error: "items" });

  var qSqft = Math.round(sqft * 100) / 100;
  var qTotal = Math.round(total * 100) / 100;
  for (var r = 0; r < itemRows.length; r++) {
    itemRows[r][5] = itemRows.length;
    itemRows[r][6] = qSqft;
    itemRows[r][7] = qTotal;
  }

  var quotes = ss_().getSheetByName("Quotes") || ss_().insertSheet("Quotes");
  ensureQuotesHeader_(quotes);
  quotes.getRange(quotes.getLastRow() + 1, 1, itemRows.length, 26).setValues(itemRows);

  return json_({ ok: true, id: id, total: qTotal, sqft: qSqft, name: name, phone: phone });
}

function isMergedQuotes_(sh) {
  return String(sh.getRange(1, 5).getValue() || "").trim().toLowerCase() === "status";
}

function ensureQuotesHeader_(sh) {
  if (!sh) return;
  if (!isMergedQuotes_(sh)) {
    migrateQuoteSheets_(ss_());
    sh = ss_().getSheetByName("Quotes");
    if (!sh) return;
  }
  var headers = quotesHeader_();
  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleSheetByName_("Quotes");
}

function migrateQuoteSheets_(book) {
  var quotes = book.getSheetByName("Quotes");
  var qitems = book.getSheetByName("QuoteItems");
  if (quotes && isMergedQuotes_(quotes)) {
    deleteSheetIfExists_(book, "QuoteItems");
    return;
  }

  var linesById = {};
  var order = [];
  function addId(id) {
    if (!id || linesById[id]) return;
    linesById[id] = [];
    order.push(id);
  }

  if (qitems && qitems.getLastRow() >= 2) {
    var ir = qitems.getDataRange().getValues();
    for (var i = 1; i < ir.length; i++) {
      var iid = String(ir[i][0] || "").trim();
      if (!iid) continue;
      addId(iid);
      linesById[iid].push(ir[i]);
    }
  }

  var summaries = {};
  if (quotes && quotes.getLastRow() >= 2) {
    var qr = quotes.getDataRange().getValues();
    for (var j = 1; j < qr.length; j++) {
      var qid = String(qr[j][0] || "").trim();
      if (!qid) continue;
      addId(qid);
      summaries[qid] = {
        time: qr[j][1],
        name: qr[j][2],
        phone: qr[j][3],
        items: qr[j][4],
        sqft: qr[j][5],
        total: qr[j][6],
        status: qr[j][7] || "New"
      };
    }
  }

  var out = [quotesHeader_()];
  for (var k = 0; k < order.length; k++) {
    var id = order[k];
    var sum = summaries[id] || {};
    var lines = linesById[id] || [];
    var time = sum.time || (lines[0] && lines[0][1]) || "";
    var name = sum.name || (lines[0] && lines[0][2]) || "";
    var phone = sum.phone || (lines[0] && lines[0][3]) || "";
    var status = sum.status || "New";
    var items = lines.length || Number(sum.items) || 0;
    var sqft = Number(sum.sqft) || 0;
    var total = Number(sum.total) || 0;
    if (!lines.length) {
      out.push([id, time, name, phone, status, items, sqft, total, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
      continue;
    }
    for (var L = 0; L < lines.length; L++) {
      var row = lines[L];
      out.push([
        id, time, name, phone, status, items, sqft, total,
        row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11],
        row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19]
      ]);
    }
  }

  if (!quotes) quotes = book.insertSheet("Quotes");
  quotes.clear();
  quotes.getRange(1, 1, out.length, out[0].length).setValues(out);
  deleteSheetIfExists_(book, "QuoteItems");
  ensureQuotesHeader_(quotes);
}

function readQuotes_() {
  var sh = ss_().getSheetByName("Quotes");
  if (!sh) return [];
  var rows = sh.getDataRange().getValues();
  if (rows.length < 2) return [];
  var map = {};
  var order = [];
  for (var i = 1; i < rows.length; i++) {
    var id = String(rows[i][0] || "").trim();
    if (!id) continue;
    if (!map[id]) {
      map[id] = {
        id: id,
        time: cellTime_(rows[i][1]),
        name: String(rows[i][2] || ""),
        phone: String(rows[i][3] || ""),
        status: normalizeQuoteStatus_(rows[i][4]),
        assigned: String(rows[i][25] || "").trim().toLowerCase(),
        items: Number(rows[i][5]) || 0,
        sqft: Number(rows[i][6]) || 0,
        total: Number(rows[i][7]) || 0,
        lines: []
      };
      order.push(id);
    }
    var type = String(rows[i][8] || "");
    if (!type && !rows[i][9] && !rows[i][21]) continue;
    map[id].lines.push({
      type: type,
      size: String(rows[i][9] || ""),
      qty: Number(rows[i][10]) || 1,
      color: String(rows[i][11] || ""),
      company: String(rows[i][12] || ""),
      lock: String(rows[i][13] || ""),
      net: String(rows[i][14] || "").toLowerCase() === "yes",
      total: Number(rows[i][15]) || 0,
      aluminium: String(rows[i][16] || ""),
      aluMm: String(rows[i][17] || ""),
      glassMm: String(rows[i][18] || ""),
      aluColor: String(rows[i][19] || ""),
      typeId: String(rows[i][20] || ""),
      heightFt: Number(rows[i][21]) || 0,
      widthFt: Number(rows[i][22]) || 0,
      lockStyle: String(rows[i][23] || ""),
      room: String(rows[i][24] || "")
    });
  }
  return order.reverse().slice(0, 80).map(function (id) {
    var q = map[id];
    if (!q.items) q.items = q.lines.length;
    if (!q.sqft) {
      q.sqft = q.lines.reduce(function (sum, it) {
        return sum + ((Number(it.heightFt) || 0) * (Number(it.widthFt) || 0) * (Number(it.qty) || 1));
      }, 0);
    }
    if (!q.total) {
      q.total = q.lines.reduce(function (sum, it) {
        return sum + (Number(it.total) || 0);
      }, 0);
    }
    return q;
  });
}

function publicQuote_(id) {
  id = String(id || "").trim();
  if (!id || id.length > 40) return { ok: false, error: "id" };
  var sh = ss_().getSheetByName("Quotes");
  if (!sh || sh.getLastRow() < 2) return { ok: false, error: "notfound" };
  var all = readQuotes_();
  var i;
  for (i = 0; i < all.length; i++) {
    if (all[i].id === id) {
      return {
        ok: true,
        quote: {
          id: all[i].id,
          time: all[i].time,
          name: all[i].name,
          phone: all[i].phone,
          status: all[i].status,
          items: all[i].items,
          sqft: all[i].sqft,
          total: all[i].total,
          lines: all[i].lines
        }
      };
    }
  }
  var rows = sh.getDataRange().getValues();
  var found = null;
  for (i = 1; i < rows.length; i++) {
    if (String(rows[i][0] || "").trim() !== id) continue;
    if (!found) {
      found = {
        id: id,
        time: cellTime_(rows[i][1]),
        name: String(rows[i][2] || ""),
        phone: String(rows[i][3] || ""),
        status: normalizeQuoteStatus_(rows[i][4]),
        items: Number(rows[i][5]) || 0,
        sqft: Number(rows[i][6]) || 0,
        total: Number(rows[i][7]) || 0,
        lines: []
      };
    }
    var type = String(rows[i][8] || "");
    if (!type && !rows[i][9] && !rows[i][21]) continue;
    found.lines.push({
      type: type,
      size: String(rows[i][9] || ""),
      qty: Number(rows[i][10]) || 1,
      color: String(rows[i][11] || ""),
      company: String(rows[i][12] || ""),
      lock: String(rows[i][13] || ""),
      net: String(rows[i][14] || "").toLowerCase() === "yes",
      total: Number(rows[i][15]) || 0,
      aluminium: String(rows[i][16] || ""),
      aluMm: String(rows[i][17] || ""),
      glassMm: String(rows[i][18] || ""),
      aluColor: String(rows[i][19] || ""),
      typeId: String(rows[i][20] || ""),
      heightFt: Number(rows[i][21]) || 0,
      widthFt: Number(rows[i][22]) || 0,
      lockStyle: String(rows[i][23] || ""),
      room: String(rows[i][24] || "")
    });
  }
  if (!found) return { ok: false, error: "notfound" };
  if (!found.items) found.items = found.lines.length;
  return { ok: true, quote: found };
}

function quotePatch_(body) {
  var id = String(body && body.id || "").trim();
  if (!id) return json_({ ok: false, error: "id" });
  var sh = ss_().getSheetByName("Quotes");
  if (!sh) return json_({ ok: false, error: "notfound" });
  ensureQuotesHeader_(sh);
  var rows = sh.getDataRange().getValues();
  var hasStatus = body && body.status != null;
  var hasAssigned = body && body.assigned != null;
  var status = hasStatus ? normalizeQuoteStatus_(body.status) : "";
  var assigned = "";
  if (hasAssigned) {
    assigned = String(body.assigned || "").trim().toLowerCase();
    if (assigned && assigned.indexOf("@") < 1) assigned = "";
  }
  var found = 0;
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0] || "").trim() !== id) continue;
    found++;
    if (hasStatus) sh.getRange(i + 1, 5).setValue(status);
    if (hasAssigned) sh.getRange(i + 1, 26).setValue(assigned);
  }
  if (!found) return json_({ ok: false, error: "notfound" });
  return json_({ ok: true, quotes: readQuotes_() });
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
  var lastCol = sh.getLastColumn();
  var h5 = lastCol >= 5 ? String(sh.getRange(1, 5).getValue() || "").trim().toLowerCase() : "";
  if (h5 !== "out") sh.getRange(1, 5).setValue("out");
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

function isOut_(v) {
  var s = String(v == null ? "" : v).trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes" || s === "out";
}

function expandComboRow_(name, thickCell, rate, colorCell, colorFn, defaultThick, outFlag) {
  var thicks = parseThicks_(thickCell, defaultThick);
  var colors = splitPipe_(colorCell).map(colorFn);
  if (!colors.length) colors = [colorFn("")];
  var rows = [];
  var out = isOut_(outFlag);
  for (var t = 0; t < thicks.length; t++) {
    for (var c = 0; c < colors.length; c++) {
      rows.push({
        name: name,
        thickness: thicks[t],
        rate: isNaN(Number(rate)) ? 0 : Number(rate),
        color: colors[c],
        out: out
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
    var outCell = hasThick ? rows[i][4] : "";
    expandComboRow_(name, thickCell, rate, colorCell, normalizeColorId_, 5, outCell).forEach(function (row) {
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

function writeComboRows_(sh, list, colorFn, defaultThick) {
  var header = defaultThick === 5
    ? ["name", "thickness", "rate", "color", "out"]
    : ["name", "thickness", "rate", "color"];
  var rows = [header];
  (list || []).forEach(function (row) {
    if (!row || !String(row.name || "").trim()) return;
    expandComboRow_(String(row.name).trim(), row.thickness, row.rate, row.color, colorFn, defaultThick, row.out).forEach(function (x) {
      if (defaultThick === 5) rows.push([x.name, x.thickness, Number(x.rate) || 0, x.color, x.out ? 1 : 0]);
      else rows.push([x.name, x.thickness, Number(x.rate) || 0, x.color]);
    });
  });
  sh.clear();
  sh.getRange(1, 1, rows.length, header.length).setValues(rows);
}

function writeCompanies_(list) {
  writeComboRows_(ss_().getSheetByName("Companies"), list, normalizeColorId_, 5);
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
  writeComboRows_(ss_().getSheetByName("Aluminium"), list, normalizeAluColorId_, 1);
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

function readShop_() {
  var sh = ss_().getSheetByName("Shop");
  var out = { name: "", slogan: "", logo: "" };
  if (!sh) return out;
  var rows = sh.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    var k = String(rows[i][0] || "").trim().toLowerCase();
    var v = String(rows[i][1] || "").trim();
    if (k === "name" || k === "slogan" || k === "logo") out[k] = v;
  }
  return out;
}

function safeShopLogo_(logo) {
  var v = String(logo || "").trim();
  if (!v) return "";
  if (v.indexOf("data:image/") === 0 && v.length <= 49000) return v;
  if (v.indexOf("images/") === 0 && v.length < 200) return v;
  return "";
}

function writeShop_(shop) {
  var book = ss_();
  var sh = book.getSheetByName("Shop") || book.insertSheet("Shop");
  sh.clear();
  sh.getRange(1, 1, 4, 2).setValues([
    ["key", "value"],
    ["name", String(shop && shop.name || "").trim().slice(0, 80)],
    ["slogan", String(shop && shop.slogan || "").trim().slice(0, 140)],
    ["logo", safeShopLogo_(shop && shop.logo)]
  ]);
  styleSheetByName_("Shop");
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
