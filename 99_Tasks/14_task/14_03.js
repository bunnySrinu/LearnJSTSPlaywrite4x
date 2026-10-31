console.log("enter a string to reverse it:");
const data = require("fs").readFileSync(0, "utf8").trim();

//let original = data.toLowerCase();
let reversed = "";

for (let i = data.length - 1; i >= 0; i--) {
    reversed += data[i];
}
console.log(reversed);

