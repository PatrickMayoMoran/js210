/*
if times is not a number, or is a negative number, return undefined
create copy string
for number of times,
  copy string gets string added to it
return copy string
*/

function repeat(string, times) {
  if (typeof times != "number" || times < 0) {
    console.log(undefined);
    return undefined;
  }

  let repeated = '';
  for (let time = 1; time <= times; time += 1) {
    repeated += string;
  }

  console.log(repeated);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
