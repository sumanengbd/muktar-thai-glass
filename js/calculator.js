(function () {
  "use strict";

  const T = {
  "shop": "মুক্তার থাই এস.এস গ্যালারী এন্ড গ্লাস হাউজ",
  "janala": "জানালা",
  "dorja": "দরজা",
  "fut": "ফুট",
  "inchi": "ইঞ্চি",
  "fixedFrame": "ফিক্সড ফ্রেম",
  "oneGlass": "১ কাঁচ",
  "sliding": "স্লাইডিং",
  "s2": "২ শাটার",
  "s3": "৩ শাটার",
  "s4": "৪ শাটার",
  "doorSingle": "সিঙ্গেল দরজা",
  "oneLeaf": "১ পাতা",
  "doorDouble": "ডাবল দরজা",
  "twoLeaf": "২ পাতা",
  "doorSliding": "স্লাইডিং দরজা",
  "nasir5": "নাসির থাই গ্লাস (৫ মিমি)",
  "nasir6": "নাসির থাই গ্লাস (৬ মিমি)",
  "abul": "আবুল খায়ের থাই গ্লাস",
  "dhaka": "ঢাকা ইউরো গ্লাস",
  "usmania": "উসমানিয়া গ্লাস",
  "slidingLock": "স্লাইডিং লক",
  "caseLock": "ক্যাসমেন্ট হ্যান্ডেল লক",
  "noLock": "লক নেই",
  "emptyRates": "এখনও কিছু যোগ করা হয়নি।",
  "perSq": "/ফুট²",
  "muchun": "মুছুন",
  "outerTB": "বাইরের ফ্রেম - উপর/নিচ (O/H, B)",
  "outerLR": "বাইরের ফ্রেম - বাম/ডান (S/L)",
  "glass": "কাঁচ",
  "shutterTB": "শাটার ফ্রেম",
  "shutterLR": "শাটার ফ্রেম - বাম/ডান",
  "glassEach": "কাঁচ (প্রতিটি শাটার)",
  "parts": "পার্টস",
  "map": "মাপ",
  "songkha": "সংখ্যা",
  "piece": "পিস",
  "errCompany": "প্রথমে Admin থেকে অন্তত একটি কাঁচের কোম্পানি যোগ করুন।",
  "errSize": "উচ্চতা ও প্রস্থ সঠিকভাবে দিন।",
  "cutToggle": "কাটিং লিস্ট দেখান/লুকান",
  "cutShow": "কাটিং লিস্ট দেখান",
  "cutHide": "কাটিং লিস্ট লুকান",
  "subtotal": "সাবটোটাল",
  "outerSize": "বাইরের মাপ",
  "glassGap": "গ্লাস গ্যাপ",
  "typeEnterSize": "মাপ লিখুন",
  "perSqft": "/ফুট²",
  "taka": "৳",
  "sqLabel": " ফুট²",
  "thickness": "থিকনেস",
  "mm": "মিমি",
  "ti": "টি",
  "kach": "কাঁচ",
  "lock": "লক",
  "perSqftSlash": "/বর্গফুট",
  "net": "মশারি নেট",
  "netNo": "নেই",
  "netYes": "আছে",
  "glassColor": "কাঁচের রং",
  "colorClear": "স্বচ্ছ",
  "colorGreen": "সবুজ",
  "colorBlue": "নীল",
  "colorBronze": "ব্রোঞ্জ",
  "colorGray": "ধূসর",
  "colorBlack": "কালো",
  "colorFrosted": "ফ্রস্টেড",
  "deadbolt": "ডেডবোল্ট",
  "knob": "নব লক",
  "generic": "সাধারণ",
  "dhoron": "ধরন",
  "winTypes": "জানালার ধরন",
  "doorTypes": "দরজার ধরন",
  "errKind": "প্রথমে জানালা বা দরজা সিলেক্ট করুন।",
  "ownerSetPin": "মালিক পিন সেট করুন",
  "ownerUnlock": "মালিক লগইন",
  "ownerSetHint": "রেট ও কাটিং শুধু দোকান মালিক দেখতে পারবেন। ৪-৮ ডিজিট পিন দিন।",
  "ownerUnlockHint": "ইমেইল ও পিন দুটোই দিতে হবে।",
  "ownerPinLabel": "পিন",
  "ownerPin2Label": "পিন আবার দিন",
  "ownerOpen": "খুলুন",
  "ownerSavePin": "পিন সেভ করুন",
  "ownerPinBad": "পিন ৪ থেকে ৮ ডিজিট দিন।",
  "ownerPinMismatch": "দুইবার একই পিন দিন।",
  "ownerPinWrong": "ইমেইল বা পিন ভুল।",
  "ownerLock": "লক",
  "ownerEmailLabel": "ইমেইল",
  "ownerEmailNeed": "ইমেইল দিন।",
  "ownerPinNeed": "পিন দিন।",
  "ownerEmailBad": "সঠিক ইমেইল দিন।",
  "ownerNeedEmail": "Users শীটে ইমেইল ও পিন বসান।",
  "ownerNeedApi": "Google Apps Script URL js/config.js এ বসান।",
  "ownerNetErr": "শীট খুলতে পারেনি। ইন্টারনেট চেক করুন।",
  "ownerSaveFail": "শীটে সেভ হয়নি।",
  "ownerLocked": "অনেকবার ভুল চেষ্টা। পরে চেষ্টা করুন।",
  "staffLogin": "স্টাফ লগইন",
  "quoteTitle": "মালিককে পাঠান",
  "quoteHint": "নাম ও মোবাইল দিন। কোট শীটে সেভ হবে।",
  "quoteName": "নাম",
  "quotePhone": "মোবাইল",
  "quoteSend": "পাঠান",
  "quoteNameNeed": "নাম দিন।",
  "quotePhoneNeed": "মোবাইল দিন।",
  "quotePhoneBad": "সঠিক মোবাইল দিন।",
  "quoteEmpty": "আগে জানালা/দরজা যোগ করুন।",
  "quoteOk": "মালিকের কাছে পাঠানো হয়েছে।",
  "quoteFail": "পাঠানো যায়নি।",
  "quotesTitle": "ভিজিটর কোট",
  "quotesEmpty": "এখনও কোনো কোট আসেনি।",
  "errAlu": "আলুমিনিয়াম কোম্পানি ও থিকনেস সিলেক্ট করুন।",
  "aluShort": "আলুমিনিয়াম",
  "glassThick": "কাঁচের থিকনেস (মিমি)",
  "aluCompany": "আলুমিনিয়াম কোম্পানি",
  "aluThick": "আলুমিনিয়াম থিকনেস",
  "aluRatesTitle": "আলুমিনিয়াম কোম্পানি, থিকনেস ও রং",
  "aluRatesHint": "কোম্পানি, থিকনেস ও রং একসাথে। একই কোম্পানির একাধিক থিকনেস বা রং আলাদা সারিতে যোগ করুন।",
  "thickRatesTitle": "কাঁচের থিকনেস",
  "thickRatesHint": "ভিজিটর শুধু সিলেক্ট করবে। রেট শীট থেকে।",
  "chargesTitle": "নেট ও ইনস্টলেশন রেট",
  "chargesHint": "প্রতি জানালা/দরজার চার্জ । শীট থেকে আসে।",
  "chargeNet": "নেট (টাকা / টি)",
  "chargeExtra": "ইনস্টলেশন (টাকা / টি)",
  "addBtn": "যোগ করুন",
  "saveBtn": "সংরক্ষণ",
  "aluNamePh": "কোম্পানি",
  "aluThickPh": "মিমি",
  "aluRatePh": "রেট",
  "glassThickPh": "মিমি",
  "companyRatesHint": "কোম্পানি, থিকনেস, রেট ও রং একসাথে যোগ করুন। একই কোম্পানির একাধিক থিকনেস বা রং আলাদা সারিতে।",
  "aluColor": "আলুমিনিয়াম রং",
  "aluSilver": "সিলভার",
  "aluWhite": "সাদা",
  "aluChampagne": "শ্যাম্পেন",
  "aluBrown": "বাদামি",
  "catalogEmpty": "শীট থেকে লিস্ট আসেনি। ইন্টারনেট চেক করে পেজ রিফ্রেশ করুন।",
  "admin": "Admin",
  "staffTitle": "স্টাফ অ্যাকাউন্ট",
  "staffHint": "মালিক স্টাফ যোগ করতে পারবেন। ইমেইল ও পিন দিয়ে তারা লগইন করবে। টেনে সারি সাজাতে পারবেন।",
  "staffEmailPh": "ইমেইল",
  "staffPinPh": "পিন ৪-৮ ডিজিট",
  "roleStaff": "স্টাফ",
  "roleOwner": "মালিক",
  "staffNeedOwner": "অন্তত একজন মালিক রাখতে হবে।",
  "staffBad": "সঠিক ইমেইল ও ৪-৮ ডিজিট পিন দিন।"
};
  const KEYS = {
    items: "glasscalc:items",
    tab: "glasscalc:tab",
    session: "glasscalc:session"
  };

  const PRODUCT_TYPES = {
    windows: [
      { id: "fixed", label: T.fixedFrame, sub: T.oneGlass, image: "images/window-fixed.svg", shutters: 1, kind: "window" },
      { id: "sliding2", label: T.sliding, sub: T.s2, image: "images/window-sliding2.svg", shutters: 2, kind: "window" },
      { id: "sliding3", label: T.sliding, sub: T.s3, image: "images/window-sliding3.svg", shutters: 3, kind: "window" },
      { id: "sliding4", label: T.sliding, sub: T.s4, image: "images/window-sliding4.svg", shutters: 4, kind: "window" }
    ],
    doors: [
      { id: "door-single", label: T.doorSingle, sub: T.oneLeaf, image: "images/door-single.svg", shutters: 1, kind: "door" },
      { id: "door-double", label: T.doorDouble, sub: T.twoLeaf, image: "images/door-double.svg", shutters: 2, kind: "door" },
      { id: "door-sliding", label: T.doorSliding, sub: T.s2, image: "images/door-sliding.svg", shutters: 2, kind: "door" }
    ]
  };
  const ALL_TYPES = [...PRODUCT_TYPES.windows, ...PRODUCT_TYPES.doors];

  const GLASS_COLORS = [
    { id: "clear", labelKey: "colorClear", light: "#e8f6fb", mid: "#7ebfd6", dark: "#c5e4ef" },
    { id: "green", labelKey: "colorGreen", light: "#d9f5e3", mid: "#4e9a66", dark: "#9fd4ae" },
    { id: "blue", labelKey: "colorBlue", light: "#d4e8ff", mid: "#3d6fbe", dark: "#8fb4e8" },
    { id: "bronze", labelKey: "colorBronze", light: "#f3e0c8", mid: "#a86a38", dark: "#d4b089" },
    { id: "gray", labelKey: "colorGray", light: "#e4e8eb", mid: "#6b757c", dark: "#b0b8be" },
    { id: "black", labelKey: "colorBlack", light: "#6b7280", mid: "#1a222b", dark: "#4b5563" },
    { id: "frosted", labelKey: "colorFrosted", light: "#f7f8f9", mid: "#c5ccd1", dark: "#e6eaed" }
  ];

  const ALU_COLORS = [
    { id: "silver", labelKey: "aluSilver", light: "#eef2f4", mid: "#9aa8b0", dark: "#5e6d76" },
    { id: "bronze", labelKey: "colorBronze", light: "#e8d0b0", mid: "#a86a38", dark: "#6b4220" },
    { id: "black", labelKey: "colorBlack", light: "#6b7280", mid: "#1a222b", dark: "#111827" },
    { id: "white", labelKey: "aluWhite", light: "#ffffff", mid: "#e5e7eb", dark: "#9ca3af" },
    { id: "champagne", labelKey: "aluChampagne", light: "#f3e6c8", mid: "#c4a574", dark: "#8a7048" },
    { id: "brown", labelKey: "aluBrown", light: "#d4b896", mid: "#7a4e2e", dark: "#4a2e1a" }
  ];

  const DEFAULT_CUT = { outerHoriz: 0, side: 0, shutterHoriz: 0, glassGap: 0 };

  const state = {
    companies: [],
    locks: [],
    aluminium: [],
    glassThicks: [],
    charges: { net: 0, extra: 0 },
    items: [],
    cutParams: { ...DEFAULT_CUT },
    selectedKind: null,
    selectedType: null,
    glassColor: "clear",
    aluColor: "silver",
    hasNet: false,
    ownerPin: "",
    ownerEmail: "",
    ownerUnlocked: false,
    role: "",
    quotes: [],
    staff: []
  };

  const $ = (id) => document.getElementById(id);


  function ico(name) {
    var p = {
      plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
      minus: '<path d="M5 12h14"/>',
      trash: '<polyline points="3 7 5 7 21 7"/><path d="M8 7V5h8v2"/><path d="M6 7l1 14h10l1-14"/><path d="M10 11v6"/><path d="M14 11v6"/>',
      down: '<path d="M6 9l6 6 6-6"/>',
      up: '<path d="M6 15l6-6 6 6"/>',
      print: '<path d="M6 9V4h12v5"/><path d="M6 18H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"/><rect x="6" y="14" width="12" height="7" rx="1"/>',
      save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>',
      grip: '<path d="M8 6h8M8 12h8M8 18h8"/>'
    };
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (p[name] || "") + "</svg>";
  }

  function cutToggleLabel(open) {
    return ico(open ? "up" : "down") + "<span>" + (open ? T.cutHide : T.cutShow) + "</span>";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fmt(n) {
    n = Math.round(Number(n) * 100) / 100;
    return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  function money(n) {
    return T.taka + fmt(n);
  }

  function ftInLabel(ft) {
    const safe = Math.max(0, Number(ft) || 0);
    const wholeFt = Math.floor(safe + 1e-9);
    const inch = Math.round((safe - wholeFt) * 12);
    if (inch >= 12) return (wholeFt + 1) + " " + T.fut;
    return inch > 0 ? wholeFt + " " + T.fut + " " + inch + " " + T.inchi : wholeFt + " " + T.fut;
  }

  function toFeet(ft, inch) {
    return (Number(ft) || 0) + (Number(inch) || 0) / 12;
  }

  function getType(id) {
    return ALL_TYPES.find((t) => t.id === id) || ALL_TYPES[0];
  }

  function getColor(id) {
    return GLASS_COLORS.find((c) => c.id === id) || GLASS_COLORS[0];
  }

  function colorLabel(id) {
    return T[getColor(id).labelKey] || id;
  }

  function getAluColor(id) {
    return ALU_COLORS.find((c) => c.id === id) || ALU_COLORS[0];
  }

  function aluColorLabel(id) {
    return T[getAluColor(id).labelKey] || id;
  }

  function normalizeAluColorId(id) {
    const s = String(id || "").trim().toLowerCase();
    return ALU_COLORS.some((c) => c.id === s) ? s : "silver";
  }

  function normalizeAluminium(list) {
    return (list || []).map((a) => ({
      name: String(a.name || "").trim(),
      thickness: Number(a.thickness),
      rate: Number(a.rate) || 0,
      color: normalizeAluColorId(a.color)
    })).filter((a) => a.name && a.thickness > 0);
  }

  function kindLabel(kind) {
    return kind === "door" ? T.dorja : T.janala;
  }

  function lockStyleOf(lock) {
    if (!lock) return "none";
    if (lock.style) return lock.style;
    const n = String(lock.name || "").toLowerCase();
    if (n.indexOf("slid") !== -1) return "sliding";
    if (n.indexOf("case") !== -1 || n.indexOf("handle") !== -1) return "casement";
    if (n.indexOf("dead") !== -1 || n.indexOf("bolt") !== -1) return "deadbolt";
    if (n.indexOf("knob") !== -1) return "knob";
    return "generic";
  }

  function selectedLock() {
    const idx = parseInt($("sel-lock").value, 10);
    return idx >= 0 ? state.locks[idx] : null;
  }

  function selectedAluName() {
    return $("sel-alu-company") ? $("sel-alu-company").value : "";
  }

  function selectedAluThick() {
    return $("sel-alu-thick") ? $("sel-alu-thick").value : "";
  }

  function aluRows(filters) {
    return state.aluminium.filter((a) => {
      if (filters.name && a.name !== filters.name) return false;
      if (filters.thick != null && filters.thick !== "" && String(a.thickness) !== String(filters.thick)) return false;
      if (filters.color && a.color !== filters.color) return false;
      return true;
    });
  }

  function uniqueAlu(field, filters) {
    const seen = {};
    const out = [];
    aluRows(filters).forEach((a) => {
      const key = String(a[field]);
      if (!seen[key]) {
        seen[key] = true;
        out.push(a[field]);
      }
    });
    return out;
  }

  function pickValid(cur, list) {
    if (cur != null && cur !== "" && list.some((x) => String(x) === String(cur))) return cur;
    return list.length ? list[0] : "";
  }

  function selectedAlu() {
    const name = selectedAluName();
    const thick = selectedAluThick();
    return state.aluminium.find((a) => a.name === name && String(a.thickness) === String(thick) && a.color === state.aluColor)
      || state.aluminium.find((a) => a.name === name && String(a.thickness) === String(thick))
      || null;
  }

  function fillAluColorSelect() {
    const el = $("new-alu-color");
    if (!el) return;
    el.innerHTML = ALU_COLORS.map((c) =>
      '<option value="' + c.id + '">' + escapeHtml(T[c.labelKey]) + "</option>"
    ).join("");
  }

  async function storeGet(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  async function storeSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* ignore */ }
  }

  function flashSaved() {
    const el = $("save-flash");
    if (!el) return;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 1200);
  }

  function numVal(id) {
    return parseFloat($(id).value);
  }

  function drawLock(style, x, y, boxW, boxH, compact) {
    if (style === "none") return "";
    const s = compact ? 0.72 : 1;
    const cx = x + boxW - (compact ? 11 : 20);
    const cy = y + boxH * 0.46;
    if (style === "sliding") {
      return `<g class="viz-lock">
        <rect x="${cx - 4 * s}" y="${cy - 16 * s}" width="${8 * s}" height="${32 * s}" rx="2" fill="#2c4a58"/>
        <circle cx="${cx}" cy="${cy}" r="${3.2 * s}" fill="#d9b56a"/>
      </g>`;
    }
    if (style === "casement") {
      return `<g class="viz-lock">
        <circle cx="${cx}" cy="${cy}" r="${5.5 * s}" fill="#c5c9ce" stroke="#5a6168"/>
        <rect x="${cx - 2 * s}" y="${cy - 20 * s}" width="${4 * s}" height="${16 * s}" rx="2" fill="#c5c9ce"/>
        <rect x="${cx - 10 * s}" y="${cy - 22 * s}" width="${12 * s}" height="${4 * s}" rx="2" fill="#aeb3b8"/>
      </g>`;
    }
    if (style === "deadbolt") {
      return `<g class="viz-lock">
        <rect x="${cx - 9 * s}" y="${cy - 8 * s}" width="${18 * s}" height="${16 * s}" rx="3" fill="#8a7340"/>
        <circle cx="${cx}" cy="${cy}" r="${3.4 * s}" fill="#1f2d3a"/>
        <circle cx="${cx}" cy="${cy}" r="${1.4 * s}" fill="#d9b56a"/>
      </g>`;
    }
    if (style === "knob") {
      return `<g class="viz-lock">
        <circle cx="${cx}" cy="${cy}" r="${7 * s}" fill="#d9b56a" stroke="#8a6d28"/>
        <circle cx="${cx}" cy="${cy}" r="${3 * s}" fill="#f3e2a8"/>
      </g>`;
    }
    return `<g class="viz-lock">
      <rect x="${cx - 6 * s}" y="${cy - 4 * s}" width="${12 * s}" height="${10 * s}" rx="2" fill="#4d6472"/>
      <path d="M ${cx - 3.5 * s} ${cy - 4 * s} v ${-5 * s} a ${3.5 * s} ${3.5 * s} 0 1 1 ${7 * s} 0 v ${5 * s}" fill="none" stroke="#4d6472" stroke-width="${1.6 * s}"/>
    </g>`;
  }

  function buildDiagram(opts) {
    const type = getType(opts.typeId);
    const color = getColor(opts.glassColor);
    const aluC = getAluColor(opts.aluColor);
    const isDoor = type.kind === "door";
    const h = opts.heightFt > 0 ? opts.heightFt : (isDoor ? 7 : 5);
    const w = opts.widthFt > 0 ? opts.widthFt : (isDoor ? 3.5 : 4);
    const shutters = type.shutters;
    const compact = Boolean(opts.compact);
    const boxH = compact ? 118 : 240;
    const boxW = Math.max(compact ? 48 : 80, Math.min(compact ? 88 : 300, boxH * (w / h)));
    const padL = compact ? 8 : 54;
    const padR = compact ? 8 : 14;
    const padT = compact ? 8 : 16;
    const padB = compact ? 8 : 42;
    const svgW = boxW + padL + padR;
    const svgH = boxH + padT + padB;
    const x = padL;
    const y = padT;
    const uid = "g" + Math.random().toString(36).slice(2, 8);
    const frame = 8;
    const paneGap = shutters > 1 ? 6 : 0;
    const innerW = boxW - frame * 2;
    const innerH = boxH - frame * 2 - (isDoor ? 10 : 0);
    const paneW = (innerW - paneGap * (shutters - 1)) / shutters;

    let panes = "";
    for (let i = 0; i < shutters; i += 1) {
      const px = x + frame + i * (paneW + paneGap);
      const py = y + frame;
      const glassH = isDoor && type.id !== "door-sliding" ? innerH * 0.68 : innerH;
      panes += `<rect class="viz-glass" x="${px}" y="${py}" width="${paneW}" height="${glassH}" fill="url(#${uid})"/>`;
      if (opts.hasNet) {
        panes += `<rect class="viz-net" x="${px}" y="${py}" width="${paneW}" height="${glassH}" fill="url(#${uid}net)" opacity="0.85"/>`;
      }
      if (color.id === "frosted") {
        panes += `<rect x="${px}" y="${py}" width="${paneW}" height="${glassH}" fill="#fff" opacity="0.28"/>`;
      }
      if (isDoor && type.id !== "door-sliding") {
        panes += `<rect x="${px}" y="${py + glassH + 4}" width="${paneW}" height="${innerH - glassH - 4}" fill="${aluC.mid}"/>`;
      }
      if (i < shutters - 1) {
        panes += `<rect x="${px + paneW}" y="${y}" width="${paneGap}" height="${boxH}" fill="${aluC.mid}"/>`;
      }
    }

    let extras = "";
    if (isDoor && (type.id === "door-single" || type.id === "door-double")) {
      extras += `<rect x="${x}" y="${y + boxH - 6}" width="${boxW}" height="6" fill="#3d5c6a"/>`;
    }
    extras += drawLock(opts.lockStyle || "none", x, y, boxW, boxH, compact);

    let dims = "";
    if (!compact) {
      const hx = 18;
      dims += `
        <line x1="${hx}" y1="${y}" x2="${hx}" y2="${y + boxH}" stroke="#1f6f92" stroke-width="1.2"/>
        <line x1="${hx - 4}" y1="${y}" x2="${hx + 4}" y2="${y}" stroke="#1f6f92"/>
        <line x1="${hx - 4}" y1="${y + boxH}" x2="${hx + 4}" y2="${y + boxH}" stroke="#1f6f92"/>
        <text x="${hx - 8}" y="${y + boxH / 2}" fill="#134a63" font-size="11" font-family="Hind Siliguri, sans-serif" text-anchor="middle" transform="rotate(-90 ${hx - 8} ${y + boxH / 2})">${escapeHtml(ftInLabel(h))}</text>
        <line x1="${x}" y1="${y + boxH + 22}" x2="${x + boxW}" y2="${y + boxH + 22}" stroke="#1f6f92" stroke-width="1.2"/>
        <line x1="${x}" y1="${y + boxH + 18}" x2="${x}" y2="${y + boxH + 26}" stroke="#1f6f92"/>
        <line x1="${x + boxW}" y1="${y + boxH + 18}" x2="${x + boxW}" y2="${y + boxH + 26}" stroke="#1f6f92"/>
        <text x="${x + boxW / 2}" y="${y + boxH + 38}" fill="#134a63" font-size="11" font-family="Hind Siliguri, sans-serif" text-anchor="middle">${escapeHtml(ftInLabel(w))}</text>
      `;
    }

    return `
      <svg viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg" role="img">
        <defs>
          <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color.light}"/>
            <stop offset="48%" stop-color="${color.mid}"/>
            <stop offset="100%" stop-color="${color.dark}"/>
          </linearGradient>
          <pattern id="${uid}net" width="7" height="7" patternUnits="userSpaceOnUse">
            <path d="M0 0 L7 7 M7 0 L0 7" stroke="#1d3d2c" stroke-width="0.55" opacity="0.55"/>
          </pattern>
        </defs>
        <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="3" fill="${aluC.mid}"/>
        ${panes}
        ${extras}
        <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="3" fill="none" stroke="${aluC.dark}" stroke-width="2"/>
        ${dims}
      </svg>
    `;
  }

  function diagramOpts(extra) {
    const { heightFt, widthFt } = extra && extra.heightFt != null ? extra : {
      heightFt: toFeet($("in-h-ft").value, $("in-h-in").value),
      widthFt: toFeet($("in-w-ft").value, $("in-w-in").value)
    };
    return {
      typeId: extra && extra.typeId ? extra.typeId : state.selectedType,
      heightFt,
      widthFt,
      glassColor: extra && extra.glassColor ? extra.glassColor : state.glassColor,
      aluColor: extra && extra.aluColor ? extra.aluColor : state.aluColor,
      lockStyle: extra && extra.lockStyle ? extra.lockStyle : lockStyleOf(selectedLock()),
      hasNet: extra && extra.hasNet != null ? extra.hasNet : state.hasNet,
      compact: Boolean(extra && extra.compact)
    };
  }

  function pulsePreview() {
    const stage = $("live-preview");
    stage.classList.remove("pulse");
    void stage.offsetWidth;
    stage.classList.add("pulse");
  }

  function renderLivePreview(animate) {
    if (!state.selectedKind || !state.selectedType) {
      $("live-preview").innerHTML = "";
      $("preview-kind").textContent = "-";
      $("preview-type").textContent = "-";
      $("preview-size").textContent = T.typeEnterSize;
      $("preview-color").textContent = colorLabel(state.glassColor);
      $("preview-lock").textContent = selectedLock() ? selectedLock().name : T.noLock;
      $("preview-net").textContent = state.hasNet ? T.netYes : T.netNo;
      return;
    }
    const opts = diagramOpts();
    const type = getType(opts.typeId);
    const lock = selectedLock();
    $("live-preview").innerHTML = buildDiagram(opts);
    $("preview-kind").textContent = kindLabel(type.kind);
    $("preview-type").textContent = type.label + " · " + type.sub;
    $("preview-size").textContent = opts.heightFt > 0 && opts.widthFt > 0
      ? ftInLabel(opts.heightFt) + " x " + ftInLabel(opts.widthFt)
      : T.typeEnterSize;
    $("preview-color").textContent = colorLabel(opts.glassColor);
    $("preview-lock").textContent = lock ? lock.name : T.noLock;
    $("preview-net").textContent = opts.hasNet ? T.netYes : T.netNo;
    if (animate) pulsePreview();
  }

  function renderKindPicker() {
    $("kind-heading").textContent = T.janala + " / " + T.dorja;
    $("kind-picker").innerHTML = `
      <button type="button" class="kind-btn${state.selectedKind === "window" ? " active" : ""}" data-kind="window">
        <img src="images/window-fixed.svg" alt="${escapeHtml(T.janala)}">
        <span>${escapeHtml(T.janala)}</span>
      </button>
      <button type="button" class="kind-btn${state.selectedKind === "door" ? " active" : ""}" data-kind="door">
        <img src="images/door-single.svg" alt="${escapeHtml(T.dorja)}">
        <span>${escapeHtml(T.dorja)}</span>
      </button>
    `;
  }

  function renderTypePicker() {
    const section = $("section-types");
    if (!state.selectedKind) {
      section.classList.add("hidden");
      return;
    }
    section.classList.remove("hidden");
    const isDoor = state.selectedKind === "door";
    const list = isDoor ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    $("types-heading").textContent = isDoor ? T.doorTypes : T.winTypes;
    $("type-list").classList.toggle("doors", isDoor);
    $("type-list").innerHTML = list.map((t) => `
      <button type="button" class="type-card${t.id === state.selectedType ? " active" : ""}" data-type="${t.id}">
        <img src="${t.image}" alt="${escapeHtml(t.label)}">
        <span class="name">${escapeHtml(t.label)}</span>
        <span class="sub">${escapeHtml(t.sub)}</span>
      </button>
    `).join("");
  }

  function normalizeColorId(id) {
    const s = String(id || "").trim().toLowerCase();
    return GLASS_COLORS.some((c) => c.id === s) ? s : "clear";
  }

  function normalizeCompanies(list) {
    return (list || []).map((c) => ({
      name: String(c.name || "").trim(),
      thickness: Number(c.thickness) > 0 ? Number(c.thickness) : 5,
      rate: Number(c.rate) || 0,
      color: normalizeColorId(c.color)
    })).filter((c) => c.name);
  }

  function companyNames() {
    const names = [];
    const seen = {};
    state.companies.forEach((c) => {
      if (c.name && !seen[c.name]) {
        seen[c.name] = true;
        names.push(c.name);
      }
    });
    return names;
  }

  function selectedCompanyName() {
    return $("sel-company") ? $("sel-company").value : "";
  }

  function selectedGlassThick() {
    return $("sel-glass-thick") ? $("sel-glass-thick").value : "";
  }

  function companyRows(filters) {
    return state.companies.filter((c) => {
      if (filters.name && c.name !== filters.name) return false;
      if (filters.thick != null && filters.thick !== "" && String(c.thickness) !== String(filters.thick)) return false;
      if (filters.color && c.color !== filters.color) return false;
      return true;
    });
  }

  function uniqueCompany(field, filters) {
    const seen = {};
    const out = [];
    companyRows(filters).forEach((c) => {
      const key = String(c[field]);
      if (!seen[key]) {
        seen[key] = true;
        out.push(c[field]);
      }
    });
    return out;
  }

  function colorsForCompany(name, thick) {
    return uniqueCompany("color", { name: name, thick: thick });
  }

  function selectedGlassCompany() {
    const name = selectedCompanyName();
    const thick = selectedGlassThick();
    return state.companies.find((c) => c.name === name && String(c.thickness) === String(thick) && c.color === state.glassColor)
      || state.companies.find((c) => c.name === name && String(c.thickness) === String(thick))
      || state.companies.find((c) => c.name === name)
      || null;
  }

  function syncGlassColorToCompany() {
    const available = colorsForCompany(selectedCompanyName(), selectedGlassThick());
    if (!available.length) return;
    if (available.indexOf(state.glassColor) < 0) state.glassColor = available[0];
  }

  function fillCompanyColorSelect() {
    const el = $("new-company-color");
    if (!el) return;
    el.innerHTML = GLASS_COLORS.map((c) =>
      '<option value="' + c.id + '">' + escapeHtml(T[c.labelKey]) + "</option>"
    ).join("");
  }

  function renderColorGrid() {
    const grid = $("color-grid");
    if (!grid) return;
    const name = selectedCompanyName();
    const thick = selectedGlassThick();
    const available = colorsForCompany(name, thick);
    const colors = GLASS_COLORS.filter((c) => available.indexOf(c.id) >= 0);
    const showRate = isStaff();
    if (!colors.length) {
      grid.innerHTML = "";
      return;
    }
    grid.innerHTML = colors.map((c) => {
      const row = state.companies.find((x) => x.name === name && String(x.thickness) === String(thick) && x.color === c.id);
      const title = T[c.labelKey] + (showRate && row ? " - " + T.taka + row.rate + T.perSqftSlash : "");
      return '<button type="button" class="color-swatch' + (c.id === state.glassColor ? " active" : "") + '" data-color="' + c.id + '" title="' + escapeHtml(title) + '" style="background:linear-gradient(135deg,' + c.light + "," + c.mid + ')"></button>';
    }).join("");
  }

  function setSelectedKind(kind) {
    state.selectedKind = kind;
    const list = kind === "door" ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    state.selectedType = list[0].id;
    renderKindPicker();
    renderTypePicker();
    renderLivePreview(true);
  }

  function setSelectedType(id) {
    state.selectedType = id;
    renderTypePicker();
    renderLivePreview(true);
  }

  function renderCompanySelect() {
    const el = $("sel-company");
    if (!el) return;
    const names = companyNames();
    const cur = el.value;
    el.innerHTML = names.map((n) =>
      '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + "</option>"
    ).join("");
    if (cur && names.indexOf(cur) >= 0) el.value = cur;
    renderGlassThickSelect();
  }

  function renderLockSelect() {
    const showRate = isStaff();
    $("sel-lock").innerHTML = `<option value="-1">${T.noLock}</option>` +
      state.locks.map((l, i) =>
        `<option value="${i}">${escapeHtml(l.name)}${showRate ? " - " + T.taka + l.rate : ""}</option>`
      ).join("");
  }

  function renderGlassThickSelect() {
    const el = $("sel-glass-thick");
    if (!el) return;
    const name = selectedCompanyName();
    const thicks = uniqueCompany("thickness", { name: name });
    const cur = pickValid(el.value, thicks);
    el.innerHTML = thicks.map((mm) =>
      '<option value="' + mm + '">' + mm + " " + T.mm + "</option>"
    ).join("");
    if (cur !== "") el.value = String(cur);
    syncGlassColorToCompany();
    renderColorGrid();
  }

  function onGlassCompanyChange() {
    renderGlassThickSelect();
    renderLivePreview(true);
  }

  function onGlassThickChange() {
    syncGlassColorToCompany();
    renderColorGrid();
    renderLivePreview(true);
  }

  function renderAluCompanySelect() {
    const el = $("sel-alu-company");
    if (!el) return;
    const names = uniqueAlu("name", {});
    const cur = pickValid(el.value, names);
    el.innerHTML = names.map((n) =>
      '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + "</option>"
    ).join("");
    if (cur) el.value = cur;
    renderAluThickSelect();
  }

  function renderAluThickSelect() {
    const el = $("sel-alu-thick");
    if (!el) return;
    const name = selectedAluName();
    const thicks = uniqueAlu("thickness", { name: name });
    const cur = pickValid(el.value, thicks);
    const showRate = isStaff();
    el.innerHTML = thicks.map((mm) => {
      const row = state.aluminium.find((a) => a.name === name && String(a.thickness) === String(mm) && a.color === state.aluColor)
        || state.aluminium.find((a) => a.name === name && String(a.thickness) === String(mm));
      const rate = row ? row.rate : "";
      return '<option value="' + mm + '">' + mm + " " + T.mm + (showRate && rate !== "" ? " - " + T.taka + rate + T.perSqftSlash : "") + "</option>";
    }).join("");
    if (cur !== "") el.value = String(cur);
    syncAluColorToSelection();
    renderAluColorGrid();
  }

  function syncAluColorToSelection() {
    const colors = uniqueAlu("color", { name: selectedAluName(), thick: selectedAluThick() });
    state.aluColor = normalizeAluColorId(pickValid(state.aluColor, colors) || "silver");
  }

  function onAluCompanyChange() {
    renderAluThickSelect();
    renderLivePreview(true);
  }

  function onAluThickChange() {
    const name = selectedAluName();
    const thick = selectedAluThick();
    const names = uniqueAlu("name", { thick: thick });
    const companyEl = $("sel-alu-company");
    if (companyEl && names.length && names.indexOf(name) < 0) {
      companyEl.value = names[0];
      renderAluThickSelect();
      return;
    }
    syncAluColorToSelection();
    renderAluColorGrid();
    renderLivePreview(true);
  }

  function onAluColorChange(id) {
    state.aluColor = normalizeAluColorId(id);
    const name = selectedAluName();
    const thicks = uniqueAlu("thickness", { name: name, color: state.aluColor });
    const thickEl = $("sel-alu-thick");
    if (thickEl && thicks.length && thicks.every((mm) => String(mm) !== String(thickEl.value))) {
      thickEl.value = String(thicks[0]);
    }
    renderAluColorGrid();
    renderLivePreview(true);
  }

  function renderAluColorGrid() {
    const grid = $("alu-color-grid");
    if (!grid) return;
    const name = selectedAluName();
    const thick = selectedAluThick();
    const available = uniqueAlu("color", { name: name, thick: thick });
    const colors = ALU_COLORS.filter((c) => available.indexOf(c.id) >= 0);
    const showRate = isStaff();
    if (!colors.length) {
      grid.innerHTML = "";
      return;
    }
    if (available.indexOf(state.aluColor) < 0) state.aluColor = colors[0].id;
    grid.innerHTML = colors.map((c) => {
      const row = state.aluminium.find((x) => x.name === name && String(x.thickness) === String(thick) && x.color === c.id);
      const title = T[c.labelKey] + (showRate && row ? " - " + T.taka + row.rate + T.perSqftSlash : "");
      return '<button type="button" class="color-swatch' + (c.id === state.aluColor ? " active" : "") + '" data-alu-color="' + c.id + '" title="' + escapeHtml(title) + '" style="background:linear-gradient(135deg,' + c.light + "," + c.mid + ')"></button>';
    }).join("");
  }

  function renderAluList() {
    const wrap = $("alu-list");
    if (!wrap) return;
    if (!state.aluminium.length) {
      wrap.innerHTML = '<div class="empty-note">' + T.emptyRates + "</div>";
      return;
    }
    wrap.innerHTML = state.aluminium.map((item, i) =>
      rateRowOpen(i) + '<span class="name">' + escapeHtml(item.name) + " · " + item.thickness + T.mm + " · " + escapeHtml(aluColorLabel(item.color)) + '</span><span class="price">' + T.taka + item.rate + T.perSq + '</span><button type="button" class="danger-ghost icon-btn" data-action="remove-alu" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></div>"
    ).join("");
  }

  function renderGlassThickList() {
    const wrap = $("glass-thick-list");
    if (!wrap) return;
    if (!state.glassThicks.length) {
      wrap.innerHTML = `<div class="empty-note">${T.emptyRates}</div>`;
      return;
    }
    wrap.innerHTML = state.glassThicks.map((mm, i) =>
      rateRowOpen(i) + '<span class="name">' + mm + " " + T.mm + '</span><button type="button" class="danger-ghost icon-btn" data-action="remove-glass-thick" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></div>"
    ).join("");
  }

  function fillChargesInputs() {
    if ($("in-charge-net")) $("in-charge-net").value = state.charges.net || 0;
    if ($("in-charge-extra")) $("in-charge-extra").value = state.charges.extra || 0;
  }

  function moveItem(arr, from, to) {
    from = Number(from);
    to = Number(to);
    if (!arr || from === to || from < 0 || to < 0 || from >= arr.length || to >= arr.length) return false;
    const item = arr.splice(from, 1)[0];
    arr.splice(to, 0, item);
    return true;
  }

  function bindSortable(wrapId, getList, onDone) {
    const wrap = $(wrapId);
    if (!wrap || wrap.dataset.sortBound) return;
    wrap.dataset.sortBound = "1";
    let drag = null;

    function clearMarks() {
      wrap.querySelectorAll(".rate-row").forEach((r) => r.classList.remove("dragging", "drag-over"));
    }

    function rowAt(x, y) {
      const el = document.elementFromPoint(x, y);
      return el && el.closest ? el.closest("#" + wrapId + " .rate-row") : null;
    }

    wrap.addEventListener("pointerdown", (e) => {
      if (!e.target.closest(".drag-handle")) return;
      const row = e.target.closest(".rate-row");
      if (!row) return;
      e.preventDefault();
      e.target.closest(".drag-handle").setPointerCapture(e.pointerId);
      drag = { from: Number(row.dataset.index) };
      row.classList.add("dragging");
    });
    wrap.addEventListener("pointermove", (e) => {
      if (!drag) return;
      wrap.querySelectorAll(".drag-over").forEach((r) => r.classList.remove("drag-over"));
      const over = rowAt(e.clientX, e.clientY);
      if (over) over.classList.add("drag-over");
    });
    wrap.addEventListener("pointerup", (e) => {
      if (!drag) return;
      const over = rowAt(e.clientX, e.clientY);
      const to = over ? Number(over.dataset.index) : -1;
      const from = drag.from;
      drag = null;
      clearMarks();
      if (moveItem(getList(), from, to)) onDone();
    });
    wrap.addEventListener("pointercancel", () => {
      drag = null;
      clearMarks();
    });
  }

  function rateRowOpen(i) {
    return '<div class="rate-row" data-index="' + i + '"><span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>";
  }

  function refreshSheetSelects() {
    renderCompanySelect();
    renderLockSelect();
    renderGlassThickSelect();
    renderAluCompanySelect();
    renderAluList();
    renderGlassThickList();
    fillChargesInputs();
  }

  function renderRateList(wrapId, items, kind) {
    const wrap = $(wrapId);
    if (!items.length) {
      wrap.innerHTML = `<div class="empty-note">${T.emptyRates}</div>`;
      return;
    }
    const unit = kind === "company" ? T.perSq : "";
    wrap.innerHTML = items.map((item, i) =>
      rateRowOpen(i) + '<span class="name">' + escapeHtml(item.name) + (kind === "company" && item.thickness ? " · " + item.thickness + T.mm : "") + (kind === "company" && item.color ? " · " + escapeHtml(colorLabel(item.color)) : "") + '</span><span class="price">' + T.taka + item.rate + unit + '</span><button type="button" class="danger-ghost icon-btn" data-action="remove-' + kind + '" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></div>"
    ).join("");
  }

  function computeCutList(item) {
    const type = getType(item.winType);
    const n = type.shutters;
    const outerHoriz = Math.max(0, item.widthFt - state.cutParams.outerHoriz / 12);
    const outerVert = Math.max(0, item.heightFt - state.cutParams.side / 12);
    const shutterW = item.widthFt / n;
    const shutterHoriz = Math.max(0, shutterW - state.cutParams.shutterHoriz / 12);
    const shutterVert = Math.max(0, item.heightFt - state.cutParams.side / 12);
    const glassGap = state.cutParams.glassGap / 12;
    const list = [
      { part: T.outerTB, lengthFt: outerHoriz, qty: item.qty * 2 },
      { part: T.outerLR, lengthFt: outerVert, qty: item.qty * 2 }
    ];
    if (n === 1) {
      list.push({
        part: T.glass,
        lengthFt: Math.max(0, item.heightFt - glassGap),
        widthFt2: Math.max(0, item.widthFt - glassGap),
        qty: item.qty,
        isGlass: true
      });
    } else {
      list.push({ part: T.shutterTB + " (" + n + T.ti + ")", lengthFt: shutterHoriz, qty: item.qty * n * 2 });
      list.push({ part: T.shutterLR, lengthFt: shutterVert, qty: item.qty * n * 2 });
      list.push({
        part: T.glassEach,
        lengthFt: Math.max(0, item.heightFt - glassGap),
        widthFt2: Math.max(0, shutterW - glassGap),
        qty: item.qty * n,
        isGlass: true
      });
    }
    if (item.hasNet) {
      list.push({
        part: T.net,
        lengthFt: item.heightFt,
        widthFt2: item.widthFt,
        qty: item.qty,
        isGlass: true
      });
    }
    return list;
  }

  function renderCutTable(item) {
    const rows = computeCutList(item).map((part) => {
      const size = part.isGlass
        ? ftInLabel(part.lengthFt) + " x " + ftInLabel(part.widthFt2)
        : ftInLabel(part.lengthFt);
      return `<tr>
        <td>${escapeHtml(part.part)}</td>
        <td class="mono">${size}</td>
        <td class="center">${part.qty} ${T.piece}</td>
      </tr>`;
    }).join("");
    return `
      <div class="cut-table-wrap">
        <table class="cut-table">
          <thead>
            <tr>
              <th>${T.parts}</th>
              <th>${T.map}</th>
              <th class="center">${T.songkha}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  function itemDiagram(item, compact) {
    return buildDiagram({
      typeId: item.winType,
      heightFt: item.heightFt,
      widthFt: item.widthFt,
      glassColor: item.glassColor,
      aluColor: item.aluColor,
      lockStyle: item.lockStyle || "none",
      hasNet: item.hasNet,
      compact: compact
    });
  }

  function updateSummary() {
    const totals = state.items.reduce((acc, item) => {
      acc.sqft += item.totalSqft;
      acc.glass += item.glassCost;
      acc.lock += item.lockCost;
      acc.frame += item.frameCost;
      acc.net += item.netCost || 0;
      acc.extra += item.extra;
      return acc;
    }, { sqft: 0, glass: 0, lock: 0, frame: 0, net: 0, extra: 0 });
    $("sum-sqft").textContent = fmt(totals.sqft) + T.sqLabel;
    $("sum-glass").textContent = money(totals.glass);
    $("sum-lock").textContent = money(totals.lock);
    $("sum-frame").textContent = money(totals.frame);
    $("sum-net").textContent = money(totals.net);
    $("sum-extra").textContent = money(totals.extra);
    $("sum-total").textContent = money(totals.glass + totals.lock + totals.frame + totals.net + totals.extra);
  }

  function renderItems() {
    const listEl = $("item-list");
    const emptyEl = $("empty-note");
    const summaryCard = $("summary-card");
    if (!state.items.length) {
      listEl.innerHTML = "";
      emptyEl.classList.remove("hidden");
      summaryCard.classList.add("hidden");
      updateQuoteCard();
      return;
    }
    emptyEl.classList.add("hidden");
    summaryCard.classList.remove("hidden");
    updateQuoteCard();
    listEl.innerHTML = state.items.map((item, i) => {
      const type = getType(item.winType);
      const extras = [
        item.thickness ? T.thickness + " " + item.thickness + T.mm : "",
        colorLabel(item.glassColor),
        item.lockName ? T.lock + ": " + item.lockName : T.noLock,
        item.hasNet ? T.net + " " + T.netYes : T.net + " " + T.netNo
      ].filter(Boolean).join(" · ");
      return `
        <div class="window-item">
          <div class="item-thumb">${itemDiagram(item, true)}</div>
          <div>
            <div class="item-head">
              <span class="tag">${kindLabel(type.kind)} ${i + 1} x ${item.qty} - ${escapeHtml(type.label)}</span>
              <button type="button" class="danger-ghost icon-btn" data-action="remove-item" data-index="${i}">${ico("trash")}<span>${T.muchun}</span></button>
            </div>
            <div class="item-details">
              ${T.map}: ${ftInLabel(item.heightFt)} x ${ftInLabel(item.widthFt)} · ${escapeHtml(type.sub)}<br>
              ${T.kach}: ${escapeHtml(item.companyName)}${item.thickness ? " · " + item.thickness + T.mm : ""}${isStaff() ? " (" + T.taka + item.companyRate + T.perSq + ")" : ""}<br>
              ${T.aluShort}: ${escapeHtml(item.aluName || "-")}${item.aluThick ? " · " + item.aluThick + T.mm : ""}${item.aluColor ? " · " + escapeHtml(aluColorLabel(item.aluColor)) : ""}${isStaff() && item.frameRate ? " (" + T.taka + item.frameRate + T.perSq + ")" : ""}<br>
              ${escapeHtml(extras)}
            </div>
            ${isStaff() ? `<button type="button" class="secondary icon-btn cut-toggle" data-action="toggle-cut" data-index="${i}">${cutToggleLabel(false)}</button><div id="cutwrap-${i}" class="hidden">${renderCutTable(item)}</div>` : ""}
            <div class="item-subtotal">${isStaff() ? T.subtotal + " (" + fmt(item.totalSqft) + T.sqLabel + "): " + money(item.subtotal) : fmt(item.totalSqft) + T.sqLabel}</div>
          </div>
        </div>
      `;
    }).join("");
    updateSummary();
  }

  function renderCuttingTab() {
    const wrap = $("cutting-list-wrap");
    const emptyEl = $("cutting-empty");
    const actionsEl = $("cutting-actions");
    if (!state.items.length) {
      wrap.innerHTML = "";
      emptyEl.classList.remove("hidden");
      actionsEl.classList.add("hidden");
      return;
    }
    emptyEl.classList.add("hidden");
    actionsEl.classList.remove("hidden");
    wrap.innerHTML = state.items.map((item, i) => {
      const type = getType(item.winType);
      return `
        <div class="window-item">
          <div class="item-thumb">${itemDiagram(item, true)}</div>
          <div>
            <div class="item-head">
              <span class="tag">${kindLabel(type.kind)} ${i + 1} x ${item.qty} - ${escapeHtml(type.label)}</span>
            </div>
            <div class="item-details">
              ${T.outerSize}: ${ftInLabel(item.heightFt)} x ${ftInLabel(item.widthFt)}
              - ${T.glassGap}: ${state.cutParams.glassGap} ${T.inchi}
              ${item.hasNet ? " · " + T.net : ""}
            </div>
            ${renderCutTable(item)}
          </div>
        </div>
      `;
    }).join("");
  }

  function showError(message) {
    const el = $("err-msg");
    el.textContent = message;
    el.style.display = "block";
  }

  function hideError() {
    $("err-msg").style.display = "none";
  }

  function addItem() {
    const heightFt = toFeet($("in-h-ft").value, $("in-h-in").value);
    const widthFt = toFeet($("in-w-ft").value, $("in-w-in").value);
    const qty = Math.max(1, parseInt($("in-qty").value, 10) || 1);
    const thickness = parseFloat($("sel-glass-thick") && $("sel-glass-thick").value) || 0;
    const company = selectedGlassCompany();
    const lock = selectedLock();
    const alu = selectedAlu();

    if (!state.selectedKind || !state.selectedType) {
      showError(T.errKind);
      return;
    }
    if (!company) {
      showError(T.errCompany);
      return;
    }
    if (!alu) {
      showError(T.errAlu);
      return;
    }
    if (heightFt <= 0 || widthFt <= 0) {
      showError(T.errSize);
      return;
    }
    hideError();

    const totalSqft = heightFt * widthFt * qty;
    const glassCost = totalSqft * (Number(company.rate) || 0);
    const lockCost = lock ? (Number(lock.rate) || 0) * qty : 0;
    const frameRate = Number(alu.rate) || 0;
    const frameCost = frameRate * totalSqft;
    const extra = (Number(state.charges.extra) || 0) * qty;
    const netCost = state.hasNet ? (Number(state.charges.net) || 0) * qty : 0;

    state.items.push({
      heightFt,
      widthFt,
      qty,
      thickness,
      aluName: alu.name,
      aluThick: alu.thickness,
      aluColor: alu.color || state.aluColor,
      companyName: company.name,
      companyRate: company.rate,
      glassColor: state.glassColor,
      lockName: lock ? lock.name : null,
      lockRate: lock ? lock.rate : 0,
      lockStyle: lockStyleOf(lock),
      hasNet: state.hasNet,
      netCost,
      frameRate,
      extra,
      totalSqft,
      glassCost,
      lockCost,
      frameCost,
      subtotal: glassCost + lockCost + frameCost + netCost + extra,
      winType: state.selectedType
    });

    storeSet(KEYS.items, state.items);
    state.selectedKind = null;
    state.selectedType = null;
    renderKindPicker();
    renderTypePicker();
    renderItems();
    clearInputs();
    renderLivePreview(true);
  }

  function clearInputs() {
    ["in-h-ft", "in-h-in", "in-w-ft", "in-w-in"].forEach((id) => {
      $(id).value = "";
    });
    $("in-qty").value = "1";
  }

  function removeItem(index) {
    state.items.splice(index, 1);
    storeSet(KEYS.items, state.items);
    renderItems();
  }

  function clearAll() {
    state.items = [];
    state.selectedKind = null;
    state.selectedType = null;
    storeSet(KEYS.items, state.items);
    renderKindPicker();
    renderTypePicker();
    renderItems();
    renderLivePreview(false);
  }

  function toggleCutList(index) {
    const el = $("cutwrap-" + index);
    if (!el) return;
    el.classList.toggle("hidden");
    const open = !el.classList.contains("hidden");
    const btn = document.querySelector('[data-action="toggle-cut"][data-index="' + index + '"]');
    if (btn) btn.innerHTML = cutToggleLabel(open);
  }

  function addCompany() {
    const name = $("new-company-name").value.trim();
    const thickness = parseFloat($("new-company-thick") && $("new-company-thick").value);
    const rate = parseFloat($("new-company-rate").value);
    const color = normalizeColorId($("new-company-color") && $("new-company-color").value);
    if (!name || Number.isNaN(thickness) || thickness <= 0 || Number.isNaN(rate) || rate < 0) return;
    const existing = state.companies.find((c) => c.name === name && Number(c.thickness) === thickness && c.color === color);
    if (existing) existing.rate = rate;
    else state.companies.push({ name, thickness, rate, color });
    $("new-company-name").value = "";
    if ($("new-company-thick")) $("new-company-thick").value = "";
    $("new-company-rate").value = "";
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    persistOwnerData();
  }

  function removeCompany(index) {
    state.companies.splice(index, 1);
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    persistOwnerData();
  }

  function addAluminium() {
    const name = $("new-alu-name").value.trim();
    const thickness = parseFloat($("new-alu-thick").value);
    const rate = parseFloat($("new-alu-rate").value);
    const color = normalizeAluColorId($("new-alu-color") && $("new-alu-color").value);
    if (!name || Number.isNaN(thickness) || thickness <= 0 || Number.isNaN(rate) || rate < 0) return;
    const existing = state.aluminium.find((a) => a.name === name && Number(a.thickness) === thickness && a.color === color);
    if (existing) existing.rate = rate;
    else state.aluminium.push({ name, thickness, rate, color });
    $("new-alu-name").value = "";
    $("new-alu-thick").value = "";
    $("new-alu-rate").value = "";
    refreshSheetSelects();
    persistOwnerData();
  }

  function removeAluminium(index) {
    state.aluminium.splice(index, 1);
    refreshSheetSelects();
    persistOwnerData();
  }

  function addGlassThick() {
    const mm = parseFloat($("new-glass-thick").value);
    if (Number.isNaN(mm) || mm <= 0) return;
    if (state.glassThicks.indexOf(mm) >= 0) return;
    state.glassThicks.push(mm);
    state.glassThicks.sort((a, b) => a - b);
    $("new-glass-thick").value = "";
    refreshSheetSelects();
    persistOwnerData();
  }

  function removeGlassThick(index) {
    state.glassThicks.splice(index, 1);
    refreshSheetSelects();
    persistOwnerData();
  }

  function saveCharges() {
    const net = parseFloat($("in-charge-net").value);
    const extra = parseFloat($("in-charge-extra").value);
    if (Number.isNaN(net) || net < 0 || Number.isNaN(extra) || extra < 0) return;
    state.charges = { net, extra };
    persistOwnerData();
    flashSaved();
  }

  function addLock() {
    const name = $("new-lock-name").value.trim();
    const rate = parseFloat($("new-lock-rate").value);
    const style = $("new-lock-style") ? $("new-lock-style").value : "generic";
    if (!name || Number.isNaN(rate) || rate < 0) return;
    state.locks.push({ name, rate, style });
    $("new-lock-name").value = "";
    $("new-lock-rate").value = "";
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    persistOwnerData();
    renderLivePreview(true);
  }

  function removeLock(index) {
    state.locks.splice(index, 1);
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    persistOwnerData();
    renderLivePreview(true);
  }

  function saveCutParams() {
    const next = {
      outerHoriz: numVal("in-cp-outerhoriz"),
      side: numVal("in-cp-side"),
      shutterHoriz: numVal("in-cp-shutterhoriz"),
      glassGap: numVal("in-cp-glassgap")
    };
    if (Object.values(next).some((v) => Number.isNaN(v) || v < 0)) return;
    state.cutParams = next;
    persistOwnerData();
    renderItems();
  }


  function setupPwa() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
    var installBtn = $("btn-install");
    var tip = $("install-tip");
    var deferred = null;
    var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    if (standalone) document.documentElement.classList.add("is-standalone");
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferred = e;
      if (installBtn) installBtn.classList.remove("hidden");
    });
    window.addEventListener("appinstalled", function () {
      deferred = null;
      if (installBtn) installBtn.classList.add("hidden");
      if (tip) tip.classList.add("hidden");
    });
    if (installBtn) {
      installBtn.addEventListener("click", function () {
        if (deferred) {
          deferred.prompt();
          deferred.userChoice.finally(function () {
            deferred = null;
            installBtn.classList.add("hidden");
          });
          return;
        }
        if (tip) tip.classList.toggle("hidden");
      });
    }
    if (!standalone && /iphone|ipad|ipod/i.test(navigator.userAgent) && installBtn) {
      installBtn.classList.remove("hidden");
    }
  }

  function sheetApiUrl() {
    return String(window.MTG_SHEET_API || "").trim();
  }

  function sheetRequest(payload) {
    const url = sheetApiUrl();
    if (!url) return Promise.reject(new Error("noapi"));
    return fetch(url, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    }).then((res) => res.json());
  }

  function fillCutInputs() {
    $("in-cp-outerhoriz").value = state.cutParams.outerHoriz;
    $("in-cp-side").value = state.cutParams.side;
    $("in-cp-shutterhoriz").value = state.cutParams.shutterHoriz;
    $("in-cp-glassgap").value = state.cutParams.glassGap;
  }

  function applyOwnerData(data) {
    if (data.role === "owner" || data.role === "operator") state.role = data.role;
    if (Array.isArray(data.companies)) state.companies = normalizeCompanies(data.companies);
    if (Array.isArray(data.locks)) state.locks = data.locks;
    if (Array.isArray(data.aluminium)) state.aluminium = normalizeAluminium(data.aluminium);
    if (Array.isArray(data.glassThicks)) state.glassThicks = data.glassThicks;
    if (data.charges && typeof data.charges === "object") {
      state.charges = { net: Number(data.charges.net) || 0, extra: Number(data.charges.extra) || 0 };
    }
    if (data.cutParams && typeof data.cutParams === "object") {
      state.cutParams = { ...DEFAULT_CUT, ...data.cutParams };
    }
    state.quotes = isOwner() && Array.isArray(data.quotes) ? data.quotes : [];
    state.staff = isOwner() && Array.isArray(data.users) ? data.users : [];
    fillCutInputs();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshSheetSelects();
    renderStaffList();
    renderQuotes();
    renderItems();
    updateRoleUi();
    updateCatalogHint();
  }

  function applyCatalog(data) {
    if (isStaff()) return false;
    if (!data) return false;
    const hasLists = Array.isArray(data.companies) || Array.isArray(data.aluminium)
      || Array.isArray(data.glassThicks) || Array.isArray(data.locks);
    if (data.ok === false && !hasLists) return false;
    if (Array.isArray(data.companies)) state.companies = normalizeCompanies(data.companies);
    if (Array.isArray(data.locks)) state.locks = data.locks;
    if (Array.isArray(data.aluminium)) state.aluminium = normalizeAluminium(data.aluminium);
    if (Array.isArray(data.glassThicks)) state.glassThicks = data.glassThicks;
    state.charges = { net: 0, extra: 0 };
    refreshSheetSelects();
    updateCatalogHint();
    return !!(state.companies.length || state.aluminium.length || state.glassThicks.length);
  }

  function updateCatalogHint() {
    const el = $("catalog-hint");
    if (!el) return;
    const empty = !state.companies.length && !state.aluminium.length && !state.glassThicks.length;
    el.textContent = empty ? T.catalogEmpty : "";
    el.classList.toggle("hidden", !empty);
  }

  function fetchCatalogGet() {
    const url = sheetApiUrl();
    const sep = url.indexOf("?") >= 0 ? "&" : "?";
    return fetch(url + sep + "action=catalog", {
      method: "GET",
      redirect: "follow"
    }).then((res) => res.json());
  }

  function loadCatalog() {
    if (!sheetApiUrl()) return;
    sheetRequest({ action: "catalog" }).then(function (data) {
      if (applyCatalog(data)) return;
      return fetchCatalogGet().then(applyCatalog);
    }).catch(function () {
      return fetchCatalogGet().then(applyCatalog).catch(function () {
        updateCatalogHint();
      });
    });
  }


  function roleLabel(role) {
    return role === "owner" ? T.roleOwner : T.roleStaff;
  }

  function renderStaffList() {
    const wrap = $("staff-list");
    if (!wrap) return;
    if (!isOwner()) {
      wrap.innerHTML = "";
      return;
    }
    if (!state.staff.length) {
      wrap.innerHTML = '<div class="empty-note">' + T.emptyRates + "</div>";
      return;
    }
    wrap.innerHTML = state.staff.map((u, i) =>
      rateRowOpen(i) + '<span class="name">' + escapeHtml(u.email) + " · " + escapeHtml(roleLabel(u.role)) + '</span><button type="button" class="danger-ghost icon-btn" data-action="remove-staff" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></div>"
    ).join("");
  }

  function addStaff() {
    if (!isOwner()) return;
    const email = String($("new-staff-email") && $("new-staff-email").value || "").trim().toLowerCase();
    const pin = String($("new-staff-pin") && $("new-staff-pin").value || "").trim();
    const role = $("new-staff-role") && $("new-staff-role").value === "owner" ? "owner" : "operator";
    if (!ownerEmailOk(email) || !ownerPinOk(pin)) return;
    const existing = state.staff.find((u) => u.email === email);
    if (existing) {
      existing.pin = pin;
      existing.role = role;
    } else {
      state.staff.push({ email: email, pin: pin, role: role });
    }
    $("new-staff-email").value = "";
    $("new-staff-pin").value = "";
    renderStaffList();
    persistOwnerData();
  }

  function removeStaff(index) {
    if (!isOwner()) return;
    const next = state.staff.filter((_, i) => i !== index);
    if (!next.some((u) => u.role === "owner")) return;
    state.staff = next;
    renderStaffList();
    persistOwnerData();
  }

  function persistOwnerData() {
    if (!isOwner() || !state.ownerPin || !state.ownerEmail || !sheetApiUrl()) return;
    sheetRequest({
      action: "save",
      email: state.ownerEmail,
      pin: state.ownerPin,
      companies: state.companies,
      locks: state.locks,
      aluminium: state.aluminium,
      glassThicks: state.glassThicks,
      charges: state.charges,
      cutParams: state.cutParams,
      users: state.staff
    }).then((data) => {
      if (!data || !data.ok) throw new Error("save");
      flashSaved();
    }).catch(() => {
      const el = $("save-flash");
      if (el) {
        el.textContent = T.ownerSaveFail;
        el.classList.add("show");
        setTimeout(() => el.classList.remove("show"), 1800);
      }
    });
  }

  function isStaff() {
    return state.role === "owner" || state.role === "operator";
  }

  function isOwner() {
    return state.role === "owner";
  }

  function isOwnerUnlocked() {
    return isStaff();
  }

  function saveSession(email, pin) {
    storeSet(KEYS.session, { email: String(email || "").toLowerCase(), pin: String(pin || "") });
  }

  function clearSession() {
    try { localStorage.removeItem(KEYS.session); } catch (_) { /* ignore */ }
  }

  function applyLoginSuccess(data, email, pin, nextTab) {
    state.ownerEmail = String(email || "").toLowerCase();
    state.ownerPin = String(pin || "");
    state.role = data.role === "operator" ? "operator" : "owner";
    saveSession(state.ownerEmail, state.ownerPin);
    applyOwnerData(data);
    setOwnerUnlocked(true);
    $("owner-gate").classList.add("hidden");
    var tab = nextTab || state.pendingOwnerTab || (state.role === "owner" ? "rates" : "cutting");
    if (tab === "rates" && state.role !== "owner") tab = "cutting";
    if ((tab === "cutting" || tab === "rates") && !isStaff()) tab = "calc";
    switchTab(tab);
  }

  function restoreSession(saved, nextTab) {
    if (!saved || !saved.email || !saved.pin || !sheetApiUrl()) return Promise.resolve(false);
    return sheetRequest({ action: "unlock", email: saved.email, pin: saved.pin }).then((data) => {
      if (!data || !data.ok) {
        clearSession();
        return false;
      }
      applyLoginSuccess(data, saved.email, saved.pin, nextTab);
      return true;
    }).catch(() => {
      clearSession();
      return false;
    });
  }

  function setOwnerUnlocked(on) {
    state.ownerUnlocked = on;
    if (!on) {
      state.ownerPin = "";
      state.ownerEmail = "";
      state.role = "";
      state.quotes = [];
    }
    updateRoleUi();
  }

  function updateRoleUi() {
    document.body.classList.toggle("is-staff", isStaff());
    if ($("btn-staff-login")) $("btn-staff-login").classList.toggle("hidden", isStaff());
    if ($("btn-owner-lock")) $("btn-owner-lock").classList.toggle("hidden", !isStaff());
    if ($("nav-cutting")) $("nav-cutting").classList.toggle("tab-hidden", !isStaff());
    if ($("nav-rates")) $("nav-rates").classList.toggle("tab-hidden", !isOwner());
    if ($("staff-card")) $("staff-card").classList.toggle("hidden", !isOwner());
    updateQuoteCard();
    renderQuotes();
  }

  function updateQuoteCard() {
    if ($("quote-card")) $("quote-card").classList.toggle("hidden", !state.items.length);
  }

  function fillQuoteLabels() {
    if ($("staff-login-label")) $("staff-login-label").textContent = T.staffLogin;
    if ($("quote-title")) $("quote-title").textContent = T.quoteTitle;
    if ($("quote-hint")) $("quote-hint").textContent = T.quoteHint;
    if ($("quote-name-label")) $("quote-name-label").textContent = T.quoteName;
    if ($("quote-phone-label")) $("quote-phone-label").textContent = T.quotePhone;
    if ($("btn-send-quote")) $("btn-send-quote").textContent = T.quoteSend;
    if ($("quotes-title")) $("quotes-title").textContent = T.quotesTitle;
    if ($("glass-thick-label")) $("glass-thick-label").textContent = T.glassThick;
    if ($("alu-company-label")) $("alu-company-label").textContent = T.aluCompany;
    if ($("alu-thick-label")) $("alu-thick-label").textContent = T.aluThick;
    if ($("alu-color-label")) $("alu-color-label").textContent = T.aluColor;
    if ($("alu-rates-title")) $("alu-rates-title").textContent = T.aluRatesTitle;
    if ($("alu-rates-hint")) $("alu-rates-hint").textContent = T.aluRatesHint;
    if ($("thick-rates-title")) $("thick-rates-title").textContent = T.thickRatesTitle;
    if ($("thick-rates-hint")) $("thick-rates-hint").textContent = T.thickRatesHint;
    if ($("charges-title")) $("charges-title").textContent = T.chargesTitle;
    if ($("charges-hint")) $("charges-hint").textContent = T.chargesHint;
    if ($("charge-net-label")) $("charge-net-label").textContent = T.chargeNet;
    if ($("charge-extra-label")) $("charge-extra-label").textContent = T.chargeExtra;
    if ($("btn-add-alu-label")) $("btn-add-alu-label").textContent = T.addBtn;
    if ($("btn-add-thick-label")) $("btn-add-thick-label").textContent = T.addBtn;
    if ($("btn-save-charges-label")) $("btn-save-charges-label").textContent = T.saveBtn;
    if ($("new-alu-name")) $("new-alu-name").placeholder = T.aluNamePh;
    if ($("new-alu-thick")) $("new-alu-thick").placeholder = T.aluThickPh;
    if ($("new-alu-rate")) $("new-alu-rate").placeholder = T.aluRatePh;
    if ($("new-company-thick")) $("new-company-thick").placeholder = T.glassThickPh;
    if ($("company-rates-hint")) $("company-rates-hint").textContent = T.companyRatesHint;
    fillCompanyColorSelect();
    fillAluColorSelect();
    if ($("nav-rates-label")) $("nav-rates-label").textContent = T.admin;
    if ($("staff-title")) $("staff-title").textContent = T.staffTitle;
    if ($("staff-hint")) $("staff-hint").textContent = T.staffHint;
    if ($("new-staff-email")) $("new-staff-email").placeholder = T.staffEmailPh;
    if ($("new-staff-pin")) $("new-staff-pin").placeholder = T.staffPinPh;
    if ($("opt-staff-role")) $("opt-staff-role").textContent = T.roleStaff;
    if ($("opt-owner-role")) $("opt-owner-role").textContent = T.roleOwner;
    if ($("btn-add-staff-label")) $("btn-add-staff-label").textContent = T.addBtn;
  }

  function renderQuotes() {
    var card = $("quotes-card");
    var list = $("quotes-list");
    if (!card || !list) return;
    if (!isOwner()) {
      card.classList.add("hidden");
      return;
    }
    card.classList.remove("hidden");
    if (!state.quotes.length) {
      list.innerHTML = '<div class="empty-note">' + T.quotesEmpty + "</div>";
      return;
    }
    list.innerHTML = state.quotes.map(function (q) {
      return '<div class="quote-row"><strong>' + escapeHtml(q.name) + " · " + escapeHtml(q.phone) +
        "</strong><span>" + escapeHtml(q.time) + " · " + q.items + " · " + fmt(q.sqft) + T.sqLabel +
        (q.total ? " · " + money(q.total) : "") + " · " + escapeHtml(q.status) + "</span></div>";
    }).join("");
  }

  function quotePhoneOk(phone) {
    var p = String(phone || "").replace(/\s+/g, "");
    return /^(?:\+?88)?01\d{9}$/.test(p) || /^\d{10,15}$/.test(p);
  }

  function sendQuote() {
    var err = $("quote-err");
    var okEl = $("quote-ok");
    okEl.classList.add("hidden");
    if (!state.items.length) {
      err.textContent = T.quoteEmpty;
      err.style.display = "block";
      return;
    }
    var name = $("quote-name").value.trim();
    var phone = $("quote-phone").value.trim();
    if (name.length < 2) {
      err.textContent = T.quoteNameNeed;
      err.style.display = "block";
      return;
    }
    if (!quotePhoneOk(phone)) {
      err.textContent = T.quotePhoneBad;
      err.style.display = "block";
      return;
    }
    if (!sheetApiUrl()) {
      err.textContent = T.ownerNeedApi;
      err.style.display = "block";
      return;
    }
    err.style.display = "none";
    var btn = $("btn-send-quote");
    btn.disabled = true;
    sheetRequest({
      action: "quote",
      name: name,
      phone: phone.replace(/\s+/g, ""),
      items: state.items.map(function (i) {
        var type = getType(i.winType);
        return {
          type: type.label + " " + type.sub,
          heightFt: i.heightFt,
          widthFt: i.widthFt,
          qty: i.qty,
          thickness: i.thickness,
          color: colorLabel(i.glassColor),
          colorId: i.glassColor,
          company: i.companyName,
          aluminium: i.aluName || "",
          aluThick: i.aluThick || "",
          aluColor: i.aluColor || "",
          aluColorLabel: aluColorLabel(i.aluColor),
          lock: i.lockName || "",
          net: i.hasNet,
          sqft: i.totalSqft
        };
      })
    }).then(function (data) {
      btn.disabled = false;
      if (!data || !data.ok) {
        var msg = T.quoteFail;
        if (data && data.error === "phone") msg = T.quotePhoneBad;
        if (data && data.error === "name") msg = T.quoteNameNeed;
        err.textContent = msg;
        err.style.display = "block";
        return;
      }
      okEl.textContent = T.quoteOk + (data.id ? " (" + data.id + ")" : "");
      okEl.classList.remove("hidden");
    }).catch(function () {
      btn.disabled = false;
      err.textContent = T.quoteFail;
      err.style.display = "block";
    });
  }

  function showOwnerGate(nextTab) {
    state.pendingOwnerTab = nextTab;
    $("owner-gate-title").textContent = T.staffLogin;
    $("owner-gate-hint").textContent = sheetApiUrl() ? T.ownerUnlockHint : T.ownerNeedApi;
    $("owner-email-label").textContent = T.ownerEmailLabel;
    $("owner-pin-label").textContent = T.ownerPinLabel;
    $("btn-owner-ok").textContent = T.ownerOpen;
    $("owner-pin2-wrap").classList.add("hidden");
    $("owner-gate-err").style.display = "none";
    $("owner-email").value = "";
    $("owner-pin").value = "";
    $("owner-gate").classList.remove("hidden");
    $("tab-calc").classList.add("hidden");
    $("tab-cutting").classList.add("hidden");
    $("tab-rates").classList.add("hidden");
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === nextTab);
    });
    const nav = document.querySelector(".bottom-nav");
    if (nav) {
      nav.dataset.active = nextTab;
      nav.style.setProperty("--i", String({ calc: 0, cutting: 1, rates: 2 }[nextTab] || 0));
    }
    setTimeout(() => $("owner-email").focus(), 50);
  }

  function ownerEmailOk(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
  }

  function ownerPinOk(pin) {
    return /^\d{4,8}$/.test(String(pin || "").trim());
  }

  function submitOwnerPin() {
    const email = $("owner-email").value.trim();
    const pin = $("owner-pin").value.trim();
    const err = $("owner-gate-err");
    if (!sheetApiUrl()) {
      err.textContent = T.ownerNeedApi;
      err.style.display = "block";
      return;
    }
    if (!email) {
      err.textContent = T.ownerEmailNeed;
      err.style.display = "block";
      return;
    }
    if (!ownerEmailOk(email)) {
      err.textContent = T.ownerEmailBad;
      err.style.display = "block";
      return;
    }
    if (!pin) {
      err.textContent = T.ownerPinNeed;
      err.style.display = "block";
      return;
    }
    if (!ownerPinOk(pin)) {
      err.textContent = T.ownerPinBad;
      err.style.display = "block";
      return;
    }
    $("btn-owner-ok").disabled = true;
    sheetRequest({ action: "unlock", email: email, pin: pin }).then((data) => {
      $("btn-owner-ok").disabled = false;
      if (!data || !data.ok) {
        var msg = T.ownerPinWrong;
        if (data && data.error === "locked") msg = T.ownerLocked;
        if (data && data.error === "needemail") msg = T.ownerNeedEmail;
        if (data && data.error === "required") msg = T.ownerUnlockHint;
        err.textContent = msg;
        err.style.display = "block";
        return;
      }
      applyLoginSuccess(data, email, pin);
    }).catch(() => {
      $("btn-owner-ok").disabled = false;
      err.textContent = T.ownerNetErr;
      err.style.display = "block";
    });
  }

  function lockOwner() {
    clearSession();
    setOwnerUnlocked(false);
    state.companies = [];
    state.locks = [];
    state.aluminium = [];
    state.glassThicks = [];
    state.charges = { net: 0, extra: 0 };
    state.cutParams = { outerHoriz: 0, side: 0, shutterHoriz: 0, glassGap: 0 };
    state.staff = [];
    fillCutInputs();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshSheetSelects();
    loadCatalog();
    showOwnerGate("calc");
  }

  function persistActiveTab(tab) {
    if (tab !== "calc" && tab !== "cutting" && tab !== "rates") return;
    storeSet(KEYS.tab, tab);
  }

  function switchTab(tab) {
    if (tab === "rates" && !isOwner()) {
      if (!isStaff()) {
        persistActiveTab(tab);
        showOwnerGate(tab);
        return;
      }
      tab = "calc";
    }
    if (tab === "cutting" && !isStaff()) {
      persistActiveTab(tab);
      showOwnerGate(tab);
      return;
    }
    persistActiveTab(tab);
    $("owner-gate").classList.add("hidden");
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });
    const nav = document.querySelector(".bottom-nav");
    if (nav) {
      nav.dataset.active = tab;
      nav.style.setProperty("--i", String({ calc: 0, cutting: 1, rates: 2 }[tab] || 0));
    }
    $("tab-calc").classList.toggle("hidden", tab !== "calc");
    $("tab-cutting").classList.toggle("hidden", tab !== "cutting");
    $("tab-rates").classList.toggle("hidden", tab !== "rates");
    if (tab === "cutting") renderCuttingTab();
    if (tab === "rates") renderQuotes();
    var body = document.querySelector(".app-body");
    if (body) body.scrollTop = 0;
  }

  function setNet(on) {
    state.hasNet = on;
    $("btn-net-no").classList.toggle("active", !on);
    $("btn-net-yes").classList.toggle("active", on);
    renderLivePreview(true);
  }

  function bindEvents() {
    $("kind-picker").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-kind]");
      if (btn) setSelectedKind(btn.dataset.kind);
    });
    $("type-list").addEventListener("click", (e) => {
      const card = e.target.closest("[data-type]");
      if (card) setSelectedType(card.dataset.type);
    });
    $("color-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-color]");
      if (!btn) return;
      state.glassColor = btn.dataset.color;
      renderColorGrid();
      renderLivePreview(true);
    });
    $("btn-net-no").addEventListener("click", () => setNet(false));
    $("btn-net-yes").addEventListener("click", () => setNet(true));
    $("sel-lock").addEventListener("change", () => renderLivePreview(true));
    $("sel-company").addEventListener("change", onGlassCompanyChange);
    if ($("sel-glass-thick")) {
      $("sel-glass-thick").addEventListener("change", onGlassThickChange);
    }
    if ($("sel-alu-company")) {
      $("sel-alu-company").addEventListener("change", onAluCompanyChange);
    }
    if ($("sel-alu-thick")) {
      $("sel-alu-thick").addEventListener("change", onAluThickChange);
    }
    if ($("alu-color-grid")) {
      $("alu-color-grid").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-alu-color]");
        if (!btn) return;
        onAluColorChange(btn.dataset.aluColor);
      });
    }

    ["in-h-ft", "in-h-in", "in-w-ft", "in-w-in"].forEach((id) => {
      $(id).addEventListener("input", () => renderLivePreview(true));
    });

    $("btn-add").addEventListener("click", addItem);
    $("btn-clear").addEventListener("click", clearAll);
    $("btn-print").addEventListener("click", () => window.print());
    $("btn-print-cutting").addEventListener("click", () => window.print());
    $("btn-add-company").addEventListener("click", addCompany);
    $("btn-add-lock").addEventListener("click", addLock);
    $("btn-add-alu").addEventListener("click", addAluminium);
    if ($("btn-add-staff")) $("btn-add-staff").addEventListener("click", addStaff);
    $("btn-save-charges").addEventListener("click", saveCharges);
    $("btn-save-cut").addEventListener("click", saveCutParams);

    $("item-list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      if (btn.dataset.action === "remove-item") removeItem(index);
      if (btn.dataset.action === "toggle-cut") toggleCutList(index);
    });
    $("company-list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action='remove-company']");
      if (btn) removeCompany(Number(btn.dataset.index));
    });
    $("lock-list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action='remove-lock']");
      if (btn) removeLock(Number(btn.dataset.index));
    });
    $("alu-list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action='remove-alu']");
      if (btn) removeAluminium(Number(btn.dataset.index));
    });
    if ($("staff-list")) {
      $("staff-list").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action='remove-staff']");
        if (btn) removeStaff(Number(btn.dataset.index));
      });
    }
    bindSortable("company-list", () => state.companies, () => {
      renderRateList("company-list", state.companies, "company");
      renderCompanySelect();
      persistOwnerData();
    });
    bindSortable("lock-list", () => state.locks, () => {
      renderRateList("lock-list", state.locks, "lock");
      renderLockSelect();
      persistOwnerData();
    });
    bindSortable("alu-list", () => state.aluminium, () => {
      refreshSheetSelects();
      persistOwnerData();
    });
    bindSortable("staff-list", () => state.staff, () => {
      renderStaffList();
      persistOwnerData();
    });
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
    $("btn-owner-ok").addEventListener("click", submitOwnerPin);
    $("owner-email").addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("owner-pin").focus();
    });
    $("owner-pin").addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitOwnerPin();
    });
    $("owner-pin-2").addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitOwnerPin();
    });
    $("btn-owner-lock").addEventListener("click", lockOwner);
    $("btn-staff-login").addEventListener("click", function () {
      showOwnerGate("calc");
    });
    $("btn-send-quote").addEventListener("click", sendQuote);
    $("quote-phone").addEventListener("keydown", function (e) {
      if (e.key === "Enter") sendQuote();
    });
  }

  async function init() {
    try {
      ["glasscalc:companies", "glasscalc:locks", "glasscalc:cutparams", "glasscalc:ownerpin"].forEach((k) => {
        localStorage.removeItem(k);
      });
    } catch (_) { /* ignore */ }
    state.companies = [];
    state.locks = [];
    state.aluminium = [];
    state.glassThicks = [];
    state.charges = { net: 0, extra: 0 };
    state.cutParams = { outerHoriz: 0, side: 0, shutterHoriz: 0, glassGap: 0 };
    state.items = (await storeGet(KEYS.items)) || [];

    fillCutInputs();

    bindEvents();
    fillQuoteLabels();
    setOwnerUnlocked(false);
    $("owner-lock-label").textContent = T.ownerLock;
    loadCatalog();
    renderKindPicker();
    renderTypePicker();
    renderColorGrid();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshSheetSelects();
    renderItems();
    renderLivePreview(false);
    setupPwa();
    const savedTab = await storeGet(KEYS.tab);
    const session = await storeGet(KEYS.session);
    const tab = savedTab === "cutting" || savedTab === "rates" || savedTab === "calc" ? savedTab : "calc";
    if (session && session.email && session.pin) {
      const ok = await restoreSession(session, tab);
      if (!ok) switchTab("calc");
    } else {
      switchTab(tab === "calc" ? "calc" : "calc");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
