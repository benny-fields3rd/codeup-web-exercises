// (function () {

// ================ SIMPLE FUNCTION DRILLS
// 1) Make a function called returnTwo() that returns the number 2 when called
// function returnTwo(num) {
//     var output = 2;
//     return output;
// }
const returnTwo = num => {
    return 2;
}
// ---Test this function with console.log(returnTwo())
console.log(returnTwo());

// 2) Make a function called returnName() that returns the string of your name
// function returnName(name) {
//     var name = "Benny";
//     return name;
// }

const returnName = () => {
    let name = "Benny Fields";
    return name;
}
// ---Test this function with console.log(returnName())
console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// function addThree(num) {
//     return num + 3;
// }
const addThree = (num) => {
    return num + 3;
}
// ---Test this function with console.log(addThree(5))
console.log(addThree(5));

// 4) Make a function called sayString() which returns the string input passed in.
// function sayString(inputString) {
//     return inputString;
// }

const sayString = (string) => string;


// ---Test this function with console.log(sayString())
console.log(sayString("This is a string."));

// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// function sayHowdy(stringHello) {
//     var stringHello = "Howdy";
//     return stringHello;
// }
const sayHowdy = (stringHello) => "howdy";
// ---Test this function by directly calling sayHowdy()
console.log(sayHowdy());

// ---Remember this function does not need a defined return value
// ================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.
// function identity(input) {
//     return input;
// }
const identity = (input) => input;

console.log("smash bros.");

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.
// function getRandomNumber(min, max) {
//     return Math.random() * (100 -1) + 1;
// }

const getRandomNumber = (min, max) => Math.random() * (100 -1) + 1;
console.log(getRandomNumber());

// Write a function called `first(input)` that returns the first character in the provided string.
// function first(inputString) {
//     return inputString.charAt(0);
// }

const first = (inputString) => inputString.charAt(0);

console.log(first("Robot"));

// Write a function called `last(input)` that returns the last character of a string
// function last(inputString) {
//     return inputString.charAt(inputString.length-1);
// }
const last = (inputString) => inputString.charAt(inputString.length-1);
console.log(last("Robot"));

// Write a function called `rest(input)` that returns everything but the first character of a string.
const rest = (input) => {
    return input.slice(1);
};
console.log(rest("Codeup"));

// Write a function called `reverse(input)` that takes a string and returns it reversed.
const reverse = (revInput) => {
    return revInput.split("").reverse().join("");
};
console.log(reverse("Oprah"));

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
const isNumeric = (input) => {
    if (!isNaN(input)) {
        return true;
    } else {
        return false;
    }
};
console.log(isNumeric(10));

// Write a function called `count(input)` that takes in a string and returns the number of characters.
const count = (input) => {
    return input.length;
};
console.log(count("Graduation"));

// Write a function called `add(a, b)` that returns the sum of a and b
const add = (a, b) => {
    return parseFloat(a + b);
};
console.log(add(100, 5));

// Write a function called `subtract(a, b)` that return the difference between the two inputs.
const subtract = (a, b) => {
    return parseFloat(a - b);
};
console.log(subtract(100, 5));

// Write `multiply(a, b)` function that returns the product
const multiply = (a, b) => {
   return parseFloat(a * b);
};
console.log(multiply(10, 10));

// Write a divide(numerator, denominator) function that returns a divided by b
const divide = (numerator, denominator) => {
    return parseFloat(numerator / denominator);
};
console.log(divide(100, 10));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
const remainder = (number, divisor) => {
    return parseFloat(number % divisor);
};
console.log(remainder(100, 1));

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
const square = (a) => {
    return parseFloat(a * a);
};
console.log(square(8));

// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
const sumOfSquares = (a, b) => {
    a = parseFloat(square(a));
    b = parseFloat(square(b));
    return add(a, b);
};
console.log(sumOfSquares(5, 5));

// Write a function called doMath(operator, a, b) that takes 3 parameters.
// The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
const doMath = (operator, a, b) => {
    return operator;
};
console.log(doMath(multiply(6, 6)));
// })()
