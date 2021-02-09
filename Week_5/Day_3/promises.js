// const flip = () => {
//   x = (Math.floor(Math.random() * 2) == 0);
//   if(x){
//     return "heads";
//   }else{
//     return "tails";
//   }
// }

// console.log(flip());

// Promises & Async/await is a new way to write asynchronous code.
// Async/await is built on top of promises, therefore,
// it is also non blocking.
// The big difference is that asynchronous code looks and
// behaves a little more like synchronous code.
// This is where all its power lies.
// Previous options for asynchronous code were callbacks and promises.

// const flipACoin = new Promise((resolve, reject) => {
//
// });

// with the executor function filled out
// const flipACoin = new Promise((resolve, reject) => {
//     const flipResult = flip();
//     if(flipResult) {
//       resolve();
//     } else {
//       reject();
//     }
// });
// console.log("I'm about to flip a coin!");


// Interacting With Surrounding Code
// console.log("I'm about to flip a coin!");
// const flipACoin = new Promise((resolve, reject) => {
//   console.log("I'm flipping the coin!");
//   const flipResult = flip(); //let's say flip() takes a few seconds
//   if(flipResult) {
//     console.log("Here is the coin flip result!", flipResult);
//     resolve();
//   } else {
//     reject();
//   }
// });
// console.log("I have flipped the coin.")


// Waiting For A Promise To Finish
// console.log("I'm about to flip a coin!");
// //
// const flipACoin = new Promise((resolve, reject) => {
//   console.log("I'm flipping the coin!");
//   const flipResult = flip(); //let's say flip() takes a few seconds
//   if(flipResult) {
//     console.log("Here is the coin flip result!", flipResult);
//     resolve();
//   } else {
//     reject();
//   }
// })
// .then(() => {
//   console.log("I have flipped the coin.")
// });

// Here are all of the other Promise functions that you can use:
// const flipACoin = new Promise((resolve, reject) => {
//   resolve();
// })
// .then(() => {
//   doSomethingElse()
//   //use `.then()` to do something after `resolve()` has been called
// })
// .catch(() => {
//   //use `.catch()` to do something after `reject()` has been called
// })
// .finally(() => {
//   //use `.finally()` to do something either way
// });

// Returning Values Out Of Promises
// resolve() should take in an argument
// The function in .then() should take in a parameter
// const flipACoin = new Promise((resolve, reject) => {
//   const flipResult = flip(); //let's say flip() takes a few seconds
//   if(flipResult) {
//     resolve(flipResult);
//   } else {
//     reject();
//   }
// }).then((flipResult) => {
//   console.log(`The result was ${flipResult}`);
// });

// const p = new Promise((resolve, reject) => {
//     if(true){
//       resolve('hello world');
//     }
//     else{
//       reject('error');
//     }
// });
//
// p.then((result) => {
//     // console.log(result);
//     return result + "!";
// })
// .then((result1) => {
//    return result1 + "?";
// })
// .then(result2=>{
//   return result2 + "#";
// })
// .then(result3 => {
//   console.log(result3);
// })
// .catch(err => {
//
// });

// Using A Promise Later
// const flipACoin = new Promise((resolve, reject) => {
//   const flipResult = flip(); //let's say flip() takes a few seconds
//
//   if(flipResult) {
//     resolve(flipResult);
//   } else {
//     reject();
//   }
// });
// //
// //...
// //do other things
// //...
// //
// console.log("Wait did I flip the coin?");
// //
// flipACoin.then((flipResult) => {
//   console.log("Oh I did!");
//   // console.log(flipResult);
// });
// //
// console.log("Double checking...");
// // //
// flipACoin.then((flipResult) => {
//   console.log("Okay I definitely did!");
//   // console.log(flipResult);
// });

// Chaining Promises
// The most aesthetic property of promises
// is that they can be chained:
// const flipACoin = new Promise((resolve, reject) => {
//   resolve();
// }).then(() => {
//   //doSomething();
// }).then(() => {
//   //doSomethingElse();
// }).then(() => {
//   //doAnotherThing();
// });

