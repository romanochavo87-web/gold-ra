// Собирает папку www: файлы приложения + библиотека Supabase
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const www = path.join(root, "www");
fs.rmSync(www, { recursive: true, force: true });
fs.cpSync(path.join(root, "web"), www, { recursive: true });
fs.mkdirSync(path.join(www, "vendor"), { recursive: true });
fs.copyFileSync(
  path.join(root, "node_modules/@supabase/supabase-js/dist/umd/supabase.js"),
  path.join(www, "vendor/supabase.js")
);
console.log("www готова");
