"use strict";
// creating a set
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);

console.log(new Set("Jonas"));
// To know the size
console.log(orderSet.size);
// to check if it contains or not
console.log(orderSet.has("Bread"));
// add an element
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
// remove an element
orderSet.delete("Risotto");
console.log(orderSet);
// Looping
for (const order of orderSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// it will show only 8 as it only take unique letters
console.log(new Set("IshanPandya").size);

//creat a map
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are close");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//If map contains the key
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
//how to use array as key

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

// convert object to map
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

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key == "number") console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt("Your Answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

//convert map to array
console.log([...question]);
