function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

function arrayAverage (array) {
  let total = sum(array);
  return total / array.length;
}

console.log(arrayAverage([1, 3, 5, 7, 9, 11, 13, 15, 17]));
let temperatures = [71, 44, 53, 59, 48];
console.log(arrayAverage(temperatures));
