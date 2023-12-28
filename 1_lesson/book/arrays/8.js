// use reduce
//
function oddLengths(array) {
  return array.reduce(function(acc, current) {
    if (current.length % 2 !== 0) {
      acc.push(current.length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
