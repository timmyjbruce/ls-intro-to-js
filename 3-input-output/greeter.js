let firstName = require('readline-sync').question("What's your first name?\n");
let lastName = require('readline-sync').question("What's your last name?\n");
console.log(`Hello, ${firstName + ' ' + lastName}!`);