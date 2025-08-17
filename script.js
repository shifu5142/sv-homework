"use strict";
//1
const a = 5;
const b = 5;
const c = 5;
console.log(a * b * c);
//2
let firstName = "tomer";
let lastName = "farag";
let changeName;
changeName = firstName;
firstName = lastName;
lastName = changeName;
console.log(firstName, lastName);
//3
const fullName = "tomer farag";
console.log(fullName.replace(" ", "*"));
//4
const a1 = 5;
const a2 = 2;
console.log(a1 ** a2);
//5
const first = "A";
const longFirst = "SVCOLLEGE";
console.log(
  first +
    longFirst.slice(0, longFirst.length / 2) +
    first +
    longFirst.slice(longFirst.length / 2, longFirst.length) +
    first
);
//6
const num1 = 11;
const num2 = 12;
const num3 = 13;
const num4 = 14;
const num5 = 15;
console.log(
  num1 * num2 * num3 * num4 * num5,
  "The second result is:" +
    (num1 % 10) * (num2 % 10) * (num3 % 10) * (num4 % 10) * (num5 % 10)
);
//7
const name1 = "Tomer";
const name2 = "Roi";
console.log((name1 + " " + name2).length);
//8
const personFullname = "Tomer Farag";
const personSplitname = personFullname.split(" ");
console.log(personSplitname[0].length, personSplitname[1].length);
//9
console.log((num1 * num2 * Math.random()) / 8);
/////////////////////////////////////////
//part2
//////////////////////////////////////////
//1
const calcNum = function (a, b) {
  if (a > b) console.log(b);
  else console.log(a);
};
//2
const calcLength = function (...arg) {
  let i = 0;
  arg.forEach((param) => {
    if (param.length > 3) i++;
  });
  console.log(i);
  return i;
};
calcLength("asdasd", "sd", "asfsdf");
//3
const checkUpperCase = function () {
  // e.preventDefault();
  let num = document.getElementById("input").value;
  if (num.includes("A")) console.log(num.replaceAll("A", "a"));
};
//4
const cheackNum = function (num) {
  if (num >= 0) console.log("המספר חיובי");
  if (num < 0) console.log("המספר שלילי");
  if (num % 2 == 0) console.log("המספר הוא זוגי");
  else console.log(" המספר הוא אי זוגי");
};
cheackNum(8);
//5
const stringCut = function (num) {
  if (num.at(0) !== num.at(-1)) console.log(num);
  else console.log(num.slice(1, num.length - 1));
};
stringCut("ohelooooo");
//6
const checkLetters = function (num) {
  if (num.include("*")) console.log(num.replace("*", ""));
  if (num.include("@")) console.log("*" + num + "*");
  if (num.include("₪")) console.log("new shekel");
};
//7
const transformMoney = function () {
  let moneyType = document.querySelector(".box1").value;
  let moneyAmount = document.querySelector(".box2").value;
  if (moneyType.toLowerCase() === "euro" && moneyAmount !== null) {
    alert(`סכום הכסף שיש לך בשקלים הוא:₪ ${moneyAmount * 4.2}`);
    return;
  }
  if (moneyType.toLowerCase() === "dollar" && moneyAmount !== null) {
    alert(`סכום הכסף שיש לך בשקלים הוא:₪ ${moneyAmount * 3.9}`);
    return;
  }
  if (moneyType.toLowerCase() === "lira sterling" && moneyAmount !== null) {
    alert(`סכום הכסף שיש לך בשקלים הוא:₪ ${moneyAmount * 5}`);
    return;
  } else alert("sonething went wrong please recorrect the inputes");
};
