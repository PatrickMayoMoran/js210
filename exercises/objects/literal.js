// Spot the bug!
// It's in myObject[a] - looks for variable a for a value to use
// as the key to reference and doesn't find it - ReferenceError
// myObject[1] works because [1] is coerced into ['1']
// numbers get coerced
// myObject.a would work 
const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject);
myObject[1];
myObject[a];
myObject.a;
