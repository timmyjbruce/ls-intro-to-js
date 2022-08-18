
// var num = -0;
// var str = num.toString();




// console.log(num); // 24
// console.log(str); // "24"


// console.log(-0  % 1);


// console.log(-0 < 0);


// function isNegZero (num) {
//   if (!(num > 0) && !(num < 0)) {
//   return true;  
//   }
//   return false;
// }

// console.log(isNegZero(1));
// console.log(isNegZero(-1));
// console.log(isNegZero(-0));
// console.log(isNegZero(0));



// function isNegZero (num) {
//   if (num + 0 === -0) {
//   return true;  
//   }
//   return false;
// }

// console.log(isNegZero(1));
// console.log(isNegZero(-1));
// console.log(isNegZero(-0));
// console.log(isNegZero(0));


// console.log(-0 - 0);
// console.log(-0 - -0);
// console.log(0 - 0);


// console.log(1 / -0);
// console.log(1 / 0);

// function isNegZero (num) {
//   if (1 / num === -Infinity) {
//   return true;  
//   }
//   return false;
// }

function isNegZero (num) {
  return (1 / num === -Infinity) ? true : false;
}

console.log(isNegZero(1));
console.log(isNegZero(-1));
console.log(isNegZero(-0));
console.log(isNegZero(0));