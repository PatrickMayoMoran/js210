let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number : \n'));
let number2 = Number(rlSync.question('Enter the second number: \n'));

let sum = number1 + number2;

console.log(`The number ${number1} plus ${number2} equals ${sum}.`)
