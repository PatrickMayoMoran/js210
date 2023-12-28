let names = ['Kevin', 'Sterling', 'Dave', 'Cip', 'Ray'];
let upperNames = []

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Cip') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);
