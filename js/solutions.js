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

// isTrue
var input = true;
function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}
isTrue(3);

// isFalse
var input1 = false;
function isFalse(input1) {
    if (input1 === false || !true) {
        return true;
    } else {
        return false;
    }
}
isFalse();

// not

function not(input3) {
    return !input3;
}
not();

//

function addOne(num) {
    return Number(num) + 1;
}
addOne(-5);

function isEven(singleInput) {
    return singleInput == parseFloat(singleInput) && !(singleInput % 2);
}
isEven();

function isIdentical(arg1, arg2) {
    return arg1 === arg2;
}

function concat(word1, word2) {
    var result = word1.toString() + word2.toString();
    return result;
}
concat(4, 2);

function isEqual(inputA, inputB) {
    return inputA == inputB;
}

function or(arg1, arg2) {
    return arg1 || arg2;
}

function and(arg1, arg2) {
    return arg1 && arg2;
}