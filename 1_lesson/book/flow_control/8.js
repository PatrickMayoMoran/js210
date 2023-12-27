function numberRange (number) {
  if (number >= 0 && number <= 50) {
    console.log('Between 0 and 50');
  } else if (number > 50 && number <= 100) {
    console.log('Between 51 and 100');
  } else if (number > 100) {
    console.log('Greater than 100!');
  } else {
    console.log('Less than zero');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
