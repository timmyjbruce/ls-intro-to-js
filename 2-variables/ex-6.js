const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No it won't log an error because the shadow instance of the FOO variable block scoped within parenthesis is actually a new variable.
// The console log references the globally scoped (1st) version of FOO, for it the block scope instance doesn't exist. 