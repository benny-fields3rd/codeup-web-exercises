"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Write a function named isNegative that accepts a number and returns true or
// false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false
//
// My solution: (correct)
// function isNegative(num) {
//     if (num < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// JUSTIN'S SOLUTION
function isNegative(num) {
    var output = num < 0; // could also use return num < 0 to get rid of variable.
    return output;
}
console.log(isNegative(5)); // to test inputting a number.

// 2. Write a function named average that accepts an array of numbers and returns the
// average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5
//
// var arrayOfNumbers = [1, 3, 5, 9, 15];
// MY SOLUTION: CORRECT
// function average(arrayOfNumbers) {
//     var total = 0;
//     for (var i = 0; i < arrayOfNumbers.length; i += 1) {
//         total += arrayOfNumbers[i];
//     }
//     return total / arrayOfNumbers.length;
// }

// JUSTIN'S SOLUTION

// input data type? array
// output data type? number

function average(arr) {
    // add up all the numbers of the array
    // divide the total of all numbers by how many numbers

    // use loop to add all numbers
    // divide total by length of array of numbers
    var total = 0;
    for (var i = 0; i < arr.length; i += 1) {
        total += arr[i];
    }
    return total / arr.length;
}
console.log(average([1, 2, 3]));

// 3. Write a function named countOdds that accepts an array of numbers
// and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3
//
// MY SOLUTION: NOT CORRECT AT ALL!
// Didn't work because my global variable. Try not using global variables.
// Better to declare variables for that function INSIDE the function.

// var numArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// var odd = 0;
// function countOdds(array) {
//     for (var i = 0; i < array.length; i += 1) {
//         if (array[i] % 2 !== 0) {
//             odd++;
//         }
//     }
//     return odd;
// }
// countOdds(numArray);

// JUSTIN'S SOLUTION

// data type of input? array
// data type of output? number

function countOdd(arr) {
    var numberOfOdds = 0;
    // go through array and pick out all numbers and make a count
    // iterate over array
    arr.forEach(function (num) {
    // for each element, check if odd
    // if odd, increment count of odds
        if(num % 2 !== 0) { // check to see if it odd
            numberOfOdds++;
        }
    });
    return output;
}

// 4. Write a function named convertNameToObject that accepts a string that contains a
// first name and last name separated by a space character, and returns an object with
// properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}
//
// MY SOLUTION: NOT CORRECT AT ALL!
// function convertNameToObject(str) {
//     var properties = str.split(', ');
//     var obj = {};
//     properties.forEach(function(property) {
//         var tup = property.split(':');
//         obj[tup[0]] = tup[1];
//     });
//     return obj;
// }

// JUSTIN'S SOLUTION

// in put data type? string
// output data type? object

function convertNameToObject(fullName) {
    // take input as a string
    // split input into first name and last name from each other into an array of names
    var nameArray = fullName.split(' '); // create a separate variable to split the string
                                         // on the space character and converts to an array
    // convert the array of names to an object with properties of firstName and lastName
    return { //returns an object.
        firstName: nameArray[0],
        lastName: nameArray[1]
    };
}

// 5. Write a function named fiveTo that accepts a number and returns
// an array of the integers from 5 up to and including the passed number.
//
// fiveTo(5)   // [5]
// fiveTo(10)  // [5, 6, 7, 8, 9, 10]
// fiveTo(-2)  // [5, 4, 3, 2, 1, 0, -1, -2]
// fiveTo(6)   // [5, 6]
//
// MY SOLUTION: NOT CORRECT AT ALL!
// var array5 = [];
//
// function fiveTo() {
//     return array5;
// }

// JUSTIN'S SOLUTION

// takes in a number
// returns an array

function fiveTo(num) {
    // return array of integers
    // start from 5 and fo to the number from the number
    // store inside an array
    var output = [];
    if (num >= 5) {
        // starting at 5, loop up to the passed number and add each number to the array
        for (var i = 5; i <= num; i += 1) {
            // console.log(i); // console log to test and see what i would be
            output.push(i);
        }
    }
    if (num < 5) {
        // starting at 5, loop up to the passed number and add each number to the array
        for (var i = 5; i >= num; i -= 1) {
            // console.log(i); // console log to test and see what i would be
            output.push(i);
        }
    }
    return output;
}
fiveTo(10);

// 6. Write a function named upperCaseLastNames that accepts an array of objects
// where each object has properties firstName and lastName and returns the same
// array of objects with each last name capitalized
//

// var names = [
//     {firstName: 'Harry', lastName: 'Potter'},
//     {firstName: 'Ron', lastName: 'weasley'},
//     {firstName: 'Hermione', lastName: 'granger'}
// ];


// upperCaseLastNames(names);
// /*
// [
//    {firstName: 'Harry', lastName: 'Potter'},
//    {firstName: 'Ron', lastName: 'Weasley'},
//    {firstName: 'Hermione', lastName: 'Granger'}
// ]
//
//
// MY SOLUTION: NOT CORRECT AT ALL!
// function upperCaseLastNames() {
//     for (var i = 0; i < names.length; i += 1) {
//         names = names.lastName.charAt(0).toUpperCase() + names.lastName.substr(1);
//         console.log(names.lastName);
//     }
//     return names;
// }
// upperCaseLastNames(names);

// JUSTIN'S SOLUTION
// what data type is input? array of objects
// what data type is output? array of objects modified
function upperCaseLastNames(users) {
    users.forEach(function (user) { // going through every user object
        // assign a new value for last name property and is the current last name first letter UPPERCASE
        // and the rest of the value.
        user.lastName = user.lastName[0].toUpperCase() +
            user.lastName.substr(1); //returns the rest of their name except for the first letter of last name
    });
    return users;
}
console.log(upperCaseLastNames(users));