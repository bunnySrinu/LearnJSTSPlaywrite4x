// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).
console.log("enter a string to reverse it:");
const data = require("fs").readFileSync(0, "utf8").trim();

//let original = data.toLowerCase();
let reversed = "";

for (let i = data.length - 1; i >= 0; i--) {
    reversed += data[i];
}
console.log(reversed);

