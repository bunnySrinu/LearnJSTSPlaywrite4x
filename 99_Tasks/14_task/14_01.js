console.log("Enter a string to count vowels and consonants:");
const data = require("fs").readFileSync(0, "utf8").trim();

let vowels = 0;
let consonants = 0;

for (let char of data.toLowerCase()) {

    if (char >= 'a' && char <= 'z') {

        if ('aeiou'.includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:",vowels,"Consonants:",consonants);
