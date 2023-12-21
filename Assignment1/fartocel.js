const prompt = require('prompt-sync')();
const ft = parseFloat(prompt('Enter temperature in Fahrenheit: '));

  const celsius = (ft - 32) * (5/9);
     console.log("The equivalent temperature in degree celsius is:" ,`${celsius}`);

