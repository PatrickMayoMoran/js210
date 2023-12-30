const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

/*
THese are falsy values:
  null
  undefined
  NaN
  0
  ''
  false

Everything else is truthy, including empty objects {} and empty arrays []
*/
