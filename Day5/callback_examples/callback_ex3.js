var name;
console.log("what is you name?");
process.stdin.on("readable", function () {
  name = process.stdin.read();
  if (name != null) {
    console.log("Hello " + name );
    console.log(`Hello ${name}`);
  }
});
console.log("someother piece of code running");
