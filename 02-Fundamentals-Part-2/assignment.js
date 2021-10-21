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
// function percentageOfWorld1(population) {
//   return population / 79;
// }
// const India1 = percentageOfWorld1(1380);
// const China1 = percentageOfWorld1(1440);
// const UnitedS1 = percentageOfWorld1(329.5);

// console.log(India1, China1, UnitedS1);

// // Function Expression
// const percentageOfWorld2 = function (population) {
//   return population / 79;
// };
// const India2 = percentageOfWorld2(1380);
// const China2 = percentageOfWorld2(1440);
// const UnitedS2 = percentageOfWorld2(329.5);

// console.log(India2, China2, UnitedS2);

//  //  ***********Code for Arrow functions***********
// const percentageOfWorld1 = (population) => population / 79;
// const India2 = percentageOfWorld1(1380);
// const China2 = percentageOfWorld1(1440);
// const UnitedS2 = percentageOfWorld1(329.5);

// console.log(India2, China2, UnitedS2);

//  //  ***********Code for functions calling other functions***********
// function describePopulation(country, population) {
//   const percPopulation = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${percPopulation} of the world.`;
// }

// console.log(describePopulation("India", 1380));
// console.log(describePopulation("China", 1440));
// console.log(describePopulation("United States", 329.5));

// // ***********Code for array***********
// function percentageOfWorld1(population) {
//   return population / 79;
// }

// // Population of Canada, India, USA, China
// // [38.01, 1380, 329.5, 1402]
// let population, percentages;
// population = [38.01, 1380, 329.5, 1402];
// console.log(population.length === 4);

// percentages = [
//   percentageOfWorld1(population[0]),
//   percentageOfWorld1(population[1]),
//   percentageOfWorld1(population[2]),
//   percentageOfWorld1(population[3]),
// ];

// console.log(percentages);

// // ***********Basic Array Operations***********
// const neighbours = ["Bhutan", "Nepal", "Maldives", "china"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// neighbours[neighbours.indexOf("Maldives")] = "Pretty Maldives";
// console.log(neighbours);

// // ***********Introduction of Objects***********
const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1380,
  neighbours: ["Bhutan", "Nepal", "Maldives", "china"],
};

console.log(myCountry);

// // ***********Dot vs Bracket Notation***********

console.log(
  `${myCountry.country} has ${myCountry.population} billion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbour countries and a capital called ${myCountry.capital}`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
