// First Challenge

// let markWeight, markHeight, johnWeight, johnHeight, markHigherBMI;
// markWeight = 78;
// markHeight = 1.69;
// johnWeight = 92;
// johnHeight = 1.95;
// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI);
// console.log(johnBMI);
// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI);
// console.log(johnBMI);
markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// Second Challenge
if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's BMI`);
} else {
  console.log(`John's BMI is higher than Mark's BMI`);
}
