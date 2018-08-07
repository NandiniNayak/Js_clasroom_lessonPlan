// object decalration
var objLiteral = {} // literal syntax, recommended

var objConstructor = new Object() //constructor syntax , not recommended

objLiteral = {
  name: "Alex",  //string
  age: 10, //integer
  loveGaming: true, //boolean
  languages: ["English","spanish"], //array
  log: function() {
    console.log("hello"); //also a function
  },
  anotherObject: {
    name: "Long",
    age: 15
  }
}
// access object values (.- dot ) notation
console.log(objLiteral.name);
console.log(objLiteral["name"]);
objLiteral.bio = "coding";
objLiteral.bio = "something else";
console.log(objLiteral);
delete objLiteral.bio;
console.log(objLiteral);
