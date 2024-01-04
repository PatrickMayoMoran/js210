function objectHasProperty(object, key) {
  let keys = Object.keys(object);
  return keys.indexOf(key) !== -1;
}

function incrementProperty(object, key) {
  if (objectHasProperty(object, key)) {
    return object[key] += 1;
  } else {
    return object[key] = 1;
  }
}

function wordCount(string) {
  let words = string.split(' ');
  let wordCount = {};
  for (let word of words) {
    incrementProperty(wordCount, word);
  }

  return wordCount;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
