//1
const dayjs = require("dayjs");
const DayParse = function (date) {
  let dar = dayjs(date);
  let formatted = dar.format("DD/MM/YYYY");
  console.log(formatted);
  console.log(dar.add(30, "day").format("DD/MM/YYYY"));
  const nowDate = dayjs().format("DD/MM/YYYY");
  console.log(nowDate);
  dar.month() === dar.add(30, "day").month()
    ? console.log("the update date on the same month")
    : console.log("the update date are not on the same month");
};
DayParse("2000-03-13");
//2
const lodashEs = require("lodash-es");
const grades = [92, 81, 100, 74, 88, 95];
console.log(lodashEs.max(grades));
console.log(lodashEs.min(grades));
console.log(
  grades.map((value) => {
    let string = value.toString();
    string = string[0] + "0";
    return Number(string);
  })
);
//3
const zod = require("zod");
const stringSchema = zod.string();
const arr = [
  { fullName: "Dana Levi", grade: 92 },
  { fullName: "It", grade: 120 }, // לא תקין
];
arr.forEach((value, i) => {
  if (
    stringSchema.parse(value.fullName) &&
    value.fullName.length > 3 &&
    value.fullName.length <= 25
  )
    true;
  else {
    return console.log(`The name of the student: ${i + 1} is not valid`);
  }
  if (!isNaN(value.grade) && value.grade >= 0 && value.grade <= 100) true;
  else {
    return console.log(
      `The grade of the student: ${value.fullName} is not valid`
    );
  }
});
//4
const validator = require("validator");
const checkValid = function (eArr,uArr) {
  eArr.forEach((value,i) => {
   console.log(`The ${i+1} email is: ${validator.isEmail(value)}`); 
  });
  uArr.forEach((value,i)=>{
    console.log(`The ${i+1} url is: ${validator.isURL(value)}` );
  })
};

checkValid(["a@b.com", "bad@", "user.name@gmail.com"],["https://example.com", "htp:/nope"]);
//part 2
const uuid=require('uuid')
const addId=function(arr){
  const usersWithId = arr.map(user => ({
  ...user,
  id: uuid.v4(),
}));
console.log(usersWithId);
}
addId([
  { fullName: "Dana Levi", grade: 92 },
  { fullName: "Itay Cohen", grade: 81 },
])

