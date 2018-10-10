"use strict";
// ================================= LOOPS BONUSES 1
// Loop Bonuses from Justin R.
// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case.
// Special characters will not change.
//
// Example input: "aBc12#"
// Example output: "AbC12#"
// function toggleCase(string) {
//
//
// }
console.log("Function that toggles characters in a string:");

var toggleCase = function(str) {
    var letters = str.split("");

    for(var i = 0; i<letters.length; i++) {
        if(letters[i] === letters[i].toLowerCase()) {
           letters[i] = letters[i].toUpperCase();
        } else {
            letters[i] = letters[i].toLowerCase();
        }
    }
    str = letters.join("");
    console.log(str);
}
var text = "Codeup is very challenging!";
toggleCase(text);

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
console.log("Function that counts vowels:");

function countVowels(str) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var index = 0; index < str.length; index++) {
        if (vowels.indexOf(str[index]) > -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("HEllo"));

// 2.  Write a function named count9 that takes in any string or number and returns the number of times that the numeral 9
//  or the character "9" shows up

// outputs count if input is a number but returns 0 for string??
// 3. Write the loop and code necessary to sum all integers between 1 to 100, including 100.

// 4. Write a loop that plays "99 bottles of beer" song. It should say bottle instead of bottles when there's only one, and
// the song is over when there are 0 bottles.
//
console.log("Beer Bottle Problem:");

var beerNum = 99; // assign beerNum amount
var word = "bottles"; // assign word to be bottles

while (beerNum > 0) {
    console.log(beerNum + " " + word + " of beer on the wall...");
    console.log(beerNum + " " + word + " of beeeeer");
    console.log("Take one down and pass it around,");
    beerNum -= 1;
    if (beerNum === 1) {
        word = "bottle"; // word takes on a new assignment for singular bottle
    }
    if (beerNum !== 0) {
        console.log(beerNum + " " + word + " of beer on the wall.");
    }
    else {
        console.log("No more bottles of beer on the wall!");
    } // end else
} // end while loop