// Every .then() call in a chain waits on the last
// Promise in the chain, not the .then() before it.
// That means if doSomething() takes a while,
// doSomethingElse() may finish
// executing before doSomething() is finished executing.

// Here’s an example
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// })
// .then((result) => {
//   console.log("Done!1");
// })
// .then((result) => {
//   setTimeout(() => {
//         console.log("Done!2");
//   }, 5000);
// })
// .then((result) => {
//   console.log("Done!3");
// });

// Easy way to wait on the last one
// console.log('1111111111111111111111111');
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// }).then((result) => {
//   console.log("Done!1");
// }).then((result) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Done!2");
//       resolve();
//     }, 3000);
//   });
// }).then((result) => {
//   console.log("Done!3");
// });
// console.log('2222222222222222222222222');

// Making A Promise Start Later
// const doThisLater = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Done!");
//     resolve();
//   });
// };
//
// console.log("After promise-creating function");
//
// doThisLater();


// static functions
// Promise.all([promise1,promise2,.....]).then((results) => {
//   //if all promises in the collection resolves,
//   // `results` is an array of
//   // [promise1 result, promise2 result, promise3 result]
// }).catch((error) => {
//   //if any promise is rejected,
//   // `error` will have the rejected value of the promise that failed
//   //if multiple failed,
//   // `error` will be the error of the first one that failed
// });
//
// Promise.allSettled(allPromises).then((results) => {
//   //waits until all promises either resolved or rejected
//   //`results` will be an array of
//   // [promise1 result, promise2 result, promise3 result]
// });
//
// Promise.race(allPromises).then((value) => {
//   //waits until first promise in array is resolved
//   //`value` will be the resolved value of the first promise resolved
// }).catch((value) => {
//   //waits until first promise in array is rejected
//   //`value` will be the rejected value of the first promise rejected
// });
//
// Promise.resolve(); //makes a promise that instantly resolves
//
// Promise.reject(); //makes a promise that instantly rejects

// const resolvingPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved result");
//   }, 2000);
// });
//
// const rejectingPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected result");
//   }, 2000);
// });
//
// resolvingPromise.then((result) => {
//   console.log(`done! + ${result}`);
// });
//
// rejectingPromise.catch((result) => {
//   console.log(`done! + ${result}`);
// });
//
// resolvingPromise.finally((result) => {
//   //note that this demonstrates that there is no result passed to
//   // `.finally()`
//   console.log(`done! + ${result}`);
// });


// const resolvingPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved result");
//   }, 2000);
// });
//
// const rejectingPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected result");
//   }, 2000);
// });
//
// resolvingPromise.then((result) => {
//   console.log(`done! ${result}`);
// })
// .catch((error) => {
//   console.log(`done! ${error}`);
// })
// .finally(() => {
//   //note that this demonstrates that there is no result passed to
// `.finally()`
//   console.log(`do something finally`);
// });
//
//

//
//Managing Multiple Promises
//
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result1");
  }, 1000);
});
//
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("result2");
  }, 2000);
});
// //
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result3");
  }, 3000);
});

// Promise.all([promise1, promise2, promise3])
// .then((results) => {
//   console.log(results);
// }).catch((error) => {
//   console.log(error);
// });
//
// Promise.allSettled([promise1, promise2, promise3])
// .then((results) => {
//   console.log(results);
//   // results.map(r => {
//   //   console.log(`{ status: ${r.status}, value: ${r.value}, reason: ${r.reason} }`);
//   // })
// })
//
// Promise.race([promise1, promise2, promise3])
// .then((results) => {
//   console.log(results);
// })
// .catch((error) => {
//   console.log(error);
// });

//Exercise 1:
//Write a function testNum that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.

//Exercise 2:
//Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(),
// will take in an array of words and capitalize them,
// and then the second function, sortWords(),
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.


// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(),
// will take in an array of words and capitalize them,
// and then the second function, sortWords(),
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]