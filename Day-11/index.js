//      CLOSURE
// Closure is function that can remember a variable from its outer function even after the outer function has executed.
// A closure allows a function to access a variable from its outer scope even after the outer scope finished the execution.

function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };

  inner();
}

const func = outer(); // at this line the execution of outer function is over.

console.log(func); // this line will bring a function inner(){console.log(x);} as it is up there.The beauty of it is that we don't really know the
// exact value of x and the beauty of closure.

console.log(func()); // this will print the value of x which is 10 even if the execution of the outer function is done since closure remember the memory
// of the stored value in the variable

function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  };

  innerCount();
}

const retVal = outerCount();

retVal(); // 1
retVal(); // 2
retVal(); // 3

//        CLOSURE IN REAL WORLD EXAMPLE

// Data Encapsulation is a paradigm in which you don't expose your private varaiables or the private data to the outer world if they have to do something
// with the private data

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return function deposit(amount) {
    balance = balance + amount;
    console.log("Deposit", amount, "Current Balance", balance);
  };
}

//const khoradoAccount = createBankAccount(100) // this is to initialized balance to 100/=

console.log(khoradoAccount); // this just bring the all codes for deposit function which means the actual balance which has
// been declared using let is not exposed to the public and that is the beauty of closure.

console.log(khoradoAccount(300)); // balance will be 400

console.log(khoradoAccount(500)); // balance will be 900 since it remembers the last memory which was 400

// NB JavaScript function can only return one function in it.However when one needs to return more functions inside of one function,one can take the
// advantage of an object.Always return an object instead of multiples functions.Hence,,,,,,,

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposit", amount, "Current Balance", balance);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insufficient Fund");
      } else {
        balance = balance - amount;
        console.log("Withdrawn", amount, "Current Balance", balance);
      }
    },

    checkBalance: () => console.log("Current Balance", balance),
  };
}

const khoradoAccount = createBankAccount(100);

console.log(khoradoAccount);

console.log(khoradoAccount.deposit(300)); // 400

console.log(khoradoAccount.withdraw(700)); // warning of insufficient fund resulted

console.log(khoradoAccount.withdraw(50)); // balance will be 350

console.log(khoradoAccount.withdraw(20)); // balance will be 330

console.log(khoradoAccount.withdraw(50)); // balance will be 280

console.log(khoradoAccount.withdraw(150)); // balance will be 130

console.log(khoradoAccount.checkBalance()); // current balance will be 130

// ADVANTAGES OF USING CLOSURE
// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep variable alive among multiple calls.
