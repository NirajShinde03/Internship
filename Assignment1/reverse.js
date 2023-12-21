const prompt = require('prompt-sync')();
const String = prompt('Enter a string: ');
console.log(`Reversed string: ${String.split('').reverse().join('')}`);
