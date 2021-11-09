"use strict";

// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Ishan";
let job = "teacher";
const year = "1996";

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
