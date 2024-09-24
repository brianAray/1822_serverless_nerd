/**
 * Promises
 * 
 * Used for managing async tasks in JS
 * Provide a simple way to work with the results of an operation once it is completed
 * Or handle errors that may have occurred during execution
 * 
 */

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Async operation
})

// The promise constructor takes a function with two args, resolve and reject
// You call resolve when the async operation is successful
// Reject when it encounters an error

/**
 * Promise States
 * 
 * There are three states a promise can be in:
 * 
 * 1. Pending: The initial state before the promise is resolved or rejected
 * 2. Fulfilled (resolved): The state is resolved successfully
 * 3. Rejected: The state when an error has occurred during operation
 * 
 */

myPromise
    .then(result => {
        // handle success
    })
    .catch(error => {
        // handle error
    });

/**
 * Chaining Promises
 * 
 * Promises can be chained together to perform a sequence of async operation in a specific order
 * Each .then() call returns a new promise, allowing you to cahin more async code
 * 
 * 
 * fetchData()
 *  .then(data => processData(data))
 *  .then(processedData => displayData(data))
 *  .catch(error => handleErrors(error));
 */

/**
 * Promise.all()
 * 
 * The promise.all() method takes an array of promises and returns a new promise that resolves when all of the input promises
 * Have resolved or rejects when any of them rejects
 * It is useful for running multiple async operations in parallel
 */

const promises = [fetchData(), fetchData2(), fetchData3()];
Promise.all(promises)
    .then(results => {
        // Handle results from all promises
    })
    .catch(error => {
        // handle error from any of the promises
    });

/**
 * Promise.race();
 * 
 * this method takes an array of promises and returns a new promise
 * 
 * It is useful fro timing out operations or selecting the fastest response
 */

const timeoutPromise = newPromise((resolve, reject) => {
    setTimeout(() => reject("timeout exceeded"), 5000);
});

const fetchDataPromise = fetchData();

Promise.race([timeoutPromise, fetchDataPromise])
    .then((result) => {
        // handle result of the first to finish
    })
    .catch(error => {
        // handle error or timeout
    })