"use strict";
//class part
class Drive {
  constructor(renterName, date, rentKm) {
    this.renterName = renterName;
    this.date = date;
    this.rentKm = rentKm;
  }
}

class Car {
  constructor(compName, modelName, carMil) {
    this.compName = compName;
    this.modelName = modelName;
    this.availableCar = true;
    this.carMil = carMil;
  }
  static drives = [
    new Drive("Alice", "2025-09-30", 120),
    new Drive("Bob", "2025-09-25", 300),
    new Drive("Charlie", "2025-09-20", 180),
  ];

  kilNum = "";
  calcKm() {
    return (this.rentKm = Car.drives.reduce((cur, acc) => (acc += cur)));
  }
  updateKm(travel) {
    Car.drives.push(travel);
    this.calcKm();
  }
}
class CompanyCars {
  constructor(compName) {
    this.compName = compName;
  }
  static companyCarArr = [
    new Car("Toyota", "Corolla", 120000),
    new Car("Honda", "Civic", 80000),
    new Car("Ford", "Focus", 60000),
  ];
  addCar(car) {
    CompanyCars.companyCarArr.push(car);
  }
  highestKil() {
    let bigestNum;
    CompanyCars.companyCarArr.forEach((acc) => {
      if (bigestNum.kilNum <= acc.kilNum) bigestNum = acc;
    });
    console.log(
      `The car with the highest kilometer is ${bigestNum} and the kilometer is ${bigestNum.kilNum} `
    );
  }
  availableCar() {
    const availableCarArr = CompanyCars.companyCarArr.map(
      (value) => value.availableCar
    );
    console.log(`All the available cars are ${availableCarArr.join(", ")}`);
  }
  addDrive(compName, driveObj) {}
}

//part 2
//1
let missionImp = document.querySelector(".text-input");
const missionLis = document.querySelector(".mission-list");
let missionArr = [];
let i = 1;
const addMission = function () {
  if (!missionImp.value) alert("the input is empty");
  missionLis.innerHTML += `<li>Mission ${i}: ${missionImp.value}</li>`;
  i++;
  missionArr.push(missionImp.value);
  localStorage.setItem("todos", missionArr);
  missionImp.value = "";
};
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("todos")) {
    const todos = localStorage.getItem("todos").split(",");
    console.log(todos);
    missionLis.innerHTML += `the previos mission left:`;
    todos.forEach(
      (value, i) =>
        (missionLis.innerHTML += `<li>Missions number:${i + 1} ${value}</li>`)
    );
  }
});
const deleteMem = function () {
  localStorage.removeItem("todos");
  missionLis.innerHTML = "";
};
//2
let inputName = document.querySelector(".inputs-wrapper").children[1];
let inputEmail = document.querySelector(".inputs-wrapper").children[2];
const infSave = function (e) {
  e.preventDefault();
  if (!inputName.value || !inputEmail.value)
    alert("The inputes or on of them are empty");
  let formDraft = {
    name: inputName.value,
    email: inputEmail.value,
  };
  sessionStorage.setItem("formDraft", JSON.stringify(formDraft));
};
document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("formDraft")) {
    inputName.value = JSON.parse(sessionStorage.getItem("formDraft")).name;
    inputEmail.value = JSON.parse(sessionStorage.getItem("formDraft")).email;
  }
});

const deleteInp = function (e) {
  e.preventDefault();
  inputName.value = "";
  inputEmail.value = "";
  sessionStorage.removeItem("formDraft");
};
//3
let inputUs = document.querySelector(".second-wrap").children[1];
let inputPass = document.querySelector(".second-wrap").children[2];
const deletBtn = document.querySelector(".second-btn");
const divAdd = document.querySelector(".user-inf");
document.querySelector(".second-log").addEventListener("click", (e) => {
  e.preventDefault();

  if (!inputUs.value || !inputPass.value)
    alert("The inputes or on of them are empty");
  else {
    let userData = {
      username: inputUs.value,
      password: inputPass.value,
    };
    localStorage.setItem("loggedUser", JSON.stringify(userData));

    inputUs.value = "";
    inputPass.value = "";
    divAdd.style.opacity = "1";
    divAdd.innerHTML = `<p>  Hello ${
      JSON.parse(localStorage.getItem("loggedUser")).username
    }  you'r connected</p>`;
    deletBtn.style.display = "block";
  }
});
deletBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputUs.value = "";
  inputPass.value = "";
  localStorage.removeItem("loggedUser");
  deletBtn.style.display = "none";
  divAdd.style.opacity = "0";
  divAdd.innerHTML = "";
});
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedUser")) {
    divAdd.style.opacity = "1";
    divAdd.innerHTML = `<p>  Hello ${
      JSON.parse(localStorage.getItem("loggedUser")).username
    }  you'r connected</p>`;
    deletBtn.style.display = "block";
  }
});
