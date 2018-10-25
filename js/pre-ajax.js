$(document).ready(function() { //$(function(){ is equivalent
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];
    /*
    - add functionality to the button so that when it is clicked,
    an unordered list of names from the people array (included below)
     is added to the inner HTML of the div#names-list. For an extra
     onus, make the font color of each list item map to that person's
      favColor value.
*/
    // my solution
    $('#add-names-btn').click(function () {
        // adds ul when button is clicked
        $('#names-list').html('<ul></ul>'); // may be a way to add ul and names all at one?

        // Using .each, goes through each object
        $.each(people, function (i, value) {
            // adds li's and names to ul
            $('ul').append('<li>' + people[i].name + '</li>');
        });
    });

    // simple API request



    // single argument with .done(), .fail() and .always() methods

    $.ajax({
        url: "https://swapi.co/api/films",
        type: "GET",
        data: {
            search: "a new hope"
        }
    }).done(function(data) {
        console.log(data.results[0].species[0: "https://swapi.co/api/species/5/"]);
    }).fail(function() {
        console.log("Request failed");
    });
    // $.ajax({
    //     url: "https://swapi.co/api/vehicles/4/",
    //     type: "GET",
    //     data: {
    //         search: "sand crawler"
    //     }
    // }).done(function(data) {
    //     console.log(data);
    // }).fail(function() {
    //     console.log("Request failed");
    // });
}); // close of document ready