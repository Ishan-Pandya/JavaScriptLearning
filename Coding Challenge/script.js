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

// markWeight = 95;
// markHeight = 1.88;
// johnWeight = 85;
// johnHeight = 1.76;
// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI);
// console.log(johnBMI);
// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// Second Challenge
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's BMI`);
//   console.log(`Mark's BMI is (${markBMI}) `);
// } else {
//   console.log(`John's BMI is higher than Mark's BMI`);
//   console.log(`John's BMI is (${johnBMI}) `);
// }

// Third Challenge
let Dolphin, Koalas;
Dolphin = (96 + 108 + 89) / 3;
Koalas = (88 + 91 + 110) / 3;
console.log(Dolphin);
console.log(Koalas);

if (Dolphin > Koalas) {
  if (Dolphin >= 100) {
    console.log(`Winner is Dolphin`);
  } else {
    console.log(
      `Dolphin has more average score than Koalas but does not exceed 100 points`
    );
  }
} else if (Koalas > Dolphin) {
  if (Koalas >= 100) {
    console.log(`Winner is Koalas`);
  } else {
    console.log(
      `Koalas has more average score than Dolphin but does not exceed 100 points`
    );
  }
} else if (Koalas == Dolphin) {
  if (Koalas >= 100 && Dolphin >= 100) {
    console.log(`There is a draw between both the team`);
  } else {
    console.log(`Teams does not have more than 100 points`);
  }
} else {
  console.log(`No One wins the game`);
}
