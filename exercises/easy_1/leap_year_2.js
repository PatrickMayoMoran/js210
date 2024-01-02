function divisibleFourHundred(year) {
  return year % 400 === 0;
}

function divisibleOneHundred(year) {
  return year % 100 === 0;
}

function divisibleFour(year) {
  return year % 4 === 0;
}

function isJulianLeapYear(year) {
  return year % 4 === 0;
}

function isGregorianLeapYear(year) {
  if (divisibleFourHundred(year)) {
    return true;
  } else if (divisibleOneHundred(year)) {
    return false;
  } else if (divisibleFour(year)) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear(year) {
  if (year >= 1752) {
    return isGregorianLeapYear(year);
  } else {
    return isJulianLeapYear(year);
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true

