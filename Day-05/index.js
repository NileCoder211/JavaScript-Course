// LOOPS AND ITERATIONS  //

// loop means doing the same task repeatedly

// for loop

// A for loop is best when we know exactly how many times we need to run a block of code

// for (initialization;condition;update){
// code
// }

// Initialization - from where you are going to start this loop.
// condition - based on whiech condition you wany to run this loop.
// update - how do you want to update your initialized value so that your loop can move forward
/*
for (let count =1; count <= 5; count++ ){
console.log("Iteration/Loop",count )
}
*/
// addition of even numbers between 1 to 100

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("i", i);
  }

  // THIS WILL JUST PRINT ALL THE EVEN NUMBERS IN THE CONSOLE
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i; // sum+= i is shorthand for this
    // console.log("sum is",sum)
  }
  // THIS WILL PRINT THE SUM OF EVEN NUMBERS FROM 1 TO 100 WHICH IS 2550
}

console.log("sum is", sum);

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

//    NESTING IN LOOP

// Nested loop is a lopp inside another loop
// it's commonly used when working with multi-dimentional data

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

// BREAK AND CONTINUE

// BREAK - Exiting from the loop so that no more iterations
/*
for (let i=1; i<=5; i++){
    if (i===3) break; // this will print only 1,2 and 3
    
    console.log(i)
}

*/

// CONTINUE - Skipping particular iteration and move to the next one

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // this will skip number three
  console.log(i);
}

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j, i, j);
}

/**
 Exercise

*
** 
*** 
****
*****

 */

//     WHILE LOOP

// A whiel lopp runs as long as a given condition is true
// It's best when you don't know in advance how many iterations are needed.

// while (condition) {
// code
// }

/*
let counter =1;
while(counter <=5){
    console.log(counter);
    counter++;
}

*/

// DO-WHILE LOOP
// A do-while loop ensures that the code executes at least once before checking the condition.

/*
do{
    // code
}while(condition);


 
let num =1;
do {
    console.log(num);
    num++;
} while (num <=5)


*/

// INFINITE LOOP //

for (;;) {
  console.log("Iam looping forever!!!");
}

while (true) {}

do {
  // code
} while (true);
