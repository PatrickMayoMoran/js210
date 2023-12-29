let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
let upUpKeys = keys.map(key => key.toUpperCase());
console.log(upUpKeys);

let upperKeys = [];
keys.forEach(key => upperKeys.push(key.toUpperCase()));
console.log(upperKeys);
