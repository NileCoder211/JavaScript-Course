// SCOPE AND SCOPE CHAIN

// Scope means where is a variable declared

// Global scope
// function scope
// block scope
// module scope

//      GLOBAL SCOPE
// Variables declared outside of any function or block scope are in the global scope

var name = "Khorado";

function greeting() {
  console.log("Hello", name);
}

greeting();

console.log(name);

{
  console.log("Inside block", name);
}

/* 
when you declared a variable using var in the global scope,that particular
variable becomes the property of your global object.The global object in this
case is window or this object in your browser
That is why when you type window.name or this.name in the console,,,the name
 khorado will be printed the value



 However when you declared a variable with let or const in the global scope, that 
 particular variable is not going to be added to the global object which
 is window or this in the browser.The reason will be found in block scope soon!

*/

//   FUNCTION SCOPE
// Variables declared inside a function are only accessible within that function irrespective of var,let and const

function tooo() {
  var task = "Learning 40 days of JavaScript";
  console.log(task);
}

tooo();

console.log(task); // this result to ReferenceError despite task being declared using var
// NB Var is function scope.This means any variable declared inside of a function using var cannot be accessed outside of that function

//        BLOCK SCOPE
// Varibles declared using let and const inside of the block{} cannot be accessed outside of the
// Without if,else,while and for you can also execute block using two curly braces{}

{
  let count = 10;
  console.log(count);
}

console.log(count); // This results to ReferenceError since variable count is declared inside of the block
// But when you declared count using var,there would be no ReferenceError since var is FUNCTION SCOPED
// const and let are block scope: This means any variable declared using const and let inside of a block cannot be accessed outside of that block

//    SCOPE CHAIN

let globalVar = "I am a Global Variable ";

function outer() {
  let outerVar = "I am Outer Var";

  function inner() {
    let innerVar = "I am Inner Variable";

    console.log(innerVar); // "I am a Global Variable "
    console.log(outerVar); // "I am Outer Var"
    console.log(globalVar); // "I am Inner Variable"
  }

  inner();
}

outer();

console.log(outerVar); // ReferenceError since variable called outerVar that has been declared in the global scope

var count = 10;

function outer() {
  var count = 20;

  function inner() {
    var count = 30;

    console.log(count); // 30
  }

  inner();
  console.log(count); // 20
}

outer();
console.log(count); // 10

// Let's make things complex with this example
var count = 10;

function outer() {
  //var count = 20;

  function inner() {
    // var count = 30;

    console.log(count); // 10
  }

  inner();
  console.log(count); // 10
}

outer();
console.log(count); // 10

//      VARAIBLE SHADOWING
// This is a situation when variable in an inner scope has the same name as the variable of an outer scope

let message = "I am doing great";

function situation() {
  let message = "I am not doing great";
  console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great
