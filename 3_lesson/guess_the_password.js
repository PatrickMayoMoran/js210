let password = 'password';
let guesses = 0;

while (guesses < 3) {
  let guess = prompt("What is the password?").trim();
  if (guess === password) {
    console.log("You have successfully logged in.");
    break;
  } else {
    console.log('Wrong. Guess again');
    guesses += 1;
  }
}

console.log('Access denied');
