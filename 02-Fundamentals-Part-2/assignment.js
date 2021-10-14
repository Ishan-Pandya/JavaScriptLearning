"use strict";

function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return string;
}

const canada = describeCountry("Canada", 38, "ottawa");
const india = describeCountry("India", 138, "ottawa");
const germany = describeCountry("Germany", 83.24, "Berlin");

console.log(canada);
console.log(india);
console.log(germany);
