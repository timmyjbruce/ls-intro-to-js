// The code will log [1, 4, 3]. This happens becaused array1 is mutated by the element reassignent on line 3. 
// Because arrays are passed by reference the variable array2 references the mutated value when logged on line 4.





let myArray = [1, 2, 3, 4, 5];

console.log(myArray);
console.log(typeof myArray);

myArray[20] = 10;

console.log(myArray);
console.log(typeof myArray);




if (myArray = myArray) {
  console.log('It works');
}

// const myWord = 'Huni is a cutie';

// console.log(myWord);

