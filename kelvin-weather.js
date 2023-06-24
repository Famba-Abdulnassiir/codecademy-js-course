/*With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. Choose the variable type with this in mind.

Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

Note for more about the question visit codecademy introduction to js Kelvin Weather.
*/

//Solution

//The forecast today is 293 Kelvin.
const kelvin = 293;

//Celsius id 273 less than Kelvin store the diff in celsius
const celsius = kelvin - 273;

//Fahrenheit = Celsius * (9/5) + 32 using the formula to find fahrenaheit and store it.
let fahrenheit = celsius * (9 / 5) + 32;

//In most cases when you convert celsius to fahrenheit it gives a floating number so we can use Math.floor() to round off the number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//convert celsius to Newton using Newton = Celsius * (33/100)
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} in newton`);

