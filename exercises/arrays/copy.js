function copyArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }

  return newArray;
}

function mergeArray(array) {
  let newArray = [];
  newArray = array.slice();

  return newArray;
}

let myArray = [1, 2, 3, 4];
const myOtherArray = copyArray(myArray);
const myOtherArray2 = mergeArray(myArray);

myArray.pop();
console.log(myOtherArray);
console.log(myOtherArray2);

myArray = [1, 2];
console.log(myOtherArray);
console.log(myOtherArray2);
