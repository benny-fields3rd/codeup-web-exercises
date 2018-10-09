"use strict";
/* 2.
Create a function named showMultiplicationTable that accepts a number and console.logs
the multiplication table for that number (just multiply by the numbers 1 through 10)

For example, showMultiplicationTable(7) should output

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
 */
function showMultiplicationTable(number) {
    for (number = 1 ; number < 11 ; number++) {
        var number2 = number * 7;
        console.log("7 X " + number +" = " + number2 );
    }
}
showMultiplicationTable();

/* 3.
Use a for loop and the code from the previous lessons to generate 10 random numbers between
20 and 200 and output to the console whether each number is odd or even. For example:

123 is odd
80 is even
24 is even
199 is odd
...
 */

function randomNum() {
    var n = [];
    for(var i = 0; i < 10; i++){
        n.push(Math.floor(Math.random() * 200) + 20);
    }
    return n;
}
console.log(randomNum());