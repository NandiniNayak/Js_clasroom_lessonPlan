var promise = new Promise(function(resolve,reject) {
  if (true) {
    resolve("everything worked");
  }
  else {
    reject("Something went worng");
  }
});

promise.then(function(result) {
  console.log("result");
}).catch(function(err) {
  consoel.log(err);
})
