// index.js - Lab 7 Functions
// Author: Liana Simonelli
// Date: 27 October 2024

/**
 * Prompts for name, sorts letters, then returns sorted name.
 * @returns {string} sorted letters of name
 */
function sortUserName() {
  // Prompt for name
  var userName = window.prompt("Liana:");

  // Convert the string into an array of characters
  var nameArray = userName.split(""); // Split by empty string to get individual characters

  // Sort the array of characters
  nameArray.sort();

  // Convert the array back into a string
  var sortedName = nameArray.join("");

  // Return the sorted name
  return sortedName;
}

// Call the function and output the results
var sortedUserName = sortUserName();
document.writeln("Your sorted name is: " + sortedUserName);

// jQuery document ready function
$(document).ready(function() {
  $('#script-output').text("This is the output from the JavaScript file!");
});

// chatGBT revised code strucutre and checked it to work 