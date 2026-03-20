// Encapsulation

// Definition: Group related properties and methods, and restrict direct access to internal data.
// In Code: Use # for private fields.

// Encapsulation is like putting things inside a capsule (container) and controlling how they are accessed.

class Car {
  #speed = 0;

  accelerate() {
    this.#speed += 10;
  }

  getSpeed() {
    return this.#speed;
  }
}

const car = new Car();
car.accelerate();
console.log(car.getSpeed()); // 10



class BankAccount {
  #balance = 0; // private (hidden)

  deposit(amount) {
    this.#balance += amount;
  }
  // The operator += means:“Add the value on the right to the variable on the left, and store the result back in the same variable.”
  // this.#balance = this.#balance + amount;

  // 🔹 Step-by-step explanation
// this.#balance → current balance
// amount → money being added
// += → add and update
// 👉 So it means:
// “Take the current balance, add the amount, and save the new total back into balance.”

  getBalance() {
    return this.#balance;
  }
}

const bankAccount = new BankAccount()
bankAccount.deposit(20);
bankAccount.deposit(50);
console.log(bankAccount.deposit(30))// this will be undefined, since deposit() method doesn't return anything
// And when a function does not return anything its value will automatically be "undefined"
// "undefined" means a variable is declared but no value is assigned to it
console.log(bankAccount.getBalance())// 20+50+30 = 100

// Explanation:
// #balance is private → cannot be accessed directly from outside.
// deposit() and getBalance() control access.
// This protects the data from being changed incorrectly.