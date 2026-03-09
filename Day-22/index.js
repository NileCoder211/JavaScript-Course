console.log("day 22: Asynchronous JavaScript")

//  Asynchronous JavaScript
/* 
It can be achieve through:
1 - setTimeout() function
2- callback function
3- async/await keywords
4- event loop
 */

// 1. setTimeout
// it takes two arguments:
// a) function that setTimeout execute
// b) After how many time JS should execute this particular function(timer)

console.log("Start"); // synchronous

setTimeout(()=>{
    // console.log("Waiting for two seconds to get done!")
}, 2000)// Asynchronous : 2000 milliseconds = 2 seconds

console.log("End"); // synchronous


// Callback Function- This is a function passed as argument to another function.
// A callback gives you a way to control what happens next without hard-coding it inside the original function. 
// This makes programs more flexible and reusable.
// In other words, it handles the results of asynchronous operations

function greetMe(name, callback){
    console.log(`Hi ${name}`);
    setTimeout(()=>{
        callback();
    }, 2000)// this is a timer
    
    console.log("I am still hanging here")
}

function sayBye(){
    console.log("Bye")
}

greetMe("John", sayBye);


// Pizza Order App - which leads to callback Hell
const storeEl = document.getElementById("store");
const orderDetailsEl = document.getElementById("order-details");
const addOnEl = document.getElementById("add-on");
const orderEl = document.getElementById("oder")

function orderPizza(type, name){
    // query the pizza hub for a store
    storeEl.textContent= `Locating Store...`
    query(`api/pizzahub/`, function(result, error){
        if(!error){
            let shopId = result[0];
            console.log(shopId)
            storeEl.textContent = `Located Store:${shopId}`;


            // Get the store and query pizzas
            orderDetailsEl.textContent = `Loading Order...`
            query(`api/pizzahub/pizzas/${shopId}`, function(result, error){
                if(!error){
                    let pizzas = result;

                    // Find if my pizza is available
                    let myPizza = pizzas.find((pizza)=>{
                        return pizza.type === type && pizza.name === name;
                    });
                    
                    console.log(myPizza);
                    orderDetailsEl.textContent = `You have ordered for ${myPizza.type} ${myPizza.name}`

                    // check for the free beverages
                    addOnEl.textContent = `Checking for Add-Ons...`
                    query(`api/pizzahub/beverages/${myPizza.id}`, function(result, error){
                        if(!error){
                            let beverage = result[0]; // since this return an array
                            console.log(beverage)
                            addOnEl.textContent = `We have added and add-on ${beverage.name} for you.`

                            // prepare an order
                            orderEl.textContent = `Preparing your order...`
                            query(`api/order`, function(result, result){
                                if(!error){
                                    console.log(`Your oder of ${type} ${name} with ${beverage.name} has been placed`);
                                }else{
                                    console.log("No pizza is there for you today!");
                                    orderEl.textContent = `
                                    Your order of ${type} ${name} with ${beverage.name} has been placed
                                    at ${new Date(result.createdAt)}
                                    `;
                                }
                            }, {
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify({
                                    pizzaId: myPizza.id,
                                    beverageId: beverage.id,
                                })
                            })
                        }
                    })
                }
            })
        }
    })
}


orderPizza("veg", "Margherita")

// callback hell or callback pyramid