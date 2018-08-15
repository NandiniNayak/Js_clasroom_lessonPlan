function createFunctions() {
  arr= [];

  for(var i=0; i<3; i++) {
      let j = i
      arr.push(
        function() {
          console.log(j);
        }
      );
    }
    return arr;
  }

var fs = createFunctions();
fs[0]();
fs[1]();
fs[2]();
