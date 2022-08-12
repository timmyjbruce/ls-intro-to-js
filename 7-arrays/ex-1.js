// let array1 = [1, 2, undefined, 4]; // length = 4

// let array2 = [1];
// array2.length = 5;  // length = 5

// let array3 = [];
// array3[-1] = [1]; // length = 1

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3;  // length = 3

// let array5 = [];
// array5[100] = 3;  // length = 101




let array1 = [];
array1[1] = 1;

console.log(array1.length);

// Length = 2. The index of 1 puts the value of 1 in the second index of the array (arrays are zero indexed)

let array2 = [];
array2[-1] = 1;

console.log(array2.length);

// Length = 0. The negative index causes value to be added as a property (key + value) properties are a=ignored from a array.lenght.

let array3 = [];
array3[-1] = [1];

console.log(array3.length);

// Length = 0. The negative index causes value to be added as a property.