let obj = {
  b: 2,
  a: 1,
  c: 3,
};

array = Object.keys(obj);
capitals = array.map( letter => letter.toUpperCase());
console.log(capitals);
