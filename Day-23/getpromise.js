
function getPromise(URL){
    // the fetch() returns a promise that's why it can be handle using .then() 
    // And inside then() handler we can return another promise, return a value and throw an error
    return fetch(URL)
    .then((response) =>{
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }
        return response.json();
        // this response itself return a promise
    })
}

/*

getPromise() is not a built-in JavaScript function. It’s usually just a user-defined function that returns a Promise.
Developers often create functions like getPromise() to wrap asynchronous work and return a promise so it can be used with .then(),
 .catch(), or async/await.
 */

