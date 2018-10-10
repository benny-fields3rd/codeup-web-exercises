// ================================= ARRAY BONUSES
//
// 1. Create a function that returns a random day of the week
// created array with each day of the week
var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
// create variable to turn
var random = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];

function randomDay() {
    console.log(random);
}
randomDay();

// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet.
// Ignore case.
//
//   someFunction("a") // returns 1
//   someFunction("z") // returns 26
//

// 3. Create a function that returns the longest string in a given array of string elements

// 4. Create a function that takes in two arrays of number inputs. If all numbers added together
// in the first array is equal to all the number inputs added in the second array, return true, otherwise,
// false. Only add together numeric elements but either array may contain non-numeric elements.
//
//   var arr1 = ['bob', 1, true, 1, 2];
//   var arr2 = [2, null, undefined, 0, 2, "apple"]
//   exampleFunction(arr1, arr2) // returns true


