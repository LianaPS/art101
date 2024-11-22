// index.js - Lab 8 Anon Functions and Callbacks
// Author: Liana Simonelli
// Date: 31 October 2024

function iseven(x){
  return(x % 2 == 0);
}
// console.log
console.log("isEven(3):", isEven(3)); // false
console.log("isEven(6):", isEven(6)); // true
console.log("isEven(144):", isEven(144)); // true
console.log("isEven(15):", isEven(15)); // false
console.log("isEven(97):", isEven(97)); // false

undefined
iseven(3)
false
iseven(6)
true
iseven(144)
true
iseven(15)
false
iseven(97)
false
array= [3, 6, 144, 15, 97]
(5) [3, 6, 144, 15, 97]
array.map(iseven);
(5) [false, true, true, false, false]
array.map(function(x){
  return x **0.5;
})
(5) [1.7320508075688772, 2.449489742783178, 12, 3.872983346207417, 9.848857801796104]
// chatGBT revised code strucutre and checked it work