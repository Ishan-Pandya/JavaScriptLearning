"use strict";

// variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Ishan";
// let job = "teacher";
// const year = "1996";

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// if (!numProduct) deleteShoppingCart();
// var numProduct = 10;
// function deleteShoppingCart() {
//   console.log("all product deleted");
// }

// var x = 1;
// var y = 2;
// const z = 3;

//  // for this keyword

// console.log(this);

// const calcAge = function (birthyear) {
//   console.log(2021 - birthyear);
//   console.log(this);
// };

// calcAge(1996);

// const calcAgeArrow = (birthyear) => {
//   console.log(2021 - birthyear);
//   console.log(this);
// };

// calcAgeArrow(1996);

// const ishan = {
//   year: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };

// ishan.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = ishan.calcAge;

// matilda.calcAge();
// console.log(matilda);

// const f = ishan.calcAge;
// f();

// var firstName = "Pandya";

// const ishan = {
//   firstName: "Ishan",
//   year: 1996,
//   calcAge: function () {
//     console.log(2021 - this.year);

// solution - 1
//   const self = this;
//   const isMillenial = function () {
//     console.log(self.year >= 1981 && self.year <= 1996);
//   };
//   isMillenial();
// },

//     // solution - 2
//     // const self = this;
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// ishan.greet();
// ishan.calcAge();

// // Argument keywords
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// console.log(addExpr(2, 3, 4, 5, 6));

// // argument keyword does not work with the arrow function
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(1, 2, 3);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Ishan",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;

// console.log(friend);
// console.log(me);

// primitive types
let lastName = "Pandya";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// reference types
const ishan = {
  firstName: "Ishan",
  lastName: "Pandya",
  age: 24,
};
const marriedIshan = ishan;
marriedIshan.lastName = "Kumar Pandya";

// console.log(ishan, marriedIshan);

// Copying objects
const ishan2 = {
  firstName: "Ishan",
  lastName: "Pandya",
  age: 24,
  family: ["Ishan", "Ved"],
};

// with the help of object.assign we can create a shallow copy.
const ishanCopy = Object.assign({}, ishan2);
ishanCopy.lastName = "Davis";
ishanCopy.family.push("Nutan");
ishanCopy.family.push("Jay");

console.log(ishan2, ishanCopy);
