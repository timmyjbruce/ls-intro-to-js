let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);

console.log(myObj);