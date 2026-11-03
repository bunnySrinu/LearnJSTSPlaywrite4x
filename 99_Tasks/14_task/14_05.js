// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).
console.log("enter two strings to check if they are anagrams of each other:");
const data = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

let str1 = data[0].toLowerCase();
let str2 = data[1].toLowerCase();

if (str1.length !== str2.length) {
    console.log("NO");
} else {
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");

    console.log(sorted1 === sorted2 ? "YES" : "NO");
}