/*
 * check to see if start is negative
 *    if so, assign start to length minues start
 * check to see if start plus length is longer than or equal to string length
 * if so, set the ending index to string length
 *
 * iterate from the start to the end, adding each character to slice
 * return slcie
 */
function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let end = start + length;
  if (end >= string.length) {
    end = string.length;
  }

  let slice = ''
  if (length < 0) return slice;
  for (i = start; i < end; i += 1) {
    slice += string[i];
  }

  return slice;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
