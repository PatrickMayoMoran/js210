/*
 * If there's no delimiter, return undefined
 * create a new empty string
 * for the length of string, iterate over each character
 * if the delimiter is blank, log each character
 * otherwise, if character !== delimiter, add it to string
 * otherwise, if character === delimiter, 
 *  log the word
 *  reset the word
*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter.');
    return;
  }

  split = ''
  for (let i = 0; i < string.length; i += 1) {
    if (delimiter === '') {
      console.log(string[i]);
    } else if (string[i] !== delimiter) {
      split += string[i];
    } else if (string[i] === delimiter) {
      console.log(split);
      split = '';
    }
  }
  if (!!split) console.log(split);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
