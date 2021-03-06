(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = { // NOTE: object literal notation is ideal if you know the information/data as shown below.
        firstName: "Elon",
        lastName: "Musk"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function () {
    //     console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    // };

    // using "this' instead...
    person.sayHello = function () {
        console.log("Hello from " + this.firstName + " " + this.lastName + "!");
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // using a forEach loop with if/else conditional
    shoppers.forEach(function(shopper){
        if (shopper.amount > 200) { // don't use equal because the problem says "more" than 200.
            var twelve = shopper.amount * .12; // calculation to determine how much the discount is
            var discount = shopper.amount - twelve; // calculation to
            console.log("Congratulations " + shopper.name + "! " +
                        "Your price before discount was $"+ shopper.amount.toFixed(2) +
                        ". " + "Your discount is $" +
                        twelve.toFixed(2) + "." + " Your price after discount is $" + discount.toFixed(2) + ".");
        } else {
            console.log("Too bad " + shopper.name + "!" + " " + "No discount for you! " +
                        "You have to pay: $" + shopper.amount.toFixed(2));
        }
    });

    // Justin's solution
    function calculateDiscount(amount) {
        var finalAmount = 0;
        var amountOff = 0;

         if (amount > 200) {
             amountOff = amount * .12;
             finalAmount = amount - amountOff;
         } else {
             finalAmount = amount;
         }

         return { // returns an object of two values with two different meanings
             finalAmount: finalAmount,
             amountOff: amountOff
        };
    }

    function displayShopperInfo(shoppers) {
        shoppers.forEach(function (shopper) {
            var amount = calculateDiscount(shopper.amount); // calling previously created function
            var message = ""; // used to clean up code instead of typing everything into console.log.

            message += shopper.name + " bought $ ";
            message += shopper.amount.toFixed(2);
            message += " and got $" + amount.amountOff.toFixed(2);
            message += " off and will pay $";
            message += amount.finalAmount.toFixed(2) + ".";

            console.log(message);
        });
    }
    displayShopperInfo(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Sins of Tacos",
            author: {
                firstName: "Taco",
                lastName: "Cabana"
            }
        },
        {
            title: "Father would Roll Over in His Grave",
            author: {
                firstName: "Wal",
                lastName: "Mart"
            }
        },
        {
            title: "The 120 Hour Workweek",
            author: {
                firstName: "Elon",
                lastName: "Musk"
            }
        },
        {
            title: "HEB, The Start",
            author: {
                firstName: "Howard-E",
                lastName: "Butt"
            }
        },
        {
            title: "Sleep Programming!",
            author: {
                firstName: "Code",
                lastName: "Up"
            }
        }
    ];
    console.log(books); // lists all of the books in the array
    console.log(books[2].title); // "The Salmon of Doubt"
    console.log(books[2].author.firstName); // "Douglas"
    console.log(books[2].author.lastName); // "Adams"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // using for loop!!
    function listBooks() {
        var bookNumber = 1;
        for (var b = 0; b < books.length; b++) {
            console.log("Book # " + bookNumber + "\n" +
                        "Title: " + books[b].title + "\n" +
                        "Author: " + books[b].author.firstName +
                         " " + books[b].author.lastName + "\n" + "---");
            bookNumber++;
        }
        return books.length;
    }
    listBooks();

    // using forEach loop!!!!
   // books.forEach(function (book, index) {
   //      console.log("Book # " + [index += 1]); // use (index + 1) instead so it should be ("Book # " + (index + 1));
   //      console.log("Title: " + book.title); // also, instead of console logging everything, create messages like in the above example.
   //      console.log("Author: " + book.author.firstName + " " + book.author.lastName);
   //      console.log("---");
   // });

    // using forEach loop with refactored message variable instead of console logging!!!!
    books.forEach(function (book, index) {
        var message = "";
        message += ("Book # " + (index + 1) + "\n"); // use (index + 1) instead so it should be ("Book # " + (index + 1));
        message += ("Title: " + book.title + "\n"); // also, instead of console logging everything, create messages like in the above example.
        message += ("Author: " + book.author.firstName + " " + book.author.lastName + "\n");
        message += ("---");
        console.log(message);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();
