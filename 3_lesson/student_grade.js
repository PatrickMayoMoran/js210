let score1 = Number(prompt('Enter Score 1: '));
let score2 = Number(prompt('Enter Score 2: '));
let score3 = Number(prompt('Enter Score 3: '));

function computeAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

let studentScore = computeAverage(score1, score2, score3);
console.log(studentScore);

if (studentScore >= 90) {
  console.log('Your grade is an "A".');
} else if (studentScore >= 80) {
  console.log('Your grade is a "B".');
} else if (studentScore >= 70) {
  console.log('Your grade is a "C".');
} else {
  console.log('Not yet!');
}
