// function Dog(name, location) {
//   console.log(this);
//   this.name = name;
//   this.location = location;
//   console.log(this);
// }
// // Dog();  // treated like a normal function, this variable points to global object
// dog1 = new Dog("tommy");
// console.log(dog1.name); // once an instance of the function is created this variable points to the function
//
//
// // Adding methods to the function
// Dog.prototype.speak = function () {
//   console.log(`whoof my name is ${this.name}, and I am from ${this.location}`)
// }
//
// Dog.prototype.setLocation = function (location) {
//     this.location = location;
// }
//
//
// // Dog.speak(); // cannot call the function methods directly, only the instance created from this function can access these methods
//
// // create an instance
//
// dog1 = new Dog("Twiggy", "Sydney");
// console.log(dog1.name);
// console.log(dog1.location);
// dog1.speak();
// dog1.setLocation("melbourne");
// console.log(dog1.location);


// ############### class in Js##########################
// dog1 = new Dog("twiggy", "Sydney");  // classes are not hoisted like functions, hence classes can be used only after creation(declaration)
var dogCount = 0;
class Dog {
  // var dogCount = 0; // not allowed, you cannot randomly create variables inside a class, it has to be in a method unlike functions, where a variable can be created anywhere in the funcion
  constructor(name,location) {
    this.name = name;
    this.location = location;
    console.log(this);
    dogCount ++;
  }
  static dogCount() {
    console.log(`total number of dogs : ${dogCount}`);
  }
}
// Dog();   cannot invoke a class like you can with functions
dog1 = new Dog("twiggy", "Sydney");
console.log(dog1.name);
Dog.prototype.speak = function () {
  console.log(`whoof my name is ${this.name}`);
}
dog1.speak();
dog2 = new Dog("tommy", "melbourne");
console.log(dog2.name);

Dog.dogCount();
