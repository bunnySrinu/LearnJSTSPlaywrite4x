// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).

//Print a pyramid pattern of stars with the given number of rows.

console.log("Enter the number of rows for the pyramid pattern:");
const data = require('fs').readFileSync(0, 'utf8').trim();
const n = parseInt(data);

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        process.stdout.write("*");
    }

    console.log("");
}