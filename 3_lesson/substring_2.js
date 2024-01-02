/*
 * reorder numbers so start is the smaller number and end is the larger
 * if start is less than end, both are less than length, and both are positive
 */

function substring(string, start, end) {
  if ((start > 0 && end > 0) && (start < string.length && end < string.length)) {
    let min = Math.min(start, end);
    let max = Math.max(start, end);
    start = min;
    end = max;
  }

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (start > string.length) {
    start = string.length;
  }

  if (end < 0 || isNaN(end)) {
    end = 0
  } else if (end > string.length) {
    end = string.length;
  }

  let slice = '';
  for (i = start; i < end; i += 1) {
    slice += string[i];
  }

  return slice;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
