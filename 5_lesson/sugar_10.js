// Write a function with:
// - 5 string arguments
// - returns an object with three properties
// --- first: the first argument
// --- last: the last argument
// --- middle: the middle 3 arguments as a sorted array
//
// Write code to call the function
// The five string arguments should come from an array
// Create local variables called first, middle, and last from the return value

function threeWishes (first, middle1, middle2, middle3, last) {
  return { 
    first,
    last,
    middle: [middle1, middle2, middle3],
    };
}

let array = ['cat', 'meow', 'Tiny', 'Rules', 'Lidl Paws'];
let { first, last, middle } = threeWishes(...array);
console.log(first);
console.log(last);
console.log(middle);
