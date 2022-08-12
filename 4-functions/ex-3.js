let readlineSync = require('readline-sync');

function getNumber(prompt) {
  let num = readlineSync.question(prompt);
  return Number(num);
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

function multipliedNumber(num1, num2) {
  return num1 * num2;
}

console.log(`${firstNumber} * ${secondNumber} = ${multipliedNumber(firstNumber, secondNumber)}`);





/// Need to remember to avoid global variablescd