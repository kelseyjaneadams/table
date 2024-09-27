// $(document).ready(function () {
//     $("h2").css("text-decoration", "underline"); //underlines all <h2> elements 
//     $("ul").css("border", "solid 1px #ccc"); // adds a border to all lists
// });

// How can we do this without using css styles inline?

$(document).ready(function () {
    $("h2").addClass("underline"); // Adds underline class to all <h2> elements
    $("ul").addClass("border"); // Adds border class to all lists
});