let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// Version using test and filter keyword

function allMatches1(array, regex) {
  return array.filter(word => regex.test(word));
}

// Version using test and for loop + conditional

function allMatches2 (array, regex) {
  newArray = [];
  for (i = 0; i < array.length; i += 1) {
    if (regex.test(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(allMatches1(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
console.log(allMatches2(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']