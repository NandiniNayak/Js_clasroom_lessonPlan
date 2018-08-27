// ES6 Syntax
// Rest Operator
const checkAdult = (...args) => {
  return args.filter(el => el > 18);
}
console.log(checkAdult(10, 5, 20));


// Es5 Syntax
function checkAdult(num1, num2, num3) {
  var args = [num1, num2, num3]
  var result = args.filter(checkValue);
  return result
}

function checkValue(el){
  return el > 18
}

console.log(checkAdult(10, 5, 20));
