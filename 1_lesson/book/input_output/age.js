let rlSync = require('readline-sync');
let age = Number(rlSync.question(`What is your age? `));

console.log(`You are currently ${age} years old.`);
console.log(`In 10 years, you will be ${10 + age} years old.`);
console.log(`In 20 years, you will be ${20 + age} years old.`);
console.log(`In 30 years, you will be ${30 + age} years old.`);
console.log(`In 40 years, you will be ${40 + age} years old.`);
