function shift(array) {
  let shifted = array[0];
  array.splice(0, 1);
  return shifted;
}

function unshift(array, ...args) {
  let startLength = array.length;
  array.length = array.length + args.length;
  for (let i = 1; i <= startLength; i += 1) {
    array[array.length - i] = array[startLength - i];
  }

  for (let i = 0; i < args.length; i += 1) {
    array[i] = args[i];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
