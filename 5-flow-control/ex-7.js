function uppercaseLongWords (arg) {
  if (arg.length <= 10) {
    return arg;
  } else {
      return arg.toUpperCase();
  }
}

console.log(uppercaseLongWords('Hello world'));
console.log(uppercaseLongWords('goodbye'));