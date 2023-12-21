const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter a positive integer: '));
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`The factorial is: ${factorial}`);
