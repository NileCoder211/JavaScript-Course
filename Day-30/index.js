// what is a class
// A class in JavaScript (in OOP terms) is a blueprint for creating objects. It lets you define properties (data)
//  and methods (behavior) that objects created from it will have.
// Simple idea

// Think of a class like a template:
//A class = blueprint (e.g., “Cat”)
// An object = actual instance (e.g., “Tom”)

// Syntax of a Class

class firstClass {
  Constructor() {} // it is defined once and it let construct the class object or instance

  //Methods are functions inside a class that define what the object can do.
  method1() {}
  method2() {}
  method3() {}
  method4() {}
}

const a = new firstClass();
const b = new firstClass();

console.log(a === b); //  false: Because === in JavaScript does not compare content for objects — it compares memory reference (identity).

// Initialize a Class

class Car {
  constructor(model) {
    this.model = model;
  }

  printThis() {
    console.log(this);
    // "this" keyword  will always referred to the object on which you are calling the method
    // and the object on which you are calling the class is that "INSTANCE" you created out of the class
  }

  printModel() {
    console.log(this.model);
  }
}

const bmwCar = new Car("bmw");
const audiCar = new Car("audi");

console.log(bmwCar); // object of bmwCar
console.log(audiCar); // object of audiCar
bmwCar.printModel(); // bmw
audiCar.printModel(); // audi
bmwCar.printThis(); // object of bmwCar
audiCar.printThis(); // object of audiCar

// In a class:
// this = the specific object (instance) that is calling the method
// this is determined by how the function is called, not where it’s written

// 🧱 Simple analogy
// Think of this as:
// “Who is calling me right now?”
// bmwCar.printThis() → caller = bmwCar
// audiCar.printThis() → caller = audiCar

// ✅ Final takeaway
// this refers to the current instance
// Each object gets its own this
// Same method → different this depending on caller

console.log(typeof Car); // function
/* 
 In JavaScript, a class is just syntactic sugar over a constructor function
Why a function?
Because: 👉 Creating objects in JavaScript has always been done with functions
So when class was introduced (ES6), it didn’t replace this system—it just made it cleaner.

 Even though class is a function:
 class Car {}
console.log(Car instanceof Function); // true

👉 But it's a special kind of function:
Cannot be called without new
Has built-in prototype handling
Cleaner syntax

Final takeaway
typeof className === "function" because classes are built on functions
JavaScript is prototype-based, not truly class-based
class is just nice syntax on top of old behavior

====== whether "car" or "Car"=======
JavaScript doesn’t care about naming style when determining types.
A class is treated as a function internally no matter what you name it

*/

// ============= Class as Expression ============

const Employee = class {
  welcome() {
    console.log("Hello Employee");
  }
};

const emp = new Employee();
emp.welcome();

// Named Class

const Dept = class Department {
  welcome() {
    console.log("Welcome to Department");
    console.log(Department);// this will give you the whole class
  }
};

const d = new Dept();
d.welcome();

// Class fields

class Phone {
  brand = "Apple";

  make() {
    console.log(this.brand);
  }
}

const phone = new Phone();
console.log(phone); // phone object
phone.make(); // "Apple"

// ============= Getters and Setters ============
// These are methods through which you can set and get the value of a property
// optionally, you can do validations based on your use cases

class Animal {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return ` The animal name is ${this._name}`;
  }

  set name(value) {
    if (!value) {
      console.warn("The name of the animal is required!");
      return;
    }

    if(value.length <3){
      console.warn("The name must be of 3 and more characters");
      return;
    }
    this._name = value;
  }
}

const animal = new Animal("Tiger");
console.log(animal.name); // The animal name is Tiger
console.log(animal);// animal object
console.log(Animal.prototype);// object
animal.name = ""; // The name of the animal is required!


// ============= Static Properties ===================
// "static" keyword must be used
// here the class doesn't required to be instantiated(like no need of using  "new" keyword)

class MyClass{
  static staticMethod(){
    console.log(this)// here the "this" keyword will always refers to the class itself
  }
}

MyClass.staticMethod()// this referred to the class itself



class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    // Defines a method available to all instances of User. Why? So every user can perform the same action (greeting).
    console.log(`Hi, I’m ${this.name}`); // this.name ensures the greeting is personalized per user.Template literals make string
    //  interpolation easier.
  }

  // ====== Static utility method ====
  // Defines a static method (belongs to the class, not instances).
  // Why? Email validation doesn’t depend on a specific user object.
  // So it makes sense to attach it to the class itself.
  static isValidEmail(email) {
    // Very basic check
    return email.includes("@") && email.includes("."); // Checks if the email contains @ and .
  }

  // Static factory method to create guest user
  static createGuest() {
    return new User("Guest", "guest@example.com"); // Returns a new User instance with default values.
    //  Why?
//Saves you from repeatedly writing the same code.
//Ensures consistency (all guest users are identical).
  }
}

