let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let array = [];
for (let prop in obj) {
  array.push(prop.toUpperCase());
};

console.log(array);
console.log(obj);


// Version in function

// let upperKey = function (objParam) {
//   let array = [];
//   for (let prop in objParam) {
//     array.push(prop.toUpperCase());
//   }
//   return array;
// }

// console.log(upperKey(obj));
