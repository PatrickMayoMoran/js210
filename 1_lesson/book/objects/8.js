function copyObj(object, keys = []) {
  if (keys.length == 0) {
    return Object.assign({}, object);
  };

  let copiedObj = {};
  for (let key in object) {
    if (keys.includes(key)) {
      copiedObj[key] = object[key];
    }
  }

  return copiedObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
