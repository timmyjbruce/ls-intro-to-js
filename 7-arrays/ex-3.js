let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


// Solution using forEach
console.log('Solution using forEach');

myArray.forEach(function(subArray) {
  subArray.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
})

// Solution using for loop
console.log('Solution using for loop');

function logEven (array) {
  for (i = 0; i < array.length; i++ ) {
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] % 2 === 0) {
        console.log(array[i][j]);
      }
    }
  }
}

logEven(myArray);