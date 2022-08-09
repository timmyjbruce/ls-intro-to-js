let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// It would log 'bar' because the second instance of foo is scoped to the code block that its initalised within. 
// They are seperate variables with the same name.