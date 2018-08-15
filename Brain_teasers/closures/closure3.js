function greet(saySomething) {
  return function(name){
    console.log(`${saySomething} ${name}`);
  }
}

var sayHello = greet("hello");
sayHello("JESSE");
