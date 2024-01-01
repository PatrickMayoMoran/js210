function fifteenDivisible(number) {
  return number % 15 === 0;
}

function threeDivisible(number) {
  return number % 3 === 0;
}

function fiveDivisible(number) {
  return number % 5 === 0;
}

function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num += 1) {
    if (fifteenDivisible(num)) {
      console.log('Fizzbuzz!');
    } else if (threeDivisible(num)) {
      console.log('Fizz');
    } else if (fiveDivisible(num)) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
}

multiplesOfThreeAndFive();
