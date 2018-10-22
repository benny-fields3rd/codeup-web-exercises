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
        return input + " is equal to 5!";
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
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return letter + " is a vowel."
    } else {
        return letter + " is a not a vowel."
    }
}
console.log(isVowel("f"));

// Make a function named isConsonant(letter)
function isConsonant (letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return letter + " is not a vowel."
    } else {
        return letter + " is a consonant."
    }
}
console.log(isConsonant("f"));

// Make a function named isCapital(letter)
function isCapital(letter) {
    if(letter === letter.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isCapital("O"));

// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    if(letter === letter.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isLowerCase("o"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(string) {
    if(string !== string.toUpperCase() && string === string.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(hasLowerCase("this is a test"));

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
    if(letter.indexOf(" ") >= 0) {
        return "The input has a space."
    } else {
        return "There are no spaces in this input."
    }
}
console.log(isSpace("tisisatest"));

// Make a function named isZero(number)
function isZero(number) {
    return number === 0;
}
console.log(isZero(0));

// Make a function named notZero(input) that returns true if the input is not zero
function isNotZero(number) {
    if (number !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNotZero(7));

// Write a function named lowerCase(string)
// function lowerCase(string) {
//     if (sting === ) ;
// }
// Write a function named double(n) that returns a number times two
function double(n) {
    return parseFloat(n * 2);
}
console.log(double(10));

// Write a function named triple(n) that returns a number times 3
function triple(n) {
    return parseFloat(n * 3);
}
console.log(triple(5));

// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
    return parseFloat(n * 4);
}
console.log(quadruple(5));

// Write a function named half(n) that returns 1/2 of the provided input
function half(n) {
    return parseFloat(n / 2);
}
console.log(half(100));

// Write a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
    return parseFloat(a - b);
}
console.log(subtract(15, 10));

// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    return parseFloat(a * b);
}
console.log(multiply(5, 5));

// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return parseFloat(a / b);
}
console.log(divide(25, 5));

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b) {
    return parseFloat(a % b);
}
console.log(remainder(27, 5));

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a, b) {
    return parseFloat(a % b);
}
console.log(modulo(27, 5));

// Write a function named cube(n) that returns n * n * n
function cube(n) {
    return parseFloat(n * n * n);
}
console.log(cube(10));

// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n) {
    return Math.sqrt(n);
}
console.log(squareRoot(9));

// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n) {
    return Math.cbrt(n);
}
console.log(cubeRoot(9));

// Write a function named invertSign(number) that returns a negative version of a positive number,
// a positive version of negative, and false for all else.
function invertSign(number) {
    if(number *= -1) {
        return number;
    } else if(number *= 1) {
        return number;
    } else {
        return false;
    }
}
console.log(invertSign(8));

// Write a function named degreesToRadians(number)
function degreesToRadians(number) {
    return number * Math.PI / 180;
}
console.log(degreesToRadians(45));

// Write a function named radiansToDegrees(number)
function radiansToDegrees(number) {
    return number * 180 / Math.PI;
}
console.log(radiansToDegrees(3.141592653589793));

// Make a function named isBlank(input) that determines if a given input is
// spaces, newline characters, or tabs.
function isBlank(input) {
    if(input === " " || input === "\n" || input === "\t") {
        return true;
    } else {
        return false;
    }
}
console.log(isBlank(" "));

// Make a function named trim(string) that removes empty spaces before and
// after the input.
function trim(string) {
    return string.trim();
}
console.log(trim(" This has the white space removed. "));

// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual(input1, input2) {
    if (input1 == input2) {
        return true;
    } else {
        return false;
    }
}
console.log(areEqual(2, "n"));

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
function areIdentical(input1, input2) {
    if (input1 === input2) {
        return true;
    } else {
        return false;
    }
}
console.log(areIdentical(2, 2));

// Make a function named not(input) returns the input with a flipped boolean
function not(input) {
    return !input;
}
console.log(not("9"));

// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input) {
    return !!input;
}
console.log(notNot("9"));

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}
console.log(and(7, 7));

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}
console.log(or(7, 17));

// Write a function called reverseString(string) that reverses a string
function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString("Oprah"));

// Make a function named absoluteValue(number) that returns the absolute value of a number.
function absoluteValue(number) {
    return Math.abs(number);
}
console.log(absoluteValue(2.50));

// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die
// should have. Generate a random number between 1 up to and including the number of sides.
function rollDice(sides) {
    return Math.floor(Math.random() * sides + 1);
}
console.log(rollDice(6));
