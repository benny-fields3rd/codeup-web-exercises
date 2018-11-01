"use strict";

// 2. Write a function named wait that accepts a number as a parameter, and returns
// a promise that resolves after the passed number of milliseconds.

let wait = (num) => {
    return new Promise((resolve, reject) => { //resolve and reject are functions
        setTimeout(() => {
            resolve()
        }, num) // using the parameter instead of hard-coding so we can call later
    });
};

// call the wait function
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds')); // testing alert
wait(5000).then(() => console.log('You\'ll see this after 5 seconds')); // even though this pops up, it only takes 2 seconds.
wait(5000).then(() => alert('You\'ll see this after 5 seconds')); // even though this pops up, it only takes 2 seconds.


// 3. Create a function that accepts a github username, and returns a promise that
// resolves with the date of the last commit that user made.

console.log("Benny");

let gitRecentCommit = (userName) => {
    fetch(`https://api.github.com/users/${userName}/events`, { // using fetch returns a promise
        headers: {'Authorization': 'ENTER GITHUB API KEY HERE'}}) // inside the quotes!
        .then(response => response.json())
        .then(data => console.log(data[0].created_at))
    };

gitRecentCommit("benny-fields3rd");

// Justin's solution
// const token = ;
// const githubApiBaseUrl = 'https://api.github.com';
// const options = {
//     headers: {
//         'Authorization':
//     }
// }

