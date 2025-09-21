"use strict";
//1
const showFamily = function (firstName, lastName) {
  let firstP = document.createElement("p");
  firstP.textContent = firstName;
  firstP.style.color = "red";
  firstP.style.textDecoration = "underline";
  firstP.style.textAlign = "center";
  let secondP = document.createElement("p");
  secondP.textContent = lastName;
  secondP.style.fontSize = "50px";
  secondP.style.border = "solid 1px black";
  secondP.style.borderRadius = "10px";
  secondP.style.padding = "10px";
  let formName = document.createElement("div");
  formName.style.background = "#fff";
  formName.style.padding = "32px 100px";
  formName.style.borderRadius = "50px";
  formName.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
  formName.style.width = "100";
  formName.className = "formName";
  formName.appendChild(firstP);
  formName.appendChild(secondP);
  document.body.appendChild(formName);
};
showFamily("tomer", "farag");
//2
const products = [
  { name: "Apple", description: "Fresh and tasty", price: 12.34 },
  { name: "Banana", description: "Organic product", price: 8.99 },
  { name: "Carrot", description: "Best quality", price: 5.5 },
  { name: "Doughnut", description: "Limited edition", price: 15.2 },
  { name: "Egg", description: "Special offer", price: 3.75 },
];
let amount = document.querySelector(".amount");
const section2 = document.querySelector(".part2");
let firstP = document.createElement("div");
const filtrerProd = function (e) {
  e.preventDefault();
  firstP.innerHTML = "";
  let inputAmount = document.querySelector(".amount").value;
  if (isNaN(inputAmount)) {
    alert("Please enter a valid number");
    amount.value = "";
    return;
  }
  const num = Number(inputAmount);
  let newArr = products.filter(
    (value) => value.price === num || value.price < num
  );
  amount.value = "";

  console.log(newArr);

  firstP.innerHTML = newArr
    .map(
      (product) =>
        `<p><strong>${product.name}</strong>: ${product.description} - $${product.price}</p>`
    )
    .join("");
  section2.appendChild(firstP);
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
//1
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
];
const section3 = document.querySelector(".part3");
let bookWindow = document.createElement("div");
const checjBook = function (authorName) {
  authorName.preventDefault();
  bookWindow.innerHTML = "";
  section3.appendChild(bookWindow);
  let getAuthor = document.querySelector(".author-name");
  let newBooks = books.filter((authorN) => authorN.author == getAuthor.value);

  if (newBooks.length === 0) {
    alert("The book author doesn't exist");
    getAuthor.value = "";
  }

  bookWindow.innerHTML = newBooks
    .map(
      (value) =>
        `<p><strong>${value.title}</strong></p> <p>${value.author}</p>  <p>${value.year}</p>`
    )
    .join("");
  let secondp = bookWindow.querySelector(":nth-child(2)");
  bookWindow.style.display = "flex";
  bookWindow.style.flexDirection = "column";
  bookWindow.style.backgroundColor = "#f0f0f0";
  bookWindow.style.borderRadius = "10px";
  bookWindow.style.flexWrap = "wrap";
  secondp.style.color = "blue";
  bookWindow.lastElementChild.style.textDecoration = "underline ";
  bookWindow.lastElementChild.style.textDecorationColor = "#7a7878ff";
  section3.appendChild(bookWindow);
};
//2
const tests = [
  ["Test 1", [85, 72, 90, 88, 95]],
  ["Test 2", [60, 100, 78, 82, 91]],
  ["Test 3", [88, 95, 70, 65, 80]],
  ["Test 4", [55, 65, 75, 85, 92]],
  ["Test 5", [99, 98, 97, 95, 94]],
  ["Test 6", [40, 50, 60, 70, 80]],
  ["Test 7", [73, 76, 79, 82, 85]],
  ["Test 8", [20, 35, 45, 55, 65]],
];
const gradesAve = document.createElement("div");
gradesAve.className = "average-row";
const mathAverage = function (arr = tests) {
  const arrAverage = arr.map(
    (value) => value[1].reduce((acc, cur) => (acc += cur)) / value[1].length
  );
  console.log(arrAverage);
  gradesAve.innerHTML = `<div>Grades Average</div>`;
  arrAverage.forEach(
    (element) => (gradesAve.innerHTML += `<div>${element}</div>`)
  );
  document.querySelector(".table-container").appendChild(gradesAve);
};
//3
const missions = [
  { id: 1, text: "Collect 10 coins" },
  { id: 2, text: "Defeat the dragon" },
  { id: 3, text: "Rescue the villager" },
  { id: 4, text: "Find the hidden treasure" },
  { id: 5, text: "Complete the puzzle" },
  { id: 6, text: "Explore the secret cave" },
  { id: 7, text: "Gather 5 herbs" },
  { id: 8, text: "Deliver the message" },
  { id: 9, text: "Build a shelter" },
  { id: 10, text: "Win the race" },
];
const deleteLink = document.querySelectorAll(".delete-link");
deleteLink.forEach((button) =>
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const deleteClick = e.target;
    const deletePar = deleteClick.parentElement;
    missions.splice(deletePar.id - 1, 1);
    deletePar.remove();
    if (missions.length == 0) alert("All missions have complete");
  })
);
//4
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parseNum = document.querySelector(".arr-Button");
const numbersDiv = document.querySelector(".numbers");
const allNumbers = numbersDiv.querySelectorAll("span");
const replaceText = function () {
  let i = 0;
  allNumbers.forEach((value) => {
    value.innerHTML = numbers[i];
    i++;
  });
};
const firstFunction = function (arr = numbers) {
  numbers.sort((a, b) => a - b);
};
const secondFunction = function (arr = numbers) {
  numbers.sort((a, b) => b - a);
};
let toggle = true;
parseNum.addEventListener("click", (e) => {
  e.preventDefault();
  if (toggle) {
    firstFunction();
    replaceText();
  } else {
    secondFunction();
    replaceText();
  }
  toggle = !toggle;
});
//5
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
];
const section7 = document.querySelector(".colors-container");
const allColors = section7.querySelectorAll("div");
const creatCol = function (e) {
  e.preventDefault();
  colors.forEach((value) => {
    let colorEl = document.createElement("div");
    colorEl.style.padding = "20px";
    colorEl.style.borderRadius = "10px";
    colorEl.style.backgroundColor = value;
    section7.style.marginTop = "20px";
    section7.style.display = "flex";
    section7.appendChild(colorEl);
  });
};
allColors.forEach((value) => {
  value.addEventListener("click", (e) => {
    e.preventDefault();
    const clickDiv = e.target;
    const allColorsPar = clickDiv.parentElement;
    allColorsPar.innerHTML += `<p>$</p>`;
  });
});
const colorsDiv = document.querySelector();
