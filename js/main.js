    "use strict";
// I FORGOT TO ADD THE JQUERY TO THE HTML PAGE!!!!!
/**
 * Write your solutions here
 */
// When the button with the id of change-bg-color is clicked the 
// background of the page should turn blue.
$("#change-bg-color").click(function() {
    $("body").css("background-color", "blue");
});
    // $('#change-bg-color').click(function () {
    //     $('#body').css('background-color', 'blue');
    // });

// When the button with an id of append-to-ul is clicked, append an 
// li with the content of text to the ul with the id of append-to-me.
$("#append-to-ul").click(function () {
    $("#append-to-me").append("<li>text</li>");
});

// Two seconds after the page loads, the heading with the id of 
// message should change it's text to "Goodbye, World!".
setTimeout(function () {
    $("#message").text("Goodbye, World!");
}, 2000);

// When a list item inside of the ul with the id of hl-toggle is 
// first clicked, the background of the li that was clicked should 
// change to yellow. When a list item that has a yellow background 
// is clicked, the background should change back to white.
$("#hl-toggle > li").click(function () {
    $(this).toggleClass("highlight");
});

// When the button with the id of upcase-name is clicked, the element
// with the id of output should display the text "Your name 
// uppercased is: " + the value of the input element with the id of
// input transformed to uppercase.
$("#upcase-name").click(function () {
    // get value from element w/ id of input
    // uppercase that string
    // set the value of #output to display "Your name uppercase is: "
    var input = $("#input").val();
    var output = "Your name uppercased is: " + input.toUpperCase();
    $("#output").text(output);
});

// Whenever a list item inside of the ul with the id of font-grow is 
// double clicked, the font size of the list item that was clicked 
// should double.
$("#font-grow > li").dblclick(function () {
   var currentFontSize = $(event.target).css("font-size");
    console.log($(event.target).css("font-size"));  // to check what the font size it
    currentFontSize = parseInt(currentFontSize);
    var doubleFontSize = currentFontSize * 2 + "px";

    $(event.target).css("font-size", doubleFontSize);
});



