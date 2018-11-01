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
// 2 Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
// my solution:
const threeLanguages = users.filter(function (user) {
    return user.languages.length >=3;
});
console.log(threeLanguages);

// 3 Use .map to create an array of strings where each element is a
// user's email address
const userEmails = users.map(function (user) {
    return user.email;
});
console.log(userEmails);

// 4 Use reduce to get the total years of experience from the list of
// users. Once you get the total of years you can
// use the result to calculate the average.
// my solution:
const totalYearsEx = users.reduce(function (prev, curr, index) {
   return prev + curr.yearsOfExperience;
}, 0);
console.log(totalYearsEx);

const averageYearsEx = totalYearsEx / users.length;
console.log(averageYearsEx);


// 5 Use reduce to get the longest email from the list of users.
//my solution:
const longestEmail = users.reduce(function (prev, curr) {
    if (prev.length < curr.email.length){
        return curr.email;
    } else {
        return prev;
    }
}, "");
console.log(longestEmail);

// 6 Use reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
//my solution:
let instructorString = "Your instructors are: ";
instructorString += users.reduce(function (accumulator, user, index) {
    let ending = ", ";

    if (index === users.length -1) {
        ending = ".";
    }
    return accumulator + user.name + ending;
}, "");
console.log(instructorString);

// Ryans Bonuses
// Use .map to produce a new array of objects containing only email
// and name
const contactList = users.map(({name, email}) => {
    return {
        name,
        email,
        // employer: "Codeup" // still returns since it is in the return call
    }
});
console.log(contactList);

// Use reduce to get the unique list of languages from the list
// of users.