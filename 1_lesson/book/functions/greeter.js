let rlSync = require('readline-sync');

function fullName () {
  let firstName = rlSync.question('What is your first name? ');
  let lastName = rlSync.question('What is your last name? ');
  return firstName + ' ' + lastName;
}

let name = fullName();
console.log(`Hello, ${name}!`);
