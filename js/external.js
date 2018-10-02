"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my Website!");

var userFavColor = prompt("What is your favorite color?");
alert("Great! " + userFavColor + " is my favorite color too!");

// // Start of exercise three //
// /**
// * You have rented some movies for your kids: The little mermaid (for 3 days),
// * Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// * If price for a movie per day is $3, how much will you have to pay?
// */
var littleMermaidDays = Number(prompt("How many days are you renting Little Mermaid?"));
console.log("Sounds good, " + littleMermaidDays + " it is!");

var brotherBearDays = Number(prompt("Next, how many days are you renting Brother Bear?"));
console.log("Alright, " + brotherBearDays + " days sound good!");

var herculesDays = Number(prompt("Lastly, how many days are you renting Hercules?"));
console.log("Awesome, " + herculesDays + " day it is!");

confirm("The daily rate is $3. Do you still want to rent the movies?");
var dailyRateDollars = 3;

var totalCost = (dailyRateDollars * herculesDays) + (dailyRateDollars * littleMermaidDays) + (dailyRateDollars * brotherBearDays);
    alert('Thank you. Your total is $" + totalCost.toFixed(2) + ".");

/**
 * Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
 * rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
 * You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
var googlePayPerHour = Number(prompt("Enter the amount per hour at Google."));
var googleHoursWorked = Number(prompt("Enter hours worked at Google."));

var facebookPayPerHour = Number(prompt("Enter the amount per hour at Facebook."));
var facebookHoursWorked = Number(prompt("Enter hours worked at Facebook."));

var amazonPayPerHour = Number(prompt("Enter the amount per hour at Amazon."));
var amazonHoursWorked = Number(prompt("Enter hours worked at Amazon."));

var totalHoursWorked = googleHoursWorked + facebookHoursWorked + amazonHoursWorked;

var totalWeeklyPay = googlePayPerHour * googleHoursWorked;
    totalWeeklyPay += facebookPayPerHour * facebookHoursWorked;
    totalWeeklyPay += amazonPayPerHour * amazonHoursWorked;

alert('Wow! You worked a total of ' + totalHoursWorked + " hours " +  "and earned a total of " + totalWeeklyPay.toFixed(2) + ".");










