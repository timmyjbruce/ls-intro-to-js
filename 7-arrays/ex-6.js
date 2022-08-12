let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (array) {
  let stringLenghtArray = array.map(string => string.length);
  return stringLenghtArray.filter(num => num % 2 !== 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]