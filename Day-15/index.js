console.log("Array...in JS");

// An Array is a collection of elements of any type i.e string, boolean, number, and an object as well.And each of the element in an array holds a particular
//  position in an array called index.
// Index is a position of an element inside an array. An index always start with zero

const salad = [
  "tomato",
  "avocado",
  "carrot",
  "banana",
  "mango",
  "potato",
  "orange",
];

// CREATING AN ARRAY USING CONSTRUCTOR FUNCTION

function Car(model) {
  this.model = model;
}

const bmwCar = new Car("BMW X1");
console.log(bmwCar);

const anotherSalad = Array(
  "tomato",
  "avocado",
  "carrot",
  "banana",
  "mango",
  "potato",
  "orange",
);

console.log(salad);
console.log(anotherSalad);

const two = new Array(2); //this create an empty array with the length of 2 since the argument being passed is one, which is 2 in this case

console.log(two); // empty x 2

// HOW TO GET OR RETRIEVE  ELEMENTS FROM AN ARRAY USING INDEX

// 1.const element = array(index)

console.log(salad[0]); // tomato
console.log(salad[2]); // carrot
console.log(salad[5]); // mango

//2.Array.isArray  is a method use to determine with a collection of data is an array or not

Array.isArray(
  "tomato",
  "avocado",
  "carrot",
  "banana",
  "mango",
  "potato",
  "orange",
); //false
Array.isArray([
  "tomato",
  "avocado",
  "carrot",
  "banana",
  "mango",
  "potato",
  "orange",
]); // true
Array.isArray([]); //true

// HOW TO GET THE ELEMENTS IN AN ARRAY USING FOR...LOOP

