"use strict";

//Build a Tic-tac-toe Game
// Create a playable Tic-tac-toe board board game with unique styling and animations using jQuery.
//
// Clicks should alternate between the unicode symbol or images for X's and O's when clicking tiles.
// The current player's turn should be displayed after each click.
// Clicked tiles should no longer be clickable.
// A button should be included to start or restart a new game.
// Hard Challenge - make the game winnable by detecting when a player gets three-in-a-row.
//
// Create a customized win message based on which player won.
// Change the css of the tiles that create the three-in-a-row winning pattern.
// EXTRA HARD CHALLENGE - create a playable AI opponent that will play defensively if you are a click away from winning and offensively otherwise.

$('.box').css({'border' : '2px solid black', 'height':'200px', 'width':'200px'});
$('.row').css('float', 'left');