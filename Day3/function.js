// challenge: dog1 location must be changed to adelaide
// dog2 location must be changed to brisbane

// Display steps walked by each dog by creating a function named showDistance
// function definition / statement
Dog();
function Dog(name,location) {
  console.log(this);
  this.name = name;
  this.location = location;
  console.log(this);
}
// Dog(); //function invocation
// instance method:
dog1 = new Dog("Twiggy", "Sydney");
dog2 = new Dog("Tommy", "Melbourne");
console.log(dog1.name);
console.log(dog2.name);

// prototype allows you to add method to the function
Dog.prototype.speak = function() {
  console.log(`whoof my name is ${this.name} and I am from ${this.location} `)
}
Dog.prototype.setLocation = function(newLocation) {
    this.location = newLocation;
}
Dog.prototype.showDistance = function(steps) {
    console.log(`${this.name}, walked ${steps} today`);
}
// Dog.speak(); //doesn't work
dog1.speak();
dog2.speak();

dog1.setLocation("Adelaide");
dog2.setLocation("Brisbane");
console.log(dog1.location);
console.log(dog2.location);
dog1.showDistance(10);
dog2.showDistance(20);