// Using static method without creating any user
// here we use "User" instead of "user" since it is a class
console.log(User.isValidEmail("john@example.com"));  // true since it contains both "@" and "."
console.log(User.isValidEmail("johnexample.com"));   // false since it contains only "." while missing "@"

// Creating a guest user using static method
const guestUser = User.createGuest();
guestUser.greet(); // Hi, I’m Guest

// Creating a real user
const user1 = new User("John", "john@example.com");
user1.greet(); // Hi, I’m John

/* 
Key Takeaways (Important “Why” Concepts)
Classes → organize related data + behavior.
Constructor → ensures every object starts with required data.
this → refers to the specific instance.
Instance methods → actions tied to individual objects.
Static methods → utility/helper functions not tied to instances.
Factory methods → simplify object creation and enforce consistency.
 */



// =============== Private and Public ================

// Public: These are fields and methods which are accessible from anywhere
// Private: These are fields and methods which are accessible only inside of the class.

class WashingMachine {
  // Public field
  brand;

  // Private fields
  #powerStatus = false;
  #currentCycle = null;

  // Simulated Protected field (naming convention)
  _log = []; //Stores internal logs. _ is just a convention. Why?
// Signals: “This is internal—don’t use it directly.”
// But JavaScript still allows access.

  constructor(brand) {
    this.brand = brand;
  }

  // Public method
  start(cycle) {
    if (!this.#powerStatus) {
      this.#turnOn();
    }
    this.#currentCycle = cycle;
    console.log(`Starting ${cycle} cycle...`);
    this.#spin();
    this.#drain();
    this._log.push(`Cycle ${cycle} completed.`);// Stores completion message. Why? Keeps history for debugging or tracking.
    this.stop();
  }

  // Public method
  stop() {
    console.log("Washing machine stopped.");
    this.#turnOff();
  }

  // Private method
  #turnOn() {
    this.#powerStatus = true;
    console.log("Power ON");
  }

  // Private method
  #turnOff() {
    this.#powerStatus = false;
    console.log("Power OFF");
  }

  // Private method
  #spin() {
    console.log("Spinning...");
  }

  // Private method
  #drain() {
    console.log("Draining...");
  }

  // Simulated protected method
  _showLog() {
    console.log("Internal Logs:", this._log);
  }
}

const lgWasher = new WashingMachine("LG");// Instantiates the class with specific data.

lgWasher.start("Quick Wash");
// Output:
// Power ON
// Starting Quick Wash cycle...
// Spinning...
// Draining...
// Washing machine stopped.
// Power OFF

console.log(lgWasher.brand); // LG

// Private access not allowed
// console.log(lgWasher.#powerStatus); // SyntaxError
// lgWasher.#turnOn(); // SyntaxError

// Public methods
lgWasher.stop(); // Washing machine stopped. Power OFF

// Accessing protected (not recommended but possible)
lgWasher._showLog(); // Internal Logs: [ 'Cycle Quick Wash completed.' ]





// 9. Extending

class Human {
  species = "Homo Sapiens"; // Public field

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// Subclass: Student

class Student extends Human {
  // Overriding a class field
  species = "Homo Sapiens (Student)";

  constructor(name, age, grade) {
    super(name, age); // Calls the constructor of the Human class
    this.grade = grade;
  }

  // Method overriding
  introduce() {
    console.log(
      `Hey! I'm ${this.name}, ${this.age} years old and I study in grade ${this.grade}.`
    );
  }

  study() {
    console.log(`${this.name} is studying...`);
  }
}

// Subclass: Teacher

class Teacher extends Human {
  constructor(name, age, subject) {
    super(name, age); // Inherit name and age from Human
    this.subject = subject;
  }

  // Overriding the introduce method
  introduce() {
    console.log(`Hello, I’m ${this.name}, a ${this.subject} teacher.`);
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

// Usage

const alice = new Student("Alice", 14, 9);
const bob = new Teacher("Bob", 35, "Mathematics");

alice.introduce();  // Overridden method in Student
// "Hey! I'm Alice, 14 years old and I study in grade 9."

bob.introduce();    // Overridden method in Teacher
// "Hello, I’m Bob, a Mathematics teacher."

alice.sleep();      // Inherited from Human
// "Alice is sleeping."

bob.sleep();        // Inherited from Human
// "Bob is sleeping."

console.log(alice.species); // "Homo Sapiens (Student)"
console.log(bob.species);   // "Homo Sapiens" (inherited from Human)