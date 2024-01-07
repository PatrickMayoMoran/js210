const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
// will log the actual function definitions because there
// are no appended parentheses. Functions are first class objects
// so they can be passed around and returned
// We'd need the above to be person.firstName() to invoke
// the function, just like String.toUpperCase()
