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
The key to understanding pattern problems is this:
** The outer loop controls the rows.
** The inner loop controls what gets printed in each row

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

//Output ----- since The inner loop runs completely for every single iteration of the outer loop.
Row 1 Col 1
Row 1 Col 2
Row 1 Col 3
Row 2 Col 1
Row 2 Col 2
Row 2 Col 3
Row 3 Col 1
Row 3 Col 2
Row 3 Col 3

let result = "";

for (let i = 1; i <= 4; i++) {
  result += i + " ";
}

console.log(result);
// Output- since
1 2 3 4

  for (let row = 1; row <= 4; row++) {
  let output = "";

  for (let col = 1; col <= 4; col++) {
    output += col + " ";
  }

  console.log(output);
}
//Output
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

  1. Is col printed before or after it's incremented?

Consider this loop:
for (let row = 4; row >= 1; row--) {
  let output = "";

  for (let col = 1; col <= row; col++) {
    output += col + " ";
  }

  console.log(output);
}

A for loop always follows this order:
1. Initialize
2. Check condition
3. Execute the body
4. Increment
5. Go back to step 2

Let's trace it.

First iteration
Initialize:
col = 1

Condition:
1 <= 4 ✅ true

Execute body:
output += col + " "
output = "1 "

Increment:
col++
col = 2
Second iteration
Condition:
2 <= 4 ✅ true

Execute body:
output += "2 "

Increment:
col = 3
Third iteration
Condition:
3 <= 4 ✅ true

Execute body:
output += "3 "

Increment:
col = 4
Fourth iteration
Condition:
4 <= 4 ✅ true

Execute body:
output += "4 "

Increment:
col = 5
Final check
Condition:
5 <= 4 ❌ false

Loop ends

So the current value is used first, then col++ happens afterward.

2. Doesn't this add the current value of col to the new value?

This line:

output += col + " ";

does not change col.

It's equivalent to:

output = output + col + " ";

Notice that output is changing, not col.

For example:

Initially:

let output = "";
let col = 1;

Then:

output += col + " ";

becomes

output = "" + 1 + " ";

Result:

output = "1 "

Now suppose col becomes 2:

output += col + " ";

becomes

output = "1 " + 2 + " ";

Result:

output = "1 2 "

After col = 3:

output = "1 2 " + "3 "

Result:

"1 2 3 "

So each iteration appends the current value of col to the existing string stored in output.

3. What is the purpose of " "?
This is just a space character.

Without it:
output += col;
the result would be
1234

because you're joining the numbers directly together.
With a space:
output += col + " ";
the result becomes

1 2 3 4 

The space makes the output readable by separating the numbers.

You could use any separator:

output += col + ",";
Output:
1,2,3,4,

or
output += col + "-";
Output:
1-2-3-4-
The " " is simply the separator between numbers.

4. Why does += work here?
Think of += as "take the current value and add something to it."

for (let row = 1; row <= 4; row++) {
  let output = "";

  for (let col = 1; col <= row; col++) {
    output += col + " ";
  }

  console.log(output);
}
//Output
1
1 2
1 2 3
1 2 3 4

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
Initialize
↓
Check condition
↓
Run body
↓
Increment
↓
Repeat

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
1. Execute the body
2. Increment (if you wrote it)
3. Check the condition
4. Repeat if true

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
An infinite loop is a loop that never stops because its condition never becomes false.

For example:

while (true) {
    console.log("Hello");
}

Here, the condition is literally true forever, so the loop never ends.

Example 1: Forgot to increment
let i = 1;

while (i <= 5) {
    console.log(i);
}

Why is this infinite?

Let's trace it:

i = 1

Check:
1 <= 5 ✅

Print:
1

Go back

Check:
1 <= 5 ✅

Print:
1

Go back

Check:
1 <= 5 ✅

...

Notice that i never changes because there's no:

i++;

The condition is always 1 <= 5, which is always true.

Example 2: Wrong condition
let i = 1;

while (i >= 1) {
    console.log(i);
    i++;
}

Trace:

i = 1
1 >= 1 ✅

i = 2
2 >= 1 ✅

i = 3
3 >= 1 ✅

...

Since i keeps increasing, it will always be greater than or equal to 1.

Example 3: for loop
for (let i = 1; i <= 5; ) {
    console.log(i);
}

The increment part is missing.

So:

i = 1

1 <= 5 ✅

Print 1

Go back

1 <= 5 ✅

Print 1

...

Again, i never changes.

Example 4: Decreasing instead of increasing
let i = 1;

while (i <= 5) {
    console.log(i);
    i--;
}

Trace:

i = 1

Print 1

i = 0

0 <= 5 ✅

Print 0

i = -1
-1 <= 5 ✅
Print -1

...

The condition stays true because every smaller number is still less than or equal to 5.
