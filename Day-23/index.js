console.log("Day 23: Promises");

/* 
A Promise in JavaScript is an object that represents the result of an asynchronous operation that may finish in the
future, either successfully or with an error. 
In simple terms, a promise is like a guarantee that a task will eventually give a result or fail.
 */

// HOW TO CREATE A PROMISE IN JS
/* 
const promise = new Promise( function(resolve, reject){
    // we use construction function with new keyword so as to create more instances of promises
});
 */

// Executor function
function executor(resolve, reject) {
  // logic goes here
  resolve(); // this means the promise is fulfilled
  reject(); // this means the promise is rejected
}

// States of a Promise
// pending: Initially when the executor starts the execution.
// fulfilled: When the promise is resolved.
// rejected: when the promise is rejected.

// Results of a Promise
// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// HOW PROMISES ARE RESOLVED AND REJECTED
/* 
let promise1 = new Promise( function(resolve, reject){
    resolve("I am resolved")
});

let promise2 = new Promise( function(resolve, reject){
    reject("I am rejected")
}); */

// Handling Promises

// then()
let loading = false;
const promise = new Promise(function (resolve, reject) {
  // Make a Network call or api call or IO Operation
  loading = true;

  resolve("I am resolved...");
});

promise.then((result) => console.log(result));

// this means that we are handling rejected promise using .then() method
promise.then(null, (error) => console.log(error));

// catch
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// finally

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => {
    loading = false;
  });

// The Promise Chain and Rules

// Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler

// Rule 2: You can do mainly valuable three things from the .then() method. You can return another promise(for async operation),
// You can return any value from asynchronous operation. Lastly, you can throw an error.

// Getting a value of a promise

let getUser = new Promise(function (resolve, reject) {
  const user = {
    name: "Mike Jonson",
    email: "mikejonson@gmail.com",
    password: "mike211",
    address: "Nairobi, Kenya",
    permissions: ["db", "dev"],
  };
  resolve(user);
});

