// HOW TO STEP THROUGH OBJECTS
let nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

// 1 - FOR... IN LOOP, access to keys
for (let nick in nicknames) {
  console.log(`Key: ${nick}\nValue: ${nicknames[nick]}`);
}

// 2 - OBJECT.KEYS from object; for loop to iterate through keys
let keys = Object.keys(nicknames);
for (let i = 0; i < keys.length; i += 1) {
  key = keys[i];
  console.log(`Key: ${key}\nValue: ${nicknames[key]}`);
}

