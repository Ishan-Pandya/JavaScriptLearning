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
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 4));

// // Code for Arrays
// const friend1 = "Ishan";
// const friend2 = "Ved";
// const friend3 = "Jay";

// const friends = ["Ishan", "Ved", "Jay"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years[0]);
// console.log(years[1]);
// console.log(years[2]);
// console.log(years[3]);

// console.log(friends.length); // to get the length of the array
// console.log(friends[friends.length - 1]); // for the last data saved in the array

// friends[2] = "Nutan";
// console.log(friends);

// const firstName = "Ishan";
// const Ishan = ["Ishan", "Pandya", 2021 - 1996, "Male", friends];
// console.log(Ishan);

// // // Exercise for array
// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };
// const year = [1990, 1967, 2002, 2020, 2018];
// console.log(
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[2]),
//   calcAge(year[3]),
//   calcAge(year[4])
// );

// const age = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[2]),
//   calcAge(year[3]),
//   calcAge(year[4]),
// ];
// console.log(age);

// const friends = ["Ishan", "Ved", "Jay"];
// friends.push("Nutan"); // push command add the value to the last place in array
// console.log(friends);

// friends.unshift("Mike");
// console.log(friends); // unshift command add the value at the start of the array

// friends.pop(); // pop remove the last element from the array
// console.log(friends);

// friends.shift(); // shift command remove the first element in the array
// console.log(friends);

// console.log(friends.indexOf("Jay"));
// console.log(friends.includes("Ishan"));
// console.log(friends.includes("Hello"));

// if (friends.includes("Ishan")) {
//   console.log("Ishan is your friend");
// }

// // // Exercise for objects
// const ishan = {
//   firstName: "Ishan",
//   lastName: "Pandya",
//   age: 2021 - 1996,
//   job: "Programmer",
//   love: ["Parents", "Hemangi", "Cars", "Money"],
// };

// Here ishan is an object and it has key value pair
// keys are also called as property

// console.log(ishan);
// console.log(ishan.lastName);
// console.log(ishan["lastName"]);
// console.log(ishan.love[2]);

// const nameKey = "Name";
// console.log(ishan["first" + nameKey]);
// console.log(ishan["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you wnt to know about ishan? choose between firstName, lastName, age, job and love"
// );

// if (ishan[interestedIn]) {
//   console.log(ishan[interestedIn]);
// } else {
//   console.log("please choose the correct property");
// }

// ishan.location = "Canada";
// console.log(ishan);

// in class challenge
// ishan have 4 love and his first love is parents

// console.log(
//   `${ishan.firstName} has ${ishan.love.length} love and his first love is ${ishan.love[0]}`
// );

// const ishan = {
//   firstName: "Ishan",
//   lastName: "Pandya",
//   birthYear: 1996,
//   job: "Programmer",
//   love: ["Parents", "Hemangi", "Cars", "Money"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2021 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2021 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} -years old, and he has ${
//       this.hasDriversLicense ? `a` : `no`
//     } driver's license.`;
//   },
// };

// console.log(ishan.calcAge());
// console.log(ishan.age);

// console.log(ishan.getSummary());

// // // Exercise related to For Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`this is repetition ${rep}`);
}
