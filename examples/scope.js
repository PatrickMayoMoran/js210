let a = 5;

do {
  a = 7;
  let b = 3;
  var c = 1;
} while (false)

console.log(a); // logs 7
console.log(c); // logs 1
console.log(b); // ReferenceError: b is not defined
