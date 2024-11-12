/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Liana Simonelli
   Date: 7 November 2024
*/

// Function to generate random environmental observation text
function generateRandomText() {
  const text = "The chair sits on the window and the winodw in front of the curtian you can see the chill on the glass and in my heart.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

// Event listener for button click
$("#make-convo").click(function(){
  // Generate new fake dialogue text
  const newText = generateRandomText();
  
  // Append a new div with the generated text to the output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