// You can return another promise(for async operation)
getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`); // this gives you name

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Nairobi, Kenya");
      }, 2000);
    });
  })
  .then((address) => {
    console.group(`User address is ${address}`);
  });

// Returning a simple value from the .then() handle
getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);
    return user.email;
  })
  .then(function (email) {
    console.log(`User email is ${email}`);
  });

// Throw an error from the .then() handler
getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);

    if (!user.permissions.includes("hr")) {
      throw new Error("You are not allowed to use HR module");
    }

    return user.email;
  })
  .then(function (email) {
    console.log(`User email is ${email}`);
  })
  .catch(function (error) {
    console.log(error);
  });

// Rule 3: You can rethrow from the .catch() handler to handle the error later.
// In this case, the control will go to the next closest .catch() handler.

const promise401 = new Promise(function (resolve, reject) {
  reject("401");
});

promise401
  .catch(function (error) {
    console.log(error);
    if (error === "401") {
      console.log("Rethrowing 401");
      throw error;
    } else {
      // do sth else
    }
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(`Handling ${error} here`);
  });

// Rule 4: Unlike .then() and .catch(), the .finally() handler doesn't process the result's value or error.
//  It just passes the result's value or error as it is to the next handler.

let promiseFinally = new Promise(function (resolve, reject) {
  resolve("Testing Finally");
});

promiseFinally
  .finally(function () {
    console.log("Running Finally!");
  })
  .then(function (result) {
    console.log(result);
  });

// Rule 5: Calling the .then() handler method multiple times on a single promise is Not chaining.
// Because: .then() is attached independently to the original promise, rather than passing results from one .then() to the next.

let newPromise = new Promise(function (resolve, reject) {
  resolve(10);
});

// Calling the .then() method multiple times on a single promise - It's not Chaining

newPromise.then((value) => {
  value++;
  return value;
});
newPromise.then((value) => {
  value = value + 10;
  return value;
});
newPromise.then((value) => {
  value = value + 20;
  console.log(value);
  return value;
});

// The Real Chaining Goes like this

newPromise
  .then((value) => {
    value++; // here the resolve value got incremented to 11
    return value;
  })
  .then((value) => {
    value = value + 10; // this print 21 since 11+10=21
    return value;
  })
  .then((value) => {
    value = value + 20; // this print 41 since 21+20=41
    console.log(value); // this print 41
    return value;
  });

// Handling Multiple Promises

// Promise.all() method
/* 
 promise.all([promises]) - it takes an array of promises as input, wait for all of the promises to resolve and it returns the 
array of promise results

Promise.all() is a JavaScript method that runs multiple promises in parallel and waits until all of them are fulfilled. 
If any one of them fails, the whole Promise.all() fails immediately. 
 */

const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";
//import { getPromise } from "./getpromise.js";

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

// Promise.all()- here will return new promise
Promise.all([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.any()
// Promise.any() is a JavaScript method that takes multiple promises and resolves as soon as the first promise is fulfilled.
//Unlike Promise.all(), it does not fail if some promises reject—it only fails if all promises reject.

Promise.any([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//     =======   Promise.allSettled() =====

// Promise.allSettled() is a JavaScript method that waits for all promises to finish, whether they succeed or fail,
//  and then returns the result of each one. ✅❌
// Unlike some other promise methods, it never rejects. It always resolves with the status of every promise.
// Takes an array (or iterable) of promises
// Returns a new promise
// Resolves when all promises are settled (either fulfilled or rejected)

Promise.allSettled([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//  ======= Promise.race() ========

//  Promise.race() is a JavaScript method that returns the result of the first promise that settles (either fulfilled or rejected).
// It’s called race because all promises start running, and whichever finishes first wins.
// Takes an array (or iterable) of promises
// Returns a new promise
// Resolves or rejects based on the first promise that settles

Promise.race([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(JSON.parse(result));
  })
  .catch((error) => {
    console.error("An Error Occurred");
  });

/* 
Promise.resolve() and Promise.reject() are static methods of the Promise object used to quickly create resolved or rejected promises.
They are useful when you want to return a promise without writing new Promise() manually.
   */

// Promise.resolve()- creates a promise that is immediately fulfilled (resolved).
let resolvedPromise = new Promise((resolve, reject) => resolve(value));

//  Promise.reject() creates a promise that is immediately rejected
let rejectedPromise = new Promise((resolve, reject) => reject(value));

// ======== HOW TO CANCEL A PROMISE =====
/* 
  Short answer: No — native JavaScript Promises cannot be cancelled once they start. ❌

A Promise represents a future result of an operation, and once that operation has started, the Promise will eventually settle (resolve or reject).

Why Promises can't be cancelled

Promises were designed to represent a result, not to control the operation itself.

Example:

const p = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 3000);
});

Once this runs:

The setTimeout has already started

The Promise must eventually resolve

There is no built-in cancel() method
   */

//       ======= Common ways developers handle "cancellation" ======

//  1: Using AbortController (Modern standard) - Used mainly with APIs like fetch()const controller = new AbortController();

fetch("https://api.example.com/data", {
  signal: controller.signal,
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

setTimeout(() => {
  controller.abort();
}, 2000);

// Here:
//abort() cancels the request
// The promise rejects with an AbortError

// 2: Ignoring the result (soft cancellation)
// You can stop using the result when it finishes.

let cancelled = false;

const p = new Promise((res) => {
  setTimeout(() => res("Finished"), 2000);
});

p.then((result) => {
  if (!cancelled) {
    console.log(result);
  }
});

cancelled = true;
// The promise still resolves, but your code ignores it.

// 3: Using Promise.race() for timeouts ⏱️

const timeout = new Promise((_, reject) =>
  setTimeout(() => reject("Timeout"), 2000),
);

const request = fetch("/api/data");

Promise.race([request, timeout]).then(console.log).catch(console.log);
// This doesn't cancel the request, but it stops waiting for it.