let readlineSync = require('readline-sync');

function askForName(questionText) {
  let nameText = readlineSync.question(questionText);
return nameText;
}

let firstName = askForName('What is you first name? ');
let lastName = askForName('What is you last name? ');

console.log(`Hello, ${firstName} ${lastName}`);