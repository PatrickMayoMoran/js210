function unshift(array, value) {
  let newLength = array.length + 1;
  array.length = newLength;
  for (let i = 1; i < newLength; i += 1) {
    array[newLength - i] = array[newLength - i - 1];
  }
  array[0] = value;
  return newLength;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
