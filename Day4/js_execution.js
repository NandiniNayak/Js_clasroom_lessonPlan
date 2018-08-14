var name
console.log("what is your name?")
process.stdin.on("readable", function() {
  name = process.stdin.read();
  if (name != null) {
    console.log(`hello ${name}, nice to meet you`);
  }
});

console.log("someother piece of code continues, while waiting for name value to be provided");
