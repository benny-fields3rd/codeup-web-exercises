"use strict";

// Create a file called `extra_exercises.html`
// link up a js file inside your js file called `extra_exercises.js`
//
// 1. Counting the Number of Characters
//
// Create a program that prompts for an input string and dis- plays output that shows the input string and the number of characters the string contains.
//
// Example Output
// What is the input string? Homer
// Homer has 5 characters.
// define variables for user string and string amount //
alert("Let's count the number of characters in a string.\n");
var userString = prompt("What is the input string?");

while (userString === isNaN ) {
    userString = prompt("What is the input string?");
}
var stringAmount = userString.length;
    alert(userString + " " + "has" + " " + stringAmount + " " + "characters.");

// 2. Mad Lib
//
// Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
//     Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
//     Example Output
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly
// Do you walk your blue dog quickly? That's hilarious!
// Constraints
// • Use a single output statement for this program.
// • Ifyourlanguagesupportsstringinterpolationorstring
// substitution, use it to build up the output.
alert("Let's play a madlib game. Please follow the instructions.");
var noun = prompt("Enter a noun: ");
var verb = prompt("Enter a verb: ");
var adjective = prompt("Enter a adjective: ");
var adverb = prompt("Enter a adverb: ");

alert("I saw you" + " " + verb + " " + "your" + " " + adjective + " "+ noun + " " + adverb + ".");

// 3. Simple math
// Example Output
// What is the first number? 10
//     What is the second number? 5
//     10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2
// Constraints
//   • Values coming from users will be strings. Ensure that you convert these values to numbers before doing the math.
//   • Keep the inputs and outputs separate from the numerical conversions and other processing.
//   • Generate a single output statement with line breaks in the appropriate spots.
alert("Want to do some simple math? Let'play!");
var firstNumber = Number(prompt("What is the first number?"));
var secondNumber = Number(prompt("What is the second number?"));

var add = firstNumber + secondNumber;
var subtract = firstNumber - secondNumber;
var multiply = firstNumber * secondNumber;
var divide = (firstNumber / secondNumber).toFixed(4);

alert(firstNumber + " + " + secondNumber + " = " + add + "\n" +
firstNumber + " - " + secondNumber + " = " + subtract + "\n" +
firstNumber + " * " + secondNumber + " = " + multiply + "\n" +
firstNumber + " / " + secondNumber + " = " + divide + "\n");

// 4. Area of a rectangular room
// When working in a global environment, you’ll have to present information in both metric and Imperial units.
// And you’ll need to know when to do the conversion to ensure the most accurate results.
//  Create a program that calculates the area of a room. Prompt the user for the length and width of the room in feet.
//  Then display the area in both square feet and square meters.
//     Example Output
// What is the length of the room in feet? 15
//     What is the width of the room in feet? 20
//     You entered dimensions of 15 feet by 20 feet.
//     The area is
// 300 square feet
// 27.871 square meters
//
// The formula for this conversion is
// m^2 = f^2 × 0.09290304
// Constraints
// • Keep the calculations separate from the output. • Use a constant to hold the conversion factor.
//
alert("Let's calculate the area of a rectangular room!");
var lengthOfRoomFeet = Number(prompt("What is the length of the room in feet?"));
var widthOfRoomFeet = Number(prompt("What is the width of the room in feet?"));
var squareFeet = lengthOfRoomFeet * widthOfRoomFeet;
const formula = 0.09290304;
var metersConverted = squareFeet * formula;
//
// // output //
var dimension = alert(lengthOfRoomFeet + " " + "feet by" + " " + widthOfRoomFeet + " " + "feet.\n" +
"The area is\n" + squareFeet + " " + "feet\n" + metersConverted.toFixed(3) + " " + "square meters.");

//* 5. Pizza Party
//*
//* Division isn’t always exact, and sometimes you’ll write programs that will need to deal with the leftovers
//* as a whole number instead of a decimal.
//* Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the
//* number of slices per pizza. Ensure that the number of pieces comes out even. Display the number of pieces of
//  pizza each person should get. If there are leftovers, show the number of leftover pieces.
//* Example Output
//*     How many people? 8
//*     How many pizzas do you have? 2
//*     8 people with 2 pizzas
//*     Each person gets 2 pieces of pizza.
//*     There are 0 leftover pieces.

