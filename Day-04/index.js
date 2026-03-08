console.log("Day 04");

// CONTROL FLOW & BRANCHING //
// IF CONDITION
let catchThisBUS = false;

if (catchThisBUS) {
  console.log("I will reach home on time");
} else {
  console.log("I will be late to reach");
}

//  SHORTHAND FOR IF ELSE IS TERNARY OPERATOR(?:) I.E

catchThisBUS
  ? console.log("I will reach home on time")
  : console.log("I will be late to reach");

let age = 17;
if (age >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

// let's build  grading system
let score = 90;
/* 
 if (score >= 90) {
    console.log("grade A")
 }
 if (score >= 80) {
    console.log("grade B")
 }
 if (score >= 70) {
    console.log("grade C")
 }
 if (score < 70) {
    console.log("failed")
 }

 NB: Use if block statement when you want to look into one sided condition
 */

/*
let x = 0;

if (x === 0){
console.log(0)
}
 else if (x >= 0){
console.log("greater than")
}
 else if (x <= 0){
console.log("less than")
}
NB: Use if else block statement when you want to look into two sides of the condition

*/

// NESTING IF-ELSE BLOCK

const condition = false;
const innerCondition = false;

if (condition) {
  console.log("outer if");
  if (innerCondition) {
    console.log("inner if");
  } else {
    console.log("inner else");
  }
} else {
  console.log("outer else");
}

// SWITCH

let position = 12;

switch (position) {
  case 1:
    console.log("print 1");
    break;
  case 2:
    console.log("print 2");
    break;
  case 3:
    console.log("print 3");
    break;
  case 4:
    console.log("print 4");
    break;
  default:
    console.log("Nothing is matched");
}

let day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tueday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Nothing is matched");
}

let namee = "khorado";

switch (namee) {
  case "khorado":
    console.log("Learning 40 days of JS");
    break;

  case "google":
    console.log("Giving searches to all");
    break;
  default:
    console.log("you are neither khorado nor google");
}

// IMPORTANCE OF SWITCH
// 1.Usabe for fixed values(PERFORMANCE)
// 2.Readability
