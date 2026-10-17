// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).

console.log("Enter the lengths of the three sides of a triangle (space-separated):");
const data = require('fs').readFileSync(0, 'utf8');

const [a,b,c] = data.trim().split(/\s+/).map(Number);

if (a===b && b===c) {
    console.log("Equilateral triangle");
}else if (a===b || b===c || a===c) {
    console.log("Isosceles triangle");
}else {
    console.log("Scalene triangle");
}