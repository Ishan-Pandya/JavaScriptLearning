"use strict";

//  //  ***********Code for functions***********
// function logger() {
//   console.log("My name is Ishan Pandya");
// }
// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//  //  ***********Code for functions declaration***********
// Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(calcAge1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1996, "Ishan"));
// console.log(yearsUntilRetirement(2000, "bob"));

// // Function calling function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 4));
