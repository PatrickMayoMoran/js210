function roomSize() {
  let readlineSync = require("readline-sync");
  const meterFeet = 10.7639;

  let width = Number(readlineSync.question('What is the width of the room in meters?\n'));
  let length = Number(readlineSync.question('What is the length of the room in meters?\n'));

  let area = width * length;
  console.log(`The area of the room is ${area} square meters and ${area * meterFeet} square feet`);
}

roomSize();
