function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

function average (num1, num2, num3) {
  let average = sum(num1, num2, num3) / 3;
  return average;
}

function arrayAverage (array) {
  let total = sum(array);
  return total / array.length;
}

console.log(arrayAverage([1, 3, 5, 7, 9, 11, 13, 15, 17]));
