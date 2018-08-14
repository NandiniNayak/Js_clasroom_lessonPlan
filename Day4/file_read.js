var fs = require('fs');

var resp = ""

resp += fs.readFileSync('myFile.txt');
console.log(resp);   // prints file content first and then runs the next line of code

// fs.readFile('myFile.txt', (err, data) => {
//    resp += data;
//    console.log(resp);
// });

console.log("something else happening when file is being read");
