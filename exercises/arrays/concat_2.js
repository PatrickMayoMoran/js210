function concat(array, ...args) {
  let newArray = array.slice();
  for (let a = 0; a < args.length; a += 1) {
    if (Array.isArray(args[a])) {
      for (let i = 0; i < args[a].length; i += 1) {
        newArray.push(args[a][i]);
      }
    } else {
      newArray.push(args[a]);
    }
  }

  return newArray;
}
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
