// ================ SIMPLE FUNCTION DRILLS

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
function returnTwo() {
    return 2;
}
console.log(returnTwo());
// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())
function returnName() {
    return "Benny Fields III";
}
console.log(returnName());
// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))
function addThree(number) {
    var numberAdd = number + 3;
    return numberAdd;
}
console.log(addThree(10));
// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())
function sayString(string) {
    return string;
}
console.log(sayString("This is a string."));
// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
function sayHowdy() {
    return "Howdy!";
}
console.log(sayHowdy());

// ================ CHALLENGE FUNCTION DRILLS

// Write a function called `identity(input)` that takes in an argument called input and returns that input.

function identity(input) {
    return input;
}
console.log(identity("This is the input entered!"));
// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.
var random = Math.floor((Math.random()*100)+1);

function getRandomNumber(min, max) { //is min and mx needed?
    var min = 100; //don't know if this are needed
    var max = 0;  //don't know if this are needed
    return random;
}
console.log(getRandomNumber(random));
// Write a function called `first(input)` that returns the first character in the provided string.
function first(input) {
    var input;
    return input.charAt(0);
}
console.log(first("Codeup"));
// Write a function called `last(input)` that returns the last character of a string
function last(input2) {
    var input2;
    return input2.charAt(9);
}
console.log(last("Programmer"));
// Write a function called `rest(input)` that returns everything but the first character of a string.
function rest(noFirstString) {
    var output = noFirstString.slice(1);
    return output;
}
console.log(rest("Codeup"));
// Write a function called `reverse(input)` that takes a string and returns it reversed.
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("oprah"));
// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
function isNumeric() {

}
// Write a function called `count(input)` that takes in a string and returns the number of characters.
function count(string) {

}
// Write a function called `add(a, b)` that returns the sum of a and b
function add(a, b) {
    return a + b;
}
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
function subtract(a, b) {
    return a - b;
}
// Write `multiply(a, b)` function that returns the product
function multiply(a, b) {
    return a * b;
}
// Write a divide(numerator, denominator) function that returns a divided by b
function divide(numerator, denominator) {
    return numerator / denominator;
}
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
function remainder(number, divisor) {
    return number % divisor;
}
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
function square(a) {
    return a * a;
}
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function
// and not + or * operators
    function sumOfSquares(a, b) {
        var sqA = square(a);
        var sqB = square(b);
        return add(sqA, sqB);
    }
    console.log(sumOfSquares(a, b));

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you
// want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    var output = operator(a, b);
        return output;
}
console.log(doMath(subtract, 5, 1)); // Change out operator and a, b and get result

// Maria's solution
// function doMath(operator, a, b) {
//     return operator(a, b);
// }
// console.log(doMath(add, 5, 1));