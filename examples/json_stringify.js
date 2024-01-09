let mayo = { name: 'Mayo', team: 'Stall 11' };
let naise = { name: 'Mayo', team: 'Stall 11' };
console.log(JSON.stringify(mayo) === JSON.stringify(naise));
let parsed = JSON.parse(JSON.stringify(mayo));
console.log(parsed);
console.log(mayo);
