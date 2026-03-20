// Abstraction

// Definition: Hiding internal details and showing only essential features.
// In Code: Provide public methods like startEngine() while hiding what happens inside.
// To abstract means to take or remove something (especially information or ideas).

class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Engine started");
  }

  #injectFuel() {
    console.log("Fuel injected");
  }

  #ignite() {
    console.log("Spark generated");
  }
}

const car = new Car()
car.startEngine();

// Only startEngine() is visible to users; internal complexity is abstracted.
// To abstract means to take or remove something (especially information or ideas).
