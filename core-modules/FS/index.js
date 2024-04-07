const fs = require("fs");

fs.writeFileSync("myfile.txt", "hello programmers");
const data = fs.readFileSync("myfile.txt");
console.log(data.toString());
