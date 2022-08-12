function factorial(num) {
  
  let newNum = 1;
  for (count = num; count > 0; count--) {
    newNum = newNum * count;
  }
  return newNum;
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320