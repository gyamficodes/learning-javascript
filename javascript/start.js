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



//conditions 

// if(hour > 18){
//     console.log("Good evening");
// }else{
//     console.log("Good day");
// }

//nested condionnals

// if(country == "USA"){
//   if(age >= 18){
//     console.log("You are eligible to vote");
//   }
// }

// Nested if statements can make your code more complex.
// A better solution is to use the logical AND operator:

const country = "USA";
if(country == "USA" && age >= 18){
  console.log("You are eligible to vote");
}


//functions 
function  getName(name, age) {
  return `${name} is ${age} years old`;
}

getName("John", 30);


// Examples
// All the examples below, create a JavaScript object with 4 properties.

// Create an Object
const personInfo = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person.eyeColor = "green"; // Change property value

//Accessing JavaScript Properties
//  console.log(person.firstName); // John
// persson.nationality = "English";

console.log(personInfo);
console.log(personInfo.eyeColor);
console.log(Object.keys(personInfo) )

delete personInfo.age; // Delete property


//JavaScript Object Methods
const Workers = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}
console.log(Workers.fullName());


for( [key, value] of Object.entries(Worker)){
  console.log(`${key}: ${value}`);
}



//JavaScript Object Methods
const Children = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  // fullName: function(){
  //   return this.firstName + " " + this.lastName;
  // }
}
// console.log(Children.fullName());


for( [key, value] of Object.entries(Children)){
  console.log(`${key}: ${value}`);
}


// // Dates and Time 
const d = new Date();
console.log(d.toString(), d.getFullYear());


const myBirthDay = new Date()

console.log(myBirthDay.toString());


const dd = new Date();

console.log('ans',dd.toDateString(), dd.toUTCString()); // method converts a date to a more readable format:


//JavaScript Date Formats


const dt =  new Date('2025-11-10')
console.log('h',dt)


let userNames;
document.getElementById('myBt').onclick = function(){
 userNames = document.getElementById('myInput').value;
  console.log(userNames)
}

const myDate = new Date();
const texting = myDate.constructor()
console.log('texting',texting)


// Arrays 
const fruiting = ["Banana", "Orange", "Apple", "Mango"];
const newArray =  new Array("Banana", "Orange", "Apple", "Mango");
console.log(fruiting, newArray);

// conver to string
console.log(fruiting.toString());
document.querySelector('.demo').innerHTML = fruiting.join(" - ");

//Array properties and methods
fruiting.map((e) => {
  console.log(e);
})
console.log(fruiting.sort());
// fruiting.length();
// fruiting.push("Kiwi");
// fruiting.pop();



//looping arrays element 
let text = "<ul>";
for(let i=0; i< fruiting.length; i++){
  text += `<li> ${fruiting[i]} </li>`;
}
document.querySelector('.demo').innerHTML = text + "</ul>";

//for each
fruiting.forEach((items) => {
  console.log('items',items);
})

//nested arrays in object 

const myObj = {
  name: "John",
  age: 30,
  cars: [
     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

// here we use nested for loops to print out the names and models of each car:
for(let i in myObj.cars){
  console.log('cars', myObj.cars[i].name);
  for(let j in myObj.cars[i].models){
    console.log('models', myObj.cars[i].models[j]);
  }
}

console.log(fruiting.at(2)); // returns "Apple", the item at index 2.
console.log(fruiting.join(" , ")); // returns "Banana * Orange * Apple * Mango".
// fruiting.shift();
console.log(fruiting.unshift("Pineapple")); // adds "Pineapple" to the beginning of the array
console.log(fruiting.concat(newArray)); // merges two arrays
fruiting.splice(2, 0, "Lemon", "Kiwi"); // adds two new items at index 2
fruiting.slice(2, 4); // returns a new array with elements from index 2 to 4

//JavaScript Array Search
fruiting.indexOf("Apple"); // returns 2 / method searches an array for an element value and returns its position.
fruiting.lastIndexOf("Apple");  //is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
fruiting.includes("Mango"); // returns true / method returns true if an array contains a specified element.
fruiting.find((item) => item.length > 3); // returns "Mango" / method returns the value of the first element that passes a test.
fruiting.findIndex((item) => item.length > 3); // returns 4 / method returns the index of the first element that passes a test.

//JavaScript Array Sort
