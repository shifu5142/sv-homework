"use strict";
//1
const checkId = function () {
  let idInput = document.getElementById("centered").value;
  if (idInput.length !== 9) {
    console.log(false);
    return;
  }
  for (let i = 0; i < idInput.length; i++) {
    if (idInput.charAt(i) >= "0" && idInput.charAt(i) <= "9") {
    } else {
      console.log(false);
      break;
    }
  }
};
//2
const checjNum = function (num) {
  if (num % 1 == 0 && num % num == 0) {
    console.log(`המספר ${num} הוא ראשוני`);
  }
};
checjNum(5);
//3
const checStr = function (str) {
  let b = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      b += " " + char;
    } else {
      b += char;
    }
  }
  return console.log(b);
};
checStr("helLLLLLLLo");

//4
function insideStr(subStr, mainStr) {
  let count = 0;
  let position = 0;

  while (position < mainStr.length) {
    if (mainStr.includes(subStr, position)) {
      count++;
      position = mainStr.indexOf(subStr, position) + subStr.length;
    } else {
      break;
    }
  }

  return console.log(count);
}

insideStr("h", "hellohhhhhhhhhhhh");
//6
const displayInput = document.querySelector(".display");
const buttonAll = document.querySelectorAll("button");
const calcBut = function () {
  buttonAll.forEach((element) => {
    element.target.addEventListener("click", function () {});
  });
};
