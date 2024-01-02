function indexOf(firstString, secondString) {
  let end = firstString.length - secondString.length;
  let distance = secondString.length;

  for (let start = 0; start <= end; start += 1) {
    comparisonString = '';
    for (let i = start; i <= (start + distance - 1); i += 1) {
      comparisonString += firstString[i];
    }

    if (comparisonString === secondString) return start;
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let begin = firstString.length - secondString.length;
  let distance = secondString.length;

  for (let start = begin; start >= 0; start -= 1) {
    let comparisonString = '';
    for (let i = 0; i < distance; i += 1) {
      comparisonString += firstString[start + i];
    }
    if (comparisonString === secondString) return start;
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1
console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
