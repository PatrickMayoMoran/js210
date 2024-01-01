function logOddNumbers(number) {
  if (number % 2 === 0) return;

  for (let current = 1; current <= number; current += 2) {
    console.log(current);
  }
}

logOddNumbers(19);
logOddNumbers(1);
logOddNumbers(18);
