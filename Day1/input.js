// prompt("whats your name?");
var name;
console.log("what is you name?");
process.stdin.on("readable", function () {
  name = process.stdin.read();
  if (name != null) {
    console.log("Hello " + name );
    console.log(`Hello ${name}`);
  }
});
console.log("hello before name value is provided");


setTimeout(function () {
  console.log("hello after 5 seconds")
}, 5000);
