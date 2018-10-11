"use strict";
// using object literal notation (preferred)
var blogPost = {
    author: "Stephen King" ,
    averageRating: 5,
    datePosted: "25 Jan 2018",
    title: "Author Daily",
    noOfShares: 215000,
    noOfViews: 25000,
    isFlagged: true,
    lastUpdated: "1 Jan 2018",
    content: "Read my stuff"
};
console.log(blogPost);
console.log(blogPost.author);

//using dot notation
var blogPost2 = {};
blogPost2.author = "Stephen King";
blogPost2.averageRating = 5;
blogPost2.datePosted = "25 Jan 2018";
blogPost2.title = "Author Daily";
blogPost2.noOfShares = 215000;
blogPost2.noOfViews = 25000;
blogPost2.isFlagged = true;
blogPost2.lastUpdated = "1 Jan 2018";
blogPost2.content = "Read my stuff!";

console.log(blogPost2);
console.log(blogPost2.title);

delete blogPost2.title; // way to delete property
console.log(blogPost2);