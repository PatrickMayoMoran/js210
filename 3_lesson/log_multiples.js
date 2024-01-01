function logMultiples(number) {
  let multiple = 0;
  for (let factor = 1; multiple < 100; factor += 1) {
    if (multiple % 2 === 1) console.log(multiple);
    multiple = number * factor;
  }
}

logMultiples(21);
logMultiples(17);
