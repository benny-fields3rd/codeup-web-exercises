"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
//1. Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
function isBoolean(input) {
    return typeof input == "boolean";
}
// Justin's solution
// function isBoolean(input) {
//     return typeof input === "boolean";
// }

//2. Define a function named isNumeric that takes in a value and returns true if the input is numeric or not.
//   Numeric strings are numeric and should return true.
function isNumeric(input) {
  return !isNaN(parseFloat(input) && isFinite(input))
}
// Justin's solution
// function isNumeric(input) {
//     !isNaN(parseFloat(input))
// }

//3. Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not.
//   Numeric strings will count as strings and should return true.
function isString(input) {
    if (typeof input === "string" || input instanceof String) {
        return true;
    } else  {
    return false;
    }
}
// Justin's solution
// function isString() {
//     return typeof input === 'string';
// }

//4. Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.
function isArray(input) {
    if (input instanceof Array) {
        return true;
    } else {
        return false;
    }
}
// Justin's solution
// function isArray(input) {
//     return Array.isArray(input);
// }

//5. Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.
function isNegative(number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}
// Justin's solution
function isNegative(input) {
    return input < 0;
}

//6. Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero.
//   Any non-numeric input should return false.
function isPositive(number) {
    return /^\+?([1-9]\d*)$/.test(number)
}
// Justin's solution
// function isPositive(number) {
//     return input > 0 && !isBoolean(input); // calling previously made function isBoolean.
// }
// David's solution
// function isPositive(number) {
//     return parseFloat(input) > 0;
// }
//7. Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
function increment(input) {
    if (!isNaN(parseFloat(input))) {
        return input + 1;
    } else {
        return false;
    }
}
// Justin's solution
// function increment(input) {
//     if (isNumeric(input)) { //calling previously made function isNumeric.
//         return input + 1;
//     } else {
//         return false;
//     }
// }

//8. Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result.
//   If the input is not numeric, decrement should return false.
function decrement(input) {
    if (!isNaN(parseFloat(input))) {
        return input - 1;
    } else {
        return false;
    }
}
// Justin's solution
// function decrement(input) {
//     if (isNumeric(input)) { //calling previously made function isNumeric.
//         return input - 1;
//     } else {
//         return false;
//     }
// }

//9. Define a function named square. If the provided input is numeric, square should return the number multiplied by itself.
//   If the input is not numeric, square, should return false.
function square(input) {
    if (!isNaN(parseFloat(input))) {
        return input * input;
    } else {
        return false;
    }
}
// Justin's solution
//function square(input) {
//     if (isNumeric(input)) { //calling previously made function isNumeric.
//         return input * input; // you can also use Math.pow(input, 2) instead of input * input.
//     } else {
//         return false;
//     }
// }
// or using ternary
// function isNumeric(input) {
// return (isNumeric(input)) ? Math.pow(input, 2) : false;
// }
//10. Define a function named upperCase that takes in a single input. If the input is not a string, return false.
//    If the input is a non-numeric string, then return it with all the letters capitalized.
function upperCase(input) {  // COULD NOT GET ALL GREEN ON ASSESSMENT
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input !== 'string') {
        return false;
    }
}
// Justin's solution
// function upperCase(input) {
//     if (isString(input) && !isNumeric(input)) { //calling previously made functions isString & isNumeric.
//         return input.toUpperCase();
//     } else {
//         return false;
//     }
// }
// function upperCase(input) { // another way by assigning a var output and then returning the output
//     var output;
//     if (isString(input) && !isNumeric(input)) { //calling previously made functions isString & isNumeric.
//         output = input.toUpperCase();
//     } else {
//         output = false;
//     }
//     return output;
// }
//11. Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false.
//    If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards.
//    Ignore capitalization.
function isPalindrome() { // DID NOT ACCOMPLISH ON ASSESSMENT
    if () {

    }
     return true;
}
// Justin's solution
// first create the reverse function in order to call it in later.
// function reverseString() {
//     return input.split("").reverse().join("")
// }
//
// function isPalindrome(input) {
//     // is a string and not a numeric string
//     if (isString(input) && !isNumeric(input)) {
//         input = input.toLowerCase();
//         return (reverseString(input) === input)
//     } else {
//         return false;
//     }
// }

//12. Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number.
//    If any of the 3 inputs is missing or non-numeric, then return false.
function getHighestNumber(num1, num2, num3) { // COULD NOT GET ALL GREEN ON ASSESSMENT
    var max_so_far = num1;
    if (num2 > max_so_far) {
        max_so_far = num2;
    }
    if (num3 > max_so_far) {
        max_so_far = num3;
    }
    return max_so_far;
}
// Justin's solution
// function getHighestnumber(in1, in2, in3) {
//     if (isNumeric(in1) && isNumeric(in2) && isNumeric(in3)) { // compare and check for each input to be a number
//         return Math.max(in1, in2, in3);
//     } else {
//         return false
//     }
// }
// function getHighestnumber(in1, in2, in3) {
//     if (isNumeric(in1) && isNumeric(in2) && isNumeric(in3)) { // compare and check for each input to be a number
//         return Math.max(in1, in2, in3);
//     } else {
//         return false
//     }
// }
//13. Write a function named containsVowel that takes in a single input as its argument. If the argument is not a string, then return false.
//    If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'.
//    If the string does not contain any of these vowels, then return false.
function containsVowel(input) { // COULD NOT GET ALL GREEN ON ASSESSMENT
    return (/^[aeiouAEIOU]$/gi).test(input); // the reason is because there was no check for a string input.
}
// Justin's solution
// function containsVowel(input) {
//     if (isString(input)) {
//         input = input.toLowerCase();
//         return input.includes('a')
//             || input.includes('e') // all of these could be on the same line, but this code
//             || input.includes('i') // is more readable and cleaner.
//             || input.includes('o')
//             || input.includes('u');
//         } else {
//         return false;
//     }
// }

//14. Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs.
//    If one or both inputs is not numeric, add should return false.
function add(a, b) {
    if (Number.parseFloat(a, b)){
        return +a + +b;
    } else {
        return false;
    }
}
// Justin's solution
// function add() {
//     if (isNumeric(in1) && isNumeric(in2)) {
//         return parseFloat(in1) + parseFloat(in2);
//     } else {
//     return false;
//     }
// }

//15. Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second.
//    If either or both inputs are not numeric, multiply should return false.
function multiply(a, b) {
    if (Number.parseFloat(a, b)){
        return +a * +b;
    } else {
        return false;
    }
}
// Justin's solution
// function multiply() {
//     if (isNumeric(in1) && isNumeric(in2)) {
//         return parseFloat(in1) * parseFloat(in2);
//     } else {
//         return false;
//     }
// }

//16. Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together.
//    For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.
function sumOfSquares(a, b) { // COULD NOT GET ALL GREEN ON ASSESSMENT
    a = (square(a));
    b = (square(b));
    return add(a, b);
}
// Justin's solution
// function sumOfSquares(in1, in2) {
//     if (isNumeric(in1) && isNumeric(in2)) {
//         // return Math.pow(in1, 2) + Math.pow(in2, 2); //
//         return add(square(in1), square(in2)); // more ideal syntax calling previously created functions.
//         // Note: Math.pow automatically converts string to numbers i.e. "2" turns to 2.
//     } else {
//         return false;
//     }
// }
