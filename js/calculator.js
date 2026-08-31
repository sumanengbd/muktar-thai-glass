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
  "errCompany": "প্রথমে \u0985\u09cd\u09af\u09be\u09a1\u09ae\u09bf\u09a8 থেকে অন্তত একটি কাঁচের কোম্পানি যোগ করুন।",
  "errSize": "উচ্চতা ও প্রস্থ সঠিকভাবে দিন।",
  "cutShow": "কাটিং লিস্ট দেখান",
  "cutHide": "কাটিং লিস্ট লুকান",
  "subtotal": "সাবটোটাল",
  "outerSize": "বাইরের মাপ",
  "glassGap": "গ্লাস গ্যাপ",
  "typeEnterSize": "মাপ লিখুন",
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
  "ownerUnlockHint": "ইমেইল ও পিন দুটোই দিতে হবে।",
  "ownerPinLabel": "পিন",
  "ownerOpen": "খুলুন",
  "ownerPinBad": "পিন ৪ থেকে ৮ ডিজিট দিন।",
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
  "aluRatesHint": "এক কোম্পানি এক সারি। একাধিক থিকনেস ও রং শীটে | দিয়ে থাকবে।",
  "chargesTitle": "নেট ও ইনস্টলেশন রেট",
  "chargesHint": "প্রতি জানালা/দরজার চার্জ । শীট থেকে আসে।",
  "chargeNet": "নেট (টাকা / টি)",
  "chargeExtra": "ইনস্টলেশন (টাকা / টি)",
  "editBtn": "এডিট",
  "updateBtn": "আপডেট",
  "cancelBtn": "বাতিল",
  "addBtn": "যোগ করুন",
  "saveBtn": "সংরক্ষণ",
  "aluNamePh": "কোম্পানি",
  "aluThickPh": "মিমি",
  "aluRatePh": "রেট",
  "glassThickPh": "মিমি",
  "companyRatesHint": "এক কোম্পানি এক সারি। একাধিক থিকনেস ও রং শীটে | দিয়ে থাকবে।",
  "aluColor": "আলুমিনিয়াম রং",
  "aluSilver": "সিলভার",
  "aluWhite": "সাদা",
  "aluChampagne": "শ্যাম্পেন",
  "aluBrown": "বাদামি",
  "catalogEmpty": "শীট থেকে লিস্ট আসেনি। ইন্টারনেট চেক করে পেজ রিফ্রেশ করুন।",
  "admin": "\u0985\u09cd\u09af\u09be\u09a1\u09ae\u09bf\u09a8",
  "calcTab": "\u0995\u09cd\u09af\u09be\u09b2\u0995\u09c1\u09b2\u09c7\u099f\u09b0",
  "pickHint": "\u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
  "working": "\u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8...",
  "loading": "\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",
  "tabGlass": "\u0995\u09be\u0981\u099a\u09c7\u09b0 \u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09bf",
  "tabAlu": "\u0986\u09b2\u09c1\u09ae\u09bf\u09a8\u09bf\u09df\u09be\u09ae",
  "tabLock": "\u09b2\u0995 \u098f\u09b0 \u09a6\u09be\u09ae",
  "tabCharges": "\u09a8\u09c7\u099f \u0993 \u0987\u09a8\u09b8\u09cd\u099f\u09b2",
  "tabStaff": "\u09b8\u09cd\u099f\u09be\u09ab \u0985\u09cd\u09af\u09be\u0995\u09be\u0989\u09a8\u09cd\u099f",
  "tabCut": "\u0995\u09be\u099f\u09bf\u0982 \u09ab\u09b0\u09cd\u09ae\u09c1\u09b2\u09be",
  "tabQuotes": "\u09ad\u09bf\u099c\u09bf\u099f\u09b0 \u0995\u09cb\u099f",
  "staffTitle": "স্টাফ অ্যাকাউন্ট",
  "staffHint": "মালিক স্টাফ যোগ করতে পারবেন। ইমেইল ও পিন দিয়ে তারা লগইন করবে। টেনে সারি সাজাতে পারবেন।",
  "staffEmailPh": "ইমেইল",
  "staffPinPh": "পিন ৪-৮ ডিজিট",
  "roleStaff": "স্টাফ",
  "roleOwner": "মালিক",
  "staffNeedOwner": "অন্তত একজন মালিক রাখতে হবে।",
  "staffBad": "সঠিক ইমেইল ও ৪-৮ ডিজিট পিন দিন।",
  "errNeedName": "\u09a8\u09be\u09ae \u09a6\u09bf\u09a8\u0964",
  "errNeedNumber": "\u09b8\u09a0\u09bf\u0995 \u09b8\u0982\u0996\u09cd\u09af\u09be \u09a6\u09bf\u09a8\u0964",
  "errNeedPick": "\u09a5\u09bf\u0995\u09a8\u09c7\u09b8 \u0993 \u09b0\u0982 \u09b8\u09bf\u09b2\u09c7\u0995\u09cd\u099f \u09b0\u09be\u0996\u09c1\u09a8\u0964",
  "cutInfo": "\u0995\u09be\u099f\u09bf\u0982 \u09a4\u09a5\u09cd\u09af",
  "quoteCutClear": "\u09ac\u09b0\u09cd\u09a4\u09ae\u09be\u09a8 \u09a4\u09be\u09b2\u09bf\u0995\u09be",
  "quoteNoCut": "\u098f\u0987 \u0995\u09cb\u099f\u09c7\u09b0 \u09ae\u09be\u09aa \u09a8\u09c7\u0987\u0964",
  "costGlass": "\u0995\u09be\u0981\u099a\u09c7\u09b0 \u09a6\u09be\u09ae",
  "costFrame": "\u09ab\u09cd\u09b0\u09c7\u09ae \u098f\u09b0 \u09a6\u09be\u09ae",
  "costLock": "\u09b2\u0995\u09c7\u09b0 \u09a6\u09be\u09ae",
  "costNet": "\u09ae\u09b6\u09be\u09b0\u09bf \u09a8\u09c7\u099f",
  "costExtra": "\u0987\u09a8\u09b8\u09cd\u099f\u09b2\u09c7\u09b6\u09a8",
  "costTotal": "\u09b8\u09b0\u09cd\u09ac\u09ae\u09cb\u099f",
  "livePrice": "\u09a6\u09be\u09ae\u09c7\u09b0 \u09b9\u09bf\u09b8\u09be\u09ac",
  "printKicker": "\u0995\u09cb\u099f / \u09b9\u09bf\u09b8\u09be\u09ac",
  "printCutKicker": "\u0995\u09be\u099f\u09bf\u0982 \u09b2\u09bf\u09b8\u09cd\u099f",
  "printSub": "\u09a5\u09be\u0987 \u0995\u09be\u0981\u099a \u099c\u09be\u09a8\u09be\u09b2\u09be \u0993 \u09a6\u09b0\u099c\u09be\u09b0 \u09b9\u09bf\u09b8\u09be\u09ac",
  "printDate": "\u09a4\u09be\u09b0\u09bf\u0996",
  "printThanks": "\u09a7\u09a8\u09cd\u09af\u09ac\u09be\u09a6",
  "printNote": "\u098f\u0987 \u09b9\u09bf\u09b8\u09be\u09ac \u0986\u09a8\u09c1\u09ae\u09be\u09a8\u09bf\u0995\u0964 \u099a\u09c2\u09dc\u09be\u09a8\u09cd\u09a4 \u09a6\u09be\u09ae \u09ae\u09be\u09aa \u0993 \u09ae\u09be\u09b2\u09be\u09ae\u09be\u09b2 \u0985\u09a8\u09c1\u09af\u09be\u09df\u09c0 \u09b9\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964",
  "printCustomer": "\u0997\u09cd\u09b0\u09be\u09b9\u0995",
  "shopSlogan": "\u09a5\u09be\u0987 \u0995\u09be\u0981\u099a \u099c\u09be\u09a8\u09be\u09b2\u09be \u0993 \u09a6\u09b0\u099c\u09be \u0995\u09cd\u09af\u09be\u09b2\u0995\u09c1\u09b2\u09c7\u099f\u09b0  -  \u09ae\u09be\u09aa \u09a6\u09c7\u0996\u09c7 \u09ad\u09bf\u099c\u09c1\u09df\u09be\u09b2 \u09b8\u09b9 \u09a6\u09be\u09ae \u09b9\u09bf\u09b8\u09be\u09ac \u0995\u09b0\u09c1\u09a8",
  "tabHome": "\u09b8\u09cd\u09ac\u09be\u0997\u09a4\u09ae",
  "homeTitle": "\u09a6\u09cb\u0995\u09be\u09a8\u09c7\u09b0 \u09a4\u09a5\u09cd\u09af",
  "homeHello": "\u09b8\u09cd\u09ac\u09be\u0997\u09a4\u09ae",
  "shopName": "\u09a6\u09cb\u0995\u09be\u09a8\u09c7\u09b0 \u09a8\u09be\u09ae",
  "shopSloganLabel": "\u09b8\u09cd\u09b2\u09cb\u0997\u09be\u09a8",
  "shopLogo": "\u09b2\u09cb\u0997\u09cb",
  "shopLogoPick": "\u099b\u09ac\u09bf \u09ac\u09be\u099b\u09c1\u09a8",
  "shopLogoReset": "\u09a1\u09bf\u09ab\u09b2\u09cd\u099f",
  "shopHint": "\u09a8\u09be\u09ae, \u09b8\u09cd\u09b2\u09cb\u0997\u09be\u09a8 \u0993 \u09b2\u09cb\u0997\u09cb \u09b9\u09c7\u09a1\u09be\u09b0 \u0993 \u09aa\u09cd\u09b0\u09bf\u09a8\u09cd\u099f\u09c7 \u09a6\u09c7\u0996\u09be\u09ac\u09c7\u0964",
  "shopLogoBad": "\u099b\u09ac\u09bf \u09aa\u09dc\u09be \u09af\u09be\u09df\u09a8\u09bf\u0964",
  "statQuotes": "\u0995\u09cb\u099f",
  "statToday": "\u0986\u099c\u0995\u09c7\u09b0 \u0995\u09cb\u099f",
  "statGlass": "\u0995\u09be\u0981\u099a \u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09bf",
  "statAlu": "\u0986\u09b2\u09c1\u09ae\u09bf\u09a8\u09bf\u09df\u09be\u09ae",
  "statLocks": "\u09b2\u0995",
  "statStaff": "\u09b8\u09cd\u099f\u09be\u09ab",
  "homeQuick": "\u09a6\u09cd\u09b0\u09c1\u09a4 \u0995\u09be\u099c"
};
  const KEYS = {
    items: "glasscalc:items",
    tab: "glasscalc:tab",
    session: "glasscalc:session",
    adminPanel: "glasscalc:adminPanel",
    catalog: "glasscalc:catalog",
    shop: "glasscalc:shop"
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
  const DEFAULT_LOGIN = { email: "sumanengbd@gmail.com", pin: "123456" };

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
    staff: [],
    edit: { kind: "", index: -1, name: "", rate: null, thicks: [], colors: [] },
    adminPick: { companyThicks: [5], companyColors: ["clear"], aluThicks: [1], aluColors: ["silver"] },
    shop: { name: "", slogan: "", logo: "" },
    adminPanel: "home",
    quoteOpenId: "",
    cutQuote: null
  };

  const $ = (id) => document.getElementById(id);

  function setHeading(id, text) {
    const el = $(id);
    if (!el) return;
    let span = el.querySelector(".title-text");
    if (!span) {
      span = document.createElement("span");
      span.className = "title-text";
      el.insertBefore(span, el.firstChild);
    }
    span.textContent = text;
  }


  function ico(name) {
    var p = {
      trash: '<polyline points="3 7 5 7 21 7"/><path d="M8 7V5h8v2"/><path d="M6 7l1 14h10l1-14"/><path d="M10 11v6"/><path d="M14 11v6"/>',
      down: '<path d="M6 9l6 6 6-6"/>',
      up: '<path d="M6 15l6-6 6 6"/>',
      save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>',
      grip: '<path d="M8 6h8M8 12h8M8 18h8"/>',
      pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
      cut: '<path d="M4 7h16M4 12h16M4 17h10"/><circle cx="18" cy="17" r="2.2"/>'
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
    let tenthMm = Math.round(safe * 3048);
    let wholeFt = Math.floor(tenthMm / 3048);
    tenthMm -= wholeFt * 3048;
    let inch = Math.floor(tenthMm / 254);
    tenthMm -= inch * 254;
    let mm = Math.round(tenthMm / 10);
    if (mm >= 25) {
      mm -= 25;
      inch += 1;
    }
    if (inch >= 12) {
      inch -= 12;
      wholeFt += 1;
    }
    let s = wholeFt + " " + T.fut;
    if (inch > 0) s += " " + inch + " " + T.inchi;
    if (mm > 0) s += " " + mm + " " + T.mm;
    return s;
  }

  function toFeet(ft, inch, mm) {
    return (Number(ft) || 0) + (Number(inch) || 0) / 12 + (Number(mm) || 0) / 304.8;
  }

  function inputSizeFt(axis) {
    const p = axis === "w" ? "w" : "h";
    return toFeet(
      $("in-" + p + "-ft") && $("in-" + p + "-ft").value,
      $("in-" + p + "-in") && $("in-" + p + "-in").value,
      $("in-" + p + "-mm") && $("in-" + p + "-mm").value
    );
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

  function expandNamedCombos(list, colorFn, defaultThick) {
    const out = [];
    (list || []).forEach((row) => {
      const name = String(row && row.name || "").trim();
      if (!name) return;
      const thicks = uniqueNums(String(row.thickness == null ? "" : row.thickness).split("|").map((p) => Number(String(p).replace(/[^0-9.]/g, ""))));
      const colors = uniqueIds(String(row.color || "").split("|").map((p) => colorFn(p.trim())));
      const useThicks = thicks.length ? thicks : [defaultThick];
      const useColors = colors.length ? colors : [colorFn("")];
      const rate = Number(row.rate);
      const useRate = Number.isFinite(rate) && rate >= 0 ? rate : 0;
      useThicks.forEach((thickness) => {
        useColors.forEach((color) => out.push({ name: name, thickness: thickness, rate: useRate, color: color }));
      });
    });
    return out;
  }

  function normalizeAluminium(list) {
    return expandNamedCombos(list, normalizeAluColorId, 1).filter((a) => a.name && a.thickness > 0);
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

  const GLASS_THICK_PRESETS = [4, 5, 5.5, 6, 8, 10, 12];
  const ALU_THICK_PRESETS = [1, 1.2, 1.4, 1.5, 1.8, 2, 3];

  function dummyGlassRows() {
    const prices = {
      "Clear Float": { "4": 110, "5": 130, "6": 150, "8": 180, "10": 205, "12": 230 },
      Tinted: { "5": 145, "6": 165 },
      Reflective: { "5": 170, "5.5": 180, "6": 190 },
      Tempered: { "5": 165, "6": 190, "8": 230 }
    };
    const brands = [
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
    const out = [];
    brands.forEach((b) => {
      Object.keys(prices).forEach((type) => {
        const name = b.name + " · " + type;
        const rateMap = prices[type];
        const colors = b.colors[type] || ["clear"];
        Object.keys(rateMap).forEach((mm) => {
          colors.forEach((color) => {
            out.push({ name: name, thickness: Number(mm), rate: rateMap[mm], color: color });
          });
        });
      });
    });
    return out;
  }

  function dummyAluRows() {
    const profiles = [
      { type: "Standard", thickness: 1.2, rate: 125 },
      { type: "Sliding", thickness: 1.2, rate: 175 },
      { type: "Heavy Duty", thickness: 1.5, rate: 200 },
      { type: "Heavy Duty", thickness: 1.8, rate: 250 },
      { type: "Commercial", thickness: 2, rate: 300 }
    ];
    const brands = [
      { name: "Chung Hua Aluminium", colors: ["silver", "bronze", "champagne", "black", "white", "brown"] },
      { name: "KAI Aluminium", colors: ["silver", "bronze", "black", "champagne", "white", "brown"] },
      { name: "PHP Aluminium", colors: ["silver", "bronze", "champagne", "black", "white"] }
    ];
    const out = [];
    brands.forEach((b) => {
      profiles.forEach((p) => {
        const name = b.name + " · " + p.type;
        b.colors.forEach((color) => {
          out.push({ name: name, thickness: p.thickness, rate: p.rate, color: color });
        });
      });
    });
    return out;
  }

  function dummyLocks() {
    return [
      { name: "Crescent Lock", rate: 200, style: "sliding" },
      { name: "Heavy Duty Crescent Lock", rate: 400, style: "sliding" },
      { name: "Hook Lock", rate: 250, style: "sliding" },
      { name: "Keyed Sliding Window Lock", rate: 500, style: "sliding" },
      { name: "Casement Handle", rate: 400, style: "casement" },
      { name: "Multi Point Handle", rate: 800, style: "casement" },
      { name: "Espagnolette Lock", rate: 1000, style: "casement" },
      { name: "Window Stay", rate: 250, style: "casement" },
      { name: "Friction Stay", rate: 500, style: "casement" },
      { name: "Basic Aluminium Door Lock", rate: 450, style: "generic" },
      { name: "Mortise Lock", rate: 800, style: "deadbolt" },
      { name: "Heavy Duty Mortise Lock", rate: 1500, style: "deadbolt" },
      { name: "Cylinder Lock", rate: 700, style: "deadbolt" },
      { name: "Door Handle Set", rate: 700, style: "knob" },
      { name: "Sliding Door Hook Lock", rate: 500, style: "sliding" },
      { name: "Multi Point Lock", rate: 2500, style: "deadbolt" }
    ];
  }

  function ensureDummyCatalog() {
    const glass = dummyGlassRows();
    const alu = dummyAluRows();
    const locks = dummyLocks();
    let added = 0;
    glass.forEach((row) => {
      const exists = state.companies.some((c) =>
        c.name === row.name && Number(c.thickness) === Number(row.thickness) && c.color === row.color);
      if (!exists) {
        state.companies.push(row);
        added += 1;
      }
    });
    alu.forEach((row) => {
      const exists = state.aluminium.some((a) =>
        a.name === row.name && Number(a.thickness) === Number(row.thickness) && a.color === row.color);
      if (!exists) {
        state.aluminium.push(row);
        added += 1;
      }
    });
    locks.forEach((row) => {
      if (!state.locks.some((l) => l.name === row.name)) {
        state.locks.push(row);
        added += 1;
      }
    });
    if (added) saveCatalogCache();
    return added;
  }

  function togglePick(arr, value, isNum) {
    const v = isNum ? Number(value) : value;
    const i = arr.findIndex((x) => (isNum ? Number(x) === v : x === v));
    if (i >= 0) arr.splice(i, 1);
    else arr.push(v);
  }

  function mergeThicks(presets, selected) {
    const all = presets.slice();
    selected.forEach((mm) => {
      if (all.every((p) => Number(p) !== Number(mm))) all.push(Number(mm));
    });
    return all.sort((a, b) => a - b);
  }

  function addThickPick(kind) {
    const id = kind === "company" ? "new-company-thick" : "new-alu-thick";
    const mm = parseFloat($(id) && $(id).value);
    if (Number.isNaN(mm) || mm <= 0) return;
    const arr = kind === "company" ? state.adminPick.companyThicks : state.adminPick.aluThicks;
    if (arr.every((t) => Number(t) !== mm)) arr.push(mm);
    arr.sort((a, b) => a - b);
    if ($(id)) $(id).value = "";
    renderAdminPicks();
  }

  function selectedThicks(kind) {
    const arr = (kind === "company" ? state.adminPick.companyThicks : state.adminPick.aluThicks).slice();
    const extra = parseFloat($(kind === "company" ? "new-company-thick" : "new-alu-thick") && $(kind === "company" ? "new-company-thick" : "new-alu-thick").value);
    if (!Number.isNaN(extra) && extra > 0 && arr.every((t) => Number(t) !== extra)) arr.push(extra);
    return arr;
  }

  function upsertCombo(list, row) {
    const existing = list.find((x) => x.name === row.name && Number(x.thickness) === Number(row.thickness) && x.color === row.color);
    if (existing) existing.rate = row.rate;
    else list.push(row);
  }

  function uniqueNums(arr) {
    const out = [];
    arr.forEach((n) => {
      const v = Number(n);
      if (!Number.isNaN(v) && v > 0 && out.every((x) => Number(x) !== v)) out.push(v);
    });
    return out.sort((a, b) => a - b);
  }

  function uniqueIds(arr) {
    const out = [];
    arr.forEach((id) => {
      if (id && out.indexOf(id) < 0) out.push(id);
    });
    return out;
  }

  function replaceCombos(list, oldName, name, thicks, colors, rate, clickedRate) {
    const old = list.filter((x) => x.name === oldName);
    const rateMap = {};
    old.forEach((x) => { rateMap[Number(x.thickness) + "|" + x.color] = x.rate; });
    const rateChanged = Number(rate) !== Number(clickedRate);
    const next = [];
    thicks.forEach((thickness) => {
      colors.forEach((color) => {
        const key = Number(thickness) + "|" + color;
        const useRate = rateChanged || rateMap[key] == null ? rate : rateMap[key];
        next.push({ name: name, thickness: thickness, rate: useRate, color: color });
      });
    });
    const kept = list.filter((x) => x.name !== oldName);
    list.length = 0;
    kept.concat(next).forEach((row) => list.push(row));
  }

  function setAddLabels() {
    const companySpan = $("btn-add-company") && $("btn-add-company").querySelector("span");
    if (companySpan) companySpan.textContent = T.addBtn;
    if ($("btn-add-alu-label")) $("btn-add-alu-label").textContent = T.addBtn;
    if ($("btn-cancel-company")) $("btn-cancel-company").classList.add("hidden");
    if ($("btn-cancel-alu")) $("btn-cancel-alu").classList.add("hidden");
  }

  var loaderCount = 0;
  function showLoader(on, text) {
    const el = $("app-loader");
    if (!el) return;
    if (on) {
      loaderCount += 1;
      if ($("app-loader-text")) $("app-loader-text").textContent = text || T.working;
      el.classList.remove("hidden");
      document.documentElement.classList.add("is-busy");
      return;
    }
    loaderCount = Math.max(0, loaderCount - 1);
    if (loaderCount > 0) return;
    el.classList.add("hidden");
    document.documentElement.classList.remove("is-busy");
  }

  function switchAdminPanel(id) {
    const allowed = ["home", "glass", "alu", "lock", "charges", "staff", "cut", "quotes"];
    if (allowed.indexOf(id) < 0) id = "home";
    if (isStaff() && !isOwner() && id !== "home" && id !== "quotes") id = "home";
    if (id === "quotes" && !isStaff()) id = "home";
    if (id === "staff" && !isOwner()) id = "home";
    state.adminPanel = id;
    storeSet(KEYS.adminPanel, id);
    document.querySelectorAll("[data-admin-panel]").forEach((el) => {
      el.classList.toggle("hidden", el.getAttribute("data-admin-panel") !== id);
    });
    document.querySelectorAll(".admin-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.admin === id);
    });
    if (id === "home") renderHome();
  }

  function defaultShop() {
    return { name: T.shop, slogan: T.shopSlogan, logo: "images/logo.svg" };
  }

  function safeShopLogo(logo) {
    const v = String(logo || "").trim();
    if (v.indexOf("data:image/") === 0 && v.length <= 49000) return v;
    if (v.indexOf("images/") === 0 && v.length < 200) return v;
    return "";
  }

  function shopOf(data) {
    const fallback = defaultShop();
    const src = data && typeof data === "object" ? data : {};
    return {
      name: String(src.name || "").trim() || fallback.name,
      slogan: String(src.slogan || "").trim() || fallback.slogan,
      logo: safeShopLogo(src.logo) || fallback.logo
    };
  }

  function applyShop(shop) {
    state.shop = shopOf(shop);
    const name = state.shop.name;
    const slogan = state.shop.slogan;
    const logo = state.shop.logo;
    document.title = name + "  -  " + T.calcTab;
    const h1 = document.querySelector(".app-bar h1");
    if (h1) h1.textContent = name;
    const barP = document.querySelector(".app-bar-text p");
    if (barP) barP.textContent = slogan;
    document.querySelectorAll(".app-bar .logo, .print-logo, #shop-logo-preview").forEach((img) => {
      if (img && img.getAttribute("src") !== logo) img.src = logo;
    });
    if ($("shop-name") && document.activeElement !== $("shop-name")) $("shop-name").value = name;
    if ($("shop-slogan") && document.activeElement !== $("shop-slogan")) $("shop-slogan").value = slogan;
    storeSet(KEYS.shop, state.shop);
  }

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function localDayKey(d) {
    if (!d || isNaN(d.getTime())) return "";
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function quoteTimeDate(raw) {
    if (!raw) return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) return raw;
    const s = String(raw).trim();
    if (!s) return null;
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
      const iso = new Date(s.indexOf("T") >= 0 ? s : s.replace(" ", "T"));
      if (!isNaN(iso.getTime())) return iso;
    }
    const parsed = new Date(s);
    return isNaN(parsed.getTime()) ? null : parsed;
  }

  function formatQuoteTime(raw) {
    const d = quoteTimeDate(raw);
    if (!d) return String(raw || "");
    return d.toLocaleString("bn-BD", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function quoteLineSize(it) {
    const parsed = parseSizeFt(it && it.size);
    return {
      heightFt: Number(it && it.heightFt) > 0 ? Number(it.heightFt) : parsed.heightFt,
      widthFt: Number(it && it.widthFt) > 0 ? Number(it.widthFt) : parsed.widthFt,
      qty: Math.max(1, Number(it && it.qty) || 1)
    };
  }

  function quoteSqft(q) {
    const stored = Number(q && q.sqft) || 0;
    if (stored > 0) return stored;
    return (q && q.lines || []).reduce((sum, it) => {
      const s = quoteLineSize(it);
      return sum + s.heightFt * s.widthFt * s.qty;
    }, 0);
  }

  function quoteTotal(q) {
    const stored = Number(q && q.total) || 0;
    if (stored > 0) return stored;
    return (q && q.lines || []).reduce((sum, it) => sum + (Number(it && it.total) || 0), 0);
  }

  function quoteHomeStats() {
    const rows = state.quotes || [];
    const day = localDayKey(new Date());
    const seen = {};
    let count = 0;
    let today = 0;
    rows.forEach((q) => {
      const id = String(q && q.id || "");
      if (!id || seen[id]) return;
      seen[id] = true;
      count += 1;
      if (localDayKey(quoteTimeDate(q.time)) === day) today += 1;
    });
    return { count: count, today: today };
  }

  function renderHome() {
    const shop = shopOf(state.shop);
    const hero = $("home-hero");
    if (hero) {
      hero.innerHTML = '<img src="' + escapeHtml(shop.logo) + '" alt="">' +
        '<div><p class="home-kicker">' + T.homeHello + (isStaff() ? " \u00b7 " + escapeHtml(roleLabel(state.role)) : "") + "</p>" +
        "<strong>" + escapeHtml(shop.name) + "</strong><span>" + escapeHtml(shop.slogan) + "</span></div>";
    }
    const q = quoteHomeStats();
    const aluNames = typeof uniqueAlu === "function" ? uniqueAlu("name", {}) : [];
    const stats = [
      [q.count, T.statQuotes, isStaff() ? "quotes" : ""],
      [q.today, T.statToday, isStaff() ? "quotes" : ""],
      [companyNames().length, T.statGlass, isOwner() ? "glass" : ""],
      [aluNames.length, T.statAlu, isOwner() ? "alu" : ""],
      [state.locks.length, T.statLocks, isOwner() ? "lock" : ""]
    ];
    if (isOwner()) stats.push([(state.staff || []).length, T.statStaff, "staff"]);
    if ($("home-stats")) {
      $("home-stats").innerHTML = stats.map((s) =>
        '<button type="button" class="home-stat"' + (s[2] ? ' data-goto="' + s[2] + '"' : "") + ">" +
        "<em>" + s[0] + "</em><span>" + s[1] + "</span></button>"
      ).join("");
    }
    const actions = [];
    if (isStaff()) actions.push(["quotes", T.tabQuotes]);
    if (isOwner()) {
      actions.push(["glass", T.tabGlass]);
      actions.push(["alu", T.tabAlu]);
    }
    actions.push(["calc", T.calcTab]);
    if ($("home-actions")) {
      $("home-actions").innerHTML = (actions.length ? '<p class="hint">' + T.homeQuick + "</p>" : "") +
        actions.map((a) =>
          '<button type="button" class="icon-btn secondary compact" data-goto="' + a[0] + '">' + a[1] + "</button>"
        ).join("");
    }
    if ($("home-shop")) $("home-shop").classList.toggle("hidden", !isOwner());
    setHeading("home-title", T.homeTitle);
    if ($("home-shop-title")) $("home-shop-title").textContent = T.homeTitle;
    if ($("home-shop-hint")) $("home-shop-hint").textContent = T.shopHint;
    if ($("shop-name-label")) $("shop-name-label").textContent = T.shopName;
    if ($("shop-slogan-label")) $("shop-slogan-label").textContent = T.shopSloganLabel;
    if ($("shop-logo-label")) $("shop-logo-label").textContent = T.shopLogo;
    if ($("btn-shop-logo")) $("btn-shop-logo").textContent = T.shopLogoPick;
    if ($("btn-shop-logo-reset")) $("btn-shop-logo-reset").textContent = T.shopLogoReset;
    if ($("btn-save-shop")) $("btn-save-shop").textContent = T.saveBtn;
    if ($("shop-name") && document.activeElement !== $("shop-name")) $("shop-name").value = shop.name;
    if ($("shop-slogan") && document.activeElement !== $("shop-slogan")) $("shop-slogan").value = shop.slogan;
    if ($("shop-logo-preview")) $("shop-logo-preview").src = shop.logo;
  }

  function goHomeTarget(id) {
    if (id === "calc") {
      switchTab("calc");
      return;
    }
    switchAdminPanel(id);
  }

  function resizeLogoFile(file) {
    return new Promise(function (resolve, reject) {
      if (!file || !file.type || file.type.indexOf("image/") !== 0) {
        reject(new Error("type"));
        return;
      }
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = function () {
        URL.revokeObjectURL(url);
        const max = 192;
        let w = img.width;
        let h = img.height;
        if (w > max || h > max) {
          const s = max / Math.max(w, h);
          w = Math.round(w * s);
          h = Math.round(h * s);
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        let out = canvas.toDataURL("image/jpeg", 0.72);
        if (out.length > 49000) out = canvas.toDataURL("image/jpeg", 0.55);
        if (out.length > 49000) {
          reject(new Error("size"));
          return;
        }
        resolve(out);
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("img"));
      };
      img.src = url;
    });
  }

  function saveShopFromForm() {
    if (!isOwner()) return;
    applyShop({
      name: $("shop-name") && $("shop-name").value,
      slogan: $("shop-slogan") && $("shop-slogan").value,
      logo: state.shop.logo
    });
    renderHome();
    persistOwnerData();
  }

  function onShopLogoPicked(file) {
    resizeLogoFile(file).then(function (dataUrl) {
      applyShop({ name: state.shop.name, slogan: state.shop.slogan, logo: dataUrl });
      renderHome();
    }).catch(function () {
      showStaffErr(T.shopLogoBad);
    });
  }

  function groupByName(items) {
    const order = [];
    const map = {};
    items.forEach((item, i) => {
      const key = String(item.name || "");
      if (!map[key]) {
        map[key] = [];
        order.push(key);
      }
      map[key].push(i);
    });
    return order.map((name) => ({ name: name, indices: map[name] }));
  }

  function mselLabel(values) {
    return values.length ? values.join(", ") : T.pickHint;
  }

  function renderThickPanel(wrapId, presets, selected, inputId, kind) {
    const wrap = $(wrapId);
    if (!wrap) return;
    const opts = mergeThicks(presets, selected).map((mm) =>
      '<button type="button" class="msel-opt' + (selected.some((t) => Number(t) === Number(mm)) ? " active" : "") + '" data-mm="' + mm + '"><span class="msel-check"></span>' + mm + T.mm + "</button>"
    ).join("");
    wrap.innerHTML = '<div class="msel-opts">' + opts + '</div><div class="msel-custom"><input type="number" id="' + inputId + '" min="0" step="' + (kind === "alu" ? "0.1" : "0.5") + '" placeholder="' + T.mm + '"><button type="button" class="msel-add-mm" data-thick-kind="' + kind + '">+</button></div>';
  }

  function renderColorPanel(wrapId, palette, selected) {
    const wrap = $(wrapId);
    if (!wrap) return;
    wrap.innerHTML = '<div class="msel-opts">' + palette.map((c) =>
      '<button type="button" class="msel-opt' + (selected.indexOf(c.id) >= 0 ? " active" : "") + '" data-color="' + c.id + '"><span class="msel-check"></span><span class="pick-dot" style="background:linear-gradient(135deg,' + c.light + "," + c.mid + ')"></span>' + escapeHtml(T[c.labelKey]) + "</button>"
    ).join("") + "</div>";
  }

  function renderAdminPicks() {
    const pick = state.adminPick;
    renderThickPanel("new-company-thicks", GLASS_THICK_PRESETS, pick.companyThicks, "new-company-thick", "company");
    renderColorPanel("new-company-colors", GLASS_COLORS, pick.companyColors);
    renderThickPanel("new-alu-thicks", ALU_THICK_PRESETS, pick.aluThicks, "new-alu-thick", "alu");
    renderColorPanel("new-alu-colors", ALU_COLORS, pick.aluColors);
    if ($("company-thick-toggle")) $("company-thick-toggle").textContent = mselLabel(pick.companyThicks.map((mm) => mm + T.mm));
    if ($("company-color-toggle")) $("company-color-toggle").textContent = mselLabel(pick.companyColors.map((id) => colorLabel(id)));
    if ($("alu-thick-toggle")) $("alu-thick-toggle").textContent = mselLabel(pick.aluThicks.map((mm) => mm + T.mm));
    if ($("alu-color-toggle")) $("alu-color-toggle").textContent = mselLabel(pick.aluColors.map((id) => aluColorLabel(id)));
  }

  function bindAdminPicks() {
    function bindPanel(wrapId, kind, field) {
      const wrap = $(wrapId);
      if (!wrap || wrap.dataset.pickBound) return;
      wrap.dataset.pickBound = "1";
      wrap.addEventListener("click", (e) => {
        const addMm = e.target.closest(".msel-add-mm");
        if (addMm) {
          addThickPick(addMm.dataset.thickKind || kind);
          return;
        }
        const btn = e.target.closest(".msel-opt");
        if (!btn) return;
        if (field === "thick") togglePick(state.adminPick[kind + "Thicks"], btn.dataset.mm, true);
        else togglePick(state.adminPick[kind + "Colors"], btn.dataset.color, false);
        renderAdminPicks();
      });
      wrap.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" || !e.target.closest(".msel-custom input")) return;
        e.preventDefault();
        addThickPick(kind);
      });
    }
    bindPanel("new-company-thicks", "company", "thick");
    bindPanel("new-company-colors", "company", "color");
    bindPanel("new-alu-thicks", "alu", "thick");
    bindPanel("new-alu-colors", "alu", "color");
    document.addEventListener("click", (e) => {
      const toggle = e.target.closest(".msel-toggle");
      if (toggle) {
        const box = toggle.closest(".msel");
        document.querySelectorAll(".msel.open").forEach((el) => {
          if (el !== box) el.classList.remove("open");
        });
        if (box) {
          box.classList.toggle("open");
          box.classList.remove("drop-up");
          if (box.classList.contains("open")) {
            const panel = box.querySelector(".msel-panel");
            if (panel) {
              const r = panel.getBoundingClientRect();
              if (r.bottom > window.innerHeight - 16) box.classList.add("drop-up");
            }
          }
        }
        return;
      }
      if (!e.target.closest(".msel")) {
        document.querySelectorAll(".msel.open").forEach((el) => el.classList.remove("open"));
      }
    });
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
    flashNote("", false);
  }

  function flashNote(text, isErr) {
    const el = $("save-flash");
    if (!el) return;
    if (!el.dataset.okText) el.dataset.okText = el.textContent;
    el.textContent = text || el.dataset.okText;
    el.classList.toggle("is-err", !!isErr);
    el.classList.add("show");
    clearTimeout(el._hide);
    el._hide = setTimeout(() => el.classList.remove("show", "is-err"), isErr ? 2200 : 1200);
  }

  function cleanNumberValue(raw) {
    let v = String(raw || "").replace(/[^0-9.]/g, "");
    const dot = v.indexOf(".");
    if (dot >= 0) v = v.slice(0, dot + 1) + v.slice(dot + 1).replace(/\./g, "");
    return v;
  }

  function readNonNeg(el) {
    if (!el) return NaN;
    const n = parseFloat(el.value);
    return Number.isFinite(n) && n >= 0 ? n : NaN;
  }

  function cleanTextValue(raw) {
    return String(raw || "").replace(/\s+/g, " ").trim();
  }

  function markInvalid(el, on) {
    if (el) el.classList.toggle("is-invalid", !!on);
  }

  function bindFieldGuards() {
    document.addEventListener("keydown", (e) => {
      const el = e.target;
      if (!el || el.tagName !== "INPUT") return;
      if (el.type === "number" && (e.key === "e" || e.key === "E" || e.key === "+" || e.key === "-")) e.preventDefault();
    });
    document.addEventListener("input", (e) => {
      const el = e.target;
      if (!el || el.tagName !== "INPUT") return;
      if (el.type === "number") {
        const next = cleanNumberValue(el.value);
        if (el.value !== next) el.value = next;
        markInvalid(el, el.value !== "" && Number.isNaN(readNonNeg(el)));
        return;
      }
      if (el.id === "quote-phone" || el.id === "new-staff-pin" || el.id === "owner-pin") {
        const next = el.value.replace(/\D/g, "");
        if (el.value !== next) el.value = next;
      }
    });
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
      heightFt: inputSizeFt("h"),
      widthFt: inputSizeFt("w")
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
      updateLivePrice();
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
    updateLivePrice();
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
    if (!section) return;
    const hasKind = !!state.selectedKind;
    const isDoor = state.selectedKind === "door";
    const list = isDoor ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    section.classList.remove("hidden");
    section.classList.toggle("is-locked", !hasKind);
    $("types-heading").textContent = !hasKind ? T.dhoron : (isDoor ? T.doorTypes : T.winTypes);
    $("type-list").classList.toggle("doors", isDoor);
    $("type-list").innerHTML = list.map((t) =>
      '<button type="button" class="type-card' + (t.id === state.selectedType ? " active" : "") + '" data-type="' + t.id + '"' + (hasKind ? "" : " disabled") + ">" +
        '<img src="' + t.image + '" alt="' + escapeHtml(t.label) + '">' +
        '<span class="name">' + escapeHtml(t.label) + "</span>" +
        '<span class="sub">' + escapeHtml(t.sub) + "</span>" +
      "</button>"
    ).join("");
  }

  function normalizeColorId(id) {
    const s = String(id || "").trim().toLowerCase();
    return GLASS_COLORS.some((c) => c.id === s) ? s : "clear";
  }

  function normalizeCompanies(list) {
    return expandNamedCombos(list, normalizeColorId, 5).filter((c) => c.name);
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

  function rateSpan(rows) {
    const rates = (rows || []).map((x) => Number(x.rate)).filter((n) => Number.isFinite(n));
    if (!rates.length) return "";
    const min = Math.min.apply(null, rates);
    const max = Math.max.apply(null, rates);
    const text = min === max ? T.taka + min + T.perSq : T.taka + min + "\u2013" + max + T.perSq;
    return " (" + text + ")";
  }

  function colorPickHtml(c, active, rate, dataAttr) {
    const price = rate != null && rate !== "" && Number.isFinite(Number(rate)) ? T.taka + Number(rate) + T.perSq : "";
    return '<button type="button" class="color-pick' + (active ? " active" : "") + '" ' + dataAttr + ">" +
      '<span class="color-swatch" style="background:linear-gradient(135deg,' + c.light + "," + c.mid + ')"></span>' +
      '<span class="color-caption">' + escapeHtml(T[c.labelKey]) + "</span>" +
      (price ? '<span class="color-price">' + escapeHtml(price) + "</span>" : "") +
      "</button>";
  }

  function exactGlassCombo(name, thick, color) {
    return state.companies.find((c) => c.name === name && String(c.thickness) === String(thick) && c.color === color) || null;
  }

  function exactAluCombo(name, thick, color) {
    return state.aluminium.find((a) => a.name === name && String(a.thickness) === String(thick) && a.color === color) || null;
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

  function renderColorGrid() {
    const grid = $("color-grid");
    if (!grid) return;
    const name = selectedCompanyName();
    const thick = selectedGlassThick();
    const available = colorsForCompany(name, thick);
    const colors = GLASS_COLORS.filter((c) => available.indexOf(c.id) >= 0);
    if (!colors.length) {
      grid.innerHTML = "";
      return;
    }
    grid.innerHTML = colors.map((c) => {
      const row = exactGlassCombo(name, thick, c.id);
      return colorPickHtml(c, c.id === state.glassColor, row ? row.rate : "", 'data-color="' + c.id + '"');
    }).join("");
  }

  function lockBox(el, locked) {
    if (!el) return;
    el.classList.toggle("is-locked", !!locked);
    const tag = (el.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "button") el.disabled = !!locked;
    el.querySelectorAll("input, select, button").forEach((node) => {
      node.disabled = !!locked;
    });
  }

  function syncCalcDetails() {
    const wrap = $("calc-details");
    if (!wrap) return;
    wrap.classList.remove("hidden", "is-locked");
    wrap.inert = false;
    const hasType = !!(state.selectedKind && state.selectedType);
    const qty = readNonNeg($("in-qty"));
    const hasQty = hasType && Number.isFinite(qty) && qty >= 1 && qty <= 99;
    const heightFt = inputSizeFt("h");
    const widthFt = inputSizeFt("w");
    const hasSize = hasQty && heightFt > 0 && widthFt > 0 && heightFt <= 40 && widthFt <= 40;
    const qtyBox = $("in-qty") && $("in-qty").closest(".field");
    const sizeBox = wrap.querySelector(".size-row");
    lockBox(qtyBox, !hasType);
    lockBox(sizeBox, !hasQty);
    let afterSize = false;
    [...wrap.children].forEach((child) => {
      if (child === qtyBox) return;
      if (child.classList.contains("size-row")) {
        afterSize = true;
        return;
      }
      if (!afterSize) return;
      lockBox(child, !hasSize);
    });
  }

  function setSelectedKind(kind) {
    state.selectedKind = kind;
    state.selectedType = null;
    renderKindPicker();
    renderTypePicker();
    syncCalcDetails();
    renderLivePreview(true);
  }

  function setSelectedType(id) {
    state.selectedType = id;
    renderTypePicker();
    syncCalcDetails();
    renderLivePreview(true);
  }

  function renderCompanySelect() {
    const el = $("sel-company");
    if (!el) return;
    const names = companyNames();
    const cur = el.value;
    el.innerHTML = names.map((n) => {
      const exact = exactGlassCombo(n, selectedGlassThick(), state.glassColor);
      const rows = exact ? [exact] : companyRows({ name: n });
      return '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + rateSpan(rows) + "</option>";
    }).join("");
    if (cur && names.indexOf(cur) >= 0) el.value = cur;
    else if (names.length) el.value = names[0];
    renderGlassThickSelect();
  }

  function renderLockSelect() {
    $("sel-lock").innerHTML = `<option value="-1">${T.noLock}</option>` +
      state.locks.map((l, i) =>
        `<option value="${i}">${escapeHtml(l.name)} (${T.taka}${l.rate})</option>`
      ).join("");
  }

  function renderGlassThickSelect() {
    const el = $("sel-glass-thick");
    if (!el) return;
    const name = selectedCompanyName();
    const thicks = uniqueCompany("thickness", { name: name });
    const cur = pickValid(el.value, thicks);
    el.innerHTML = thicks.map((mm) => {
      const exact = exactGlassCombo(name, mm, state.glassColor);
      const rows = exact ? [exact] : companyRows({ name: name, thick: mm });
      return '<option value="' + mm + '">' + mm + " " + T.mm + rateSpan(rows) + "</option>";
    }).join("");
    if (cur !== "") el.value = String(cur);
    else if (thicks.length) el.value = String(thicks[0]);
    syncGlassColorToCompany();
    renderColorGrid();
  }

  function onGlassCompanyChange() {
    renderGlassThickSelect();
    renderLivePreview(true);
  }

  function onGlassThickChange() {
    syncGlassColorToCompany();
    renderCompanySelect();
    renderLivePreview(true);
  }

  function onGlassColorChange(id) {
    const allowed = colorsForCompany(selectedCompanyName(), selectedGlassThick());
    if (allowed.indexOf(id) < 0) return;
    state.glassColor = id;
    renderCompanySelect();
    renderLivePreview(true);
  }

  function renderAluCompanySelect() {
    const el = $("sel-alu-company");
    if (!el) return;
    const names = uniqueAlu("name", {});
    const cur = pickValid(el.value, names);
    el.innerHTML = names.map((n) => {
      const exact = exactAluCombo(n, selectedAluThick(), state.aluColor);
      const rows = exact ? [exact] : aluRows({ name: n });
      return '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + rateSpan(rows) + "</option>";
    }).join("");
    if (cur) el.value = cur;
    else if (names.length) el.value = names[0];
    renderAluThickSelect();
  }

  function renderAluThickSelect() {
    const el = $("sel-alu-thick");
    if (!el) return;
    const name = selectedAluName();
    const thicks = uniqueAlu("thickness", { name: name });
    const cur = pickValid(el.value, thicks);
    el.innerHTML = thicks.map((mm) => {
      const exact = exactAluCombo(name, mm, state.aluColor);
      const rows = exact ? [exact] : aluRows({ name: name, thick: mm });
      return '<option value="' + mm + '">' + mm + " " + T.mm + rateSpan(rows) + "</option>";
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
    renderAluCompanySelect();
    renderLivePreview(true);
  }

  function renderAluColorGrid() {
    const grid = $("alu-color-grid");
    if (!grid) return;
    const name = selectedAluName();
    const thick = selectedAluThick();
    const available = uniqueAlu("color", { name: name, thick: thick });
    const colors = ALU_COLORS.filter((c) => available.indexOf(c.id) >= 0);
    if (!colors.length) {
      grid.innerHTML = "";
      return;
    }
    if (available.indexOf(state.aluColor) < 0) state.aluColor = colors[0].id;
    grid.innerHTML = colors.map((c) => {
      const row = exactAluCombo(name, thick, c.id);
      return colorPickHtml(c, c.id === state.aluColor, row ? row.rate : "", 'data-alu-color="' + c.id + '"');
    }).join("");
  }

  function renderAluList() {
    renderRateList("alu-list", state.aluminium, "alu");
  }

  function colorOptionList(palette, selected) {
    return palette.map(function (c) {
      return '<option value="' + c.id + '"' + (c.id === selected ? " selected" : "") + ">" + escapeHtml(T[c.labelKey]) + "</option>";
    }).join("");
  }

  function comboHeadHtml(kind) {
    const colorHead = kind === "alu" ? T.aluColor : T.glassColor;
    return '<div class="rate-head"><span></span><span>' + T.aluNamePh + "</span><span>" + T.thickness + "</span><span>" + colorHead + "</span><span>" + T.aluRatePh + "</span><span></span></div>";
  }

  function joinPipe(parts) {
    return parts.join(" | ");
  }

  function groupRateText(rows) {
    const rates = rows.map((x) => Number(x.rate)).filter((n) => !Number.isNaN(n));
    if (!rates.length) return T.taka + "0" + T.perSq;
    const min = Math.min.apply(null, rates);
    const max = Math.max.apply(null, rates);
    if (min === max) return T.taka + min + T.perSq;
    return T.taka + min + "\u2013" + max + T.perSq;
  }

  function comboRowHtml(kind, item, i, groupRows) {
    const rows = groupRows && groupRows.length ? groupRows : [item];
    const editing = state.edit.kind === kind && (state.edit.index === i || state.edit.name === item.name);
    const thicks = uniqueNums(rows.map((x) => x.thickness));
    const colors = uniqueIds(rows.map((x) => kind === "alu" ? normalizeAluColorId(x.color) : normalizeColorId(x.color)));
    const colorText = joinPipe(colors.map((id) => kind === "alu" ? aluColorLabel(id) : colorLabel(id)));
    const thickText = joinPipe(thicks.map((mm) => mm + T.mm));
    const rateText = groupRateText(rows);
    const rateVal = state.edit.rate != null ? state.edit.rate : item.rate;
    const attrs = ' data-index="' + i + '" data-group="' + escapeHtml(item.name) + '"';
    if (editing) {
      return '<div class="rate-row is-combo editing"' + attrs + ">" +
        '<span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>" +
        '<input class="edit-name" type="text" value="' + escapeHtml(item.name) + '">' +
        '<div class="msel" id="msel-edit-thick"><button type="button" class="msel-toggle" id="edit-thick-toggle"></button><div class="msel-panel" id="edit-thicks"></div></div>' +
        '<div class="msel" id="msel-edit-color"><button type="button" class="msel-toggle" id="edit-color-toggle"></button><div class="msel-panel" id="edit-colors"></div></div>' +
        '<input class="edit-rate" type="number" min="0" step="1" value="' + escapeHtml(rateVal) + '">' +
        editSaveCancel(kind, i) + "</div>";
    }
    return '<div class="rate-row is-combo"' + attrs + '><span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>" +
      '<span class="name">' + escapeHtml(item.name) + "</span>" +
      '<span class="col-mm">' + escapeHtml(thickText) + "</span>" +
      '<span class="col-color">' + escapeHtml(colorText) + "</span>" +
      '<span class="price">' + rateText + "</span>" +
      editAndDelete(kind, i) + "</div>";
  }

  function renderEditPicks() {
    if (!$("edit-thicks") || !$("edit-colors")) return;
    const kind = state.edit.kind;
    const presets = kind === "alu" ? ALU_THICK_PRESETS : GLASS_THICK_PRESETS;
    const palette = kind === "alu" ? ALU_COLORS : GLASS_COLORS;
    const thicks = state.edit.thicks || [];
    const colors = state.edit.colors || [];
    renderThickPanel("edit-thicks", presets, thicks, "edit-thick", kind === "alu" ? "alu" : "company");
    renderColorPanel("edit-colors", palette, colors);
    if ($("edit-thick-toggle")) $("edit-thick-toggle").textContent = mselLabel(thicks.map((mm) => mm + T.mm));
    if ($("edit-color-toggle")) $("edit-color-toggle").textContent = mselLabel(colors.map((id) => kind === "alu" ? aluColorLabel(id) : colorLabel(id)));
  }

  function addEditThick() {
    const mm = parseFloat($("edit-thick") && $("edit-thick").value);
    if (Number.isNaN(mm) || mm <= 0) return;
    if (!state.edit.thicks) state.edit.thicks = [];
    if (state.edit.thicks.every((t) => Number(t) !== mm)) state.edit.thicks.push(mm);
    state.edit.thicks.sort((a, b) => a - b);
    if ($("edit-thick")) $("edit-thick").value = "";
    renderEditPicks();
  }

  function bindEditPicks(wrapId) {
    const wrap = $(wrapId);
    if (!wrap || wrap.dataset.editPickBound) return;
    wrap.dataset.editPickBound = "1";
    wrap.addEventListener("click", (e) => {
      if (!e.target.closest(".rate-row.editing")) return;
      const addMm = e.target.closest(".msel-add-mm");
      if (addMm) {
        addEditThick();
        return;
      }
      const btn = e.target.closest(".msel-opt");
      if (!btn) return;
      if (btn.dataset.mm) togglePick(state.edit.thicks, btn.dataset.mm, true);
      else if (btn.dataset.color) togglePick(state.edit.colors, btn.dataset.color, false);
      renderEditPicks();
    });
    wrap.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || !e.target.closest("#edit-thick")) return;
      e.preventDefault();
      addEditThick();
    });
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

  function moveGroup(list, fromName, toName) {
    const groups = groupByName(list);
    const from = groups.findIndex((g) => g.name === fromName);
    const to = groups.findIndex((g) => g.name === toName);
    if (from < 0 || to < 0 || from === to) return false;
    const moved = groups.splice(from, 1)[0];
    groups.splice(to, 0, moved);
    const next = [];
    groups.forEach((g) => g.indices.forEach((i) => next.push(list[i])));
    list.length = 0;
    next.forEach((row) => list.push(row));
    return true;
  }

  function bindGroupSortable(wrapId, getList, onDone) {
    const wrap = $(wrapId);
    if (!wrap || wrap.dataset.groupSortBound) return;
    wrap.dataset.groupSortBound = "1";
    let drag = null;
    function clearMarks() {
      wrap.querySelectorAll(".rate-group").forEach((g) => g.classList.remove("dragging", "drag-over"));
    }
    wrap.addEventListener("pointerdown", (e) => {
      const handle = e.target.closest(".rate-group-head .drag-handle");
      if (!handle) return;
      const group = handle.closest(".rate-group");
      if (!group) return;
      e.preventDefault();
      handle.setPointerCapture(e.pointerId);
      drag = { from: group.getAttribute("data-group") };
      group.classList.add("dragging");
    });
    wrap.addEventListener("pointermove", (e) => {
      if (!drag) return;
      wrap.querySelectorAll(".drag-over").forEach((g) => g.classList.remove("drag-over"));
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const over = el && el.closest && el.closest("#" + wrapId + " .rate-group");
      if (over) over.classList.add("drag-over");
    });
    wrap.addEventListener("pointerup", (e) => {
      if (!drag) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const over = el && el.closest && el.closest("#" + wrapId + " .rate-group");
      const to = over ? over.getAttribute("data-group") : "";
      const from = drag.from;
      drag = null;
      clearMarks();
      if (to && moveGroup(getList(), from, to)) onDone();
    });
    wrap.addEventListener("pointercancel", () => { drag = null; clearMarks(); });
  }

  function bindSortable(wrapId, getList, onDone, byName) {
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
      drag = { from: byName ? row.getAttribute("data-group") : Number(row.dataset.index) };
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
      const from = drag.from;
      const to = over ? (byName ? over.getAttribute("data-group") : Number(over.dataset.index)) : (byName ? "" : -1);
      drag = null;
      clearMarks();
      const ok = byName ? moveGroup(getList(), from, to) : moveItem(getList(), from, to);
      if (ok) onDone();
    });
    wrap.addEventListener("pointercancel", () => {
      drag = null;
      clearMarks();
    });
  }

  const LOCK_STYLES = [
    { id: "sliding", labelKey: "sliding" },
    { id: "casement", labelKey: "caseLock" },
    { id: "deadbolt", labelKey: "deadbolt" },
    { id: "knob", labelKey: "knob" },
    { id: "generic", labelKey: "generic" }
  ];

  function rateRowOpen(i, extra) {
    return '<div class="rate-row' + (extra ? " " + extra : "") + '" data-index="' + i + '"><span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>";
  }

  function optionList(items, selected) {
    return items.map(function (c) {
      return '<option value="' + c.id + '"' + (c.id === selected ? " selected" : "") + '>' + escapeHtml(T[c.labelKey]) + "</option>";
    }).join("");
  }

  function editSaveCancel(kind, i) {
    return '<span class="rate-actions"><button type="button" class="icon-btn secondary compact" data-action="save-' + kind + '" data-index="' + i + '">' + ico("save") + "<span>" + T.updateBtn + "</span></button>" +
      '<button type="button" class="icon-btn ghost compact" data-action="cancel-edit">' + T.cancelBtn + "</button></span>";
  }

  function editAndDelete(kind, i) {
    return '<span class="rate-actions"><button type="button" class="icon-btn ghost compact" data-action="edit-' + kind + '" data-index="' + i + '">' + ico("pencil") + "<span>" + T.editBtn + "</span></button>" +
      '<button type="button" class="danger-ghost icon-btn" data-action="remove-' + kind + '" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></span>";
  }

  function cancelEdit(silent) {
    const was = state.edit.kind;
    state.edit = { kind: "", index: -1, name: "", rate: null, thicks: [], colors: [] };
    if (was === "company") {
      if ($("new-company-name")) $("new-company-name").value = "";
      if ($("new-company-rate")) $("new-company-rate").value = "";
      if ($("new-company-thick")) $("new-company-thick").value = "";
      state.adminPick.companyThicks = [5];
      state.adminPick.companyColors = ["clear"];
    }
    if (was === "alu") {
      if ($("new-alu-name")) $("new-alu-name").value = "";
      if ($("new-alu-rate")) $("new-alu-rate").value = "";
      if ($("new-alu-thick")) $("new-alu-thick").value = "";
      state.adminPick.aluThicks = [1];
      state.adminPick.aluColors = ["silver"];
    }
    if (was === "company" || was === "alu") renderAdminPicks();
    setAddLabels();
    if (!silent) {
      renderRateList("company-list", state.companies, "company");
      renderAluList();
      renderRateList("lock-list", state.locks, "lock");
    }
  }

  function startEdit(kind, index) {
    if (!isOwner()) return;
    if (state.edit.kind === kind && state.edit.index === index) {
      cancelEdit();
      return;
    }
    const list = kind === "company" ? state.companies : kind === "alu" ? state.aluminium : state.locks;
    const item = list[index];
    if (!item) return;
    const siblings = (kind === "company" || kind === "alu") ? list.filter((x) => x.name === item.name) : [];
    state.edit = {
      kind: kind,
      index: index,
      name: item.name || "",
      rate: item.rate,
      thicks: uniqueNums(siblings.map((x) => x.thickness)),
      colors: uniqueIds(siblings.map((x) => kind === "alu" ? normalizeAluColorId(x.color) : normalizeColorId(x.color)))
    };
    if (kind === "company") renderRateList("company-list", state.companies, "company");
    else if (kind === "alu") renderAluList();
    else renderRateList("lock-list", state.locks, "lock");
  }

  function rowInput(row, cls) {
    const el = row && row.querySelector("." + cls);
    return el ? el.value : "";
  }

  function saveEdited(kind, index) {
    if (!isOwner()) return;
    const wrapId = kind === "company" ? "company-list" : kind === "alu" ? "alu-list" : "lock-list";
    const wrap = $(wrapId);
    const row = wrap && wrap.querySelector('.rate-row[data-index="' + index + '"]');
    if (!row) return;
    const nameEl = row.querySelector(".edit-name");
    const rateEl = row.querySelector(".edit-rate");
    const name = cleanTextValue(nameEl && nameEl.value);
    const rate = parseFloat(rateEl && rateEl.value);
    markInvalid(nameEl, !name);
    markInvalid(rateEl, !Number.isFinite(rate) || rate < 0);
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (!Number.isFinite(rate) || rate < 0) { flashNote(T.errNeedNumber, true); return; }
    if (kind === "lock") {
      const style = rowInput(row, "edit-style") || "generic";
      state.locks[index] = { name: name, rate: rate, style: style };
      state.edit = { kind: "", index: -1, name: "", rate: null, thicks: [], colors: [] };
      renderRateList("lock-list", state.locks, "lock");
      renderLockSelect();
      renderLivePreview(true);
      persistOwnerData();
      return;
    }
    const list = kind === "company" ? state.companies : state.aluminium;
    const thicks = (state.edit.thicks || []).slice();
    const extra = parseFloat($("edit-thick") && $("edit-thick").value);
    if (!Number.isNaN(extra) && extra > 0 && thicks.every((t) => Number(t) !== extra)) thicks.push(extra);
    const colors = (state.edit.colors || []).map((id) => kind === "alu" ? normalizeAluColorId(id) : normalizeColorId(id));
    if (!thicks.length || !colors.length) { flashNote(T.errNeedPick, true); return; }
    replaceCombos(list, state.edit.name, name, thicks, colors, rate, state.edit.rate);
    state.edit = { kind: "", index: -1, name: "", rate: null, thicks: [], colors: [] };
    if (kind === "company") {
      renderRateList("company-list", state.companies, "company");
      renderCompanySelect();
    } else {
      refreshSheetSelects();
    }
    persistOwnerData();
  }

  function handleRateListClick(kind, e) {
    if (!isOwner()) return;
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const index = Number(btn.dataset.index);
    if (action === "edit-" + kind) startEdit(kind, index);
    else if (action === "save-" + kind) saveEdited(kind, index);
    else if (action === "cancel-edit") cancelEdit();
    else if (action === "remove-" + kind) {
      if (state.edit.kind === kind) state.edit = { kind: "", index: -1, name: "", rate: null, thicks: [], colors: [] };
      if (kind === "company") removeCompany(index);
      else if (kind === "alu") removeAluminium(index);
      else if (kind === "lock") removeLock(index);
    }
  }

  function refreshSheetSelects() {
    renderCompanySelect();
    renderLockSelect();
    renderGlassThickSelect();
    renderAluCompanySelect();
    renderAluList();
    fillChargesInputs();
    syncCalcDetails();
  }

  function renderRateList(wrapId, items, kind) {
    const wrap = $(wrapId);
    if (!wrap) return;
    if (!isOwner()) {
      wrap.innerHTML = "";
      return;
    }
    if (!items.length) {
      wrap.innerHTML = `<div class="empty-note">${T.emptyRates}</div>`;
      return;
    }
    const unit = kind === "company" ? T.perSq : "";
    if (kind === "lock") {
      wrap.innerHTML = items.map((item, i) => {
        const editing = state.edit.kind === kind && state.edit.index === i;
        if (editing) {
          return rateRowOpen(i, "editing") +
            '<input class="edit-name" type="text" value="' + escapeHtml(item.name) + '">' +
            '<select class="edit-style">' + optionList(LOCK_STYLES, item.style) + "</select>" +
            '<input class="edit-rate" type="number" min="0" step="1" value="' + escapeHtml(item.rate) + '">' +
            editSaveCancel(kind, i) + "</div>";
        }
        return rateRowOpen(i) + '<span class="name">' + escapeHtml(item.name) + '</span><span class="price">' + T.taka + item.rate + unit + "</span>" + editAndDelete(kind, i) + "</div>";
      }).join("");
      return;
    }
    wrap.innerHTML = comboHeadHtml(kind) + groupByName(items).map((g) => {
      const i = g.indices[0];
      return comboRowHtml(kind, items[i], i, g.indices.map((idx) => items[idx]));
    }).join("");
    if (state.edit.kind === kind) renderEditPicks();
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

  function findCompanyForItem(item) {
    return state.companies.find((c) => c.name === item.companyName && String(c.thickness) === String(item.thickness) && c.color === item.glassColor)
      || state.companies.find((c) => c.name === item.companyName && String(c.thickness) === String(item.thickness))
      || state.companies.find((c) => c.name === item.companyName)
      || null;
  }

  function findAluForItem(item) {
    return state.aluminium.find((a) => a.name === item.aluName && String(a.thickness) === String(item.aluThick) && a.color === item.aluColor)
      || state.aluminium.find((a) => a.name === item.aluName && String(a.thickness) === String(item.aluThick))
      || state.aluminium.find((a) => a.name === item.aluName)
      || null;
  }

  function priceParts(item, company, alu, lock) {
    const qty = Math.max(1, Number(item.qty) || 1);
    const heightFt = Number(item.heightFt) || 0;
    const widthFt = Number(item.widthFt) || 0;
    const totalSqft = heightFt * widthFt * qty;
    const companyRate = company ? Number(company.rate) || 0 : Number(item.companyRate) || 0;
    const frameRate = alu ? Number(alu.rate) || 0 : Number(item.frameRate) || 0;
    const lockRate = lock ? Number(lock.rate) || 0 : Number(item.lockRate) || 0;
    const glassCost = totalSqft * companyRate;
    const frameCost = totalSqft * frameRate;
    const lockCost = lockRate * qty;
    const extra = (Number(state.charges.extra) || 0) * qty;
    const netCost = item.hasNet ? (Number(state.charges.net) || 0) * qty : 0;
    return {
      companyRate: companyRate,
      frameRate: frameRate,
      lockRate: lockRate,
      totalSqft: totalSqft,
      glassCost: glassCost,
      frameCost: frameCost,
      lockCost: lockCost,
      extra: extra,
      netCost: netCost,
      subtotal: glassCost + frameCost + lockCost + netCost + extra
    };
  }

  function repriceItems() {
    if (!state.items.length) return;
    state.items.forEach((item) => {
      const company = findCompanyForItem(item);
      const alu = findAluForItem(item);
      const lock = item.lockName ? state.locks.find((l) => l.name === item.lockName) : null;
      Object.assign(item, priceParts(item, company, alu, lock));
    });
    storeSet(KEYS.items, state.items);
  }

  function updateLivePrice() {
    const box = $("live-price");
    if (!box) return;
    if (!state.selectedKind || !state.selectedType) {
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }
    const heightFt = inputSizeFt("h");
    const widthFt = inputSizeFt("w");
    const qtyRaw = readNonNeg($("in-qty"));
    const qty = Number.isFinite(qtyRaw) && qtyRaw >= 1 ? Math.min(99, Math.round(qtyRaw)) : 1;
    const thickness = parseFloat($("sel-glass-thick") && $("sel-glass-thick").value) || 0;
    const company = exactGlassCombo(selectedCompanyName(), thickness, normalizeColorId(state.glassColor));
    const lockIdx = parseInt($("sel-lock") && $("sel-lock").value, 10);
    const lock = lockIdx >= 0 && state.locks[lockIdx] ? state.locks[lockIdx] : null;
    const alu = exactAluCombo(selectedAluName(), selectedAluThick(), normalizeAluColorId(state.aluColor));
    const sizeOk = heightFt > 0 && widthFt > 0 && heightFt <= 40 && widthFt <= 40;
    if (!sizeOk || !company || !alu) {
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }
    const priced = priceParts({
      heightFt: heightFt,
      widthFt: widthFt,
      qty: qty,
      hasNet: state.hasNet,
      companyRate: company.rate,
      frameRate: alu.rate,
      lockRate: lock ? lock.rate : 0
    }, company, alu, lock);
    box.classList.remove("hidden");
    box.innerHTML = '<div class="live-price-title">' + T.livePrice + "</div>" + itemCostHtml({
      glassCost: priced.glassCost,
      frameCost: priced.frameCost,
      lockCost: priced.lockCost,
      netCost: priced.netCost,
      extra: priced.extra,
      totalSqft: priced.totalSqft,
      subtotal: priced.subtotal,
      lockName: lock ? lock.name : null,
      hasNet: state.hasNet
    });
  }

  function itemCostHtml(item) {
    const rows = [
      [T.costGlass, money(item.glassCost || 0)],
      [T.costFrame, money(item.frameCost || 0)]
    ];
    if (item.lockName) rows.push([T.costLock, money(item.lockCost || 0)]);
    if (item.hasNet) rows.push([T.costNet, money(item.netCost || 0)]);
    if (Number(item.extra) > 0) rows.push([T.costExtra, money(item.extra)]);
    return '<div class="item-costs">' + rows.map((r) =>
      '<div class="item-cost"><span>' + r[0] + "</span><span>" + r[1] + "</span></div>"
    ).join("") +
      '<div class="item-subtotal">' + T.costTotal + " (" + fmt(item.totalSqft) + T.sqLabel + "): " + money(item.subtotal || 0) + "</div></div>";
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
    const listCard = $("list-card");
    if (!state.items.length) {
      listEl.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("hidden");
      if (listCard) listCard.classList.add("hidden");
      summaryCard.classList.add("hidden");
      updateQuoteCard();
      return;
    }
    if (emptyEl) emptyEl.classList.add("hidden");
    if (listCard) listCard.classList.remove("hidden");
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
              <span class="item-actions">
              ${isStaff() ? '<button type="button" class="secondary icon-btn compact cut-toggle" data-action="toggle-cut" data-index="' + i + '">' + cutToggleLabel(false) + '</button>' : ""}
              <button type="button" class="danger-ghost icon-btn compact" data-action="remove-item" data-index="${i}">${ico("trash")}<span>${T.muchun}</span></button>
              </span>
            </div>
            <div class="item-details">
              ${T.map}: ${ftInLabel(item.heightFt)} x ${ftInLabel(item.widthFt)} · ${escapeHtml(type.sub)}<br>
              ${T.kach}: ${escapeHtml(item.companyName)}${item.thickness ? " · " + item.thickness + T.mm : ""} (${T.taka}${item.companyRate || 0}${T.perSq})<br>
              ${T.aluShort}: ${escapeHtml(item.aluName || "-")}${item.aluThick ? " · " + item.aluThick + T.mm : ""}${item.aluColor ? " · " + escapeHtml(aluColorLabel(item.aluColor)) : ""} (${T.taka}${item.frameRate || 0}${T.perSq})<br>
              ${escapeHtml(extras)}
            </div>
            ${isStaff() ? '<div id="cutwrap-' + i + '" class="hidden">' + renderCutTable(item) + '</div>' : ""}
                        ${itemCostHtml(item)}
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
    const bar = $("cutting-quote-bar");
    if (!isStaff()) {
      if (wrap) wrap.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("hidden");
      if (actionsEl) actionsEl.classList.add("hidden");
      if (bar) bar.classList.add("hidden");
      return;
    }
    const items = state.cutQuote && state.cutQuote.items && state.cutQuote.items.length
      ? state.cutQuote.items
      : state.items;
    if (bar) {
      const on = !!(state.cutQuote && state.cutQuote.items && state.cutQuote.items.length);
      bar.classList.toggle("hidden", !on);
      if (on) {
        if ($("cutting-quote-name")) $("cutting-quote-name").textContent = state.cutQuote.name || "";
        if ($("cutting-quote-meta")) {
          $("cutting-quote-meta").textContent = [state.cutQuote.phone, state.cutQuote.id].filter(Boolean).join(" · ");
        }
        if ($("btn-clear-cut-quote")) $("btn-clear-cut-quote").textContent = T.quoteCutClear;
      }
    }
    if (!items.length) {
      wrap.innerHTML = "";
      emptyEl.classList.remove("hidden");
      actionsEl.classList.add("hidden");
      return;
    }
    emptyEl.classList.add("hidden");
    actionsEl.classList.remove("hidden");
    wrap.innerHTML = items.map((item, i) => {
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
    if (!el) return;
    el.textContent = message;
    el.style.display = "block";
  }

  function hideError() {
    const el = $("err-msg");
    if (el) el.style.display = "none";
  }

  function showStaffErr(message) {
    const el = $("staff-err");
    if (!el) return;
    el.textContent = message || "";
    el.style.display = message ? "block" : "none";
  }

  function addItem() {
    const hFtEl = $("in-h-ft");
    const wFtEl = $("in-w-ft");
    const qtyEl = $("in-qty");
    const heightFt = inputSizeFt("h");
    const widthFt = inputSizeFt("w");
    const qtyRaw = readNonNeg(qtyEl);
    const thickness = parseFloat($("sel-glass-thick") && $("sel-glass-thick").value) || 0;
    const companyName = selectedCompanyName();
    const glassColor = normalizeColorId(state.glassColor);
    const company = exactGlassCombo(companyName, thickness, glassColor);
    const lockIdx = parseInt($("sel-lock") && $("sel-lock").value, 10);
    const lock = lockIdx >= 0 && state.locks[lockIdx] ? state.locks[lockIdx] : null;
    const aluName = selectedAluName();
    const aluThick = selectedAluThick();
    const aluColor = normalizeAluColorId(state.aluColor);
    const alu = exactAluCombo(aluName, aluThick, aluColor);

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
    const qtyOk = Number.isFinite(qtyRaw) && qtyRaw >= 1 && qtyRaw <= 99;
    const sizeOk = heightFt > 0 && widthFt > 0 && heightFt <= 40 && widthFt <= 40;
    markInvalid(qtyEl, !qtyOk);
    markInvalid(hFtEl, !sizeOk);
    markInvalid(wFtEl, !sizeOk);
    if (!qtyOk) {
      showError(T.errNeedNumber);
      return;
    }
    if (!sizeOk) {
      showError(T.errSize);
      return;
    }
    hideError();
    const qty = Math.max(1, Math.round(qtyRaw));

    const priced = priceParts({
      heightFt: heightFt,
      widthFt: widthFt,
      qty: qty,
      hasNet: state.hasNet,
      companyRate: company.rate,
      frameRate: alu.rate,
      lockRate: lock ? lock.rate : 0
    }, company, alu, lock);

    state.items.push({
      heightFt,
      widthFt,
      qty,
      thickness,
      aluName: alu.name,
      aluThick: alu.thickness,
      aluColor: aluColor,
      companyName: company.name,
      companyRate: priced.companyRate,
      glassColor: glassColor,
      lockName: lock ? lock.name : null,
      lockRate: priced.lockRate,
      lockStyle: lockStyleOf(lock),
      hasNet: state.hasNet,
      netCost: priced.netCost,
      frameRate: priced.frameRate,
      extra: priced.extra,
      totalSqft: priced.totalSqft,
      glassCost: priced.glassCost,
      lockCost: priced.lockCost,
      frameCost: priced.frameCost,
      subtotal: priced.subtotal,
      winType: state.selectedType
    });

    storeSet(KEYS.items, state.items);
    renderItems();
    clearInputs();
    renderLivePreview(true);
  }

  function clearInputs() {
    ["in-h-ft", "in-h-in", "in-h-mm", "in-w-ft", "in-w-in", "in-w-mm"].forEach((id) => {
      if ($(id)) $(id).value = "";
    });
    if ($("in-qty")) $("in-qty").value = "";
    syncCalcDetails();
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
    syncCalcDetails();
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
    if (!isOwner()) return;
    const nameEl = $("new-company-name");
    const rateEl = $("new-company-rate");
    const name = cleanTextValue(nameEl && nameEl.value);
    const rate = readNonNeg(rateEl);
    const thicks = selectedThicks("company");
    const colors = state.adminPick.companyColors.map(normalizeColorId);
    markInvalid(nameEl, !name);
    markInvalid(rateEl, Number.isNaN(rate));
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (Number.isNaN(rate)) { flashNote(T.errNeedNumber, true); return; }
    if (!thicks.length || !colors.length) { flashNote(T.errNeedPick, true); return; }
    if (nameEl) nameEl.value = name;
    thicks.forEach((thickness) => {
      colors.forEach((color) => upsertCombo(state.companies, { name: name, thickness: thickness, rate: rate, color: color }));
    });
    $("new-company-name").value = "";
    if ($("new-company-thick")) $("new-company-thick").value = "";
    $("new-company-rate").value = "";
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    persistOwnerData();
  }

  function removeNamedCombos(list, index) {
    const item = list[index];
    if (!item) return;
    const name = item.name;
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].name === name) list.splice(i, 1);
    }
  }

  function removeCompany(index) {
    if (!isOwner()) return;
    removeNamedCombos(state.companies, index);
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    persistOwnerData();
  }

  function addAluminium() {
    if (!isOwner()) return;
    const nameEl = $("new-alu-name");
    const rateEl = $("new-alu-rate");
    const name = cleanTextValue(nameEl && nameEl.value);
    const rate = readNonNeg(rateEl);
    const thicks = selectedThicks("alu");
    const colors = state.adminPick.aluColors.map(normalizeAluColorId);
    markInvalid(nameEl, !name);
    markInvalid(rateEl, Number.isNaN(rate));
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (Number.isNaN(rate)) { flashNote(T.errNeedNumber, true); return; }
    if (!thicks.length || !colors.length) { flashNote(T.errNeedPick, true); return; }
    if (nameEl) nameEl.value = name;
    thicks.forEach((thickness) => {
      colors.forEach((color) => upsertCombo(state.aluminium, { name: name, thickness: thickness, rate: rate, color: color }));
    });
    $("new-alu-name").value = "";
    if ($("new-alu-thick")) $("new-alu-thick").value = "";
    $("new-alu-rate").value = "";
    refreshSheetSelects();
    persistOwnerData();
  }

  function removeAluminium(index) {
    if (!isOwner()) return;
    removeNamedCombos(state.aluminium, index);
    refreshSheetSelects();
    persistOwnerData();
  }

  function saveCharges() {
    if (!isOwner()) return;
    const netEl = $("in-charge-net");
    const extraEl = $("in-charge-extra");
    const net = readNonNeg(netEl);
    const extra = readNonNeg(extraEl);
    markInvalid(netEl, Number.isNaN(net));
    markInvalid(extraEl, Number.isNaN(extra));
    if (Number.isNaN(net) || Number.isNaN(extra)) { flashNote(T.errNeedNumber, true); return; }
    state.charges = { net, extra };
    persistOwnerData();
    flashSaved();
  }

  function addLock() {
    if (!isOwner()) return;
    const nameEl = $("new-lock-name");
    const rateEl = $("new-lock-rate");
    const name = cleanTextValue(nameEl && nameEl.value);
    const rate = readNonNeg(rateEl);
    const style = $("new-lock-style") ? $("new-lock-style").value : "generic";
    markInvalid(nameEl, !name);
    markInvalid(rateEl, Number.isNaN(rate));
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (Number.isNaN(rate)) { flashNote(T.errNeedNumber, true); return; }
    if (nameEl) nameEl.value = name;
    state.locks.push({ name, rate, style });
    $("new-lock-name").value = "";
    $("new-lock-rate").value = "";
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    persistOwnerData();
    renderLivePreview(true);
  }

  function removeLock(index) {
    if (!isOwner()) return;
    state.locks.splice(index, 1);
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    persistOwnerData();
    renderLivePreview(true);
  }

  function saveCutParams() {
    if (!isOwner()) return;
    const next = {
      outerHoriz: numVal("in-cp-outerhoriz"),
      side: numVal("in-cp-side"),
      shutterHoriz: numVal("in-cp-shutterhoriz"),
      glassGap: numVal("in-cp-glassgap")
    };
    if (Object.values(next).some((v) => Number.isNaN(v) || v < 0)) { flashNote(T.errNeedNumber, true); return; }
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
    if ($("in-cp-outerhoriz")) $("in-cp-outerhoriz").value = state.cutParams.outerHoriz;
    if ($("in-cp-side")) $("in-cp-side").value = state.cutParams.side;
    if ($("in-cp-shutterhoriz")) $("in-cp-shutterhoriz").value = state.cutParams.shutterHoriz;
    if ($("in-cp-glassgap")) $("in-cp-glassgap").value = state.cutParams.glassGap;
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
    state.quotes = isStaff() && Array.isArray(data.quotes) ? data.quotes : [];
    state.staff = isOwner() && Array.isArray(data.users) ? data.users : [];
    if (data.shop && typeof data.shop === "object" && (data.shop.name || data.shop.slogan || data.shop.logo)) applyShop(data.shop);
    ensureDummyCatalog();
    fillCutInputs();
    repriceItems();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    renderAluList();
    refreshSheetSelects();
    renderStaffList();
    renderQuotes();
    renderHome();
    renderItems();
    updateRoleUi();
    updateCatalogHint();
    saveCatalogCache();
  }

  function catalogCacheKey() {
    return KEYS.catalog;
  }

  function readCatalogCache() {
    try {
      const raw = localStorage.getItem(catalogCacheKey());
      const data = raw ? JSON.parse(raw) : null;
      if (!data || typeof data !== "object") return null;
      if (!Array.isArray(data.companies) && !Array.isArray(data.aluminium) && !Array.isArray(data.locks)) return null;
      return data;
    } catch (_) {
      return null;
    }
  }

  function saveCatalogCache() {
    storeSet(KEYS.catalog, {
      v: 1,
      t: Date.now(),
      companies: state.companies,
      locks: state.locks,
      aluminium: state.aluminium,
      glassThicks: state.glassThicks,
      charges: state.charges,
      shop: state.shop
    });
  }

  function setCatalogSyncing(on) {
    document.documentElement.classList.toggle("is-syncing", !!on);
  }

  function fetchJsonTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        reject(new Error("timeout"));
      }, ms);
      promise.then(function (data) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(data);
      }, function (err) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        reject(err);
      });
    });
  }

  function applyCatalogLists(data, doRender) {
    if (!data || typeof data !== "object") return false;
    const hasLists = Array.isArray(data.companies) || Array.isArray(data.aluminium)
      || Array.isArray(data.glassThicks) || Array.isArray(data.locks);
    if (data.ok === false && !hasLists) return false;
    if (Array.isArray(data.companies)) state.companies = normalizeCompanies(data.companies);
    if (Array.isArray(data.locks)) state.locks = data.locks;
    if (Array.isArray(data.aluminium)) state.aluminium = normalizeAluminium(data.aluminium);
    if (Array.isArray(data.glassThicks)) state.glassThicks = data.glassThicks;
    if (data.charges && typeof data.charges === "object") {
      state.charges = { net: Number(data.charges.net) || 0, extra: Number(data.charges.extra) || 0 };
    }
    if (data.shop && typeof data.shop === "object" && (data.shop.name || data.shop.slogan || data.shop.logo)) applyShop(data.shop);
    ensureDummyCatalog();
    const ok = !!(state.companies.length || state.aluminium.length || state.glassThicks.length || state.locks.length);
    if (ok) saveCatalogCache();
    if (doRender !== false) {
      repriceItems();
      renderItems();
      renderRateList("company-list", state.companies, "company");
      renderRateList("lock-list", state.locks, "lock");
      renderAluList();
      refreshSheetSelects();
      updateCatalogHint();
    }
    return ok;
  }

  function applyCatalog(data) {
    if (isStaff()) return false;
    return applyCatalogLists(data, true);
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
    if (!sheetApiUrl()) {
      ensureDummyCatalog();
      refreshSheetSelects();
      renderRateList("company-list", state.companies, "company");
      renderRateList("lock-list", state.locks, "lock");
      renderAluList();
      updateCatalogHint();
      return;
    }
    const hasCache = !!(state.companies.length || state.aluminium.length || state.locks.length);
    if (hasCache) setCatalogSyncing(true);
    else showLoader(true, T.loading);
    fetchJsonTimeout(fetchCatalogGet(), hasCache ? 10000 : 14000).then(function (data) {
      if (isStaff()) return true;
      if (applyCatalogLists(data, true)) return true;
      throw new Error("catalog");
    }).catch(function () {
      if (hasCache || isStaff()) return;
      return fetchJsonTimeout(sheetRequest({ action: "catalog" }), 12000).then(function (data) {
        if (!isStaff()) applyCatalog(data);
      });
    }).catch(function () {
      updateCatalogHint();
    }).finally(function () {
      if (hasCache) setCatalogSyncing(false);
      else showLoader(false);
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
      rateRowOpen(i) + '<span class="name">' + escapeHtml(u.email) + '</span><span class="role-pill' + (u.role === "owner" ? " is-owner" : "") + '">' + escapeHtml(roleLabel(u.role)) + '</span><span class="rate-actions"><button type="button" class="danger-ghost icon-btn" data-action="remove-staff" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></span></div>"
    ).join("");
  }

  function addStaff() {
    if (!isOwner()) return;
    const email = String($("new-staff-email") && $("new-staff-email").value || "").trim().toLowerCase();
    const pin = String($("new-staff-pin") && $("new-staff-pin").value || "").trim();
    const role = $("new-staff-role") && $("new-staff-role").value === "owner" ? "owner" : "operator";
    if (!ownerEmailOk(email) || !ownerPinOk(pin)) {
      showStaffErr(T.staffBad);
      return;
    }
    showStaffErr("");
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
    if (!next.some((u) => u.role === "owner")) {
      showStaffErr(T.staffNeedOwner);
      return;
    }
    showStaffErr("");
    state.staff = next;
    renderStaffList();
    persistOwnerData();
  }

  function staffForSave() {
    const list = (state.staff || []).map((u) => ({
      email: String(u.email || "").trim().toLowerCase(),
      pin: String(u.pin || "").trim(),
      role: u.role === "owner" ? "owner" : "operator"
    }));
    if (state.ownerEmail && state.ownerPin) {
      const found = list.find((u) => u.email === state.ownerEmail);
      if (!found) list.push({ email: state.ownerEmail, pin: state.ownerPin, role: "owner" });
      else if (!found.pin) found.pin = state.ownerPin;
    }
    return list;
  }

  function persistOwnerData() {
    if (!isOwner() || !state.ownerPin || !state.ownerEmail || !sheetApiUrl()) return;
    showLoader(true, T.working);
    sheetRequest({
      action: "save",
      email: state.ownerEmail,
      pin: state.ownerPin,
      companies: state.companies,
      locks: state.locks,
      aluminium: state.aluminium,
      charges: state.charges,
      cutParams: state.cutParams,
      users: staffForSave(),
      shop: state.shop
    }).then((data) => {
      if (!data || !data.ok) throw new Error("save");
      if (isOwner() && Array.isArray(data.users)) {
        state.staff = data.users;
        renderStaffList();
      }
      flashSaved();
    }).catch(() => {
      const el = $("save-flash");
      if (el) {
        el.textContent = T.ownerSaveFail;
        el.classList.add("show");
        setTimeout(() => el.classList.remove("show"), 1800);
      }
    }).finally(() => showLoader(false));
  }

  function isStaff() {
    return state.role === "owner" || state.role === "operator";
  }

  function isOwner() {
    return state.role === "owner";
  }

  function sessionKey(email) {
    return String(email || "mtg").toLowerCase() + "|mtg-s2";
  }

  function encodePin(pin, email) {
    const raw = String(pin || "");
    const key = sessionKey(email);
    let out = "";
    for (let i = 0; i < raw.length; i++) {
      out += String.fromCharCode(raw.charCodeAt(i) ^ key.charCodeAt(i % key.length) ^ ((i + 11) & 255));
    }
    return btoa(out);
  }

  function decodePin(token, email) {
    try {
      const bin = atob(String(token || ""));
      const key = sessionKey(email);
      let out = "";
      for (let i = 0; i < bin.length; i++) {
        out += String.fromCharCode(bin.charCodeAt(i) ^ key.charCodeAt(i % key.length) ^ ((i + 11) & 255));
      }
      return /^\d{4,8}$/.test(out) ? out : "";
    } catch (_) {
      return "";
    }
  }

  function saveSession(email, pin, role) {
    const e = String(email || "").toLowerCase();
    const p = String(pin || "");
    if (!e || !p) return;
    storeSet(KEYS.session, {
      v: 2,
      e: e,
      r: role === "operator" ? "operator" : "owner",
      k: encodePin(p, e)
    });
  }

  function readSession(raw) {
    if (!raw || typeof raw !== "object") return null;
    if (raw.v === 2 && raw.e && raw.k) {
      const pin = decodePin(raw.k, raw.e);
      if (!pin) return null;
      return { email: String(raw.e).toLowerCase(), pin: pin, role: raw.r === "operator" ? "operator" : "owner" };
    }
    if (raw.email && raw.pin) {
      const email = String(raw.email).toLowerCase();
      const pin = String(raw.pin);
      const role = raw.role === "operator" ? "operator" : "owner";
      if (!ownerPinOk(pin)) return null;
      saveSession(email, pin, role);
      return { email: email, pin: pin, role: role };
    }
    return null;
  }

  function applyLocalSession(saved) {
    if (!saved || !saved.email || !saved.pin) return false;
    state.ownerEmail = saved.email;
    state.ownerPin = saved.pin;
    state.role = saved.role === "operator" ? "operator" : "owner";
    state.ownerUnlocked = true;
    saveSession(saved.email, saved.pin, state.role);
    updateRoleUi();
    return true;
  }

  function clearSession() {
    try { localStorage.removeItem(KEYS.session); } catch (_) { /* ignore */ }
  }

  function clearLoginFields() {
    if ($("owner-pin")) $("owner-pin").value = "";
    if ($("owner-email")) $("owner-email").value = "";
  }

  function applyLoginSuccess(data, email, pin, nextTab) {
    state.ownerEmail = String(email || "").toLowerCase();
    state.ownerPin = String(pin || "");
    state.role = data.role === "operator" ? "operator" : "owner";
    saveSession(state.ownerEmail, state.ownerPin, state.role);
    clearLoginFields();
    applyOwnerData(data);
    setOwnerUnlocked(true);
    $("owner-gate").classList.add("hidden");
    var tab = nextTab || state.pendingOwnerTab || "rates";
    if ((tab === "cutting" || tab === "rates") && !isStaff()) tab = "calc";
    switchTab(tab);
  }

  function restoreSession(saved, nextTab) {
    if (!saved || !saved.email || !saved.pin || !sheetApiUrl()) return Promise.resolve(false);
    const hasCache = !!(state.companies.length || state.aluminium.length);
    if (hasCache) setCatalogSyncing(true);
    else showLoader(true, T.working);
    return sheetRequest({ action: "unlock", email: saved.email, pin: saved.pin }).then((data) => {
      if (!data || !data.ok) {
        const authFail = data && (data.error === "locked" || data.error === "needemail" || data.error === "required" || data.error === "pin" || data.ok === false);
        if (authFail) {
          clearSession();
          setOwnerUnlocked(false);
        }
        return false;
      }
      applyLoginSuccess(data, saved.email, saved.pin, nextTab);
      return true;
    }).catch(() => false).finally(() => {
      if (hasCache) setCatalogSyncing(false);
      else showLoader(false);
    });
  }

  function setOwnerUnlocked(on) {
    state.ownerUnlocked = on;
    if (!on) {
      state.ownerPin = "";
      state.ownerEmail = "";
      state.role = "";
      state.quotes = [];
      state.cutQuote = null;
      state.staff = [];
      state.quoteOpenId = "";
    }
    updateRoleUi();
  }

  function shortEmail(email) {
    const e = String(email || "").trim();
    if (!e) return "";
    const at = e.indexOf("@");
    return at > 0 ? e.slice(0, at) : e;
  }

  function md5hex(str) {
    function add(x, y) { return (x + y) | 0; }
    function rol(n, c) { return (n << c) | (n >>> (32 - c)); }
    function cmn(q, a, b, x, s, t) { return add(rol(add(add(a, q), add(x, t)), s), b); }
    function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); }
    function rhex(n) {
      let s = "";
      for (let j = 0; j <= 3; j++) s += ("0" + ((n >>> (j * 8)) & 255).toString(16)).slice(-2);
      return s;
    }
    str = unescape(encodeURIComponent(String(str || "")));
    const nblk = ((str.length + 8) >> 6) + 1;
    const x = new Array(nblk * 16);
    for (let i = 0; i < nblk * 16; i++) x[i] = 0;
    for (let i = 0; i < str.length; i++) x[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
    x[str.length >> 2] |= 0x80 << ((str.length % 4) * 8);
    x[nblk * 16 - 2] = str.length * 8;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
      const oa = a, ob = b, oc = c, od = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = add(a, oa); b = add(b, ob); c = add(c, oc); d = add(d, od);
    }
    return rhex(a) + rhex(b) + rhex(c) + rhex(d);
  }

  const gravatarNames = {};

  function gravatarHash(email) {
    return md5hex(String(email || "").trim().toLowerCase());
  }

  function gravatarAvatarUrl(email, size) {
    return "https://www.gravatar.com/avatar/" + gravatarHash(email) + "?s=" + (size || 80) + "&d=identicon";
  }

  function setAvatarSrc(id, url, fallback) {
    const el = $(id);
    if (!el) return;
    el.referrerPolicy = "no-referrer";
    el.onerror = function () { this.onerror = null; this.src = fallback; };
    el.src = url;
  }

  function loadGravatarName(email) {
    const key = String(email || "").trim().toLowerCase();
    if (!key) return Promise.resolve("");
    if (gravatarNames[key]) return Promise.resolve(gravatarNames[key]);
    return fetch("https://gravatar.com/" + gravatarHash(key) + ".json", { headers: { Accept: "application/json" } }).then(function (res) {
      if (!res.ok) return "";
      return res.json();
    }).then(function (data) {
      const entry = data && data.entry && data.entry[0];
      const name = entry ? String(entry.displayName || entry.preferredUsername || "").trim() : "";
      if (name) gravatarNames[key] = name;
      return name;
    }).catch(function () { return ""; });
  }

  function emailHue(email) {
    let h = 0;
    const s = String(email || "").toLowerCase();
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h % 360;
  }

  function emailInitials(email) {
    const name = shortEmail(email).replace(/[^A-Za-z0-9]/g, " ").trim();
    const parts = name.split(/[\s._-]+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
    return (name.slice(0, 2) || "?").toUpperCase();
  }

  function emailAvatarUrl(email) {
    const initials = emailInitials(email).replace(/[<&]/g, "");
    const hue = emailHue(email);
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" rx="32" fill="hsl(' + hue + ',48%,36%)"/>' +
      '<text x="32" y="35" text-anchor="middle" dominant-baseline="middle" font-size="22" font-weight="700" fill="#fff" font-family="Hind Siliguri,Noto Sans Bengali,sans-serif">' + initials + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function closeUserMenu() {
    const menu = $("user-menu");
    const drop = $("user-menu-drop");
    const btn = $("btn-user-menu");
    if (drop) drop.classList.add("hidden");
    if (menu) menu.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function toggleUserMenu() {
    const menu = $("user-menu");
    const drop = $("user-menu-drop");
    const btn = $("btn-user-menu");
    if (!menu || !drop || !btn || menu.classList.contains("hidden")) return;
    const open = drop.classList.contains("hidden");
    drop.classList.toggle("hidden", !open);
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function updateSessionChip() {
    const menu = $("user-menu");
    const on = isStaff() && !!state.ownerEmail;
    if (menu) menu.classList.toggle("hidden", !on);
    if (!on) {
      closeUserMenu();
      return;
    }
    const role = isOwner() ? T.roleOwner : T.roleStaff;
    const mail = String(state.ownerEmail || "").trim().toLowerCase();
    const fallback = emailAvatarUrl(mail);
    const photo = gravatarAvatarUrl(mail, 128);
    const shown = shortEmail(mail);
    if ($("session-role")) $("session-role").textContent = role;
    if ($("session-email")) $("session-email").textContent = shown;
    if ($("session-role-full")) $("session-role-full").textContent = role;
    if ($("session-email-full")) $("session-email-full").textContent = mail;
    if ($("menu-calc-label")) $("menu-calc-label").textContent = T.calcTab;
    if ($("menu-admin-label")) $("menu-admin-label").textContent = T.admin;
    setAvatarSrc("user-avatar", photo, fallback);
    setAvatarSrc("user-avatar-lg", photo, fallback);
    if ($("btn-user-menu")) $("btn-user-menu").title = shown + " · " + role;
    loadGravatarName(mail).then(function (name) {
      if (!name || String(state.ownerEmail || "").trim().toLowerCase() !== mail) return;
      if ($("btn-user-menu")) $("btn-user-menu").title = name + " · " + mail;
    });
  }

  function updateRoleUi() {
    const staff = isStaff();
    document.documentElement.classList.toggle("has-session", staff);
    document.documentElement.classList.toggle("is-staff", staff);
    document.documentElement.classList.toggle("is-owner", isOwner());
    document.body.classList.toggle("is-staff", staff);
    if ($("btn-staff-login")) $("btn-staff-login").classList.toggle("hidden", isStaff());
    updateSessionChip();
    if ($("nav-cutting")) $("nav-cutting").classList.remove("tab-hidden");
    if ($("nav-rates")) $("nav-rates").classList.remove("tab-hidden");
    if ($("admin-tab-staff")) $("admin-tab-staff").classList.toggle("hidden", !isOwner());
    if (isStaff() && !isOwner()) {
      if (state.adminPanel !== "home" && state.adminPanel !== "quotes") switchAdminPanel("home");
    } else if (!isOwner() && state.adminPanel === "staff") switchAdminPanel("home");
    updateQuoteCard();
    renderQuotes();
  }

  function updateQuoteCard() {
    if ($("quote-card")) $("quote-card").classList.toggle("hidden", !state.items.length);
  }

  function fillQuoteLabels() {
    if ($("staff-login-label")) $("staff-login-label").textContent = T.staffLogin;
    setHeading("quote-title", T.quoteTitle);
    if ($("quote-hint")) $("quote-hint").textContent = T.quoteHint;
    if ($("quote-name-label")) $("quote-name-label").textContent = T.quoteName;
    if ($("quote-phone-label")) $("quote-phone-label").textContent = T.quotePhone;
    if ($("btn-send-quote")) $("btn-send-quote").textContent = T.quoteSend;
    setHeading("quotes-title", T.quotesTitle);
    if ($("glass-thick-label")) $("glass-thick-label").textContent = T.glassThick;
    if ($("alu-company-label")) $("alu-company-label").textContent = T.aluCompany;
    if ($("alu-thick-label")) $("alu-thick-label").textContent = T.aluThick;
    if ($("alu-color-label")) $("alu-color-label").textContent = T.aluColor;
    setHeading("alu-rates-title", T.aluRatesTitle);
    if ($("alu-rates-hint")) $("alu-rates-hint").textContent = T.aluRatesHint;
    setHeading("charges-title", T.chargesTitle);
    if ($("charges-hint")) $("charges-hint").textContent = T.chargesHint;
    if ($("charge-net-label")) $("charge-net-label").textContent = T.chargeNet;
    if ($("charge-extra-label")) $("charge-extra-label").textContent = T.chargeExtra;
    setAddLabels();
    if ($("btn-save-charges-label")) $("btn-save-charges-label").textContent = T.saveBtn;
    if ($("new-alu-name")) $("new-alu-name").placeholder = T.aluNamePh;
    if ($("new-alu-thick")) $("new-alu-thick").placeholder = T.aluThickPh;
    if ($("new-alu-rate")) $("new-alu-rate").placeholder = T.aluRatePh;
    if ($("new-company-thick")) $("new-company-thick").placeholder = T.glassThickPh;
    if ($("company-rates-hint")) $("company-rates-hint").textContent = T.companyRatesHint;
    var multi = " (" + "\u098f\u0995\u09be\u09a7\u09bf\u0995" + ")";
    if ($("company-name-label")) $("company-name-label").textContent = T.aluNamePh;
    if ($("company-rate-label")) $("company-rate-label").textContent = T.aluRatePh;
    if ($("alu-name-label")) $("alu-name-label").textContent = T.aluNamePh;
    if ($("alu-rate-label")) $("alu-rate-label").textContent = T.aluRatePh;
    if ($("lock-name-label")) $("lock-name-label").textContent = T.lock;
    if ($("lock-style-label")) $("lock-style-label").textContent = T.dhoron;
    if ($("lock-rate-label")) $("lock-rate-label").textContent = T.aluRatePh;
    if ($("company-thick-pick-label")) $("company-thick-pick-label").textContent = T.thickness + multi;
    if ($("company-color-pick-label")) $("company-color-pick-label").textContent = T.glassColor + multi;
    if ($("alu-thick-pick-label")) $("alu-thick-pick-label").textContent = T.aluThick + multi;
    if ($("alu-color-pick-label")) $("alu-color-pick-label").textContent = T.aluColor + multi;
    renderAdminPicks();
    if ($("nav-rates-label")) $("nav-rates-label").textContent = T.admin;
    if ($("menu-calc-label")) $("menu-calc-label").textContent = T.calcTab;
    if ($("menu-admin-label")) $("menu-admin-label").textContent = T.admin;
    if ($("admin-tab-home")) $("admin-tab-home").textContent = T.tabHome;
    if ($("admin-tab-glass")) $("admin-tab-glass").textContent = T.tabGlass;
    if ($("admin-tab-alu")) $("admin-tab-alu").textContent = T.tabAlu;
    if ($("admin-tab-lock")) $("admin-tab-lock").textContent = T.tabLock;
    if ($("admin-tab-charges")) $("admin-tab-charges").textContent = T.tabCharges;
    if ($("admin-tab-staff")) $("admin-tab-staff").textContent = T.tabStaff;
    if ($("admin-tab-cut")) $("admin-tab-cut").textContent = T.tabCut;
    if ($("admin-tab-quotes")) $("admin-tab-quotes").textContent = T.tabQuotes;
    if ($("staff-email-label")) $("staff-email-label").textContent = T.staffEmailPh;
    if ($("staff-pin-label")) $("staff-pin-label").textContent = T.ownerPinLabel;
    if ($("staff-role-label")) $("staff-role-label").textContent = T.dhoron;
    setHeading("staff-title", T.staffTitle);
    if ($("staff-hint")) $("staff-hint").textContent = T.staffHint;
    if ($("new-staff-email")) $("new-staff-email").placeholder = T.staffEmailPh;
    if ($("new-staff-pin")) $("new-staff-pin").placeholder = T.staffPinPh;
    if ($("opt-staff-role")) $("opt-staff-role").textContent = T.roleStaff;
    if ($("opt-owner-role")) $("opt-owner-role").textContent = T.roleOwner;
    if ($("btn-add-staff-label")) $("btn-add-staff-label").textContent = T.addBtn;
    renderHome();
  }

  function parseSizeFt(size) {
    const parts = String(size || "").split(/\s*x\s*/i);
    const one = (s) => {
      const t = String(s || "");
      const ft = t.match(/(\d+(?:\.\d+)?)\s*(?:ft|\u09ab\u09c1\u099f)/i);
      const inch = t.match(/(\d+(?:\.\d+)?)\s*(?:in|inch|\u0987\u099e\u09cd\u099a\u09bf)/i);
      const mm = t.match(/(\d+(?:\.\d+)?)\s*(?:mm|\u09ae\u09bf\u09ae\u09bf)/i);
      if (ft || inch || mm) {
        return (ft ? Number(ft[1]) : 0) + (inch ? Number(inch[1]) / 12 : 0) + (mm ? Number(mm[1]) / 304.8 : 0);
      }
      const m = t.match(/(\d+(?:\.\d+)?)(?:\s*(?:ft|\u09ab\u09c1\u099f))?\s*(?:(\d+(?:\.\d+)?))?/i);
      if (!m) return 0;
      return Number(m[1] || 0) + (Number(m[2] || 0) / 12);
    };
    return { heightFt: one(parts[0]), widthFt: one(parts[1]) };
  }

  function typeIdFromQuote(it) {
    const raw = String(it && (it.typeId || it.winType) || "").trim();
    if (raw && ALL_TYPES.some((t) => t.id === raw)) return raw;
    const s = String(it && it.type || "").toLowerCase();
    const exact = ALL_TYPES.find((t) => (t.label + " " + t.sub).toLowerCase() === s);
    if (exact) return exact.id;
    const door = s.indexOf("door") >= 0 || s.indexOf("\u09a6\u09b0\u099c\u09be") >= 0;
    if (door) {
      if (s.indexOf("slid") >= 0 || s.indexOf("\u09b8\u09cd\u09b2\u09be\u0987\u09a1") >= 0) return "door-sliding";
      if (s.indexOf("double") >= 0 || s.indexOf("\u09a1\u09be\u09ac\u09b2") >= 0) return "door-double";
      return "door-single";
    }
    if (/4|\u09ea/.test(s)) return "sliding4";
    if (/3|\u09e9/.test(s)) return "sliding3";
    if (/2|\u09e8/.test(s) || s.indexOf("slid") >= 0) return "sliding2";
    return "fixed";
  }

  function colorIdFromQuote(it) {
    const id = String(it && (it.colorId || "") || "").trim().toLowerCase();
    if (GLASS_COLORS.some((c) => c.id === id)) return id;
    const s = String(it && it.color || "").trim();
    const found = GLASS_COLORS.find((c) => T[c.labelKey] === s || c.id === s.toLowerCase());
    return found ? found.id : "clear";
  }

  function quoteLinesToItems(q) {
    return (q && q.lines || []).map((it) => {
    const parsed = quoteLineSize(it);
    const heightFt = parsed.heightFt;
    const widthFt = parsed.widthFt;
      const qty = Math.max(1, Number(it.qty) || 1);
      return {
        heightFt: heightFt,
        widthFt: widthFt,
        qty: qty,
        thickness: Number(it.glassMm || it.thickness) || 0,
        aluName: it.aluminium || "",
        aluThick: it.aluMm || "",
        aluColor: normalizeAluColorId(it.aluColor),
        companyName: it.company || "",
        companyRate: 0,
        glassColor: colorIdFromQuote(it),
        lockName: it.lock && it.lock !== "-" ? it.lock : null,
        lockRate: 0,
        lockStyle: it.lockStyle || lockStyleOf({ name: it.lock, style: it.lockStyle }),
        hasNet: !!it.net,
        netCost: 0,
        frameRate: 0,
        extra: 0,
        totalSqft: heightFt * widthFt * qty,
        glassCost: 0,
        lockCost: 0,
        frameCost: 0,
        subtotal: Number(it.total) || 0,
        winType: typeIdFromQuote(it)
      };
    }).filter((it) => it.heightFt > 0 && it.widthFt > 0);
  }

  function toggleQuote(id) {
    state.quoteOpenId = state.quoteOpenId === id ? "" : id;
    renderQuotes();
  }

  function openQuoteCutting(id) {
    const q = state.quotes.find((x) => x.id === id);
    if (!q) return;
    const items = quoteLinesToItems(q);
    if (!items.length) {
      flashNote(T.quoteNoCut, true);
      return;
    }
    state.cutQuote = { id: q.id, name: q.name, phone: q.phone, items: items };
    switchTab("cutting");
  }

  function clearQuoteCutting() {
    state.cutQuote = null;
    renderCuttingTab();
  }

  function renderQuotes() {
    var card = $("quotes-card");
    var list = $("quotes-list");
    if (!card || !list) return;
    if ($("admin-tab-quotes")) $("admin-tab-quotes").classList.toggle("hidden", !isStaff());
    if (!isStaff()) {
      if (state.adminPanel !== "quotes") card.classList.add("hidden");
      return;
    }
    if (!state.quotes.length) {
      list.innerHTML = '<div class="empty-note">' + T.quotesEmpty + "</div>";
      if (state.adminPanel === "quotes") card.classList.remove("hidden");
      return;
    }
    list.innerHTML = state.quotes.map(function (q) {
      const open = state.quoteOpenId === q.id;
      const lines = (q.lines || []).map(function (it) {
        return '<div class="quote-line"><strong>' + escapeHtml(it.type || "") + "</strong>" +
          '<span>' + escapeHtml(it.size || "") + " \u00b7 " + (it.qty || 1) + " " + T.ti + "</span>" +
          '<span>' + escapeHtml([it.company, it.glassMm ? it.glassMm + T.mm : "", it.color].filter(Boolean).join(" \u00b7 ")) + "</span>" +
          '<span>' + escapeHtml([it.aluminium, it.aluMm ? it.aluMm + T.mm : "", it.aluColor].filter(Boolean).join(" \u00b7 ")) + "</span>" +
          '<span>' + escapeHtml([(it.lock && it.lock !== "-" ? it.lock : T.noLock), it.net ? T.net + " " + T.netYes : T.net + " " + T.netNo].join(" \u00b7 ")) +
          (it.total ? " \u00b7 " + money(it.total) : "") + "</span></div>";
      }).join("");
      return '<div class="quote-card' + (open ? " is-open" : "") + '" data-quote-id="' + escapeHtml(q.id) + '">' +
        '<div class="quote-row" data-action="toggle-quote" data-id="' + escapeHtml(q.id) + '">' +
        '<span class="quote-mark"></span><div class="quote-main"><strong>' +
        escapeHtml(q.name) + '</strong><span class="quote-phone">' + escapeHtml(q.phone) +
        '</span></div><div class="quote-stats"><span>' + escapeHtml(formatQuoteTime(q.time)) + "</span><span>" +
        (q.lines && q.lines.length ? q.lines.length : q.items) + " \u00b7 " + fmt(quoteSqft(q)) + T.sqLabel +
        (quoteTotal(q) ? " \u00b7 " + money(quoteTotal(q)) : "") +
        '</span></div><span class="quote-status">' + escapeHtml(q.status) + "</span></div>" +
        (open ? '<div class="quote-detail">' + (lines || '<div class="empty-note">' + T.quotesEmpty + "</div>") +
          '<button type="button" class="icon-btn secondary quote-cut-btn" data-action="quote-cut" data-id="' +
          escapeHtml(q.id) + '">' + ico("cut") + "<span>" + T.cutInfo + "</span></button></div>" : "") +
        "</div>";
    }).join("");
  }

  function quotePhoneOk(phone) {
    var p = String(phone || "").replace(/\s+/g, "");
    return /^(?:\+?88)?01\d{9}$/.test(p) || /^\d{10,15}$/.test(p);
  }

  function sendQuote() {
    var err = $("quote-err");
    var okEl = $("quote-ok");
    if (okEl) okEl.classList.add("hidden");
    if (!err) return;
    if (!state.items.length) {
      err.textContent = T.quoteEmpty;
      err.style.display = "block";
      return;
    }
    var nameEl = $("quote-name");
    var phoneEl = $("quote-phone");
    var name = cleanTextValue(nameEl && nameEl.value);
    var phone = String(phoneEl && phoneEl.value || "").replace(/\D/g, "");
    markInvalid(nameEl, name.length < 2);
    markInvalid(phoneEl, !quotePhoneOk(phone));
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
    if (btn) btn.disabled = true;
    showLoader(true, T.working);
    sheetRequest({
      action: "quote",
      name: name,
      phone: phone.replace(/\s+/g, ""),
      items: state.items.map(function (i) {
        var type = getType(i.winType);
        return {
          type: type.label + " " + type.sub,
          typeId: i.winType,
          heightFt: i.heightFt,
          widthFt: i.widthFt,
          qty: i.qty,
          lockStyle: i.lockStyle || "",
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
      if (btn) btn.disabled = false;
      showLoader(false);
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
      if (btn) btn.disabled = false;
      showLoader(false);
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
    if ($("btn-owner-cancel")) $("btn-owner-cancel").textContent = T.cancelBtn;
    if ($("owner-pin2-wrap")) $("owner-pin2-wrap").classList.add("hidden");
    $("owner-gate-err").style.display = "none";
    $("owner-email").value = DEFAULT_LOGIN.email;
    $("owner-pin").value = DEFAULT_LOGIN.pin;
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
    showLoader(true, T.working);
    sheetRequest({ action: "unlock", email: email, pin: pin }).then((data) => {
      $("btn-owner-ok").disabled = false;
      showLoader(false);
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
      showLoader(false);
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
    applyCatalogLists(readCatalogCache(), false);
    fillCutInputs();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshSheetSelects();
    loadCatalog();
    switchTab("calc");
  }

  function persistActiveTab(tab) {
    if (tab !== "calc" && tab !== "cutting" && tab !== "rates") return;
    storeSet(KEYS.tab, tab);
  }

  function switchTab(tab) {
    if (tab === "rates" && !isStaff()) {
      persistActiveTab(tab);
      showOwnerGate(tab);
      return;
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
    if (tab === "rates") {
      renderQuotes();
      switchAdminPanel(state.adminPanel || "glass");
    }
    var body = document.querySelector(".app-body");
    if (body) body.scrollTop = 0;
  }

  function fillPrintHeader(cutting) {
    if ($("print-kicker")) $("print-kicker").textContent = cutting ? T.printCutKicker : T.printKicker;
    if ($("print-shop")) $("print-shop").textContent = shopOf(state.shop).name;
    if ($("print-sub")) $("print-sub").textContent = shopOf(state.shop).slogan;
    if ($("print-date-label")) $("print-date-label").textContent = T.printDate;
    if ($("print-date")) {
      $("print-date").textContent = new Date().toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
    if ($("print-thanks")) $("print-thanks").textContent = T.printThanks;
    if ($("print-note")) $("print-note").textContent = T.printNote;
    const cust = $("print-customer");
    const name = $("quote-name") && $("quote-name").value.trim();
    const phone = $("quote-phone") && $("quote-phone").value.trim();
    if (cust) {
      if (!cutting && (name || phone)) {
        cust.classList.remove("hidden");
        cust.innerHTML = "<span>" + T.printCustomer + "</span>" +
          (name ? "<strong>" + escapeHtml(name) + "</strong>" : "") +
          (phone ? "<span>" + escapeHtml(phone) + "</span>" : "");
      } else {
        cust.classList.add("hidden");
        cust.innerHTML = "";
      }
    }
  }

  function preparePrint() {
    const cutting = $("tab-cutting") && !$("tab-cutting").classList.contains("hidden");
    document.body.classList.toggle("print-cutting", cutting);
    document.body.classList.toggle("print-quote", !cutting);
    fillPrintHeader(cutting);
  }

  function clearPrintMode() {
    document.body.classList.remove("print-cutting", "print-quote");
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
      if (!card || card.disabled || !state.selectedKind) return;
      setSelectedType(card.dataset.type);
    });
    $("color-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-color]");
      if (!btn) return;
      onGlassColorChange(btn.dataset.color);
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

    ["in-h-ft", "in-h-in", "in-h-mm", "in-w-ft", "in-w-in", "in-w-mm", "in-qty"].forEach((id) => {
      if ($(id)) $(id).addEventListener("input", () => {
        syncCalcDetails();
        renderLivePreview(true);
      });
    });

    $("btn-add").addEventListener("click", addItem);
    $("btn-clear").addEventListener("click", clearAll);
    if ($("home-stats")) {
      $("home-stats").addEventListener("click", function (e) {
        const btn = e.target.closest("[data-goto]");
        if (btn) goHomeTarget(btn.dataset.goto);
      });
    }
    if ($("home-actions")) {
      $("home-actions").addEventListener("click", function (e) {
        const btn = e.target.closest("[data-goto]");
        if (btn) goHomeTarget(btn.dataset.goto);
      });
    }
    if ($("btn-save-shop")) $("btn-save-shop").addEventListener("click", saveShopFromForm);
    if ($("btn-shop-logo")) {
      $("btn-shop-logo").addEventListener("click", function () {
        if ($("shop-logo-file")) $("shop-logo-file").click();
      });
    }
    if ($("shop-logo-file")) {
      $("shop-logo-file").addEventListener("change", function () {
        const file = this.files && this.files[0];
        this.value = "";
        if (file) onShopLogoPicked(file);
      });
    }
    if ($("btn-shop-logo-reset")) {
      $("btn-shop-logo-reset").addEventListener("click", function () {
        applyShop({ name: state.shop.name, slogan: state.shop.slogan, logo: "images/logo.svg" });
        renderHome();
      });
    }
    $("btn-print").addEventListener("click", () => window.print());
    $("btn-print-cutting").addEventListener("click", () => window.print());
    window.addEventListener("beforeprint", preparePrint);
    window.addEventListener("afterprint", clearPrintMode);
    bindAdminPicks();
    bindEditPicks("company-list");
    bindEditPicks("alu-list");
    function ensureCancel(afterId, cancelId) {
      if ($(cancelId) || !$(afterId)) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = cancelId;
      btn.className = "icon-btn ghost compact hidden";
      btn.textContent = T.cancelBtn;
      $(afterId).insertAdjacentElement("afterend", btn);
      btn.addEventListener("click", function () { cancelEdit(); });
    }
    ensureCancel("btn-add-company", "btn-cancel-company");
    ensureCancel("btn-add-alu", "btn-cancel-alu");
    setAddLabels();
    $("btn-add-company").addEventListener("click", addCompany);
    $("btn-add-lock").addEventListener("click", addLock);
    $("btn-add-alu").addEventListener("click", addAluminium);
    if ($("btn-add-staff")) $("btn-add-staff").addEventListener("click", addStaff);
    $("btn-save-charges").addEventListener("click", saveCharges);
    $("btn-save-cut").addEventListener("click", saveCutParams);

    if ($("quotes-list")) {
      $("quotes-list").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        if (btn.dataset.action === "toggle-quote") toggleQuote(btn.dataset.id);
        if (btn.dataset.action === "quote-cut") openQuoteCutting(btn.dataset.id);
      });
    }
    if ($("btn-clear-cut-quote")) $("btn-clear-cut-quote").addEventListener("click", clearQuoteCutting);
    $("item-list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      if (btn.dataset.action === "remove-item") removeItem(index);
      if (btn.dataset.action === "toggle-cut") toggleCutList(index);
    });
    $("company-list").addEventListener("click", (e) => handleRateListClick("company", e));
    $("lock-list").addEventListener("click", (e) => handleRateListClick("lock", e));
    $("alu-list").addEventListener("click", (e) => handleRateListClick("alu", e));
    ["company-list", "alu-list", "lock-list"].forEach(function (id) {
      $(id).addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        const row = e.target.closest(".rate-row.editing");
        if (!row) return;
        const kind = id === "company-list" ? "company" : id === "alu-list" ? "alu" : "lock";
        saveEdited(kind, Number(row.dataset.index));
      });
    });
    if ($("staff-list")) {
      $("staff-list").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action='remove-staff']");
        if (btn) removeStaff(Number(btn.dataset.index));
      });
    }
    bindSortable("company-list", () => state.companies, () => {
      cancelEdit(true);
      renderRateList("company-list", state.companies, "company");
      renderCompanySelect();
      persistOwnerData();
    }, true);
    bindSortable("lock-list", () => state.locks, () => {
      cancelEdit(true);
      renderRateList("lock-list", state.locks, "lock");
      renderLockSelect();
      persistOwnerData();
    });
    bindSortable("alu-list", () => state.aluminium, () => {
      cancelEdit(true);
      refreshSheetSelects();
      persistOwnerData();
    }, true);
    bindSortable("staff-list", () => state.staff, () => {
      renderStaffList();
      persistOwnerData();
    });
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
    if ($("admin-tabs")) {
      $("admin-tabs").addEventListener("click", function (e) {
        const btn = e.target.closest(".admin-tab");
        if (btn && btn.dataset.admin) switchAdminPanel(btn.dataset.admin);
      });
    }
    $("btn-owner-ok").addEventListener("click", submitOwnerPin);
    if ($("btn-owner-cancel")) {
      $("btn-owner-cancel").addEventListener("click", function () {
        $("owner-gate-err").style.display = "none";
        switchTab("calc");
      });
    }
    $("owner-email").addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("owner-pin").focus();
    });
    $("owner-pin").addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitOwnerPin();
    });
    if ($("btn-user-menu")) $("btn-user-menu").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleUserMenu();
    });
    if ($("btn-menu-calc")) $("btn-menu-calc").addEventListener("click", function () {
      closeUserMenu();
      switchTab("calc");
    });
    if ($("btn-menu-admin")) $("btn-menu-admin").addEventListener("click", function () {
      closeUserMenu();
      switchTab("rates");
    });
    if ($("btn-owner-lock")) $("btn-owner-lock").addEventListener("click", function () {
      closeUserMenu();
      lockOwner();
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest || !e.target.closest("#user-menu")) closeUserMenu();
    });
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
    applyCatalogLists(readCatalogCache(), false);
    const savedShop = await storeGet(KEYS.shop);
    applyShop(savedShop || state.shop);
    state.items = (await storeGet(KEYS.items)) || [];

    fillCutInputs();

    bindEvents();
    bindFieldGuards();
    fillQuoteLabels();
    $("owner-lock-label").textContent = T.ownerLock;
    const savedPanel = await storeGet(KEYS.adminPanel);
    if (savedPanel) state.adminPanel = savedPanel;
    const savedTab = await storeGet(KEYS.tab);
    const session = readSession(await storeGet(KEYS.session));
    const tab = savedTab === "cutting" || savedTab === "rates" || savedTab === "calc" ? savedTab : "calc";
    if (session) {
      applyLocalSession(session);
    } else {
      setOwnerUnlocked(false);
    }
    loadCatalog();
    renderKindPicker();
    renderTypePicker();
    syncCalcDetails();
    renderColorGrid();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshSheetSelects();
    renderItems();
    renderLivePreview(false);
    setupPwa();
    if (session) {
      const next = tab === "rates" || tab === "cutting" || tab === "calc" ? tab : "calc";
      switchTab(next);
      const ok = await restoreSession(session, next);
      if (!ok && isStaff()) switchTab(next);
      else if (!ok && !isStaff()) switchTab("calc");
    } else {
      switchTab("calc");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
