let stringArray = (array) => {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    string += array[i];
  }

  return string;
};

console.log(stringArray([1, 'a', 4]));
