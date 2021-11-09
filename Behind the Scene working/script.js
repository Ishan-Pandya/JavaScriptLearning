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

const calcAge = function (birthyear) {
  console.log(2021 - birthyear);
  console.log(this);
};

calcAge(1996);

const calcAgeArrow = (birthyear) => {
  console.log(2021 - birthyear);
  console.log(this);
};

calcAgeArrow(1996);

const Ishan = {
  year: 1996,
  calcAge: function () {
    console.log(this);
  },
};

Ishan.calcAge();
