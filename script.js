"use strict";
//1
const arrayLength = (arr) => {
  if (arr.length >= 5) return true;
  return false;
};
console.log(arrayLength([3, 5, 3, 2, 5, 3]));
//2
const checkFirstLastChar = (num) => {
  if (num.charAt(0) === num.charAt(num.length - 1))
    return "the first letter and the last are the same";
  return "the first letter and the last are not the same";
};
console.log(checkFirstLastChar("Hello"));
//3
const lastIsUpperCase = (str) => {
  if (str.charAt(str.length - 1) === str.charAt(str.length - 1).toUpperCase())
    return true;
  return false;
};
console.log(lastIsUpperCase("HELLo"));
/////////////////////////////////////////////////////////////////////////////////
//part 2
//////////////////////////////////////////////////////////////////////////////
//1
const calcDevide = function (arr) {
  let ifTrue = false;
  arr.forEach((element, i) => {
    if (element % 3 === 0) {
      console.log(`the element at postion${i} is devide at 3`);
      ifTrue = true;
    } else {
      console.log(`the element at postion${i} isn't devide at 3`);
    }
  });
  if (ifTrue) return;
  return "The array is not divisible by 3";
};
console.log(calcDevide([3, 4, 4, 4, 3, 2, 4, 5]));
//2
let letArr = ["A", "B", "c", "d", "E"];
const newArr = letArr.map((value) => {
  if (value === value.toUpperCase()) return "U";
  else {
    return "L";
  }
});
console.log(newArr);
//3
const replacePosition = function (arr) {
  let arrFix = arr.map((value, i) => {
    if (i % 2 === 0) return (value = i);
    else {
      return value;
    }
  });
  return arrFix;
};
console.log(replacePosition(["a", "b", "c", "d", "e", "f"]));
//4
const calcAge = function (arr) {
  let arrFix = arr.filter((num) => num > 18);
  return arrFix;
};

console.log(calcAge([43, 23, 12, 124, 23, 4, 3, 6]));
//5
const filterPos = function (arr) {
  let arrFix = arr.filter((num, i) => i !== 3);
  return arrFix;
};

console.log(filterPos([2, 4, 1, 2, 7, 2, 8]));
//6
let arr = ["hello", "arr", "bor", "bon"];
const addStr = function (str) {
  arr = [...arr, str];
  return arr;
};
console.log(addStr("hello"));
//7
const spreadArr = function (arr1, arr2) {
  return (arr1 = [...arr1, ...arr2]);
};
console.log(spreadArr(["hello", "you"], ["are", "my", "friend"]));
