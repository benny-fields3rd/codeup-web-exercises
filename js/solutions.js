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

//2. Define a function named isNumeric that takes in a value and returns true if the input is numeric or not.
//   Numeric strings are numeric and should return true.
function isNumeric(input) {
  return !isNaN(parseFloat(input) && isFinite(input))
}

//3. Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not.
//   Numeric strings will count as strings and should return true.
function isString(input) {
    if (typeof input === "string" || input instanceof String) {
        return true;
    } else  {
    return false;
    }
}

//4. Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.
function isArray(input) {
    if (input instanceof Array) {
        return true;
    } else {
        return false;
    }
}ß

//5. Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.
function isNegative(number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}

//6. Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero.
//   Any non-numeric input should return false.
function isPositive(number) {
    return /^\+?([1-9]\d*)$/.test(number)
}

//7. Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
function increment(input) {
    if (!isNaN(parseFloat(input))) {
        return input+1;
    } else {
        return false;
    }
}

//8. Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result.
//   If the input is not numeric, decrement should return false.
function decrement(input) {
    if (!isNaN(parseFloat(input))) {
        return input-1;
    } else {
        return false;
    }
}

//9. Define a function named square. If the provided input is numeric, square should return the number multiplied by itself.
//   If the input is not numeric, square, should return false.
function square(input) {
    if (!isNaN(parseFloat(input))) {
        return input * input;
    } else {
        return false;
    }
}

//10. Define a function named upperCase that takes in a single input. If the input is not a string, return false.
//    If the input is a non-numeric string, then return it with all the letters capitalized.
function upperCase(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input !== 'string') {
        return false;
    }
}

//11. Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false.
//    If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards.
//    Ignore capitalization.
function isPalindrome() {
    return;
}

//12. Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number.
//    If any of the 3 inputs is missing or non-numeric, then return false.
function getHighestNumber(num1, num2, num3) {
    var max_so_far = num1;
    if (num2 > max_so_far) {
        max_so_far = num2;
    }
    if (num3 > max_so_far) {
        max_so_far = num3;
    }
    return max_so_far;
}

//13. Write a function named containsVowel that takes in a single input as its argument. If the argument is not a string, then return false.
//    If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'.
//    If the string does not contain any of these vowels, then return false.
function containsVowel(input) {
    return (/^[aeiouAEIOU]$/gi).test(input);
}

//14. Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs.
//    If one or both inputs is not numeric, add should return false.
function add(a, b) {
    if (Number.parseFloat(a, b)){
        return +a + +b;
    } else {
        return false;
    }
}

//15. Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second.
//    If either or both inputs are not numeric, multiply should return false.
function multiply(a, b) {
    if (Number.parseFloat(a, b)){
        return +a * +b;
    } else {
        return false;
    }
}

//16. Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together.
//    For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.
function sumOfSquares(a, b) {
    a = (square(a));
    b = (square(b));
    return add(a, b);
}