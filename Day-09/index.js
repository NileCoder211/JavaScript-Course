// TEMPORARY DEAD ZONE (TDZ)

// TDZ=== An area where you cannot access a variable untill it is initialized
{
  // name variable's TDZ started here
  //
  //
  // console.log(name) // ReferenceError
  //
  //
  console.log(address); //  ReferenceError
  //
  //
  let address = "Nairobi";
  let name = "Khorado"; // name variable's TDZ ends here
  //
  //
  console.log(name); // there would be error since TDZ ends where the variable address has been intialized
  //
  //
}

// FUNCTION HOISTING

// Invoke a function, chase()m

Chase();

function chase() {
  console.log("Tom chase Jerry");
  // Invoke a function, caught();

  Caught();
}

// Declare a function, caught();

function caught() {
  console.log("Tom caught Jerry");
}
