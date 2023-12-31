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

array1(); // [0, 1, 2, "More shoes!"]
array1(); // [0, 1, 2, "More shoes!", "More shoes!"]
array1(); // [0, 1, 2, "More shoes!", "More shoes!", "More shoes!"]
array2(); // [0, 1, 2, "More shoes!", "More shoes!", "More shoes!", "More shoes!"]
array2(); // [0, 1, 2, "More shoes!"]
array2(); // [0, 1, 2, "More shoes!"]
