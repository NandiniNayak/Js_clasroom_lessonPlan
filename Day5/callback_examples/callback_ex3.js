// refactored the gets.chomp like code in javascript refactored
var name;
console.log("what is you name?");
// process.stdin.on expects two arguments :
//   - readable -> indicating reading the input from terminal
//   - callback function - that gets called when the user provides input

process.stdin.on("readable", callback);
console.log("someother piece of code running");

function callback() {
    name = process.stdin.read();
    if (name != null) {
      console.log("Hello " + name );
      console.log(`Hello ${name}`);
    }
}
