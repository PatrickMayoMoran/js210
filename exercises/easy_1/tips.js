// toFixed(2) for two decimal places
function tipCalculator() {
  let rls = require("readline-sync");

  let bill = Number(rls.question('How much is the bill?\n'));
  let tip = Number(rls.question('What\'s the tip percentage?\n'));
  tip = tip / 100 * bill;
  let total = bill + tip;

  console.log(`The tip is $${tip.toFixed(2)}.`);
  console.log(`The total is $${total.toFixed(2)}.`);
}

tipCalculator();
