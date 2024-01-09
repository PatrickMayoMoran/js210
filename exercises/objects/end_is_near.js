// issue: negative indices do not count backwards, they are looking
// for the key '-2' on the Array object
function penultimateWrong(string) {
  return string.split(' ')[-2];
}

// fix: for second to last word, do length -2
function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
