async function sequentialExecutor(functionsArray) {
  try {
    for (const func of functionsArray) {
      await func();
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve();
}

// Example usage:

// // Sample asynchronous functions
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 1 executed");
//       resolve();
//     }, 1000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 2 executed");
//       resolve();
//     }, 1500);
//   });
// }

// function asyncFunc3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Function 3 executed");
//       reject("Function 3 failed"); // Simulating a failure
//     }, 2000);
//   });
// }

// Array of asynchronous functions
//const functionsArray = [asyncFunc1, asyncFunc2, asyncFunc3];

// Execute functions sequentially
sequentialExecutor(functionsArray)
  .then(() => {
    console.log("All functions executed successfully");
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  module.exports=sequentialExecutor;