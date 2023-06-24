/*
Dog Years

Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.

Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.*/

//Solution.
const myAge = 27;

// The first years of the dog.
let earlyYears = 2;

//multiply with the const first 10.2 dog years that are in each of the first years.
earlyYears *= 10.2;

//Subtract your current age minus the first 2 years and store it in later years
let laterYears = myAge - 2;

//multiply later years times the 4 dog years that are in the following years.
laterYears = laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//now we are sure we have early and later years we can add them to get the total years in dog years.
 let myAgeInDogYears = earlyYears + laterYears;

 //Store my name in lower case in variable myName
 let myName = 'Famba Abdulnassiir';
 myName = myName.toLowerCase();

 console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
 
