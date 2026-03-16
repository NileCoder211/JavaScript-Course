console.log("Day 24: Async/Await");

/* 
async/await is a modern way to work with Promises in JavaScript that makes asynchronous code look like normal
 synchronous code.
Instead of chaining many .then() calls, you can pause execution until a Promise resolves.
 */


//   ====== Async =======
// When you mark a function with async, JavaScript does two main things:
    // 1: It automatically returns a Promise
    // 2: It allows the use of await inside the function
    
async function foo() {
    return (101);
}

const ret = foo()
console.log(ret)// return a promise


// if you explicitly return a promise, JS would not wrap it again into a promise
async function paa() {
    return Promise.resolve(101)
}

const result = paa()
console.log(result);


//  ========== await ==========
// await keyword tells the program :
//     “Pause this function here until an asynchronous task finishes, then continue.”
//     But it does not block the whole program—only the async function waits while other tasks can still run.
//  async/await was introduced mainly to make Promise chaining with .then() easier to write and read in JavaScript. 
// It doesn't replace Promises internally, but it removes the messy .then() chains and lets you write asynchronous 
// code that looks synchronous.

async function doo() {
    return Promise.resolve(2002);
}

async function tacklePromise() {
    const result = await doo(); // 2002
    console.log(result);
}

tacklePromise();//this function return nothing and that means it's going to be undefined, but that's not the case here
console.log(tacklePromise())// this function return a promise since an async keyword is used infront of it since
//  async keyword will always return a promise


// ===== Error Handling in async/await
// here we use try-catch block with finally which sometimes can be optional



//   ========  Top Level await   =======
// there are ways to use await outside of an async function in modern JavaScript. The rule used to be strict, 
// but newer JavaScript environments added features that allow it in certain contexts.

//  ==== 1: Modern JavaScript supports Top-Level Await in ES Modules.


const response = await fetch("https://api.example.com/data");
const data = await response.json();

console.log(data);
/* 
This works without wrapping it in an async function.
But there is a condition
The file must be treated as a module.
In browsers
<script type="module" src="app.js"></script>
What is this?
In Node.js
Use .mjs file extension
or
Set "type": "module" in package.json
Then you can use await at the top level. */


// 2: Immediately Invoked Async Function (Old Workaround)
// Before top-level await existed, developers used this pattern:

(
    async () => {
       const response = await fetch("https://api.example.com/data");
       const data = await response.json();

       console.log(data);// this gives you the fetched data and print it in the console
  }
)();

/* 
Explanation:

async () => {} creates an async function

( ... )() immediately executes it

So technically await is still inside an async function, but it behaves like global code.
 */



//      ======== Handling Multiple async/await ==========


const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';



async function resolvePokemons() {
    const responses = Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL),
        fetch(RATICATE_POKEMONS_URL),
        fetch(KAKUNA_POKEMONS_URL)
    ]);
    const results = await responses; // this return a promise that's why we have to settle it using await
    console.log(results)

    const pk_1 = await results[0]?.value.json();// this return a promise, which is then settled using await
    const pk_2 = await results[1]?.value.json();// this return a promise, which is then settled using await
    const pk_3 = await results[2]?.value.json();// this return a promise, which is then settled using await

    console.log(pk_1);
    console.log(pk_2);
    console.log(pk_3);
}

async function resolvePokemonsV2() {
    const responses = await Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL).then(response => response.json()),
        fetch(RATICATE_POKEMONS_URL).then(response => response.json()),
        fetch(KAKUNA_POKEMONS_URL).then(response => response.json())
    ]);

    console.log(responses);
}

resolvePokemonsV2();