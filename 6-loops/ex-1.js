let readlineSync = require('readline-sync');
let userAge = readlineSync.question("What's your age?");

console.log(`You are ${userAge} years old.`);
for (i = 1; i < 4; i++) {
  let numYears = i * 10;
  console.log('In ' + numYears + ' years you will be ' + (Number(userAge) + numYears) + ' years old.');
}