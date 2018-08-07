function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// function instance
person1 = new Human("Alex", "Holder");
person2 =new Human("Oliver", "Hardman");
Human.prototype.name = "Arthur";
console.log(person1);
console.log(Human.prototype);
console.log(person1.name);
console.log(person2.name);
