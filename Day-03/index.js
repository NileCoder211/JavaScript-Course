console.log("Day 03");

// OPERATOR - symbol (+,=,-,*)
// OPERAND - is a value in which your operator works on- x+y,,,,x and y are operands
// EXPRESSION - is something which can result to a value(output)
// 01. X = 2 // this is called Assignment Expression
// 02. X = 2/1+5 // this is called Evaluating Expression

// ARITHMETIC OPERATORS //
// addion(+)

// substraction(-)

// multiplication(*)

// division(/)

// exponential operator (**)
//  let a = 2;
//  let b = 3;
// console.log(2 ** 3); // output is 8

// remainder operator (%)
// let a = 12;
// let be = 5;
// console.log(a%b)// output is 2

// post-increment(++) or post-decrement(--)
// let count = 5;
// console.log(count++) - output is 5 - post-increment
// console.log(count) - output is 6
//console.log(count--) - output is 5- post-decrement
// console.log(count) - output is 4

// pre-increment(++) or pre-decrement(--)
// let count = 5;
// console.log (++count) - output is 6 - pre-increment
// console.log(count) - output is 7
//console.log(--count) - output is 4- pre-decrement
// console.log(count) - output is 3

//    ASSIGNMENT OPERATORS   //

let x = 10;
x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)

//   COMPARISON OPERATORS //

// LOOSELY EQUALITY OPERATOR(==)
// STRICT EQUALITY OPERATOR(===)
// NOT EQUAL OPERATOR(!==)
// GREATER THAN(>)
// GREATER THAN OR EQAUAL TO(>=)
// LESS THAN(<)
// LESS THAN OR EQUAL TO(<=)

console.log("text" / 5); // shorthand of NaN

//    LOGICAL OPEREATOR //

// LOGICAL AND OPERATOR(&&)
//NB The initial operand is first converted to false value;if the initial operand happens to be false automatically the resut will be false but
//  if the initial operand happens to be true then the second operand will be chosen as alternative choice.
// if any of the operands is false then the result will always be false
// the true value resulted if both conditions are true!

// LOGICAL OR OPERATOR(||)
//NB the initial condition is first converted to true value;if it happends to be true,,,then the true value resulted but if the first  condition
// happens to be false after converted to true,, the second condition is therefore taken as only choice remained

// NOT OPERATOR(!)
// This negate values

// NULLISH COALESCING OPERATOR //
// if the first condition(OPERAND) results into a null or undefined then return the second,,otherwise return the first condition
// let a1 = null ?? 1;  //1
// let a2 = undefined ?? 3  //3
// const a3 = false ??  "khorado"  //false
// const a4 = 0 ?? "khorado" // 0

// CONDITION(TERNARY) OPERATOR (?:)
//   HOW IT WORKS  //
// condition ? truthy : falsy
let age = 23;
console.log(age >= 60 ? "Senior Citizeen" : "Non Sinior Citizen"); //result is non senior citizen

// BITWISE OPERATORS //
// GROUPING OPERATOR //
// TYPEOF OPERATOR - This checks the type of a data types //
// INSTANCEOF //
