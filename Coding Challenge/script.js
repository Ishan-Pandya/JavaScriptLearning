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

// // Third Challenge
// let Dolphin, Koalas;
// Dolphin = (96 + 108 + 89) / 3;
// Koalas = (88 + 91 + 110) / 3;
// console.log(Dolphin);
// console.log(Koalas);

// if (Dolphin > Koalas) {
//   if (Dolphin >= 100) {
//     console.log(`Winner is Dolphin`);
//   } else {
//     console.log(
//       `Dolphin has more average score than Koalas but does not exceed 100 points`
//     );
//   }
// } else if (Koalas > Dolphin) {
//   if (Koalas >= 100) {
//     console.log(`Winner is Koalas`);
//   } else {
//     console.log(
//       `Koalas has more average score than Dolphin but does not exceed 100 points`
//     );
//   }
// } else if (Koalas == Dolphin) {
//   if (Koalas >= 100 && Dolphin >= 100) {
//     console.log(`There is a draw between both the team`);
//   } else {
//     console.log(`Teams does not have more than 100 points`);
//   }
// } else {
//   console.log(`No One wins the game`);
// }

// // Fourth Challenge
// let bill, tip;
// bill = 275;
// tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// // // ********** Challenge part two ********** // // //
// // First Challenge
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas > 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No one wins the trophy.`;
//   }
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

// // Second Challenge
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// console.log(calcTip(100));

// // const calcTip = (bill) =>
// //   bill <= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// // Third Challenge
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// mark.calcBMI();

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// john.calcBMI();

// console.log(mark.BMI, john.BMI);

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${(mark.firstName)} BMI (${mark.BMI}) is higher than ${john.firstName} (${
//       john.BMI
//     })`
//   );
// }
// else (john.BMI > mark.BMI){
//   console.log(`${john.firstName} BMI (${john.BMI}) is higher than ${mark.firstName} (${mark.BMI})`)
// }

// // Fourth Challenge
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(
//     bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2
//   );
//   totals.push(tips[i] + bills[i]);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log(calcAverage(bills));

// // // in class challenge
// function receive an array of temp and find amplitude by ignoring the errors.
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};
const amplitude = calcTempAmp(temperatures);
console.log(amplitude);

// function will receive two arrays

const calcTempAmpNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};
const amplitudeNew = calcTempAmpNew([3, 5, 1], [(9, 0, 5)]);
console.log(amplitudeNew);
