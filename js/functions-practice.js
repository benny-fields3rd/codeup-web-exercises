"use strict";

// *** make a function, hasLetterA() that takes in a string and returns true if the string contains "a" and false
// if it does not; test the function
//my solution
// function hasLetterA(input) {
//     var output; //defines output
//     var stringLowercase = input.toLowerCase(); //converts string to all lowercase in case if uppercase letters are used.
//     var aIndex = stringLowercase.indexOf("a"); //
//     output = aIndex >= 0;
//     return output;
// }
// console.log(hasLetterA("Table"));

// example of easy function
// function onePlusOne() {
//     var output;
//     output = 1 + 1;
//     return output;
// }
// Justin's Solution
function hasLetterA(strInput) {
    var output;
    output = strInput.indexOf("a") != -1;
    return output;
}
console.log(hasLetterA("Kathleen"));