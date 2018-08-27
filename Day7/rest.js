const checkAdult = (...args) => {
  return args.filter(el => el > 18)
}

console.log(checkAdult(10,20,5,30));
