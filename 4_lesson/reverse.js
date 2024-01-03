function reverse(array) {
  let reversedArray = [];
  for (let i = 1; i <= array.length; i += 1) {
    index = array.length - i;
    reversedArray.push(array[index]);
  }

  return reversedArray;
}

console.log(reverse([1,2,3,4,5]));
