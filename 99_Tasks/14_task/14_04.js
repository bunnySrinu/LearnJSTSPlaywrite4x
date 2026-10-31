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