for (let i = 0; i <= salad.length - 1; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

// HOW TO ADD ELEMENT TO AN ARRAY USING:

// 1.push() - element gets inserted at the end of an array

const ret = salad.push("lemon");
console.log(ret); // this will printed 8 in the console this is because the push method returns the current number of elements in an array and this also
// change the source array since before it was 7 but now is 8

console.log(salad);

// 2.Unshift() - element gets inserted at the start

const unRet = salad.unshift("yams");
console.log(unRet); // 9
console.log(salad);

// HOW TO REMOVE AN ELEMENT FROM AN ARRAY

// 1.Using pop()- remove element at the end of an array

console.log(salad); // this is to get the exact number of salad which is 9
const popRet = salad.pop();
console.log(popRet); // this returns lemon since it's the last element at the end
console.log(salad); //this gives only 8 elements since lemon which was in position 9 was removed

// 2.Using shift() - remove element in the beginning
console.log(salad); // this is to get the exact number of salad which is 8 since lemon was removed through pop()
const shiftRet = salad.shift();
console.log(shiftRet); // this returns yams since it's the first element in an array
console.log(salad); //this gives only 7 elements since yams which was in the 1st position was removed

// HOW TO COPY AND CLONE AN ARRAY IN JS

// slice() - does not change the source of an array

const saladCopy = salad.slice();
console.log("Salad before copy", salad);
console.log("Salad after copy", saladCopy);
console.log(salad === saladCopy); // false since slice method does not change the source of an array

// DESTRUCTURING IN AN ARRAY

// 1.GETTING AN ELEMENT AND ASSIGN IT TO A VARIABLE

/*  this is obvious way
const tomato = salad[0]
const avocado = salad[1]
const carrot = salad[2]
 */

const [tomato, avocado, carrot] = ["tomato", "avocado", "carrot"];
console.log(tomato, avocado, carrot);

//2.HOW TO ASSIGN A DEFAULT VALUE TO A VARIABLE

const [potato, mushroom = "mushroom"] = ["potato"];

console.log(potato); // potato
console.log(mushroom); // mushroom

// 3.HOW TO SKIP A VALUE IN AN ARRAY

const [orang, , banana] = ["potato", "mushroom", "banana"];
console.log(orang); // orange
console.log(banana); //

// 4.NESTED ARRAY DESTRUCTURING IN JS

// [1,2,[4,[6,8,['q']]]]

let fruits = [
  "tomato",
  "avocado",
  "carrot",
  "banana"[("potato", "orange", "mango")],
];
const veg = fruits[4]; //['potato', 'orange', 'mango']
//const mango = veg[2]

//fruits[4][2]//'mango'

// with destructuring

//let [,,,,[,,mango]]= ['tomato', 'avocado', 'carrot', 'banana' ['potato', 'orange', 'mango']];// mango
//console.log(mango)

// HOW TO USE THE REST PARAMETER IN DESTRUCTURING IN JS

// ... Represents rest and spread
// destructuring syntax in array is like this: const [] = []
// when three dots are on the left side of assignment operator, it is called rest parameter and it is used to collect the remaining elements of an
// array into a new array.

const [barcelona, chelsea, ...rest] = [
  "yamal",
  "pedri",
  "tores",
  "palmer",
  "neto",
  "hazard",
];
console.log(barcelona);
console.log(chelsea);
console.log(rest);

// HOW TO USE THE SPREAD OPERATOR IN DETRUCTURING IN JS

// when the three dots are on the right side of assignment operator, it is called spread operator, and it create a copy or cloned of  an array

const myPlayers = ["yamal", "pedri", "tores", "palmer", "neto", "hazard"];
const myPlayersCopy = [...myPlayers];

console.log(myPlayers);
console.log(myPlayersCopy);

console.log(myPlayers === myPlayersCopy); // this results to a false

// DESTRUCTURING USE CASES IN JS

// 1.HOW TO SWAP VALUES WITH DESTRUCTURING?

let first = "sad";
let second = "happy";

[first, second] = [second, first];
console.log(first); // happy
console.log(second); // sad

// 2.HOW TO MERGE ARRAYS

// this is adding two arrays to get one array

const countries = ["ssd", "kenya", "tanzania", "uganda"];
const cities = ["juba", "nairobi", "dodoma", "kampala"];

const africa = [...countries, ...cities];

console.log(africa);

// LENGTH PROPERT -It is a property in js,  it is not a method

const arr1 = [1, 34, 67];
const arr2 = new Array(7);

console.log(arr1); // 3
console.log(arr2); // 7

// WHAT IS THE LARGES VALUE OF ARRAY'S LENGTH

// THE VALUE IS 2**32 -1

/* 
arr1.length = 0 - This will atomatically wipe out everything in the array
arr1.length = 9 - This will create array with 3 value key-pairs but with 6 empty slots [1, 34, 67, empty*6]
 */

// ARRAY METHODS

// 1.concat()- This merges more than one arrays and Return the Merged Array
// The concat() method is immutable. Which means the source array will not get changed
{
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const third = [7, 8, 9];

  const merged = first.concat(second);
  console.log(merged); // [1,2,3,4,5,6]

  // SOURCE ARRAYS DON'T CHANGE
  console.log(first); // [1,2,3]
  console.log(second); // [4,5,6]
}
// CONCAT() WORKS WITH ULIMITED VALUES AND THE VALUES ARE PASSED AS ARGUMENTS TO THE CONCAT() METHOD

const unlimitedMerging = first.concat(second, third);
console.log(unlimitedMerging); // [1,2,3,4,5,6,7,8,9]

// 2.join() - The join() method join different elements of arrays and separate them with comma separator and ultimately return a string
// Therefor comma(,) is the default separator used by join()

const days = ["mon", "tue", "wed", "thus"];
const joined = days.join();
console.log(joined); // mon,tue,wed,thus
// A SEPARATOR CAN BE PASSED HERE IF WANTED
// const joined = days.join("#" or "<=>")
{
  [].join(); // This will return an empty string because there is nothing affectively to join
}

// 3. fill() - this enable one to fill an array with static values or select the few element to change with such static values
// This fill() method is mutable which means the source array gets changed

const colors = ["red", "blue", "pink"];
colors.fill("green");
console.log(colors); // ["green" ,"green","green"]

// HOW TO FILL ONLY CERTAIN VALUES USING FILL() METHOD
/*
 THIS TAKES THREE ARGUMENTS:
colors.fill(what you wnat to change with, which index you want to start the changes, the particular  length the changes should end)

 */
// Hence:
colors.fill("green", 1, 3);
console.log(colors); // ["red", "green", "green"]

// 4.includes() - This method determine the present of an element in an array
// If the element exists it return true and vice versa
{
  const names = ["mike", "john", "mark", "khor", "wujum"];
}
console.log(names.includes("mike")); // true
console.log(names.includes("Mike")); // false because includes() is case sensitive
console.log(names.includes("nyasunday")); // false

// 5.indexOf - Use to determine the index position of an element in an array
// It return the first occurance of an element that exists more than one

const counties = ["nairobi", "kisumu", "kiambu", "nairobi"];

counties.indexOf("kisumu"); // 1
counties.indexOf("kakamega"); // -1 since kakamega does not exists  in counties array

// 6. lastIndexOf()- this determine the last index of an array
// It always return the last element if that element exist more than one

counties.indexOf("nairobi"); // 0
counties.lastIndexOf("nairobi"); // 3

// 7. reverse() - This method reverses the positions of elements in an array
// It is also mutable
{
  const countries = ["south sudan", "sudan", "kenya", "uganda"];
  console.log(countries.reverse()); // ["uganda", "kenya", "sudan", "south sudan"]
}
// 8. sort()
// The default sort() method converts the element types into strings.
//  Elemets of an array can be sorted in an acending or descending order but the default sorting order is ascending.

const pets = ["ram", "puppy", "dog", "cat"];

console.log(pets.sort()); // ["cat"dog, "puppy" "ram"] - since the default order is ascending

// DESCENDING ORDER  AND NONE STRING VALUES IN SORT() METHOD
// HERE WE HAVE TO USE COMPARATOR FUNCTION
// THE COMPARATOR FUNCTION IS PASSED AS ARGUMENT TO THE SORT() FUNCTION

pets.sort(function (a, b) {
  return (a = b ? 0 : a > b ? -1 : 1);
  // It takes two arguments (a and b) because it compare two elements of an array

  // if a === b means ("tom", "tom") there is no point of comparison because they are the same.
  // That's why we return 0 (Zero means no change will take place)

  // if a > b ? -1 : 1 -This means that if a is greater than b , then return -1 which means descending order  otherwise return 1 which means ascending order
});

console.log(pets); // ["ram", "puppy", "dog", "cat"]

const ages = [10, 100, 23, 13, 56, 78, 90];
console.log(ages.sort()); //  [10, 100, 13, 23, 56, 78, 90]
// This looks like no sorting that has been done but actually JS sort them as strings

/* 
    HOW DOES JAVASCRIPT SORT THEM AS STRINGS RATHER THAN NUMERIC VALUS
    1.STEP ONE
    JS compare the fisrt digit of each number, if they are equal it checks the second digits of both nubers and compare then
    If the nubers are the same like(23,23) , then there would be no comaparison.

             HOW WAS THIS EXPRESSION COMPARED : console.log(ages.sort()) //  [10, 100, 23, 13, 56, 78, 90]
             1. 10 AND 100
             a) 1 vs 1 = they are egual
             b) 0 vs 0 = they are equal
             c) nothing vs 0 = ten(10) ends here but hundred(100) continues
             When this happens, shorter strings come first hence [10,100]

             2. 100 vs 13
             a) 1 vs 1 = they are equal
             b) 0 vs 3 = zero is less than 3 (0 < 2) so automatically 100 is less than 13 in strings comparison

             3. 13 vs 23 
             a) 1 vs 2 = 1 is less than 2 - therefore 13 is less than 23
 */

// FOR ASCENDING AND DESCENDING ORDER NUMERIC VALUES - COMPARISON FUNCTION SHOULD BE USED

ages.sort(function (a, b) {
  return (a = b ? 0 : a > b ? 1 : -1);
});

console.log(ages); // [10, 13, 56, 78, 90, 100]

// 9.splice() - it can be used to add, delete and modify an element in an array

/* 
  ===== SYNTAX OF SPLICE() METHOD =====

  splice(start, deleteCount, item1, item2, item3)

  === start === This represents the index at which you are planning to change an array.
  === deleteCount === this represent an integer that indicates how many elements you want to delete from this array starting in the start position .
   if the deleteCount = 0 - it means no element should be deleted.
  === item1, item2, item3 ===  These are elements that are going to get added beginning from the start.

  === The splice () method return an array with the deleted elements
  === If no element deleted or removed, an empty array is returned.
 */

const names = ["tom", "alex", "bob"];

console.log(names.splice(0, 1)); // ["tom"]
console.log(names.splice(0, 1, "john")); // ["tom"]
console.log(names); // ["john", "alex", "bob"];

names.splice(1, 0, "khor");
console.log(names); // ["john", "khor" ,"alex", "bob"];  here i am deleting none (0) of the element but "khor" getss addede to the second index which is one

// 10 at() - this is use to retrieve elements in an array using both positive and negative index

const junkFood = ["pizza", "popcorn", "bugger", "kabbab", "chapati", "kob"];
console.log(junkFood[2]); // ["popcorn"]
console.log(junkFood[-2]); // this will reult into an error . therefore at() is the best choice here

junkFood.at(1); // ["popcorn"]
junkFood.at(3); // ["kabbab"]
junkFood.at(-1); // ["kob"]
junkFood.at(-5); // ["popcorn"]
junkFood.at(9); // undefined since the elements are just 6 with 5 which is the largest index

// 11. copyWithin() - it basically copy part of an array to another location in the same array
/* 
  copyWithin(target, start, end)


  === target=== is the index at which copyWithin will start copying elelments to (where you put element to) - it's mandatory
  === start === is the index at which you start the coppying process - mandatory
 === end === is where the copying ends - it is optional
 === if you don't have the end, it will go up to the last index

   */

const array = [1, 2, 3, 4, 5, 6, 7];
array.copyWithin(0, 3, 6);
console.log(array); // [4, 5, 6, 4, 5, 6, 7]

const arrays = [1, 2, 3, 4, 5, 6, 7];
arrays.copyWithin(0, 4);
console.log(arrays); // [5, 5, 7, 4, 5, 6, 7]

// 12. flat() - this flattens nested array

{
  const arr1 = [1, 2, [3, 4]];
  console.log(arr1.flat()); // [1, 2, 3, 4]

  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log(arr2.flat(2)); // [0, 1, 2, 3, Array(2)]

  // HOW TO FLATTEN EVERYTHING, JUST PASSED "Infinity"

  console.log(arr2.flat(Infinity));
}

// === GROUPING DATA IN ARRAY USING OBJECT METHOD CALLED groupBy() ====

{
  const employees = [
    { name: "Khorado", dept: "Engineering", salary: 5000 },
    { name: "Khor", dept: "HR", salary: 3000 },
    { name: "wujum", dept: "Engineering", salary: 7000 },
    { name: "Nyasunday", dept: "Engineering", salary: 1000 },
    { name: "Nyajime", dept: "Sales", salary: 6000 },
  ];

  const groupedByDep = Object.groupBy(employees, ({ dept }) => dept);
  console.log(groupedByDep);

  const groupedByMoreThan5000 = Object.groupBy(employees, (salary) => {
    return salary >= 5000 ? "More than 5k" : "Less than 5k";
  });

  console.log(groupedByMoreThan5000);
}

// ==== IMMUTABILITY ====

// 1.toReversed() - it reverses the elements in an array but does not change the source array

{
  const items = [1, 2, 3];
  const reversedItems = items.toReversed();

  console.log(reversedItems); // [3, 2, 1]
  console.log(items); // [1, 2, 3]
}

// 2.toSorted() - sort elements in an array but does not chnage the source aaray

{
  const months = ["may", "december", "february", "january"];
  const sortedMonths = months.toSorted();

  console.log(sortedMonths); // ["december", "february", "january", "may"]
  console.log(months); // ["may", "december", "february", "january"]
}

// 3.toSpliced- it adds, delete and modify elements in an array and return all the elements in that array

{
  const month1 = ["may", "december", "february", "january"];
  const month2 = month1.toSplice(1, 0, "jun");

  console.log(month2); // ["may", "jun", "december", "february", "january"]
}

// 4.with()

/*
with(index, value) - it replices elements in an array

==== index is an integer that specify an index inside an array. 
==== if index is positive, indexing will start from left to right as usual.
==== if index is negative, indexing will start from right to left.
==== value is the exact value that will replace a specified value in the index.
 */

{
  const numbers = [1, 2, 3, 4, 5];
  const newArray = numbers.with(2, 6);

  console.log(newArray); // [1, 2, 6, 4, 5]
  console.log(nubers); // [1, 2, 3, 4, 5];

  numbers[-2] = 8;
  console.log(numbers); // [1, 2, 3, 4, 5, -2: 8] - this(-2:8) can be solve with with() method

  const anotherArray = numbers.with(-2, 8);
  console.log(number); // [1, 2, 3, 8, 5]
}

// =====  ARRAY-LIKE  =======
// Array-like is an object which has similar properties like an array.
// Such properties include: index and length property
// the usual array methods won't be applicable here since they are not real array. so we have to convert them to array

const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

console.log(arr_like);
console.log(arr_like[2]); // array-like",
console.log(arr_like.length); // 3

console.log(Array.isArray(arr_like)); // false
console.log(arr_like instanceof Object); // trus

// ===== CONVERTING ARRAY-LIKE TO ARRAY =====

// 1. USING SPREAD OPERATOR [...array's name]

function checkArguments(argmts) {
  console.log("Array like arguments", argmts); // this gives HTMLCollection which is array-like but its prototype is an Object
  const argArr = [...argmts];
  console.log("Converted array arguments", argArr); // this gives the [1, 23] as array

  argArr.forEach((elem) => {
    console.log(elem);
  });
}

checkArguments(1, 23);

// 2. USING from() which is a static method in array

console.log(
  "HTML collection as Array like",
  document.getElementsByTagName("li"),
); // this gives HTMLCollection
const collectionArray = Array.from(document.getElementsByTagName("li"));
console.log("Converted Array", collectionArray); // this gives an array of list

// ==== STATIC METHODS IN ARRAY

// 1. from() - which we just learned

//2. fromAsync()- it is an array method that return a promise which should be handle so as to retrieve the actual array
// it is not like from() mrthod that return an array directly
// it works well with async iterable objects

const collectionPromise = Array.fromAsync(document.getElementsByTagName("li"));
console.log("Converted Array", collectionPromise); // Converted Array, promise{<pending>}

//  HOW TO HANDLE A PROMISE
// It's handle throungh handler function called then() which take a callback function that gives the velue if the promise is resolve correctly.
// if there is an error, the error is then handle through .catch() method

collectionPromise
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

const retArr = Array.fromAsync({
  0: Promise.resolve("Khorado"),
  1: Promise.resolve("Google"),
  2: Promise.resolve("Apple"),
  length: 3,
}).then((value) => console.log(value)); // ["Khorado", "Google", "Apple"]

// 3. of() - is a static method that create new array instance of any data type ( whether primitive or non-primitive) pass to it as arguments
{
  // these are common ways of creating an array
  const a = new Array(1, 2, 3); // [1, 2, 3]
  const b = [4, 5, 6]; // [4, 5, 6]

  // here we use of() method
  const c = Array.of(7, 8, 9);
  console.log(c); // [7, 8, 9]

  // ===== of() method with all data types ===
  function hello() {
    console.log("hello");
  }
  const allDataTypes = Array.of(
    2,
    true,
    "test",
    { name: "alex" },
    [1, 2, 3],
    hello(),
  );
  console.log(allDataTypes);
}

// ====== ARRAY ITARATOR METHODS IN JAVASCRIPT ============

let customers = [
  {
    id: 0o1,
    f_name: "Pal",
    l_name: "Thomas",
    gender: "M",
    married: "true",
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Books"],
  },
  {
    id: 0o2,
    f_name: "Tom",
    l_name: "Jerry",
    gender: "M",
    married: "true",
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 0o3,
    f_name: "Nyasunday",
    l_name: "Deng",
    gender: "F",
    married: "true",
    age: 22,
    expense: 1500,
    purchased: ["SLipstick", "Nails Polish", "Bag", "Books"],
  },
  {
    id: 0o4,
    f_name: "Gach",
    l_name: "Long",
    gender: "M",
    married: "true",
    age: 82,
    expense: 90,
    purchased: ["Books"],
  },
  {
    id: 0o5,
    f_name: "Nyemal",
    l_name: "Peter",
    gender: "F",
    married: "false",
    age: 7,
    expense: 500,
    purchased: ["Toys"],
  },
];

// 1. filter() - it filters out elements in an array.
// It takes Test Function
// Get "Senior Citizens" by Filtering out other customers

/* 
      HOW DOES THE FILTER METHOD WORKS
   
      const newArray = arr.filter((element, index, array) => {
     // Do Something Here,,,,,
   })
   ==== the filter method takes a callback function which is also called Test Function
   ==== The callback function gets applied to each elements in an array and try the condition
   ==== the filter() method return only the elements that pass the test function's condition
   ==== element- is the element on which array apply the filter() method on
   ==== index- is the index of an element on which array apply the filter() method on
   ==== array- is the source array in which filter() method gets applied on. And it is optional as well
*/

const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});

