// Composition
// Composition is a design principle where one class contains or is composed of one or more objects of other classes to reuse
//  their functionality, instead of inheriting from them
// Definition: Use of other classes to build functionality.
// to compose means : To form or make up something.

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  // The constructor is a special method that runs automatically when a new Car is created.
  //Why? It’s used to set up initial properties of the car.
  constructor() {
    this.engine = new Engine();
  }
     // "this" creates a **new Engine object** and assigns it to the car.
//- `"this".engine` means “this car has an engine”.
//- **Why?** A car needs an engine to function, so we give each car its own engine.
// 👉 This is an example of **composition** (a car *has an* engine).

 

  startCar() {
    this.engine.start();
  }
  // "this" calls the start() method of the engine inside the car.
// Why? The car doesn’t start itself—it tells its engine to start.
}

const car = new Car();
car.startCar();


// to compose means : To form or make up something.