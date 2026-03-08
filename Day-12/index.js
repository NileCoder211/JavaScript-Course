//   OBJECTS

// DECLARING OR DEFINING AN OBJECT WITHOUT QUOTATION MARKS
let user = {
  name: "Khorado",
  age: 22,
};

console.log(user.name); // khorado
console.log(user.age); // 22

// DECLARING OR DEFINING AN OBJECT WITH QUOTATION MARKS(special characters like spacing)

let userName = {
  "is admin": true,
};

console.log(userName["is admin"]); // should print true in the console

//  ADDING PROPERTIES AND VALUES IN AN EXISTING OBJECT

let isUserName = {
  name: "Khorado",
  age: 22,
};

isUserName.isSeniorCitizen = false;
isUserName["movie lover"] = true;

console.log(isUserName);

// HOW TO MODIFY OR EDIT OBJECTS

let thisIsUserName = {
  name: "Khorado",
  age: 22,
  "movie lover": true,
};

thisIsUserName.age = 20;
thisIsUserName["movie lover"] = false;

//delete thisIsUserName ["movie lover"];// this delete movie lover
//delete thisIsUserName.age;// this delete age

console.log(thisIsUserName);

// HOW TO RETRIEVE THE VALUE OF A KEY DYNAMICALLY

// RETRIEVE means getting a value from an object or array.
//const someKey = "age";
//console.log(user[someKey]);

// HOW TO CREATE AN OBJECT DYNAMICALLY

//dynamic means being able to adapt to changes.
// prompt means qiuck or acting without delay.

/* 
let car = prompt("which is your fav car?");

let favCars = {
   [car]:5
}


console.log(favCars);
 
 */
// HOW TO CREATE AN OBJECT USING CONSTRUCTOR FUNCTION

//NB Constructor function's name must start with capital letter

function Car(name, model) {
  this.name = name;
  this.model = model;
}

//const bmwCar = new Car ("BMW", "X1")
//const audiCar = new Car ("Audi", "a8")

//console.log(bmwCar)
//console.log(audiCar)

//console.log(bmwCar instanceof Car)

// HOW TO CREATE OBJECT USING JAVASCRIPT OBJECT TYPE

const person = new Object();
person.name = "Alpha";
person.age = 20;
console.log(person);

// HOW TO CREATE AN OBJECT USING FACTORY FUNCTION

// Factory function that returns a new object.It's alternative to using classes or construction functions for creating multiple objects with the same
// with the same structure and behavior.

function createUser(name, age) {
  return { name, age };
}

//const user1 = createUser("Wujum", 30)
//console.log(user1)
//const user2 = createUser("maria", 40)
//console.log(user2)

// HOW TO CREATE AN OBJECT WHOSE VALUE IS A FUNCTION

let profilee = {
  name: "Khorado",
  company: "Nilecodes",
  message: function () {
    // message is the object key whose value is a function

    console.log(`${this.name} works at ${this.company}`);
  },
};

console.log(profilee.name);
console.log(profilee.company);
profilee.message();

// A NESTED OBJECT
// This is an object which has a property whose value is another object

let peoplee = {
  name: "Khorado",
  company: "Nilecodes",
  message: function () {
    // message is the object key whose value is a function

    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Juba",
    pin: 211,
    country: "South Sudan",
    greeting: function () {
      console.log("Welcome to South Sudan");
    },
  },
};

console.log(peoplee.address.country);
peoplee.address.greeting();

// HOW TO KNOW IF A PARTICULAR PROPERTY EXIST IN AN OBJECT

let people = {
  name: "Khorado",
  company: "Nilecodes",
  message: function () {
    // message is the object key whose value is a function

    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Juba",
    pin: 211,
    country: "South Sudan",
    greeting: function () {
      console.log("Welcome to South Sudan");
    },
  },
  salary: undefined,
};

console.log(people.address.country);
people.address.greeting();
// using dot(.) propety
//dot propety has one deviation which is that even if the property whose value has been provided as undefined still the dot method will show you that the
//  property is undefined,,, therfore the (in method) is highly recommended to be used instead
console.log(people.salary); // undefined

if (!people.salary) {
  console.log("The salary property doesn't exist");
}

console.log("salary" in people); // this return true even if the value of salary property is undefined

// HOW TO GET ALL THE KEYS AND VALUES OF AN OBJECT IN A LOOP
// for...in loop

