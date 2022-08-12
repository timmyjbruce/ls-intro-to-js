let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (array) {
  array.reduce (function (previousString, currentString) {
    if (currentString.length % 2 === 0) {
      return currentString + previousString;
    } else {
      console.log(currentString);
      
    }
  }, 0 )

}

console.log(oddLengths(arr)); // => [1, 5, 3]

// Determine the lengths of all the elements in 
// an array of string values, then discard the even values (keep the odd values).