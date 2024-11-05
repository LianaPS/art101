// index.js - Lab 7 Functions
// Author: Liana Simonelli
// Date: 4 Novemeber 2024

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = "Liana"; // Using your name directly instead of prompt
  console.log("userName =", userName);
  
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  
  return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");
// jQuery document ready function
$(document).ready(function() {
  $('#script-output').text("This is the output from the JavaScript file!");
});


/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
*/

$(document).ready(function() {
  // Add button to challenge section
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
  
  // challenge button edit
  $("#button-challenge").click(function() {
    // Toggle the "special" class in challenges
    $("#challenge").toggleClass("special");
  });
});