const fs = require("fs");

const sizes = {
  "logo.svg": [64, 64],
  "window-fixed.svg": [160, 200],
  "window-sliding2.svg": [160, 200],
  "window-sliding3.svg": [160, 200],
  "window-sliding4.svg": [160, 200],
  "door-single.svg": [140, 220],
  "door-double.svg": [160, 220],
  "door-sliding.svg": [160, 220]
};

for (const [name, [w, h]] of Object.entries(sizes)) {
  const file = "images/" + name;
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/<svg[^>]*>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h + '">');
  fs.writeFileSync(file, s);
  console.log("updated", name);
}
