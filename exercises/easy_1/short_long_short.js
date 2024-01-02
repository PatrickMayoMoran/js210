function shortLongShort (string1, string2) {
  let shorter;
  let longer;
  if (string1.length < string2.length) {
    shorter = string1;
    longer = string2;
  } else {
    shorter = string2;
    longer = string1;
  }

  return shorter + longer + shorter;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
