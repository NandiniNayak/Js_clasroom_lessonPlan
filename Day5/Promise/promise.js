/* ##################################################################
 promise example - code syntax: find out how is it different from events and callbacks?? (to be done)
 summary: promises are used to handle the callback hell(nested call backs errors and success).
 promise provides two methods, resolve and reject, based on the result of the function. if resolve, then proceed further with then method, if reject, throw error or catch using catch method
 success results can be chained.
 checkout the timeout code
##################################################################*/
var promise = new Promise(function(resolve, reject){
      //do something async : perform a task which takes a while to execute.
    if(/*everything worked fine: eg: load image was successful*/ ){
      resolve("stuff worked"!);
    }
    else{
      reject(Error("It broke!"));
    }
});
//
// promise returns the resolve or reject result to the then method, which can further pass a function as argument
promise.then(function(result){
  console.log(result); //"stuff worked!"
  },function(err){
    console.log(err); //It broke!
  }
);

// for the code above, you can also use catch

promise.then(function(result){
  console.log(result); //"stuff worked!"
  }).catch(function(err){
    console.log(err); //It broke!
});

/*Chaining
then() isn't the end of the story, you can chain thens together to transform values or run additional async actions one after another.*/
var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
});

// this is a nested promise, with error handling and callbacks for recovery and next step

asyncThing1().then(function() {
  return asyncThing2();
}).then(function() {
  return asyncThing3();
}).catch(function(err) {
  return asyncRecovery1();
}).then(function() {
  return asyncThing4();
}, function(err) {
  return asyncRecovery2();
}).catch(function(err) {
  console.log("Don't worry about it");
}).then(function() {
  console.log("All done!");
})

/* ##################################################################
promise example with timeout: run this in terminal
Also try promise-code.html in terminal
##################################################################*/
  function waitUpToThreeSeconds(seconds){
    return new Promise((reject,resolve) => {
        console.log(`I will wait for 3 seconds, you asked me to wait for ${seconds} seconds`)

      setTimeout(
        () => {
            reject('3 seconds are up you asked me to wait too long')
        },
        3000
      )

      setTimeout(
        () => {
          resolve (`${seconds}seconds are finished!`)
        },
        seconds*1000
      )

    })
  }
  waitUpToThreeSeconds(2).then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })

  waitUpToThreeSeconds(4).then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })
