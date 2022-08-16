// 1
// '1'
// undefined
// 'hello world'
// true
// 'true'


// 
// Technically are all valid but the JS obejct will covert 1, undefined & true to strings.

let myObject = {
  key1 : 'example 1',
  true : 'example 2',
  null : 'example 3',
  undefined : 'example 4',
  1 : 'example 5'
}

console.log(myObject['key1']);
console.log(myObject['true']);
console.log(myObject['null']);
console.log(myObject['undefined']);
console.log(myObject['1']);