console.log(seniorCustomers); //

// 2.map() - it's use to transform the existing elements in an array to something else based on business logic.
// map() method takes Transformation Function

const customerWithFullName = customers.map((customer) => {
  let title = "";

  if (customer.gender === "M") {
    title = "Mr.";
  } else if (customer.gender === "F" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Miss";
  }

  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

  return customer;
});

// 3. redduce() - it reduces the elements in an array into single value
// ====== HOW DOE REDUCE METHOD WORKS ===
/* 
==== reduce() takes a callback function(also called reducer function) and optional initial value
arr.reduce(
   reducer(
      accumulator,
      currentValue, 
      index,
      array),
  initialValue);

 ==== A reducer function also called as callback function to be called on each element in an array
 ==== initialValue - is what accumulator is initializa with


  const ret = reduce(accumulator, currentValue, index, array){
     // Do something with accumulator and currentValue
     // you get a result
     // you return that result
     // the returned result will gets assigned to the accumulator 
     // again do something with accumulator and currentValue 
     // and the looping continues like that
  }

 */

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(result); // 1+2+3+4+5 = 15

// HOW TO DETERMINE AVERAGE AGE OF CUSTOMERS WHO HAVE PURCHASE THE ITEM, "BOOK"

let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0);

console.log(
  "Customers average age purchased Books:",
  Math.floor(total / count),
); // 45

