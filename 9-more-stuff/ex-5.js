// It takes an argument of a string, and returns a array of individual word lengths, in reverse order to the words in the string. 


function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}