alert("Hungry? Let's calculate how many slices each person gets at a pizza party!");
var numberOfPeople = Number(prompt("How many people?"));
var numberOfPizzas = Number(prompt("How many pizzas do you have?"));
var slicesAmount = Number(prompt("How many slices per pizza?"));

var totalSlices = numberOfPizzas * slicesAmount;
var slicesPerPerson = parseInt(totalSlices / numberOfPeople);
var leftOverSlices = totalSlices % slicesPerPerson;

alert("There are" + " " + numberOfPeople + " " + "people" + " " + "with" + " " + numberOfPizzas + " " + "pizzas.\n" +
     "Each person gets" + " " + slicesPerPerson + " " + "piece(s) of pizza.\n" +
     "There are" + " " + leftOverSlices + " " + "leftover slice(s).");

// 6. Paint Calculator

// Sometimes you have to round up to the next number rather
// than follow standard rounding rules.
// Calculate gallons of paint needed to paint the ceiling of a room. Prompt for the length and width,
// and assume one gallon covers 350 square feet. Display the number of gallons needed to paint the ceiling
// as a whole number.
//     Example Output
//      You will need to purchase 2 gallons of
//      paint to cover 360 square feet.
//      Remember, you can’t buy a partial gallon of paint. You must round up to the next whole gallon.
//      Constraints
// • Use a constant to hold the conversion rate.
// • Ensure that you round up to the next whole number.
//     var lengthOfRoom = Number(prompt("What is the length of the room in feet?"));
//     var widthOfRoom = Number(prompt("What is the width of the room in feet?"));
//     const oneGallonCoversSqFeet = 350;
//     var totalSqFeet = lengthOfRoom * widthOfRoom;
//     var paintGallonsNeeded = totalSqFeet / 2;




//
// 7. Currency conversion
//
//
// At some point, you might have to deal with currency exchange rates, and you’ll need to ensure your calculations are as precise as possible.
//     Write a program that converts currency. Specifically, convert euros to U.S. dollars. Prompt for the amount of money in euros you have, and prompt for the current exchange rate of the euro. Print out the new amount in U.S. dollars. The formula for currency conversion is



//
// 8. Compute Simple Interest
//
// Computing simple interest is a great way to quickly figure out whether an investment has value. It’s also a good way to get comfortable with explicitly coding the order of operations in your programs.
//     Create a program that computes simple interest. Prompt for the principal amount, the rate as a percentage, and the time, and display the amount accrued (principal + interest).
//     The formula for simple interest is A = P(1 + rt), where P is the principal amount, r is the annual rate of interest, t is the number of years the amount is invested, and A is the amount at the end of the investment.
//     Example Output
// Enter the principal: 1500
// Enter the rate of interest: 4.3
// Enter the number of years: 4
// After 4 years at 4.3%, the investment will
// be worth $1758.
//     Constraints
// • Prompt for the rate as a percentage (like 15, not .15). Divide the input by 100 in your program.
// • Ensure that fractions of a cent are rounded up to the next penny.
// • Ensure that the output is formatted as money.
//     Challenges
// • Ensure that the values entered for principal, rate, and number of years are numeric and that the program will not let the user proceed without valid inputs.



// 9. Calculating compound interest
// Simple interest is something you use only when making a quick guess. Most investments use a compound interest formula, which will be much more accurate. And this formula requires you to incorporate exponents into your programs.
//     Write a program to compute the value of an investment compounded over time. The program should ask for the starting amount, the number of years to invest, the interest rate, and the number of periods per year to compound.
//     The formula you’ll use for this is
// A = P ( 1 + r/n )^nt
// Amount is Principle times (1 plus (rate / number of times interest is compounded per year)) t
// where
// - P is the principal amount.
// - r is the annual rate of interest.
// - t is the number of years the amount is invested.
// - n is the number of times the interest is compounded per year.
// - A is the amount at the end of the investment.
//     Example Output
// What is the principal amount? 1500
//     What is the rate? 4.3
//     What is the number of years? 6
//     What is the number of times the interest
// is compounded per year? 4
//     $1500 invested at 4.3% for 6 years
// compounded 4 times per year is $1938.84.
//     Constraints
//   • Prompt for the rate as a percentage (like 15, not .15). Divide the input by 100 in your program.
//   • Ensure that fractions of a cent are rounded up to the next penny.
//   • Ensure that the output is formatted as money.