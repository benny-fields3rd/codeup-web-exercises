"use strict";
// ================================= LOOPS BONUSES 1
// Loop Bonuses from Justin R.
// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case.
// Special characters will not change.
//
// Example input: "aBc12#"
// Example output: "AbC12#"

// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the
// string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes".
// if the number appended does not equal the string length, output "No".
//
// Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"



// ================================= LOOPS BONUSES 2
// Loop Bonuses from Ryan O.
// 1. Write a function named countVowels that takes in any string and returns the number of vowels in the string. (ignore "y")
//
// countVowels("Codeup") should return 3
// countVowels("banana") should return 3
// countVowels("Hi Everybody!") should return 4

// 2.  Write a function named count9 that takes in any string or number and returns the number of times that the numeral 9
//  or the character "9" shows up

// 3. Write the loop and code necessary to sum all integers between 1 to 100, including 100.

// 4. Write a loop that plays "99 bottles of beer" song. It should say bottle instead of bottles when there's only one, and
// the song is over when there are 0 bottles.
//
var beerNum = 99;
var word = "bottles";

while (beerNum > 0) {
    if (beerNum === 1) {
        word = "bottle"; // singular as in ONE bottle.
    }
    console.log(beerNum + " " + word + " of beer on the wall");
    console.log(beerNum + " " + word + " of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    beerNum = beerNum - 1;
    if (beerNum !== 0) {
        console.log(beerNum + " " + word + " of beer on the wall");
    } else {
        console.log("No more bottles of beer on the wall");
    } // end else
} // end while loop