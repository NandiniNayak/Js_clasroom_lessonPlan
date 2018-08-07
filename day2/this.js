console.log(this);
function greet() {
  // console.log("hello");

  this.name = "Andrew";
  console.log(this);
}
greet();

obj = {
  name: "Alex",
  changeName: function () {
    this.name = "Long";
  }
}

console.log(obj);
