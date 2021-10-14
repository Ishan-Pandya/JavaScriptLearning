"use strict";
//  // Code for Function
// function describeCountry(country, population, capitalCity) {
//   const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return string;
// }

// const canada = describeCountry("Canada", 38, "ottawa");
// const india = describeCountry("India", 138, "ottawa");
// const germany = describeCountry("Germany", 83.24, "Berlin");

// console.log(canada);
// console.log(india);
// console.log(germany);

//  //  ***********Code for functions declaration***********
// function declaration
function percentageOfWorld1(population) {
  return population / 79;
}
const India1 = percentageOfWorld1(1380);
const China1 = percentageOfWorld1(1440);
const UnitedS1 = percentageOfWorld1(329.5);

console.log(India1, China1, UnitedS1);

// Function Expression
const percentageOfWorld2 = function (population) {
  return population / 79;
};
const India2 = percentageOfWorld2(1380);
const China2 = percentageOfWorld2(1440);
const UnitedS2 = percentageOfWorld2(329.5);

console.log(India2, China2, UnitedS2);
