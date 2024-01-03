function push(array, element) {
  array[array.length] = element;
  return array.length;
}

function splice(array, start, length) {
  let newArray = []
  for (let i = start; i < start + length; i += 1) {
    push(newArray, array[i]);
    array[i] = array[i + length];
  }

  array.length = array.length - newArray.length;
  return newArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