let ppl = {
  name: "Khorado",
  company: "Nilecodes",
  message: function () {
    // message is the object key whose value is a function

    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Juba",
    pin: 211,
    country: "South Sudan",
    greeting: function () {
      console.log("Welcome to South Sudan");
    },
  },
  salary: undefined,
};

console.log(ppl.address.country);
ppl.address.greeting();

for (let key in ppl) {
  console.log(key); // this prints all the keys/properties in the console.
  console.log(ppl[key]); // this prints all the values of the keys in the console.
}

console.log(Object.keys(ppl)); // this prints all the keys inside ppl object in an array in the console.

// Object Reference

let fruit = { name: "mango" }; // XA01
const oneMoreFruit = { name: "mango" }; //YU02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit;

console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// these give true because both fruit and oneMoreFruit are pointing to the same memory which is the same object

// STATIC METHODS

// 1. OBJECT.ASSIGN
// This is a static method that copies all the object's own properties from a source object to a target object

//  ADDING PROPERTIES AND VALUES IN AN EXISTING OBJECT
/* 
let isUserName = {
    name: "Khorado",
    age: 22
} */

isUserName.isSeniorCitizen = false;
isUserName["movie lover"] = true;

console.log(isUserName);

// HOW TO MODIFY OR EDIT OBJECTS
/* 
let thisIsUserName = {
    name: "Khorado",
    age: 22,
    "movie lover": true
}
 */
thisIsUserName.age = 20;
thisIsUserName["movie lover"] = false;

//delete thisIsUserName ["movie lover"];// this delete movie lover
//delete thisIsUserName.age;// this delete age

console.log(thisIsUserName);

// HOW TO RETRIEVE THE VALUE OF A KEY DYNAMICALLY

// RETRIEVE means getting a value from and object or array.
const someKey = "age";
console.log(user[someKey]);

// HOW TO CREATE AN OBJECT DYNAMICALLY

/* 
let car = prompt("which is your fav car?");

let favCars = {
    [car]: 5
}

console.log(favCars);
*/

// HOW TO CREATE AN OBJECT USING CONSTRUCTOR FUNCTION

//NB Constructor function's name must start with capital letter

function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "a8");

console.log(bmwCar);
console.log(audiCar);

console.log(bmwCar instanceof Car);

// HOW TO CREATE OBJECT USING JAVASCRIPT OBJECT TYPE

/* 
const person = new Object()
person.name = "Alpha";
person.age = 20;
console.log(person);
 */

// HOW TO CREATE AN OBJECT USING FACTORY FUNCTION

function createUser(name, age) {
  return {
    name,
    age,
  };
}

const user1 = createUser("Wujum", 30);
console.log(user1);
const user2 = createUser("maria", 40);
console.log(user2);

// HOW TO CREATE AN OBJECT WHOSE VALUE IS A FUNCTION

let profile = {
  name: "Khorado",
  company: "Nilecodes",
  message: function () {
    // message is the object key whose value is a function

    console.log(`${this.name} works at ${this.company}`);
  },
};

console.log(profile.name);
console.log(profile.company);
profile.message();

// A NESTED OBJECT
// This is an object which has a property whose value is another object
/* 
let people = {
    name: "Khorado",
    company: "Nilecodes",
    message: function () { // message is the object key whose value is a function

        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: "Juba",
        pin: 211,
        country: "South Sudan",
        greeting: function () {
            console.log("Welcome to South Sudan")
        }
    }
}

console.log(people.address.country);
people.address.greeting();
*/

// HOW TO GET ALL THE KEYS AND VALUES OF AN OBJECT IN A LOOP
// for...in loop

// Object Reference

// these give true because both fruit and oneMoreFruit are pointing to the same memory which is the same object

// STATIC METHODS

// 1. OBJECT.ASSIGN
// This is a static method that copies all the object's own properties from a source object to a target object

const target = { p: 1, q: 2 };
const source = { a: 3, b: 5 };

const returnedObj = Object.assign(target, source);
console.log(returnedObj); // this prints {p:1, q:2, a:3, b:5};

const obj = { name: "khorado" };
const obj2 = Object.assign({}, obj); // this is shallow cloning

console.log(obj2);

//     DEEP CLONING

// HOW TO KNOW IF A PARTICULAR PROPERTY EXIST IN AN OBJECT
//     DEEP CLONING

const obj3 = {
  a: 1,
  b: { c: 2 },
};

const obj4 = Object.assign({}, obj3);

console.log(obj4); // {a:1,  b:{c: 2}}

obj4.b.c = 3;

