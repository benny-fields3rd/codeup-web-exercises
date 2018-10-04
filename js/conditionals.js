"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var inputNumber = confirm("Would you like to enter a number?");
//
// if(inputNumber === true) {
//     var confirmedNumber = Number(prompt("Great! Please enter a number:"));
//     var plus100 = confirmedNumber + 100;
//
//     if(isNaN(confirmedNumber) === true) {
//         alert("You did not enter a number!");
//     } else {
//         if (confirmedNumber === isNaN) {
//             alert("You did not enter a number!");
//         }
//         if (confirmedNumber % 2 === 1) {
//             alert("Your number is odd.");
//         } else {
//             alert("Your number is even.");
//         }
//         alert(confirmedNumber + " plus 100 is: " + plus100);
//         if (confirmedNumber > 0) {
//             alert(confirmedNumber + " is also a positive number.");
//         } else {
//             alert(confirmedNumber + " is also a negative number.")
//         }
//     }
// }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var inputColor = prompt("What is your favorite color?");

function analyzeColor(inputColor) {
    if(inputColor === "blue") {
        alert("blue is the color of the sky.");
    } else if(inputColor === "red") {
        alert("Strawberries are red.");
    } else if(inputColor === "cyan") {
        alert("I don't know anything about cyan.");
    } else if(inputColor === "violet") {
        alert("Violet cars are not cool.");
    } else if(inputColor === "yellow") {
        alert("The sun is supposedly yellowish.");
    } else if(inputColor === "green") {
        alert("Grass is sometimes greener on the other side.");
    } else if(inputColor === "orange") {
        alert("Oranges are a great fruit...well only the navel ones.");
    } else if(inputColor === "indigo") {
        alert("What kind of color is indigo?");
    } else {
        alert("You didn't use a known color.");
    }
    return inputColor;
}
analyzeColor(inputColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO: testing for git by benny
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var colorChoice = prompt("What is your favorite color?");

switch (colorChoice) {
    case "blue":
        alert("blue is the color of the sky.");
        break;
    case "red":
        alert("Strawberries are red.");
        break;
    case "cyan":
        alert("I don't know anything about cyan.");
        break;
    case "violet":
        alert("Violet cars are not cool.");
        break;
    case "yellow":
        alert("The sun is supposedly yellowish.");
        break;
    case "green":
        alert("Grass is sometimes greener on the other side.");
        break;
    case "orange":
        alert("Oranges are a great fruit...well only the navel ones.");
        break;
    case "indigo":
        alert("What kind of color is indigo?");
        break;
    default:
        alert("You didn't use a known color.");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Enter a color please.");
    alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
