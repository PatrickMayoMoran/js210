let rlSync = require('readline-sync');

function getNumber(request) {
  let number = rlSync.question(request);
  return Number(number);
}

function multiply () {
  let number1 = getNumber("Please enter the first number: ");
  let number2 = getNumber("Please enter the second number: ");
  let multiplied = number1 * number2;
  console.log(`${number1} * ${number2} = ${multiplied}`);
  return multiplied;
}

multiply();
