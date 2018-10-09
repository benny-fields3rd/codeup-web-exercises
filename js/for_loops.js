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
function showMultiplicationTable(input) {
    for (var number = 1 ; number <= 10 ; number++) {
        var number2 = number * parseFloat(input);
        console.log(input + " X " + number + " = " + number2);
    }
}
showMultiplicationTable(10);

// Refactored question #2 (while loop) as a for loop
for (var i = 2; i <= 65536; i *= 2) {
    console.log(i);
}

/* 3.
Use a for loop and the code from the previous lessons to generate 10 random numbers between
20 and 200 and output to the console whether each number is odd or even. For example:

123 is odd
80 is even
24 is even
199 is odd
...
 */
// Instructor Ryan's solution
function isEven(num) {
    return num % 2 === 0;
}

var randomNumber;
for (var i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * 180) + 20;

    if (isEven(randomNumber)) {
        console.log(randomNumber + " is even!");
    } else {
        console.log(randomNumber + " is odd!");
    }
}



/* #4
Create a for loop that uses console.log to create the output shown below.
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
// my version
// for (var k = 1; k < 10; k++) {
//     var text = "";
//     for (var j = 1; j <= k; j++) {
//         text += k;
//     } console.log(text);
// }

// Another way to do it provided by Matthew B.
// for (var x = 1; x <= 9; x += 1){
//     console.log(x.toString().repeat(x));
// }
// Instructor Ryan's version----same as Matthews, but modified slightly
for(var i = 1; i <= 9; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}

/* #5.
Create a for loop that uses console.log to create the output shown below.
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */
for (var o = 100; o > 0; o -= 5) { // you can also use o >= 5 and get the same result because decrement is by 5
    console.log(o);
}


