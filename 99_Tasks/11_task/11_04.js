// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).

console.log ("Enter n value and n integers (space-separated/each on a new line):");
const data = require("fs").readFileSync(0, "utf8");
const tokens = data
  .split(/\s+/)
  .filter((s) => s.length > 0)
  .map(Number);

const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let arr1 = [];

for (let i = 0; i < n; i++) {
  arr1[n - 1 - i] = arr[i];

}
// Output the reversed array elements space-separated on a single line
let output = "";
for (let i = 0; i < n; i++) {
  output += arr1[i] + " ";
}
console.log(output.trim());
