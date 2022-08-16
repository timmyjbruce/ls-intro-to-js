let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


function copyObj (obj, arrayKeysDelete) {
  let newObj = {};

  if (arrayKeysDelete) {
    obj.forEach(function(key) {
      newObj[key] = obj[key];
    })
  } else {
    newObj = Object.assign(newObj, obj);
  }
  return newObj;
} 


function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}


// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }, current { bar : 2 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }, 





// function copyObj (obj, arrayKeysDelete) {
//   let newObj = Object.assign(obj);
//   if (newObj.hasOwnProperty) {
//     arrayKeysDelete.forEach(function(keyToDelete) {
//       if (arrayKeys)
//       delete obj[keyToDelete]
//     });
//   } 
//   return newObj
// } 


// for all key in the newObj
// for each element in the arrayKeysDelete
// if key != element
// delete the key


// newObj = {}
// if key in array 'keysToCopy'
// if object has own property of prop
// else 





// function copyObj (obj, arrayKeysDelete) {
//   let newObj = Object.assign(obj);
//   if (arrayKeysDelete) {
//     arrayKeysDelete.forEach(function(key) {
//       delete obj[key]
//     });
//   } 
//   return newObj
// } 


// function copyObj (obj, arrayKeysDelete) {
//   let newObj = Object.assign(obj);
//   if (arrayKeysDelete) {
//     for (i = 0; i < arrayKeysDelete.length; i += 1;) {

//     }
//     };
//   } 
//   return newObj
// } 

