console.log("Day 03: OPERATORS IN JS");

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
This operator raises a number(the base) to the power of another number(the exponent)
Syntax: bases ** exponent
//  let a = 2;
//  let b = 3;
// console.log(2 ** 3); // output is 8. this means 2*2*2=8

// remainder operator (%)
// let a = 12;
// let be = 5;
// console.log(a % b)// output is 2
This means 12 into 5 without decimal points is 2, remainder 2 since 2*5=10 and 12-10=2.

 post-increment(++) Operator
In this case the current value is use then inremented .
// let count = 5;
// console.log(count) - output is 6
// console.log(count++) - output is 5 - post-increment
  
post-decrement(--) Operator
In this case the current value is use then decremented
//console.log(count--) - output is 5- post-decrement
// console.log(count) - output is 4

 pre-increment(++) 
In this case the current value is incremented first then used.
// let count = 5;
// console.log (++count) - output is 6 - pre-increment
// console.log(count) - output is 7
pre-decrement(--)
In this case the current value is decremented first then used.
//console.log(--count) - output is 4- pre-decrement
// console.log(count) - output is 3

//    ASSIGNMENT OPERATORS   //
  Assignment operators are shorthand ways to update the value of a variable. Instead of writing the variable name twice,
  you combine the operation with the assignment.
let x = 10;
1. += (Addition Assignment)
x += 5; // x = x + 5 (15)

2. -= (Subtraction Assignment)
x -= 3; // x = x - 3 (12)

3. *= (Multiplication Assignment)
x *= 2; // x = x * 2 (24)

4/= (Division Assignment)
x /= 4; // x = x / 4 (6)

//   COMPARISON OPERATORS //

// LOOSELY EQUALITY OPERATOR(==)
// STRICT EQUALITY OPERATOR(===)
// NOT EQUAL OPERATOR(!==)
// GREATER THAN(>)
// GREATER THAN OR EQAUAL TO(>=)
// LESS THAN(<)
// LESS THAN OR EQUAL TO(<=)

console.log("text" / or * or - 5); // shorthand of NaN
NaN stands for Not a Number. It means JavaScript tried to perform a mathematical operation, but the result isn't a valid number.
But for the + operator (+) , it behaves differently since it can add numbers or concatenate strings.
console.log("20" + 5); // "205"
console.log("text" + 5); // "text5"
Instead of converting the string to a number, JavaScript converts the number to a string and joins them.

console.log("20" * 5);     // 100
console.log("20" - 5);     // 15
console.log("20" / 5);     // 4
This happens because JavaScript performs implicit type conversion (also called type coercion).
Implicit type conversion (or type coercion) is JavaScript's way of automatically converting one data type into another
when an operation requires it.
Although "20" is a string, the operators *, -, and / only work with numbers.
So JavaScript automatically tries to convert the string into a number before performing the operation.
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