// 4. reduceRight() it works like reduce() but the counting start from left to right unlike reduce which start from right to left
//   ====== USING REDUCE METHOD ====
{
  let number = [100, 40, 15];

  const subsResult = number.reduce(
    (accumulator, currentValue) => {
      return accumulator - currentValue;
    }, // no initializeValue passed here, therefore the accumulator will be initialized with 100 since it is the first element
  );

  console.log(subsResult); // 100 - 40 - 15 = 45
}

//    ====== USING REDUCERIGHT METHOD =====
{
  let number = [100, 40, 15];

  const subsResult = number.reduceRight(
    (accumulator, currentValue) => {
      return accumulator - currentValue;
    }, // no initializeValue passed here, therefore the accumulator will be initialized with 100 since it is the first element
  );

  console.log(subsResult); // 15 - 40 - 100 = -125
}

// 5.some() - checks if a specified condition is satisfy for at least one element in an array
// if that condition is satisfied it return true, otherwise it return false
// it is also called test function

const youngCustomers = customers.some((customer) => {
  return customer.age >= 10;
});

console.log(youngCustomers); // true

// 6.every() - it id also called test function
// it gets applied to every element in and array
// it return true if the condition is satisfy in all the elements in array, otherwise it return false

// ===== LET'S CHECK IF EVERY CUSTOMER IS MARRIED OR NOT =====

