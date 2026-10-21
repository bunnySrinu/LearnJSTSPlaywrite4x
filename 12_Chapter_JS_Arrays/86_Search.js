let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail"); //1
results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");

// includes — returns boolean
console.log(results.includes("error")); // true