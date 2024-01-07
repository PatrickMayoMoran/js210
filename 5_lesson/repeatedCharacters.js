function repeatedCharacters(string) {
  let lowerString = string.toLowerCase();
  let characterCounts = characterCount(lowerString);
  let repeats = {}
  for (let letter in characterCounts) {
    let count = characterCounts[letter];
    if (count >= 2) {
      repeats[letter] = count;
    }
  }

  return repeats;
}

function characterCount(string) {
  let letters = string.split('');
  let count = {};
  for (let letter of letters) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }

  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
