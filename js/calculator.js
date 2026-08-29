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
  "errCompany": "প্রথমে \"রেট সেটিংস\" ট্যাব থেকে অন্তত একটি কাঁচের কোম্পানি যোগ করুন।",
  "errSize": "উচ্চতা ও প্রস্থ সঠিকভাবে দিন।",
  "cutToggle": "কাটিং লিস্ট দেখান/লুকান",
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
  "doorTypes": "দরজার ধরন"
};
  const KEYS = {
    companies: "glasscalc:companies",
    locks: "glasscalc:locks",
    cutParams: "glasscalc:cutparams",
    items: "glasscalc:items"
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

  const DEFAULT_COMPANIES = [
    { name: T.nasir5, rate: 95 },
    { name: T.nasir6, rate: 103 },
    { name: T.abul, rate: 90 },
    { name: T.dhaka, rate: 90 },
    { name: T.usmania, rate: 85 }
  ];
  const DEFAULT_LOCKS = [
    { name: T.slidingLock, rate: 250, style: "sliding" },
    { name: T.caseLock, rate: 350, style: "casement" },
    { name: T.deadbolt + " " + T.lock, rate: 400, style: "deadbolt" },
    { name: T.knob, rate: 300, style: "knob" }
  ];
  const DEFAULT_CUT = { outerHoriz: 3.6, side: 1.1, shutterHoriz: 1.5, glassGap: 0.25 };

  const state = {
    companies: [],
    locks: [],
    items: [],
    cutParams: { ...DEFAULT_CUT },
    selectedKind: null,
    selectedType: "fixed",
    glassColor: "clear",
    hasNet: false
  };

  const $ = (id) => document.getElementById(id);

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
    const isDoor = type.kind === "door";
    const h = opts.heightFt > 0 ? opts.heightFt : (isDoor ? 7 : 5);
    const w = opts.widthFt > 0 ? opts.widthFt : (isDoor ? 3.5 : 4);
    const shutters = type.shutters;
    const compact = Boolean(opts.compact);
    const boxH = compact ? 118 : 220;
    const boxW = Math.max(compact ? 48 : 72, Math.min(compact ? 88 : 260, boxH * (w / h)));
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
        panes += `<rect x="${px}" y="${py + glassH + 4}" width="${paneW}" height="${innerH - glassH - 4}" fill="#6d8d9b"/>`;
      }
      if (i < shutters - 1) {
        panes += `<rect x="${px + paneW}" y="${y}" width="${paneGap}" height="${boxH}" fill="#6d8d9b"/>`;
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
        <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="3" fill="#5e7f8e"/>
        ${panes}
        ${extras}
        <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="3" fill="none" stroke="#3d5c6a" stroke-width="2"/>
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
    const opts = diagramOpts();
    const type = getType(opts.typeId);
    const lock = selectedLock();
    $("live-preview").innerHTML = buildDiagram(opts);
    $("preview-kind").textContent = kindLabel(type.kind);
    $("preview-type").textContent = type.label + " � " + type.sub;
    $("preview-size").textContent = opts.heightFt > 0 && opts.widthFt > 0
      ? ftInLabel(opts.heightFt) + " � " + ftInLabel(opts.widthFt)
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

  function renderColorGrid() {
    $("color-grid").innerHTML = GLASS_COLORS.map((c) => `
      <button type="button" class="color-swatch${c.id === state.glassColor ? " active" : ""}" data-color="${c.id}" title="${escapeHtml(T[c.labelKey])}" style="background:linear-gradient(135deg,${c.light},${c.mid})"></button>
    `).join("");
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
    $("sel-company").innerHTML = state.companies.map((c, i) =>
      `<option value="${i}">${escapeHtml(c.name)} - ${T.taka}${c.rate}${T.perSqftSlash}</option>`
    ).join("");
  }

  function renderLockSelect() {
    $("sel-lock").innerHTML = `<option value="-1">${T.noLock}</option>` +
      state.locks.map((l, i) => `<option value="${i}">${escapeHtml(l.name)} - ${T.taka}${l.rate}</option>`).join("");
  }

  function renderRateList(wrapId, items, kind) {
    const wrap = $(wrapId);
    if (!items.length) {
      wrap.innerHTML = `<div class="empty-note">${T.emptyRates}</div>`;
      return;
    }
    const unit = kind === "company" ? T.perSq : "";
    wrap.innerHTML = items.map((item, i) => `
      <div class="rate-row">
        <span class="name">${escapeHtml(item.name)}</span>
        <span class="price">${T.taka}${item.rate}${unit}</span>
        <button type="button" class="danger-ghost" data-action="remove-${kind}" data-index="${i}">${T.muchun}</button>
      </div>
    `).join("");
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
      return;
    }
    emptyEl.classList.add("hidden");
    summaryCard.classList.remove("hidden");
    listEl.innerHTML = state.items.map((item, i) => {
      const type = getType(item.winType);
      const extras = [
        item.thickness ? T.thickness + " " + item.thickness + T.mm : "",
        colorLabel(item.glassColor),
        item.lockName ? T.lock + ": " + item.lockName : T.noLock,
        item.hasNet ? T.net + " " + T.netYes : T.net + " " + T.netNo
      ].filter(Boolean).join(" � ");
      return `
        <div class="window-item">
          <div class="item-thumb">${itemDiagram(item, true)}</div>
          <div>
            <div class="item-head">
              <span class="tag">${kindLabel(type.kind)} ${i + 1} x ${item.qty} - ${escapeHtml(type.label)}</span>
              <button type="button" class="danger-ghost" data-action="remove-item" data-index="${i}">${T.muchun}</button>
            </div>
            <div class="item-details">
              ${T.map}: ${ftInLabel(item.heightFt)} x ${ftInLabel(item.widthFt)} � ${escapeHtml(type.sub)}<br>
              ${T.kach}: ${escapeHtml(item.companyName)} (${T.taka}${item.companyRate}${T.perSq})<br>
              ${escapeHtml(extras)}
            </div>
            <button type="button" class="secondary" data-action="toggle-cut" data-index="${i}" style="margin-top:8px;font-size:12.5px;padding:6px 12px;">${T.cutToggle}</button>
            <div id="cutwrap-${i}" class="hidden">${renderCutTable(item)}</div>
            <div class="item-subtotal">${T.subtotal} (${fmt(item.totalSqft)}${T.sqLabel}): ${money(item.subtotal)}</div>
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
              ${item.hasNet ? " � " + T.net : ""}
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
    const thickness = parseFloat($("in-thickness").value) || 0;
    const companyIdx = parseInt($("sel-company").value, 10);
    const lock = selectedLock();
    const frameRate = parseFloat($("in-frame-rate").value) || 0;
    const extra = parseFloat($("in-extra").value) || 0;
    const netCost = state.hasNet ? (parseFloat($("in-net-rate").value) || 0) : 0;

    if (!state.companies.length) {
      showError(T.errCompany);
      return;
    }
    if (heightFt <= 0 || widthFt <= 0) {
      showError(T.errSize);
      return;
    }
    hideError();

    const company = state.companies[companyIdx];
    const totalSqft = heightFt * widthFt * qty;
    const glassCost = totalSqft * company.rate;
    const lockCost = lock ? lock.rate * qty : 0;
    const frameCost = frameRate * totalSqft;

    state.items.push({
      heightFt,
      widthFt,
      qty,
      thickness,
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
    renderItems();
    clearInputs();
    renderLivePreview(true);
  }

  function clearInputs() {
    ["in-h-ft", "in-h-in", "in-w-ft", "in-w-in", "in-thickness", "in-frame-rate", "in-extra", "in-net-rate"].forEach((id) => {
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
    storeSet(KEYS.items, state.items);
    renderItems();
  }

  function toggleCutList(index) {
    const el = $("cutwrap-" + index);
    if (el) el.classList.toggle("hidden");
  }

  function addCompany() {
    const name = $("new-company-name").value.trim();
    const rate = parseFloat($("new-company-rate").value);
    if (!name || Number.isNaN(rate) || rate < 0) return;
    state.companies.push({ name, rate });
    $("new-company-name").value = "";
    $("new-company-rate").value = "";
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    storeSet(KEYS.companies, state.companies).then(flashSaved);
  }

  function removeCompany(index) {
    state.companies.splice(index, 1);
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    storeSet(KEYS.companies, state.companies).then(flashSaved);
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
    storeSet(KEYS.locks, state.locks).then(flashSaved);
    renderLivePreview(true);
  }

  function removeLock(index) {
    state.locks.splice(index, 1);
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    storeSet(KEYS.locks, state.locks).then(flashSaved);
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
    storeSet(KEYS.cutParams, state.cutParams).then(flashSaved);
    renderItems();
  }

  function switchTab(tab) {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });
    $("tab-calc").classList.toggle("hidden", tab !== "calc");
    $("tab-cutting").classList.toggle("hidden", tab !== "cutting");
    $("tab-rates").classList.toggle("hidden", tab !== "rates");
    if (tab === "cutting") renderCuttingTab();
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
    $("sel-company").addEventListener("change", () => renderLivePreview(true));

    ["in-h-ft", "in-h-in", "in-w-ft", "in-w-in"].forEach((id) => {
      $(id).addEventListener("input", () => renderLivePreview(true));
    });

    $("btn-add").addEventListener("click", addItem);
    $("btn-clear").addEventListener("click", clearAll);
    $("btn-print").addEventListener("click", () => window.print());
    $("btn-print-cutting").addEventListener("click", () => window.print());
    $("btn-add-company").addEventListener("click", addCompany);
    $("btn-add-lock").addEventListener("click", addLock);
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
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
  }

  async function init() {
    const savedCompanies = await storeGet(KEYS.companies);
    const savedLocks = await storeGet(KEYS.locks);
    const broken = (list) => Array.isArray(list) && list.some((item) => /\?{2,}/.test(item.name || ""));
    state.companies = savedCompanies && !broken(savedCompanies) ? savedCompanies : DEFAULT_COMPANIES;
    state.locks = savedLocks && !broken(savedLocks) ? savedLocks : DEFAULT_LOCKS;
    state.cutParams = { ...DEFAULT_CUT, ...(await storeGet(KEYS.cutParams) || {}) };
    state.items = (await storeGet(KEYS.items)) || [];

    $("in-cp-outerhoriz").value = state.cutParams.outerHoriz;
    $("in-cp-side").value = state.cutParams.side;
    $("in-cp-shutterhoriz").value = state.cutParams.shutterHoriz;
    $("in-cp-glassgap").value = state.cutParams.glassGap;

    bindEvents();
    renderKindPicker();
    renderTypePicker();
    renderColorGrid();
    renderCompanySelect();
    renderLockSelect();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    renderItems();
    renderLivePreview(false);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
