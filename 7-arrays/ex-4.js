let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];


// Solution with map()
let newArray = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(newArray);


// Solution with for loop

let newArray2 = [];

for (i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    newArray2.push('even')
  } else {
    newArray2.push('odd')
  }
}

console.log(newArray2);


// newArray2.push(myArray[i]);