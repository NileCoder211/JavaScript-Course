console.log("Error Handling in JS");

//            TYPES OF ERRORS IN JAVASCRIPT

// 1. PARSING ERRORS - These are errors that occur when the JavaScript engine is unable to parse  the code due to syntax errors or invalid tokens.
// These errors includes missing brackets, missing semicolons, and invalid variables' names.

// 2. RUNTIME ERRORS - these are errors that occur during the excution of the code. In this case the code is syntatically correct but it fails to execute
// due to some logical errors. These errors includes undefined varisbles,null values and type errors.

//    What is Exception in JavaScript?
// Ans: Exceptions are runtime errors that disrupt program execution.

// Examples:

//console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: Cannot read property 'name' of null

// console.log("hi"  //  SyntaxError: missing ) after argument list

//  let  arr= new Array (-1)// RangeError: Invalid array length

// try....catch statement

try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
}

try {
  console.log("Execution started here");
  abcd; // This will throw a ReferenceError because abcd is not defined

  console.log("Execution ended here");
} catch (error) {
  console.error("An error has occurred", error);

  //       LET'S HAVE A LOOK AT THE ERROR OBJECT
  console.log(error.name); // This tells you the type of error that has occurred
  console.log(error.message); // this tells you the error message that has occurred in more details.
  console.log(error.stack); // this tells you the stack trace of the error that has occurred.
  console.log(error.fileName); // this tells you the file name in which the error has occurred. but must be defined first.
  console.log(error.lineNumber); // this tells you the line number in which the error has occcurred. but must be defined first.
  console.log(error.columnNumber); // this tells you the column number in which the error has occurred. but must be defined first.
}

// REAL WORLD IN USE CASES OF TRY CATCH BLOCKS

function divideNumber(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
      // Error is a constructor function that creates an error object with a message as parameter.
      // the throw statement is use to throw an error object.
    }
    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.log("Got a Math Error", error.message);
  }
}

divideNumber(15, 3);
divideNumber(15, 0);

const person = {
  name: "khorado",
  address: {
    city: "Juba",
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.getPostalCode);
  } catch (error) {
    console.error("Error accessing property:", error.mrssage);
  }
}

getPostalCode(person);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      console.log(`Invalid input: Age must be a number.Your input is ${age}`);
    }
    console.log(`User's age is ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.mrssage);
  }
}

validateAge(30);
validateAge("khorado");

//       RE-THROW

function validateForm(formData) {
  try {
    if (!formData.username) throw new Error("Username is required");
    if (!formData.email.includes("@")) throw new Error("Invalid email format!");
    // includes is a method on string object that is use to to ientify if a particular character exists inside a string or not
  } catch (error) {
    console.error("Validation issues found:", error.message);
    throw error; // rethrow
  }
}

try {
  validateForm({ username: "khorado", email: "khorado.com" });
} catch (error) {
  console.error("showing error message for user creation:", error.message);
}

// Try-catch-finally statement

try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code that always runs (cleanup actions)
}

function processInformation(information) {
  try {
    console.log("Processing information...");
    if (!information) throw new Error("No information available to process");
    console.log("Information processed sucessfully!)");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Cleanup: Closing database connection");
  }
}

processInformation();
processInformation("khorado is learning JS");

//       CUSTOM ERROR OBJECTS
// Custom error objects are user-defined error classes that extend the built-in Error class. They allow you to create specific error types with custom
//  messages and properties.
// Custom error objects are useful for creating more meaningfull error messages and handling specific error scenarios in your code.
//this helps one to create their own constructor function for their own error instead of JS constructor function.

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = "message";
  //  this.stack = new Error().stack;
}

// ValidationError.prototype = Object.create(Error.prototype);
function ValidationCitizen(age) {
  if (age < 60) {
    throw new ValidationError("yOU ARE NOT A SENIOR CITIZEN");
  }
  return "You are a senior citizen";
}

try {
  const message = ValidationCitizen(85);
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

//    SELF ASSIGNMENT OPERATOR  ?=
