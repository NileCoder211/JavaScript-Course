console.log("Day 06")


// FUNCTIONS //


// Function is a reusable code that can be executed


// definition or declaration of a function using a function reserved key word

function printThis(){
    console.log("Printing...")
}


// call or invoke a functuin
printThis(); // semicolon(;)is optional here




  // Function as an Expression

  let printMe = function(){
    console.log("Print Me")
  }

printMe();


// Mathematically function is something that map input to the output
// this means u will provide some inputs to the function and function will
// do some calculation based on those inputs and will produce some outputs.

          // EXAMPLES ARE PARAMETER AND ARGUMENT

function sum(a,b) {
const result = a+b;
console.log(result)
}
/*
  a and b are parameters.
 A parameter ia a placeholder or a variable that is passed as an input to
 a function while declaring or defining a function
*/
sum(2,5)
/*
2 and 5 are arguments
An argument is the actual value that replaces that declared variable or
placeholder while invoking or calling the function
 */

// RETURN STATEMENT IN FUNCTION //



function sum(a,b) {
    const result = a+b;
   //console.log(result)
      return result;// whtatever should be return must be in the same line with your return statement as shown above
    }
    
let result = sum(10,9)
function double(x){
    return 2*x;
}
console.log( double(result))



// DEFAULT PARAMETER
// Default parameter is a parameter that has default value.
/*
function calc(a,b){
    let cal=(2* (a+b))
    console.log(cal)
    return cal
}
*/
calc(2,)// This will result to NaN since no argument that has been passed 
// to the second parameter.Therefore a default parameter can be helpfull in this case,i.e

function calc(a,b=0){
    let cal=(2* (a+b))
    console.log(cal)
    return cal;
}

calc(2,) // This will work since the default value is zero(0)




// REST PARAMETER

function calculateThis(x,y, ...rest){
    console.log(x, y, rest)
}

// rest parameter must be last formal parameter.
calculateThis(1,2,3,4,5,6,7,8,9)




// NESTED FUNCTION
// Nested function is a function inside another function.
// Outer function is a function which hold another function inside it.
// Inner function is a function inside another function.

/*

function outer(){
    console.log("Outer");

    function inner(){
        console.log("Inner");
        
    }
        // this inner function can only be called inside of the outer function becoz it's a function scoped,,I.e
          
    
    inner();
}

outer()

*/

// HOW TO EXECUTE THIS INNER FUNCTION OUTSIDE OF THE OUTER FUNCTION
// return property is the best option


function outer(){
    console.log("Outer");

        return function inner(){
        console.log("Inner");
        
    }
          inner()
}

 outer()
let retfunc = outer()
console.log(retfunc())


// CALLBACK FUNCTION
// This is a function that can be passed  as an argument to another function and call it back later based on certain condition
// A function withot a name is called ANONYMOUS FUNCTION

// CALLBACK WITH A NAMED FUNCTION
 
 function foo(func){
    console.log("foo");

    func();
 }

const buz = function(){
    console.log("buz");
}


foo(buz);
 


// CALLBACK WITHOUT A NAMED FUNCTION
 
 function foo(func){

    console.log("foo");
 
    func();
 
 }
 

foo(function(){
    console.log("buz")
}
) 
 

// CALLBACK FUNCTION BASED ON CONDITION

  var toCallBuz = false;// i used var becoz this variable is outside of the block function


function foo(func){

    console.log("foo");
           
   if ( toCallBuz){
    func();
   }

 
 }
 

 foo(function(){
    console.log("buz")
}
) 

 
// PURE FUNCTION
// Pure function is a function that return or provides the same output for the same input

/* 
function greeting(name){
    return "Hello" + name;

}


console.log(greeting("khorado"));
console.log(greeting("khorado"));
console.log(greeting("khorado"));
console.log(greeting("khorado"));
console.log(greeting("khorado"));
 */


// ADDING SIDE EFFECT TO THE PURE FUNCTION

 let greetingMessage = "Hola"
function greeting(name){
    return greetingMessage + name;

}


console.log(greeting ("khorado" ));
console.log(greeting("khorado"));

greetingMessage = "Hey"

console.log(greeting("khorado"));
console.log(greeting("khorado"));
console.log(greeting("khorado"));

 

// Higher Order Function (HOF)


function getCameral(camera){
    camera();
}


getCameral(function(){
    console.log("Sony")
}

)

// HOF that can return another function


function returnfunc(){
    return function(){
        console.log("Hello")
    }
}

const retfun = returnfunc();
retfun();
//NB Mostly used when creating wrappers.



//      ARROW FUNCTION (=>) //


var greetMee = () =>{
    console.log("Ayeee")
}

greetMee();

// when passing an argument to the arrow function
let greetMe = (greetingMsg) =>{
    console.log(greetingMsg)
}

greetMe("hola");


// when returning a value in arrow function


let greetMeee = (greetingMsg) =>{
    return greetingMsg + "great"
}

 console.log(greetMeee("hola"));


 // IIFE(Immediately Invoked Function Expression)
/*
 (function(){
    console.log("IIFE")
 })()
*/
 // passing parameter and argument

 (function(count){
    console.log("IIFE",count)
 })(1)






//    CALL STACK  (FUNCTION EXECUTION STACK) //



// RECURSION

// Recursion is a function that calls itself

// function foo(){
  //  foo();
// }
// this is pure recursion

// Two conditions before having recursion
// 1. Why do you need recursion? - becoz recursion has a cost
//2.Recursion require exit criteria or the base condition

function fetchWater(count) {
    console.log("Fetching Water...",count);
    if (count === 0){
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count-1)
}


fetchWater(5)


