"use strict"; 
// The "use strict" directive is a way to opt/ choose a stricter variant of JavaScript.
//  It helps in catching common coding errors and "unsafe" actions such as defining global variables.

console.log("Welcome to Day 13: The this keyword");
// "this" keyword is like that friend who like picking sides in an argument

// Global Context

// this keyword and window object
console.log("this at the global", this); // "this" keyword wil always refers to window  in global context

// object
// function

// INSIDE OF AN OBJECT -IMPLICIT BINDING
// IMPLICIT BINDING:is a way in which the value of this keyword is bound to the object on which the method is invoked.
//  Hence the value of this keyword is the object itself.

const employee = {
  id: "12345k",
  firstName: "khorana",
  lastName: "rial",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log("Employee Id", employee.id); // 12345k
console.log("this inside the employee object", employee.returnThis()); // This will return the employee object itself
// NB: When we invoke a method on an object the context of this keyword or the value of this keyword is bound to the object on 
// which we have invoked the method. Hence the value of this keyword is the object itself.
console.log("Constructed Full Name using this", employee.getFullName());

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "Jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(` ${this.name} is ${this.age} years old`);
  };
  console.log(obj);
}

greetMe(tom);
tom.logMessage(); // Tom 7 years old.

greetMe(jerry);
jerry.logMessage(); //Jerry is 3 years old.

// INSIDE OF A FUNCTION

function sayName() {
  console.log("this inside of a function", this);
}

sayName();

function outer(a) {
  console.log("this is inside an outer function", this);

  return function inner(b) {
    console.log("this is inside an inner function", this);
  };
}

const outerResult = outer(5); //
outerResult(3);

// INSIDE THE ARROW FUNCTION

// NB:The this keyword in an arrow function is always bound to the context of the parent scope in which the arrow function is defined.
// Hence the value of this keyword in an arrow function is not bound to the object on which the arrow function is invoked.
const getFood = () => this;

console.log("this inside the arrow function defined in global scope", getFood(),); 
// this will return the window object since the arrow function does not have its own this keyword and it takes the value of this
// keyword from the outer scope. Which is in this case the global scope. And the value of this keyword in the global scope is the
//  window object.

const food = {
  name: "mango",
  color: "yellow",

  // getDesc: () => {`${this.name} is ${this.color}`},
  /*  getDesc: function(){
      return   `${this.name} is ${this.color}`
    },
 */
  getDesc: function () {
    // this will return the whole of arrow function instead of "mango is yellow"
    return () => `${this.name} is ${this.color}`;
  },
};

console.log(food.getDesc()); // this will return undefined since the arrow function does not have its own this keyword and it takes
//  the value of this keyword from the outer scope which is in this case the global scope.

const foodDesc = food.getDesc(); // this will solve the problem.
console.log(foodDesc()); // this will print "mango is yellow".

/* 

//  RULES WE HAVE LEARNED SO FAR   //

1: With the global scope(non-module scripts) this keyword always referred to the window object for browser environment.
However: In ES modules, this is undefined at the top level. Outside browsers (like Node.js), it’s not window.

2: For standalone function in strict mode this keyword is undefined but fon non-strict mode it point to the window object.
A standalone function is just a regular function that is not called as part of an object.

3: For implicit binding this keyword is bound to the object on which the method is invoked.
Implicit binding happens when a function is called as a method of an object.
bound means assigned, set or connected to

4: Arrow functions do NOT have their own this. They inherit this from their surrounding (lexical) scope.
👉 This is called lexical binding.

*/

//     EXPLICIT BINDING
// Explicit binding is a way in which we can bind the value of this keyword to any object(unrelated object) using call,apply and
//  bind methods.

// The call method

function greeting() {
  console.log(`Hello, ${this.name} belong to ${this.address}`);
}

const user = {
  name: "khorana",
  address: "Juba",
};

greeting.call(user); // Hello, khorana belong to Juba
//

const likes = function (hobby1, hobby2) {
  console.log(this.name + " likes" + hobby1 + "," + hobby2);
};

const person = {
  name: "khorado",
};
likes.call(person, "Learning", "coding"); // khorado likes learning,coding

// The call method takes the first argument as the object on which we want to bind the value of this keyword and the rest of the
//  arguments are passed as the parameters of the function.
// The call method invoke the function immediately.

// NB: In the call method all arguments must be of the same number as that of parameters of the function which sometimes can be a
//  lot of code,but apply method has got your back.

// The apply method

const like = function (hobby1, hobby2) {
  console.log(this.name + " likes" + hobby1 + "," + hobby2);
};

const personn = {
  name: "khorado",
};

const hobbiesToApply = ["Sleeping", "Eating"];
likes.apply(personn, hobbiesToApply); // khoardo likes sleeping, eating

// NB: call and apply are in-built methods of function object. Hence we can use them on any function object.

// BIND METHOD

function newHobbies(hobby1, hobby2) {
  console.log(this.name + " likes" + hobby1 + "," + hobby2);
}

const officer = {
  name: "Bob",
};

const newFun = newHobbies.bind(officer, "dancing", "singing"); //
newFun(); // Bob likes dancing , singing
// NB: The bind method does not invoke the function immediately and it returns a new function with the value of this keyword bound 
// to the object we passed as argument to the bind method. Hence we can call the new function later on.
// The bind method is useful when we want to pass the value of this keyword to a function but we do not want to invoke that function
// immediately.

//   THIS KEYWORD IN OBJECT CREATED USING FUNCTION CONSTRUCTOR AND NEW KEYWORD

const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + " is " + this.animal);
  };
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log(); // Tom is Cat

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log(); // Jerry is Mouse
// NB: The this keyword in the  constructor function refers to the object that is being created using the new keyword. 
// Hence the value of this keyword is the object itself.
