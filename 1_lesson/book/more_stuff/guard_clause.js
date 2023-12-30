function reverse_words(sentence) {
  if (sentence === null || sentence === undefined) {
    return undefined;
  }

  return sentence.split(' ')
                 .reverse()
                 .join(' ');
}

let one = reverse_words('Meow I love cats!');
let two = reverse_words(null);
let three = reverse_words(undefined);
console.log(one, two, three);
