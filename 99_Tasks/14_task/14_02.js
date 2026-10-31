console.log("enter a string to check if it is a palindrome:");
const data = require("fs").readFileSync(0, "utf8").trim();

let original = data.toLowerCase();
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

if (original === reversed) {
    console.log("YES");
} else {
    console.log("NO");
}

/*
const data = require("fs").readFileSync(0, "utf8").trim();
const reversed = data.split("").reverse().join("");
console.log(data === reversed ? "YES" : "NO");
*/