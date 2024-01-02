/*
 * if search String is longer than string, return false
 * if searchString is blank, return true
 *
 * create a checkString that is blank
 * Otherwise, start at 0 and go up to the length of search string minus one
 * for every index, add that letter from string to check value
 * return the comparison of checkString and searchString
*/

function startsWith(string, searchString) {
  if (searchString.length > string.length) {
    return false;
  } else if (searchString === '') {
    return true;
  }

  let checkString = '';
  for (let i = 0; i < searchString.length; i += 1) {
    checkString += string[i];
  }
  /*
  Alternatively, check letter by letter rather than waiting
  for (let i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
   */

  return checkString === searchString;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
