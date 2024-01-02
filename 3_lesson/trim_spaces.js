/*
new string is blank
start index =
  go from beginning of string to end
  if string[index] is not a space, log that as start
end index =
  go from end of string to beginning
  if string[inde] is not a space, log that as end
go from start to end
  add string[index] to new string
return new string
*/
function trim(string) {
  if (string.length === 0) return '';

  let start;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      start = i;
      break;
    }
  }

  let end;
  for (let i = string.length - 1; i >= 0; i -= 1) {
    if (string[i] !== ' ') { 
      end = i;
      break;
    }
  }

  let trimmedString = '';
  for (let i = start; i <= end; i += 1) {
    trimmedString += string[i];
  }

  return trimmedString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
