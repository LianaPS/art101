/*
 * Author: Liana Simonelli
 * Date: 14, November 2024
 */
//return Harry Potter Houses
//depending on length of mod 4
function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;
  if (mod === 0) {
      return "Gryffindor";
  } else if (mod === 1) {
      return "Ravenclaw";
  } else if (mod === 2) {
      return "Slytherin";
  } else {
      return "Hufflepuff";
  }
}

var myButton= document.getElementById("button");
myButton.addEventListener("click", function() {
  var name=document.getElementById("input").value;
  var house= sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
//formatting and code checking from chatGBT and wesbot