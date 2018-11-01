"use strict";
// Create a file named map-filter-reduce.js in your js directory and
// copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//2 Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
// my solution:
const threeLanguages = users.filter(function (user) {
    // console.log(user.languages);
    return user.languages.length >= 3;
    // return true;
});
// console.log(threeLanguages);

// Justin's solution:
// const atLeastThreeLanguages = users.filter((currentElement) => {
//     return currentElement.languages.length >= 3;
// });
// console.log(atLeastThreeLanguages);
// Justin's simplified solution
const atLeastThreeLanguages = users.filter(user => user.languages.length >= 3);

//3 Use .map to create an array of strings where each element is a
// user's email address
// my solution:
let emailString = [];
const userEmail = users.map(function (user) {
    // console.log(user.email);
    emailString.push(user.email);
});
// console.log(emailString);

// Justin's solution:
// const userEmails = users.map((user) => {
//     return user.email
// });
// console.log(userEmails);

const userEmails = users.map(user => user.email);

console.log(userEmails);

// 4 Use reduce to get the total years of experience from the list of
// users. Once you get the total of years you can
// use the result to calculate the average.
// my solution:



// Justin's solution:
const totalYearsEx = users.reduce((prev, curr) => {
    return prev + curr.yearsOfExperience;
}, 0); // use 0 to add up numbers
console.log(totalYearsEx);

const averageYearsEx = totalYearsEx / users.length;
console.log(averageYearsEx);


// Use reduce to get the longest email from the list of users.
//my solution:


// Justin's solution:
const longestEmail = users.reduce((prev, curr) => {
    if (prev.length < curr.email.length) { // prev is the start of the string..not object. Curr is the object
        return curr.email;
    } else {
        return prev;
    }
}, ""); // returning a string so us empty string ""
console.log(longestEmail);

// Justin's simplified solution
// const longestEmail = users.reduce((prev, curr) => {
//     if (prev.length < curr.email.length) { // prev is the start of the string..not object. Curr is the object
//         return curr.email;
//     }
//     return prev;
// }, ""); // returning a string so us empty string ""
// console.log(longestEmail);

// Use reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
//my solution:
let nameString1 = "Your instructors are: ";
nameString1 += users.reduce((prev, curr, index) => {
    let endChar = ", ";
    if(index === users.length -1) {
        endChar = ".";
    }
    return prev + curr.name + endChar;
}, "");
console.log(nameString1);
// Ryan's solution:

let nameString = "Your instructors are: ";
nameString += users.reduce((accumulator, user, index) => {
    let lastChar = ", ";
    if(index === users.length -1) {
        lastChar = ".";
    }
    return accumulator + user.name + lastChar;
}, "");
console.log(nameString);