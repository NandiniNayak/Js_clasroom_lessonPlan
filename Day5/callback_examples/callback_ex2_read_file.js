var fs = require('fs');

var resp = ""

// file read without a callback
resp += fs.readFileSync('myFile.txt');
console.log(resp);   // prints file content first and then runs the next line of code

// file read with a callback : executes rest of the code while readFile function is taking time to read file content

fs.readFile('myFile.txt', (err, data) => {
   resp += data;
   console.log(resp); //prints "something else happening....", before reading the file content
});

console.log("something else happening when file is being read");
