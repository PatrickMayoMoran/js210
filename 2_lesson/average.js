function sum(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum
}

function average (num1, num2, num3) {
  let average = sum(num1, num2, num3) / 3;
  return average;
}

let testAverage = average(5, 7, 9);
console.log(testAverage);
