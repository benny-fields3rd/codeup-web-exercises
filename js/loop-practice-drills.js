// ------------- PRACTICE 1
//
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]
var array1 = ["string", false, 100, 3, 15, "codeup"];

 function filterNumbers(inputs) {
     var output = inputs.filter(function (input) {
         return (parseInt(input) == input);
     }); return output.sort().reverse();
 }
 console.log(filterNumbers(array1));

// ------------- PRACTICE 2
//
// Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
//
// Example input:
var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

//
// Example output: [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];
function getOlder(dogs) {
    for (var i = 0; i < dogs.length; i += 1) {
        // dogs[i].age++;
        dogs[i].age++;
    }
    return dogs;
}
console.log(getOlder(dogs));

// ------------- PRACTICE 3
//
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
//
// Example input:
var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
//
// Example output:
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: false // changed to false
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]

function washCars(cars) {
    for (i = 0; i < cars.length; i += 1) {
        if (cars[i].isDirty === true) {
            cars[i].isDirty = false;
        }
    }
    return cars;
}
console.log(washCars(cars));

// ------------- PRACTICE 4
//
// Write a function, adminList() that takes in an array of user objects
// and returns a count of all admins based on the isAdmin property.
// Refactor to return an array of admin-only user emails.
// Refactor again to return an array of user objects that are admins.
//
//     Example Input:
var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    }
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];
//
// Example Output (before refactor): 2
//
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
//
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
//
// ------------- PRACTICE 5
//
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     Example Input:
//
//     var breads  = [
//         "white",
//         "wheat",
//         "rhy",
//         "white"
//     ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
//
// Example Output: [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
//
