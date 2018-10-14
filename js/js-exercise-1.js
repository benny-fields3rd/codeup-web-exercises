// Function Exercise 1 Max
// Create a function that takes two parameters and returns the maximum of the two.
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(max(70, 43));

// optional solution shortened
function max2(num1, num2) {
    if (num1 > num2) return num1;
    return num2;
}
console.log(max2(105, 205));

// Ternary solution inside function
function max3(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log(max3(78, 45));

// Exercise 2 landscape or portrait
// function with ternary
function landscape(width, height) {
    return (width > height)
}
console.log(landscape(1001, 1000));

// Exercise 3 FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => FizzBuzz
// Not divisible by 3 or 5 => input

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    } else if ((input % 3 === 0) && (input % 5 === 0)) {
        return "FizzBuzz";
    } else if (input % 3 === 0) {
        return "Fizz";
    } else if (input % 5 === 0) {
        return "Buzz";
    }
    return input;
}

// Objects Exercise 1
// create object with street, city, zip code properties
var address = {
    street: "1234 Home Street",
    city: "San Antonio" ,
    zipCode: 78255
};

// create function to show address object using for in way
function showAddress(address) {
    for (var key in address)
        console.log(key, address[key])
}
showAddress(address);

// create function to show address object regular way
function showAddress2(address) {
    return address;
}
console.log(showAddress2(address));

