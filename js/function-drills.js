"use strict";

// Functions using conditionals but not loops or arrays:
//
// Make a function named isOdd(number)
function isOdd(oddNum) {
    if(oddNum % 2 == 0) {
        oddNum += 1; //even number
        return false;
    } else {
        oddNum -= 1; //odd number
        return true
    }
}
console.log(isOdd(10));

// Make a function named isEven(number)
function isEven(num) {
    if (num += 2 == 0) {
        num += 1; //even number
        return true;
    } else {
        num -= 1; //odd number
        return false
    }
}
console.log(isEven(11));

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
console.log(identity(50));
// Make a function named isFive(input)
function isFive(input) {
    if(input === 5) {
        return input + " is equal to 3!";
    } else {
        return input + " is not equal to five!";
    }
}
console.log(isFive(10));

// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return parseFloat(input + 5);
}
console.log(addFive(10));

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    return parseFloat(input * 5);
}
console.log(isMultipleOfFive(2));

// Make a function named isThree(input)
function isThree(input) {
    if(input === 3) {
        return input + " is equal to 3!";
    } else {
        return input + " is not equal to 3!";
    }
}
console.log(isThree(3));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    return parseFloat(input * 3);
}
console.log(isMultipleOfThree(5));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    return parseFloat(input * (3 * 5));
}
console.log(isMultipleOfThreeAndFive(5));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    if(target % n === 0) {
        return true + ",\n" + target + " is evenly divisible by " + n + ".";
    } else {
        return false + ",\n" + target + " is not evenly divisible by " + n + ".";
    }
}
console.log(isMultipleOf(100, 13));

// Make a function named isTrue(boolean)
function isTrue(boolean) {
    if (boolean === true) {
        return true;
    } else {
        return false;
    }
}
console.log(isTrue("o"));
// Make a function named isFalse(boolean)
function isFalse(boolean1) {
    if (boolean1 === false) {
        return true;
    } else {
        return false;
    }
}
console.log(isFalse(null));
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {
    if (!input) {
        return true;
    } else {
        return false;
    }
}
console.log(isTruthy(Infinity));

// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
    if (!input) {
        return true;
    } else {
        return false;
    }
}
console.log(isFalsy(Infinity));
// Make a function named isVowel(letter)

function isVowel (letter) {
    if (letter === 'a' || 'e' || 'i' || 'o' || 'u') {
        return letter + " is a vowel."
    } else {
        return letter + " is a not a vowel."
    }
}
console.log(isVowel("t"));
// Make a function named isConsonant(letter)

// Make a function named isCapital(letter)

// Make a function named isLowerCase(letter)

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

// Make a function named isSpace(letter) that returns if a character is a space character

// Make a function named isZero(number)

// Make a function named notZero(input) that returns true if the input is not zero

// Write a function named lowerCase(string)

// Write a function named double(n) that returns a number times two

// Write a function named triple(n) that returns a number times 3

// Write a function named quadruple(n) that returns a number times 4

// Write a function named half(n) that returns 1/2 of the provided input

// Write a function named subtract(a, b) that returns a minus b

// Write a function named multiply(a, b) that returns the product of a times b

// Write a function named divide(a, b) that returns a divided by b

// Write a function named remainder(a, b) that returns the remainder after dividing a by b

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b

// Write a function named cube(n) that returns n * n * n

// Write a function named squareRoot(n) that returns the square root of the input

// Write a function named cubeRoot(n) that returns the cube root of the input

// Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.

// Write a function named degreesToRadians(number)

// Write a function named radiansToDegrees(number)

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

// Make a function named trim(string) that removes empty spaces before and after the input.

// Make a function named areEqual(input1, input2) that returns if both inputs have the same value

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.

// Make a function named not(input) returns the input with a flipped boolean

// Make a function named notNot(input) that the negation of the negation of the input.

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

// Write a function called reverseString(string) that reverses a string

// Make a function named absoluteValue(number) that returns the absolute value of a number.

// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

