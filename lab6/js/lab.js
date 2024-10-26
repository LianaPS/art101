// index.js - Lag=b 6 Objects and Arrays
// Author: Liana Simonelli
// Date: October 26th 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Define Variables
let myTransport = [
  "Car",
  "Walking",
  "Bike",
  "Train",
  "Bus"
];

// Object for main ride
let myMainRide = {
  make: "Subaru",
  model: "Outback",
  year: 2011,
  color: "Green"
};

// Output
document.writeln("Getting around: " + myTransport + "<br>");

// Output the main ride object 
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

//sourced code formatting from Canvas & chat GBT to check 