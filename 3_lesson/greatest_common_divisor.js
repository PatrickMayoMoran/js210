function gcd(num1, num2) {
  let smaller = Math.min(num1, num2);
  for (divisor = smaller; divisor > 0; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
