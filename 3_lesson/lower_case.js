let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

/*
create empty lower case string
iterate through each letter
if char code of the letter is between 65 and 90, 
  add 32, convert back, and add to string
otherwise
  add letter to string

return string
*/
function toLowerCase(string) {
  lowerString = '';
  for (let i = 0; i < string.length; i += 1) {
    let ascii = string.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      let lower = String.fromCharCode(ascii + 32);
      lowerString += lower;
    } else {
      lowerString += string[i];
    }
  }
  return lowerString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
