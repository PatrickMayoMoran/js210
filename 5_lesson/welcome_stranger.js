function welcomeStranger (person, info) {
  let name = person.join(' ');
  let title = info.title;
  let occupation = info.occupation;
  let greeting = `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;

  console.log(greeting);
}

welcomeStranger(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
