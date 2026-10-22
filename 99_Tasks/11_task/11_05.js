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

// Output the Duplicates in the array in new line and if no duplicates are found, output "No Duplicates Found"
let output = "";
let hasDuplicates = false;
for (let i = 0; i < n; i++) {
  if (arr.indexOf(arr[i]) !== i) {
    output += arr[i] + "\n";
    hasDuplicates = true;
  }
}
if (!hasDuplicates) {
  console.log("No Duplicates Found");
} else {
  console.log(output.trim());
}
