/*
   lab.js - This JavaScript/jQuery script receives a value from an input field and outputs a modified version.
   Requirements: jQuery must be loaded for this script to work.
   Author: Liana Simoneli
   Date: 11 November 2024
*/

// Function: sort the characters of a string in alphabetical order
function sortString(inputString) {
  // Convert the string to an array, sort it, and convert it back to a string
  return inputString.split('').sort().join('');
}
// Event listener: submit button
$("#submit").click(function() {
  // Get the value of the input field
  const userName = $("#user-name").val();
  // Sort username
  const userNameSorted = sortString(userName);
  // Append a new div to the output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
//formatting and code checking from chatGBT