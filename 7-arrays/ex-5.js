
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);


function findIntegers (array) {
  let intergerArray = array.filter(value => Number.isInteger(value));
  return intergerArray;
}

console.log(integers);


// Note can streamline the above by returning line 7 directly, and remove=ing the let var + line 8.