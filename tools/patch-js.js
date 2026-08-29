const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "js", "calculator.js");
let src = fs.readFileSync(file, "utf8");

function replaceFn(name, body) {
  const start = src.indexOf("  function " + name + "(");
  if (start < 0) throw new Error("missing " + name);
  let i = src.indexOf("{", start);
  let depth = 0;
  for (; i < src.length; i += 1) {
    if (src[i] === "{") depth += 1;
    else if (src[i] === "}") {
      depth -= 1;
      if (depth === 0) {
        src = src.slice(0, start) + body + src.slice(i + 1);
        return;
      }
    }
  }
  throw new Error("unclosed " + name);
}

replaceFn("renderCompanySelect", `  function renderCompanySelect() {
    $("sel-company").innerHTML = state.companies.map((c, i) =>
      \`<option value="\${i}">\${escapeHtml(c.name)} - \${T.taka}\${c.rate}\${T.perSqftSlash}</option>\`
    ).join("");
  }`);

replaceFn("renderLockSelect", `  function renderLockSelect() {
    $("sel-lock").innerHTML = \`<option value="-1">\${T.noLock}</option>\` +
      state.locks.map((l, i) => \`<option value="\${i}">\${escapeHtml(l.name)} - \${T.taka}\${l.rate}</option>\`).join("");
  }`);

replaceFn("renderRateList", `  function renderRateList(wrapId, items, kind) {
    const wrap = $(wrapId);
    if (!items.length) {
      wrap.innerHTML = \`<div class="empty-note">\${T.emptyRates}</div>\`;
      return;
    }
    const unit = kind === "company" ? T.perSq : "";
    wrap.innerHTML = items.map((item, i) => \`
      <div class="rate-row">
        <span class="name">\${escapeHtml(item.name)}</span>
        <span class="price">\${T.taka}\${item.rate}\${unit}</span>
        <button type="button" class="danger-ghost" data-action="remove-\${kind}" data-index="\${i}">\${T.muchun}</button>
      </div>
    \`).join("");
  }`);

replaceFn("computeCutList", `  function computeCutList(item) {
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
    return list;
  }`);

replaceFn("renderCutTable", `  function renderCutTable(item) {
    const rows = computeCutList(item).map((part) => {
      const size = part.isGlass
        ? ftInLabel(part.lengthFt) + " x " + ftInLabel(part.widthFt2)
        : ftInLabel(part.lengthFt);
      return \`<tr>
        <td>\${escapeHtml(part.part)}</td>
        <td class="mono">\${size}</td>
        <td class="center">\${part.qty} \${T.piece}</td>
      </tr>\`;
    }).join("");

    return \`
      <div class="cut-table-wrap">
        <table class="cut-table">
          <thead>
            <tr>
              <th>\${T.parts}</th>
              <th>\${T.map}</th>
              <th class="center">\${T.songkha}</th>
            </tr>
          </thead>
          <tbody>\${rows}</tbody>
        </table>
      </div>
    \`;
  }`);

replaceFn("updateSummary", `  function updateSummary() {
    const totals = state.items.reduce((acc, item) => {
      acc.sqft += item.totalSqft;
      acc.glass += item.glassCost;
      acc.lock += item.lockCost;
      acc.frame += item.frameCost;
      acc.extra += item.extra;
      return acc;
    }, { sqft: 0, glass: 0, lock: 0, frame: 0, extra: 0 });

    $("sum-sqft").textContent = fmt(totals.sqft) + T.sqLabel;
    $("sum-glass").textContent = money(totals.glass);
    $("sum-lock").textContent = money(totals.lock);
    $("sum-frame").textContent = money(totals.frame);
    $("sum-extra").textContent = money(totals.extra);
    $("sum-total").textContent = money(totals.glass + totals.lock + totals.frame + totals.extra);
  }`);

replaceFn("renderItems", `  function renderItems() {
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
      const thick = item.thickness ? " - " + T.thickness + " " + item.thickness + T.mm : "";
      const lockLine = item.lockName ? " - " + T.lock + ": " + escapeHtml(item.lockName) + " (" + T.taka + item.lockRate + ")" : "";
      return \`
        <div class="window-item">
          <div class="item-thumb">\${buildDiagram(item.winType, item.heightFt, item.widthFt, { compact: true })}</div>
          <div>
            <div class="item-head">
              <span class="tag">\${kindLabel(type.kind)} \${i + 1} x \${item.qty} - \${escapeHtml(type.label)}</span>
              <button type="button" class="danger-ghost" data-action="remove-item" data-index="\${i}">\${T.muchun}</button>
            </div>
            <div class="item-details">
              \${T.map}: \${ftInLabel(item.heightFt)} x \${ftInLabel(item.widthFt)}\${thick} - \${escapeHtml(type.sub)}<br>
              \${T.kach}: \${escapeHtml(item.companyName)} (\${T.taka}\${item.companyRate}\${T.perSq})\${lockLine}
            </div>
            <button type="button" class="secondary" data-action="toggle-cut" data-index="\${i}" style="margin-top:8px;font-size:12.5px;padding:6px 12px;">\${T.cutToggle}</button>
            <div id="cutwrap-\${i}" class="hidden">\${renderCutTable(item)}</div>
            <div class="item-subtotal">\${T.subtotal} (\${fmt(item.totalSqft)}\${T.sqLabel}): \${money(item.subtotal)}</div>
          </div>
        </div>
      \`;
    }).join("");

    updateSummary();
  }`);

replaceFn("renderCuttingTab", `  function renderCuttingTab() {
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
      return \`
        <div class="window-item">
          <div class="item-thumb">\${buildDiagram(item.winType, item.heightFt, item.widthFt, { compact: true })}</div>
          <div>
            <div class="item-head">
              <span class="tag">\${kindLabel(type.kind)} \${i + 1} x \${item.qty} - \${escapeHtml(type.label)}</span>
            </div>
            <div class="item-details">
              \${T.outerSize}: \${ftInLabel(item.heightFt)} x \${ftInLabel(item.widthFt)}
              - \${T.glassGap}: \${state.cutParams.glassGap} \${T.inchi}
            </div>
            \${renderCutTable(item)}
          </div>
        </div>
      \`;
    }).join("");
  }`);

src = src.replace(
  /if \(!state\.companies\.length\) \{\s*showError\([^)]+\);\s*return;\s*\}/,
  "if (!state.companies.length) {\n      showError(T.errCompany);\n      return;\n    }"
);
src = src.replace(
  /if \(heightFt <= 0 \|\| widthFt <= 0\) \{\s*showError\([^)]+\);\s*return;\s*\}/,
  "if (heightFt <= 0 || widthFt <= 0) {\n      showError(T.errSize);\n      return;\n    }"
);

fs.writeFileSync(file, src);
console.log("patched calculator.js");
