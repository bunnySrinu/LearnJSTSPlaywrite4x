// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).

//Print a inverted right-angled triangle pattern of stars with the given number of rows.

console.log("Enter the number of rows for the inverted triangle pattern:");
const data = require('fs').readFileSync(0, 'utf8').trim();
const n = parseInt(data);

for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}