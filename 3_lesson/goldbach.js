/*
GOAL: log every pair of primes, smaller number first, that sum to a given number

INPUT: integer
OUTPUT: none, pairs logged to consoles

RULES:
  Explicit:
    pair of numbers logged must sum to given number
    pair of numbers must be prime
    smaller number first
    if given number less than 4, return and log null

DATA STRUCTURES:
  none, iteration

ALGORITHM:

- start at 2 and iterate up to half of the given number
  - if number is greater than 2 and even, continue to next iteration
  - create additional variable to iterator: expectedSum - iterator
  - check if both operands are prime
  - if so, log to console,
  - if not, continue
*/
let checkGoldbach = expectedSum => {
  if (expectedSum < 4 || (expectedSum % 2 === 1)) {
    console.log(null);
    return;
  }

  let stop = Math.floor(expectedSum / 2);
  for (let num1 = 2; num1 <= stop; num1 += 1) {
    if (num1 > 2 && num1 % 2 === 0) continue;

    let num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(`${num1} ${num2}`);
    }
  }
};


function isPrime(number) {
  if (number <= 1) return false;

  for (let divisor = 2; divisor < number / 2; divisor += 1) {
    if (number % divisor === 0) return false;
  }

  return true;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
