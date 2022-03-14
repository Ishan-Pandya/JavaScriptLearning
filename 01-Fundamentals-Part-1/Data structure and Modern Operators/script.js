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
