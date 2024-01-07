// Classic version: converts arguments object into Array;
// function definition has no parameters!
function product() {
  let numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product (2, 3, 4, 5);
// Sugar version
function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
