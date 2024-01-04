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

let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, key) {
  if (objectHasProperty(object, key)) {
    return object[key] += 1;
  } else {
    return object[key] = 1;
  }
}

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
