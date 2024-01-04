let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// function objectHasProperty(object, key) {
//   return (String(object[key]) !== 'undefined');
// }

function objectHasProperty(object, key) {
  let keys = Object.keys(object);
  return keys.indexOf(key) !== -1;
}

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true
