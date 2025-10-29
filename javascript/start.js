// Varaibles and Data types

const name = "John";
const age = 80;
const Price = 10.1;
const isLogIn = false;
var Task = null;
let usderName;
let Person = {
  name: "John",
  age: `${age}`,
  info: "Ssyudent",
};
let Items = [1, 2, 3, 4, 5];

console.log(Items);

// Aritmatic operation
//*,+,/,=,<, >, ==,  ,-

const CostPrice = 40 - 20;
console.log(CostPrice);
let divideItwm = CostPrice / 2;
console.log(divideItwm);

//logical operators
// ==, === , !==, >=, <=,&&

const checks = 10 == "10";
let numChecks = 10 === "10";
console.log("checks:", checks, "numChecks:", numChecks);

var data = 10 !== "a";
console.log(data);

//conditional operators
const Grade = "";

if (Grade) {
  console.log("exellent");
} else if (Grade == "B") {
  console.log("Very Good");
} else if (Grade == "c") {
  console.log("Good");
} else {
  console.log("Fail / He/She did not take part in the exam");
}

//switch
const behaviour = "Good";

switch (behaviour) {
  case behaviour == "Good":
    console.log("Great");
    break;
  case behaviour == "Bad":
    console.log("Very bad");
    break;
  case behaviour == "devient":
    console.log("Very Bad");
    break;
  default:
    console.log("the kid dosent exeit");
}

// funtions

const btn = document.querySelector(".btn");

function changeText() {
  const demo = document.getElementById("demo");
  let print = "";
  print += `<h1>${name}</h1>`;
  demo.innerHTML = print;
}

// btn.addEventListener("click", changeText);


let bulb = document.querySelector(".box");

const cangeBoxColor = () => {

    bulb.style.backgroundColor =  bulb.style.backgroundColor === "yellow" ? "gray" : "yellow";

}


btn.addEventListener("click", cangeBoxColor);

const frined = ["john", "doe", "smith"];
console.log(typeof frined);
