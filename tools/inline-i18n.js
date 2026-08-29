const fs = require("fs");
const raw = fs.readFileSync("js/i18n.js", "utf8");
const json = raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
const T = JSON.parse(json);
let js = fs.readFileSync("js/calculator.js", "utf8");
if (!js.includes("const T = window.I18N;")) {
  console.log("already inlined or marker missing");
} else {
  js = js.replace("const T = window.I18N;", "const T = " + JSON.stringify(T, null, 2) + ";");
  fs.writeFileSync("js/calculator.js", js);
}
const html = fs.readFileSync("index.html", "utf8");
console.log("index bn", (html.match(/[\u0980-\u09FF]/g) || []).length);
console.log("color-grid", html.includes("color-grid"));
console.log("sum-net", html.includes("sum-net"));
console.log("i18n script", html.includes("i18n.js"));
