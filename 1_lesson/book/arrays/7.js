function sumOfSquares(array) {
  let reduction = array.reduce(function(accumulator, current) {
    return accumulator + (current * current);
  }, 0);
  return reduction;
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
