(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Mary", "Joe", "Robert", "Larry"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("Log the number of elements in the names array:");
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Print each of the names individually by accessing each element's index:");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("For loop to print each name in array:");
    for (var i = 0; i < names.length; i += 1) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("ForEach loop to print each name in array:");
    names.forEach(function(name) {
        console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //created function to call first element of array
    console.log("Function to call first element of array:");
    function first() {
        console.log(names[0]);
    }
    // calling above function
    first();

    //created function to call first element of array
    console.log("Function to call second element of array:");
    function second() {
        console.log(names[1]);
    }
    // calling above function
    second();

    //created function to call first element of array
    console.log("Function to call last element of array:");
    function last() {
        console.log(names[3]);
    }
    // calling above function
    last();
})();
