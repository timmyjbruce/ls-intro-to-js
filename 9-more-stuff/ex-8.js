// Approach 1. Use typeof + array a of non-NaN datatypes and do a comparison. NaN is not a datatype tho...

// Approach 2. After reading the MDN NaN wiki, could Check if number.NaN is equal to a given value ?

function isNotANumber (num) {
  if (num === Number.NaN) {
    return true;
  }
  return false;
}

num1 = NaN;
num2 = 1;

// console.log(isNotANumber(num1));
// console.log(isNotANumber(num2));


// Approach 3. NaN is falsy, so could use the double exclamation mark to make it a boolean false + a conditional.

// function isNotANumber (num) {
//   if (!num) {
//     return true;
//   } else
//   return false;
  
// }

// console.log(isNotANumber(NaN));
// console.log(isNotANumber(1));

// Approach 4. Approach #3 won't account for negatives, could:
// Convert to a string and regex test for a dash, or could multiply num by itself to remmove any negatives

// function isNotANumber (num) {
//   if (!(num * num)) {
//     return true;
//   } else
//   return false;
  
// }

// console.log(isNotANumber(NaN));
// console.log(isNotANumber(1));
// console.log(isNotANumber(-1));
// console.log(isNotANumber(-0));
// console.log(isNotANumber(0));

// Approach 5. Approach #4 works, but not for zero of negative zero

function isNotANumber (num) {
  if (num === undefined) {
    return false;
  } else if (num * num !== 0 && !(num * num)) {
    return true;
  }   
  return false;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(1));
console.log(isNotANumber(-1));
console.log(isNotANumber(-0));
console.log(isNotANumber(0));
console.log(isNotANumber(undefined));
console.log(isNotANumber(false));
console.log(isNotANumber(true));
console.log(isNotANumber(null));

