// three second wait function created
function waitUptoThreeSeconds(time) {
  var promise = new Promise(function(resolve,reject) {
      console.log(`I will wait upto 3 seconds, you asked me to wait for ${time} seconds`);

      setTimeout(() => {
        resolve(`${time} seconds completed`)
      }, time *1000);

      setTimeout(() => {
        reject("3 seconds up you asked me wait for too long!")
      }, 3000);
  })
  return promise
}

waitUptoThreeSeconds(2).then(function(result) {
  console.log(result);
}).catch(function(err) {
  console.log(err);
})

waitUptoThreeSeconds(4).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})

waitUptoThreeSeconds(4).finally(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})
