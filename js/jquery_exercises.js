"use strict";

// Type the following right below the use strict or if not using use strict, the very top of the page.
$(document).ready(function () {
    // a shortcut for jQuery is:
    //$(function() {
// });
//     alert( 'The DOM has finished loading!' );

// ID Selectors
// Use jQuery to select an element by the id. Alert the contents of the element.
// var contents = $('#intro').html();
// alert(contents);

// Update the jQuery code to select and alert a different id.
// Use the same id on 2 elements. How does this change the jQuery selection?
// var contents2 = $('#currentModels').html();
//     alert($('#intro').html());
// alert(contents2); // it only shows the first instance of the id.

// Class Selectors
// Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
// $('.codeup').css('border', '1px solid #F00');

// Remove the class from one of the elements. Refresh and test that the border has been removed.

// Element Selectors
// Using jQuery, set the font-size of all li elements to 20px.
// $('li').css('font-size', '20px');

// Craft selectors that highlight all the h1, p, and li elements.
// $('h1').css('background-color', 'yellow');
// $('p').css('background-color', 'yellow');
// $('li').css('background-color', 'yellow');

// Create a jQuery statement to alert the contents of your h1 element(s).
// var h1Content = $('h1').html();
// alert(h1Content);

// Multiple Selectors
//Combine your selectors that highlight all the h1, p, and li elements.
// $('h1, p, li').css('background-color', 'yellow');

// Mouse event exercises
//Remove your custom jQuery code from previous exercises.

// Add jQuery code that will change the background color of a h1 element when clicked.
$('h1').click(function () {
   $(this).css('background-color', 'red');
});
// Make all paragraphs have a font size of 18px when they are double clicked.
$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});
// Set all li text color to red when the mouse is hovering, reset to black when it
// is not.
$('li').hover(function () {
    $(this).css('color', 'red');
}, function () {
    $(this).css('color', 'black');
    }
);


}); // closing of the $(document).ready(function() {