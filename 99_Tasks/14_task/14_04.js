// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).
console.log("enter a string to remove the duplicate characters:");
const data = require("fs").readFileSync(0, "utf8").trim();

//let original = data.toLowerCase();
let New = "";
    
for (let i = 0; i < data.length; i++) {
    if (New.indexOf(data[i]) === -1) {
        New += data[i];
    }
}
console.log(New);


