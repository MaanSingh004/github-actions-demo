import fs from "fs";

const files = ["index.html", "style.css", "script.js"];

for (const file of files) {
    if (!fs.existsSync(file)) {
        throw new Error(`${file} is missing`);
    }
}

console.log("Build successful!");