"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// Define a function named isTrue that takes in any input and returns true if the
// input provided is exactly equal to true in value and data type.
//
// isTrue(true)             // true
// isTrue(false)            // false
// isTrue(0)                // false
// isTrue(null)             // false
// isTrue("true")           // false
// isTrue("Banana")         // false
// isTrue([1, 2])           // false

var input = true;
function isTrue(input) {
    //return === true; //shorter without all of the if/else
    if (input === true) {
        return true;
    } else {
        return false;
    }
}
isTrue(3);

// Define a function named isFalse that takes in a value and returns a true if
// and only if the provided input is equal to false in both type and value.
//
// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false

var input1 = false;
function isFalse(input1) {
    // return input === false;
    if (input1 === false || !true) {
        return true;
    } else {
        return false;
    }
}
isFalse();

// Define a function named not that takes in any input and returns the boolean opposite of the provided input.
//
// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false

function not(input3) {
    return !input3;
}
not();

// Define a function named addOne that takes in a single input.
// If the input is a number or a numeric string, return the value plus one.
//
// addOne(0)                    // 1
// addOne(2)                    // 3
// addOne(-5)                   // -4
// addOne(5.789)                // 6.789
// addOne(Infinity)             // Infinity
// addOne("2")                  // 3
// addOne("0")                  // 1
// addOne("banana")             // NaN
// addOne(true)                 // NaN
// addOne(NaN)                  // NaN

function addOne(num) {
    return Number(num) + 1;
}
addOne(-5);

// Define a function named isEven that takes in a single input. If the input is an even number
// or a string containing an even number, return true. Any other input should return false for the output.
//
// isEven(2)                   // true
// isEven(-8)                  // true
// isEven(0)                   // true
// isEven("42")                // true
// isEven(1)                   // false
// isEven("-3")                // false
// isEven(false)               // false
// isEven("banana")            // false

function isEven(singleInput) {
    //input = parseFloat(singleInput)
    //return input % 2
    return singleInput == parseFloat(singleInput) && !(singleInput % 2);
}
isEven()

// Define a function named isIdentical that takes in two input arguments. If each input is equal both in
// data type and in value, then return true. If the values are not the same data type or not the same value, return false.
//
// isIdentical(3, 3)                     // true
// isIdentical(false, false)             // true
// isIdentical("hello", "hello")         // true
// isIdentical(3, 3.0)                   // true
// isIdentical(undefined, undefined)     // true
// isIdentical(2, "2")                   // false
// isIdentical("javascript", "java")     // false

function isIdentical(arg1, arg2) {
    return arg1 === arg2;
}

// Define a function named isEqual that takes in two input arguments.
// If each argument is equal only in value, then return true. Otherwise return false.
//
// isEqual(3, "3")                       // true
// isEqual("abc123", "abc123")           // true
// isEqual(true, 1)                      // true
// isEqual(0, false)                     // true
// isEqual(4, -5)                        // false
// isEqual("java", "javascript")         // false

function isEqual(inputA, inputB) {
    return inputA == inputB; //double = to compare values and not the type
}

// Define a function named or that takes in two input arguments.
// The output returned should be the result of an or operation on both inputs.
//
// or(true, true)                    // true
// or(true, false)                   // true
// or(false, true)                   // true
// or(false, false)                  // false
// or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)

function or(arg1, arg2) {
    return arg1 || arg2;
}

// Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
//
// and(true, true)                    // true
// and(true, false)                   // false
// and(false, true)                   // false
// and(false, false)                  // false
// and("hello", "world")              // "world" (this behavior is non-obvious, research more)

function and(arg1, arg2) {
    return arg1 && arg2;
}

// Define a function named concat that takes in two input arguments.
// If both arguments are strings, then return the concatenated result.
// If two numbers are provided, then return the string concatenation of each set of numerals.
//
// concat("code", "up")                // "codeup"
// concat("connect", 4)                // "connect4"
// concat("hello", "world")            // "helloworld"
// concat(4, 2)                        // "42"
// concat(true, true)                  // "truetrue"
// Files in this project
// index.html is the welcome page
// results.html shows the ouptut from automated test data
// solutions.js is where you will write your function definitions that solve the exercises below
// tests.js is the suite of automated tests that call your functions in solutions.js with different inputs.

function concat(word1, word2) {
    //return wors1.toString() + word2; //You only need one of the values to be a string.
    var result = word1.toString() + word2.toString();
    return result;
}
concat(4, 2);

//     Hints
// Consider this example problem.
//
//     Write a function called isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
// isBoolean("Dog") should return false because a string is not a boolean
// isBoolean(false) should return true because only true and false are boolean values.
//     When a problem says return, it means return, not console.log.
//     When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.
// The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.
// var input = "Grace Hopper"
// function isBoolean() {
//     return typeof input == "boolean";
// }
// This is incorrect because the function doesn't return the output. Functions that do not have an explicit return statement return undefined by default.
//
// function isBoolean(input) {
//     console.log(typeof input == 'boolean');
// }
// Correct solution:
//
//     function isBoolean(input) {
//         return typeof input == "boolean";
//     }

// isTrue


// isFalse


// not
//

///// Ryans Solutions
"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// isTrue function should take in any input and return true if that input is exactly true
// function isTrue(input) {
//     // return input === true;
//     // return returns expressions
//
//     if(input === true) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
//
// function isFalse(input) {
//     return input === false;
// }//yay!
//
//
// // write a not() function that takes in any input and returns its boolean opposite
// function not(parameter) {
//     return !parameter;
// }
//
// //Define a function named addOne that takes in a single input.
// //If the input is a number or a numeric string, return the value plus one.
//
// function addOne(input) {
//     // the new value for input is parseFloat on the original value
//     // reassignment
//     input = parseFloat(input);
//     return input + 1;
//
// }
//
// //Define a function named isEven that takes in a single input. If the input is an
// // even number or a string containing an even number, return true. Any other input should return false for the output.
// // function isEven(input){
// //     input = parseFloat(input);
// //     return input % 2 === 0;
// // }
//
// function isEven(singleInput) {
//     if(typeof singleInput === "boolean") {
//         return false;
//     }
//     return singleInput % 2 === 0;
// }
//
// //Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value,
// // then return true. If the values are not the same data type or not the same value, return false.
// function isIdentical(input1, input2){
//     return input1 === input2;
// }
//
// function isEqual(input1, input2) {
//     return input1 == input2;
// }
//
// function or(a, b) {
//     return a || b;
// }
//
// function and(a, b) {
//     return a && b;
// }
//
// function concat(a, b) {
//     return a.toString() + b.toString();
// }

// function concat(x, y) {
//    return "" + x + y;
//}




















