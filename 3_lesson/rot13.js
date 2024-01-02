/* GOAL: given a string, return the rot13 encrypted version
 *
 * INPUT: string
 * OUTPUT: new string
 *
 * RULES:
 *  preserve case
 *  don't change noon alphabetic
 *
 * DATA STRUCTURES
 *  string
 *
 * ALGORITHM
 *  kind of problem?
 *    mapping of letters, in a sense
 *
 *  helper methods:
 *    encrypt(letter, rotation)
 *      given a letter,
 *    isLetter - checks if something is a letter or not
 *
 */

const ROTATION = 13;
const NORMALIZE = 26;
const LOWERSTART = 97;
const LOWEREND = 122;
const UPPERSTART = 65;
const UPPEREND = 90;
const UPPERLIMIT = 109;

function isLetter(charCode) {
  return isLower(charCode) || isUpper(charCode);
}

function isLower(charCode) {
  return charCode >= LOWERSTART && charCode <= LOWEREND;
}

function isUpper(charCode) {
  return charCode >= UPPERSTART && charCode <= UPPEREND;
}

function encryptLetter(charCode) {
  charCode += ROTATION;

  if ((charCode > LOWEREND) || (charCode > UPPEREND && charCode < UPPERLIMIT)) {
    charCode -= NORMALIZE;
  }
  
  return String.fromCharCode(charCode);
}

function rot13(string) {
  let encryptedString = '';
  for (let i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);
    if (isLetter(charCode)) {
      encryptedLetter = encryptLetter(charCode);
      encryptedString += encryptedLetter;
    } else {
      encryptedString += string[i];
    }
  }

  return encryptedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
