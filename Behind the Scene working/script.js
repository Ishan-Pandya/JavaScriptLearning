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

// // primitive types
// let lastName = "Pandya";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// // reference types
// const ishan = {
//   firstName: "Ishan",
//   lastName: "Pandya",
//   age: 24,
// };
// const marriedIshan = ishan;
// marriedIshan.lastName = "Kumar Pandya";

// console.log(ishan, marriedIshan);

// Copying objects
// const ishan2 = {
//   firstName: "Ishan",
//   lastName: "Pandya",
//   age: 24,
//   family: ["Ishan", "Ved"],
// };

// with the help of object.assign we can create a shallow copy.
// const ishanCopy = Object.assign({}, ishan2);
// ishanCopy.lastName = "Davis";
// ishanCopy.family.push("Nutan");
// ishanCopy.family.push("Jay");

// console.log(ishan2, ishanCopy);

const weekDays = ["mon", "Tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced object literals
  openingHours,

  // below are the functions
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = "20:00" }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Looping the menu
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// // Looping with With the index
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// const rest1 = {
//   name: "capri",
//   numGuest: 20,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// Or assignment operator (IF WE GIVE 0 TO NUMGUEST it will take 0 as null value)
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//if we use nullish assignment operator
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// rest2.owner = rest2.owner && "<ANONUMOUS>";
// rest1.owner = rest1.owner && "<ANONUMOUS>";

// rest2.owner &&= "<ANONYMOUS>";
// rest1.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

// Nullish Coalescing operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

//copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//Iterables are arrays, strings, maps, sets but not objects.

// const str = "Ishan";
// const letter = [...str, " ", "P."];
// console.log(letter);
// console.log(...str);

// real=world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

//object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { restaurant };
// restaurantCopy.name = " Ristorante Roma";
// console.log(restaurantCopy);

// 1) destructuring
// Spread, as it is on right side of =
// const arr = [1, 2, ...[3, 4]];

// Rest, as it is on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

//objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// Use any data type, return any data type, short-circuiting

// console.log("---------OR---------");
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---------AND---------");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas");
// console.log("Jonas" && 23 && null && "Hello");

// restaurant.orderPasta && restaurant.orderPasta("one", "two", "three");

// console.log("---------AND---------");
/*// destructuring objects
restaurant.orderDelivery({
  time: "22:30",
  address: "via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});


const { name, openingHours, categories, starterMenu } = restaurant;
console.log(name, openingHours, categories, starterMenu);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);*/

/* destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/