const iseveryCustomerMarried = customers.every((customer) => {
  return customer.married;
});

console.log(iseveryCustomerMarried); // false since not every customer is married

// 7. find() - it find the first matching element in an array from left to right
// find the younges customer

const findYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});

console.log(findYoungCustomer); // nyemal peter since she is just 7 years old

// 8. findLast() - find the last matching element from right to left
{
  const findYoungCustomer = customers.find((customer) => {
    return customer.age < 10;
  });

  console.log(findYoungCustomer); //
}

// 9.findIndex() - it gives the exact index of the element found in an array
{
  const findYoungCustomer = customers.findIndex((customer) => {
    return customer.age < 10;
  });

  console.log(findYoungCustomer); // [4]
}

// 10.findLastIndex() - it gives the exact last index of the element found in an array
{
  const findYoungCustomer = customers.findLastIndex((customer) => {
    return customer.age < 10;
  });

  console.log(findYoungCustomer); // [4]
}

// =====ARRAY METHOD CHAINING ======

// Use Case: Get the total amount spent by married customers

const marriedCustomers = customers.filter((customer) => {
  return customer.married;
});

const totalSpentByMarriedCustomers = marriedCustomers.reduce(
  (accumulator, customer) => {
    total = accumulator + customer.expense;
    return total;
  },
  0,
);

