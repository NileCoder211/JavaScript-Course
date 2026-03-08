//console.log("Day 02");

// variables are used to store data in JavaScript

// let fruit = "mango"

// let is a way of declaring/defining a variable
// fruit is a variable name
// egual sign(=) is the assignment operator
// mango is a variable's value.This process is called assigning a value to the variable.

// VALUE ASSIGNMENTS
// 01 PASSBY VALUE

let fruit = "mango";
let vegetable = "carrot";
fruit = vegetable; // in this case the vegetable's vavlue which is carrot is being passed by to fruit's value,therefore the
//value of the fruit changes from mango to carrot

//  RULES FOR NAMING VARIABLES
// 01: Must have digits or letters.
// 02: Can have $ and _.
// 03: The first character must not be a degit.
// 04: No Reserved Keywords like let to be used.

// VARIABLE NAME STANDARD
// @ Use camelCase
// @ Human Readable
// @ The name should match the cause

// - 'var' : function-scoped, can be redeclared and reassign.
// - 'let' : block-scoped, cannot be redeclared but can be reassign.
// - 'const' :  block-scoped, cannot be redeclared or reassign.

/*   

-** Primitive Data Types:**

        - 'String' - Text values    ("Hello")
        - 'Number' - Numeric values    (25, 3.14)
        - 'Boolean' - True/False    (true,false)
        - 'Undefined' - A variable declared but not assigned     (let x;)
        - 'Null' - Represent "nothing"    (let y = null;)
        - 'BigIn' - Large numbers   (BigIn(12345678901234567890))
        - 'Symbol' - Unigue identifiers    (Symbol ("id"))

 -** Non-Primitive Data Types:**

        - 'Object' - Collection of key-value pairs
        - 'Array' - Ordered list of values
        - 'Function' - Code that can be executed

// Execution refers to process of running a program or a specific set of instructions on a computer.

*/

// EXAMPLE OF AN OBJECT //
let student = {
  name: "Khorado",
  age: 22,
  isEnrolled: true,
};

console.log(student.name); // output Khorado
