function sum(number) {
  if (number > 1) {
    return number + sum(number - 1);
  } else {
    return 1;
  }
}

function factorial(number) {
  if (number > 1) {
    return number * factorial(number -1);
  } else {
    return 1;
  }
}

function sumOrProduct() {
  let rls = require("readline-sync");
  let number = rls.question('Please enter an integer greater than 0: \n');
  number = Number(number);

  let operation = rls.question('Enter "s" to compute the sum or "p" to compute the product: \n');
  if (operation === 's') {
    console.log(`The sum of the integers between 1 and ${number} is ${sum(number)}.`);
  } else if (operation === 'p') {
    console.log(`The product of the numbers between 1 and ${number} is ${factorial(number)}.`);
  } else {
    console.log('Hmmm, I don\'t know that operation...');
  }
}

sumOrProduct();