console.log(totalSpentByMarriedCustomers);
//  CHAINING THIS

{
  const totalExpense = customers
    .filter((customer) => {
      return customer.married;
    })
    .marriedCustomers.reduce((accumulator, customer) => {
      total = accumulator + customer.expense;
      return total;
    }, 0);

  console.log(totalExpense);
}

// 11.forEach() - it iterate(loop) through each alement in an array.
// forEach() does not return anything
// whatever you are going to do is manage out of forEach() method

{
  const arr = [1, 2, 3, 4, 5];

  arr.forEach((element) => {
    console.log(element); // [1,2,3,4,5]
  });

  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });

  console.log("Sum using forEach", sum); // 15
}

// 12.entries() - it return an iterator object
{
  const arr = [1, 2, 3, 4, 5];

  const arrItr = arr.entries();
  // HOW TO RETRIEVE THE VALUES through next().value
  console.log("Array Iterator", arrItr.next().value); // [0, 1]
  console.log("Array Iterator", arrItr.next().value); // [1, 2]

  // === THIS next().vale METHOD IS INEFFICIENT HENCE for(of) method is usefull with destructuring in hand
  for (const [index, element] of arrIrt) {
    console.log(index, element);
    /* 
      ====  OUTPUT  ===
    0 1
    1 2
    2 3
    3 4
    4 5
         */
  }
}

// 13. values() - thes works like entries but it only return valus after for-of loop is applied

{
  const arr = [1, 2, 3, 4, 5];
  const arrItr = arr.values();
  console.log(arrItr.next().value); // 1, 2, 3, 4, 5

  for (const values of arrItr) {
    console.log(values); // 1, 2, 3, 4, 5
  }
}

// 14. flatMap()
{
  const arr1 = [1, 2, 3, 4, 5];

  console.log(
    "simple map",
    arr1.map((item) => item * 2),
  );
  console.log(
    "simple flatmap",
    arr1.flatMap((item) => item * 2),
  );

  console.log(
    "Complex map",
    arr1.map((item) => [item * 2]),
  ); // [[2], [4], [6], [8], [10]]
  console.log(
    "Complex flatmap",
    arr1.flatMap((item) => [item * 2]),
  ); // [2,4,6,8,10]

  console.log(arr1.map((item) => [[item * 2]]));
  console.log(arr1.flatMap((item) => [[item * 2]]));
}