console.log(obj4.b.c); // 3
console.log(obj3.b.c); // 3 this gives 3 instead of 2 becoz object.assign in nested object copies the reference of  that object rather than creating
//  a new copy.Therefore STRUCTURE CLONE is recommended instead of object.assign for nested objects

// STRUCTURE CLONE

const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c); // 30
console.log(obj3.b.c); // 3

//     OBJECT.ENTRIES
// This translate and object into an array

const myobj = {
  a: "khor",
  b: 20,
};

const myArr = Object.entries(myobj);

console.log(myArr);

//  OBJECT.fromEntries
// Converts an array into an object

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const objEntries = Object.fromEntries(entries);
console.log(objEntries);

// OBJECT.FREEZE
// This prevent an object from being reassigned,deleted and adding another object to it in the future
const emp = {
  sal: 100,
};

Object.freeze(emp);

emp.salary = 200;

console.log(emp); // this gives 100 eventhough the valaue of salary was changed to 200

console.log(Object.isFrozen(emp)); // this gives true value because emp is indeed froozen

//    OBJECT.SEAL
//This prevent an object from being deleted, adding another object to it but can be reassigned in the future

const dept = {
  name: "finance",
};

Object.seal(dept);

dept.address = "juba";
delete dept.name;

dept.name = "HR"; // THIS WILL PRINT HR AS NAME'S VALUE

console.log(dept);
console.log(Object.hasOwn(dept, "name")); // this object.hasOwn method tries to check if propert name does exist in dept object,, and a true value resulted.

//  OBJECT DESTRUCTURING
console.log("Learn Object destructuring....");

const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Math", "English", "Science"],
  parents: {
    father: "Brown Willianson",
    mother: "Sophia",
    email: "john-parents@gmail.com",
  },
  address: {
    street: "65/2, brookyln road",
    city: "carterton",
    country: "new zealand",
    zip: "5791",
  },
};

// HOW TO ACCESS PROPERTIES' VALUES AND ADDING ANOTHER VARIABLE WITH STATIC VALUE AND ACCESSING ITS VALUE ONCE USING DESTRUCTURING METHODE

const { name, age, meal = "bread" } = student;
console.log(name, age, meal);

// HOW TO ADD A NEW VARIABLE DYNAMICALLY

const { subjects, numberOfSubjects = subjects.length } = student;

console.log(subjects); // this gives all the subjects in an array
console.log(numberOfSubjects); // this print 3

// ADDING LESS

const { std: standard } = student;
console.log(standard); // this print 3
//console.log(std)// this results to ReferenceError

// NESTED OBJECT DESTRUCTURING

const {
  address: { zip },
} = student;
console.log(zip);

// DESTRUCTURING TO THE FUNCTION PARAMETERS

function sendEmail(student) {
  console.log(`sent an email to ${student.parents.email}`);
}

sendEmail(student);

// use this instead
function sendEmail({ parents: { email } }) {
  console.log(`sent an email to ${email}`);
}

sendEmail(student);

// HOW TO DESTRUCTURE A FUNCTION PARAMETER

const getStudent = () => {
  return {
    name: "John Williamson",
    age: 9,
    std: 3,
    subjects: ["Math", "English", "Science"],
    parents: {
      father: "Brown Willianson",
      mother: "Sophia",
      email: "john-parents@gmail.com",
    },
    address: {
      street: "65/2, brookyln road",
      city: "carterton",
      country: "new zealand",
      zip: "5791",
    },
  };
};

// this is hard coding

//const anotherStudent = getStudent();
//const anotherName = anotherStudent.name;
//const anotherSubs = anotherStudent.subjects;

//console.log(anotherName,anotherSubs)

// now let's destructure it!

const { name: anotherName, subjects: anotherSubs } = getStudent();
console.log(anotherName, anotherSubs);

//  DESTRUCTURING WITHIN THE LOOP

const students = [
  {
    name: "William",
    grade: "A",
  },

  {
    name: "Tom",
    grade: "B",
  },

  {
    name: "Bob",
    grade: "C",
  },
];

for (let { name, grade } of students) {
  console.log(name, grade);
}

//   OPTIONAL CHAINING
console.log("Optional chaining...");

const employee = {
  salary: {
    bonas: 300,
  },
};

console.log(employee.department); // udefined

// console.log(employee.department.name)// error

// const name = employee.department && employee.department.name// instead of this use optional chaining operator(?.)

const namee = employee.department?.name;
console.log(namee); // undefined
