// function getTempCallback(location, callback) {
//   callback(undefined,78);
//   callback('City not found');
// }
//
// getTempCallback('Pacifica', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject("One or more of the operands are not numbers.");
    }
  })
}

console.log(addPromise(3,4));
console.log(addPromise('a', 5));
console.log(addPromise('dog', 'cat'));
