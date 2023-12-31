function closureArray() {
  let array = [0, 1, 2];
  function uniqueArray() {
    array.push("More shoes!") ;
    console.log(array);
  };

  return uniqueArray;
};

let array1 = closureArray();
let array2 = closureArray();

// each invocation of closureArray returns a function with a pointer to a new
// Array object created on line 2 when closureArray is run.
array1(); // [0, 1, 2, "More shoes!"]
array1(); // [0, 1, 2, "More shoes!", "More shoes!"]
array1(); // [0, 1, 2, "More shoes!", "More shoes!", "More shoes!"]
array2(); // [0, 1, 2, "More shoes!"]
array2(); // [0, 1, 2, "More shoes!", "More shoes!"]
array2(); // [0, 1, 2, "More shoes!", "More shoes!", "More shoes!"]
