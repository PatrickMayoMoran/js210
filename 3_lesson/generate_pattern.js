function generatePattern(num) {
  let finalLine = '';
  for (let i = 1; i <= num; i += 1) {
    finalLine += String(i);
  }

  let width = finalLine.length;
  let numString = '';

  for (let square = 1; square <= num; square +=1) {
    numString += String(square);
    let numStars = width - numString.length;
    let stars = '';
    for (let i = 1; i <= numStars; i += 1) {
      stars += '*';
    }

    console.log(`${numString}${stars}`);
  }
}

generatePattern(7);
generatePattern(1);
generatePattern(19);
