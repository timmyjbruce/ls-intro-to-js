let number = 3278;
let digit1 = number % 10;
let digit2 = (number - digit1) / 10 % 10;
let digit3 = (number - digit1 - digit2 * 10) / 100 % 10;
let digit4 = (number - digit1 - digit2 * 10 - digit3 * 100) / 1000;

console.log(`Digit 1: ${digit1}`);
console.log(`Digit 2: ${digit2}`);
console.log(`Digit 3: ${digit3}`);
console.log(`Digit 4: ${digit4}`);