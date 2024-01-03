function reverse(inputForReversal) {
  let reversed = [];
  length = inputForReversal.length;
  for (let i = length - 1; i >= 0; i -= 1) {
    element = inputForReversal[i];
    reversed.push(element);
  }

  return Array.isArray(inputForReversal) ? reversed : reversed.join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
