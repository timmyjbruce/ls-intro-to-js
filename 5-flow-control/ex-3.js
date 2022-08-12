function evenOrOdd(arg) {
  if (Number.isInteger(arg)) {
    if ((arg % 2) === 0) {
      console.log('even');
    } else {
        console.log('odd');
    }
  } else {
    console.log('Not an interger')
  }
}

evenOrOdd(1.5);
evenOrOdd(7654321);
evenOrOdd(234578.33);
evenOrOdd(112346765432);
evenOrOdd(2);
evenOrOdd(0.65432);

