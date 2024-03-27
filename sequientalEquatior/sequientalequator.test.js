const sequentialExecutor = require('./sequientalequator');

// sequentialExecutor.test.js

const sequentialExecutor = require('./sequentialExecutor');

// Mock asynchronous functions for testing
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 1 executed");
      resolve();
    }, 1000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 2 executed");
      resolve();
    }, 1500);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Function 3 executed");
      reject("Function 3 failed"); // Simulating a failure
    }, 2000);
  });
}

describe('sequentialExecutor function', () => {
  test('All functions execute successfully', async () => {
    const functionsArray = [asyncFunc1, asyncFunc2];
    await expect(sequentialExecutor(functionsArray)).resolves.toBeUndefined();
  });

  test('One function fails', async () => {
    const functionsArray = [asyncFunc1, asyncFunc2, asyncFunc3];
    await expect(sequentialExecutor(functionsArray)).rejects.toEqual("Function 3 failed");
  });

  test('Empty array of functions', async () => {
    const functionsArray = [];
    await expect(sequentialExecutor(functionsArray)).resolves.toBeUndefined();
  });

  test('Array of functions is null or undefined', async () => {
    const functionsArray = null;
    await expect(sequentialExecutor(functionsArray)).rejects.toThrow();
  });
});
