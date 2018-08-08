console.log(this);
function greet() {
  // console.log("hello");

  this.name = "Andrew";
  console.log(this);
}
greet();
obj = {
  name: "Alex",
  log: functio () {
    this.name = "Long";
  }
}
console.log(obj);
obj.log();
console.log(obj);
