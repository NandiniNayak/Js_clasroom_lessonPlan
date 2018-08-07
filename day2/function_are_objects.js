// def greet
//     puts "hello"
// end
// function definition
// function greet(name, age) {
//     age = age || 10;
//     console.log(`hello ${name}, you are ${age} years old`);
// }

// function call or invocation
// greet("john",20);

// anonymous function : unnamed function assigned to variable
greet();
var greet = function () {
  console.log("hello");
}
// JE:
var greet; // undefined
greet()
greet = () => {
  console.log("hello");
}


// arrow functions
() => {
  console.log("hello")
}

// one argument arrow function

name => {
  console.log(name);
}

(name, age) => {
  console.log(name, age);
}
