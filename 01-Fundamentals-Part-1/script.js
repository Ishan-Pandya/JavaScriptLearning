// // Code for values and variables
// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun!");
// console.log(10 + 60 + 54 - 25);

// //code for data types
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Hello");
// javaScriptIsFun = "yes!";
// console.log(typeof javaScriptIsFun);
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);
// type of null will show as a object
// console.log(typeof null);

// //code for let, const, var
// let age = 30;
// age = 31;
// const birthYear = 1996;
// will received error while reassign the const value
// birthYear = 1997;
// lastName = "Pandya";
// console.log(lastName);

// //code for Basic Operator
// const currentYear = 2021;
// const ageIshan = currentYear - 1996;
// const ageVed = currentYear - 2004;
// console.log(ageIshan, ageVed);
// console.log(ageIshan * 2, ageIshan / 2, 2 ** 3);
// 2**3 means 2 to the power 2
// const firstName = "Ishan";
// const lastName = "Pandya";
// console.log(firstName + " " + lastName);
// let x = 10 + 5;
// console.log(x);
// x += 10;
// console.log(x);
// x *= 10;
// console.log(x);
// comparison operators
// console.log(ageIshan > ageVed);
// console.log(ageVed >= 18);
// const isFullAge = ageVed >= 18;
// console.log(isFullAge);

// let y, z;
// y = z = 25 - 10 - 5;
// console.log(x, y);

// //code for Template literals
// let firstName = "Ishan Pandya";
// const Ishan = `I am ${firstName}`;
// console.log(Ishan);

// //code for If/Else statement
// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("You can start driving license 🚗");
//   0;
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `You can not start driving, and need to wait for ${yearsLeft} years.`
//   );
// }

// //code for type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);
// // there are five falsy value : 0 , ' ' , undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Ishan"));
// console.log(Boolean());
// console.log(Boolean(" "));

// //code for else if ladder and equality sign
// const age = 18;
// if (age === 18) console.log("you just became an adult");
// const fav = Number(prompt("Type in your fav number"));
// if (fav == 21) {
//   console.log("Cool! 21 is an amazing number!");
// } else if (fav == 18) {
//   console.log(
//     "This is the age when you are allowed to appear for driver license"
//   );
// } else if (fav == 23) {
//   console.log("Its time to have some fun!");
// } else {
//   console.log(`you chose ${fav} number`);
// }

// //code for conditional operators

const hasDriverLicense = true;
const hasGoodVision = false;

if (hasDriverLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Sarah can not drive`);
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Sarah wont be able to drive`);
}
