let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj[qux] = 3

// In snippet 1, Object.keys will only return only the keys of myObj, not its prototype, so only they will be logged.
// In snippet 2, the for..in loop will iterate of the objects keys and its prototypes, logging them all.
