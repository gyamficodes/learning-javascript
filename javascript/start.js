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

fruiting.sort(); // sorts the array alphabetically
fruiting.reverse(); // reverses the order of the array elements
fruiting.toSorted();
fruiting.toReversed();

//JavaScript Array forEach()
const phones = ["iPhone", "Samsung", "Motorola", "Nokia", "Sony", "HTC"];

phones.forEach((itme) => {
  console.log(itme.toUpperCase());
})

const mapNumbers =  [2,4,6,8];
const newNum = mapNumbers.map((num) => num * 2);
console.log('newNum',newNum);


//JavaScript Array filter()
const filterNum =  [12,5,8,130,44];
const newFilter = filterNum.filter((e) => e  >  10 );
console.log('newFilter',newFilter);


//JavaScript Array reduce()
const reduceNum =  [1,2,3,4];

const addDatas = reduceNum.reduce((accumulatar , num) => accumulatar + num, 0);
console.log('addDatas',addDatas);

// JavaScript Array every()
const everyNum =  [12,54,18,130,44];
const allOver10 = everyNum.every((e) => e  >  10 );
console.log('allOver10',allOver10);

//JavaScript Array some()
const someNum =  [2,5,8,1,4];
const someOver10 = someNum.some((e) => e  >  10 );
console.log('someOver10',someOver10);

//JavaScript Array flat()
const flatNum =  [1,2,[3,4],[5,6]];
const newFlat = flatNum.flat();
console.log('newFlat',newFlat);

//JavaScript Array flatMap()
const flatMapNum =  [1,2,3,4];
const newFlatMap = flatMapNum.flatMap((e) => [e * 2]);
console.log('newFlatMap',newFlatMap);

//JavaScript Array keys()
const keysNum =  [10,20,30];
const keys = keysNum.keys();

//JavaScript Array entries()
const entriesNum =  [10,20,30];
const entries = entriesNum.entries();

// Experience the Best in Hospitality




for(let i = 0; i < 10; i++){
  console.log('looping', i);

}


//JavaScript Sets
const letters = new Set(['a', 'b', 'c']);

//methods
// letters.add("d");  //add new values 
// letters.size();  //size of the set
// letters.has("a"); // returns true
// letters.delete('b');
// // letters.clear(); // removes all elements
// letters.values(); // returns an iterator with all the values in the set
// letters.entries(); // returns an iterator with [value, value] pairs

for(let Letters of letters){
  console.log('set letters', Letters);
}

const eachData = letters.forEach((e) =>  {
  console.log('for each set', e);
});


//JavaScript Set Logic
const setA = new Set(['a','b','c','e']);
const setB = new Set(['b','c','d','e']);

//union
const setC = new Set([...setA, ...setB]);
console.log('union',setC);

//intersection
const setD = new Set([...setA].filter(x => setB.has(x)));
console.log('intersection',setD);

//difference 
const setE = new Set([...setA].filter(e => !setB.has(e)));
console.log('difference',setE);

//The symmetricDifference() Method  method returns a new set containing elements which are in this set or in the argument set, but not in both
const symmetricDifference = (set1, set2) => {
  const difference1 = new Set([...set1].filter(x => !set2.has(x)));
  const difference2 = new Set([...set2].filter(x => !set1.has(x)));
  return new Set([...difference1, ...difference2]);
}
 
const setF = symmetricDifference(setA, setB);
console.log('symmetricDifference',setF);


/// The isSubsetOf() Method method returns true if this set is a subset of the argument set.

// let isSubset = new Set([setA].every(v => setB.has((v))))
// console.log('isSubset',isSubset);

// The WeakSet Object
// A JavaScript WeakSet is a collection of values where the values must be objects.
// A WeakSet holds weak references to its values.

let ws1 = new WeakSet();

let obj1 = {fname:"John", lname:"Doe"};

ws1.add(obj1);

console.log('weakset',ws1.has(obj1)); // true

//The Map Object

const fruits = new Map(
[["apples", 500], ["bananas", 300], ["oranges", 200]]
);

// Map methods
// fruits.set("grapes", 400); // add new item
// fruits.delete("bananas"); // remove item
// fruits.get("apples"); // get item value
// fruits.size; // size of the map
// fruits.has("oranges"); // returns true
// fruits.clear(); // removes all items

fruits.forEach((value, key) => {
  console.log(`${key}: ${value}`);
} )


for( let [key, value] of fruits.entries()){
  console.log(`${key} = ${value}`);
}

fruits.keys();


//JavaScript Loops

// The for loop is used when the number of iterations is known.
// It consists of an initialization (exp1), a condition (exp2), and an increment expression (exp3).

// The for loop is used when the number of iterations is known.

for( let i = 0 ; i < 5; i++ ){
  console.log('for loop', i);
}

// The while Loop
// The while loop executes a block of code as long as a specified condition evaluates to true.



let j = 0;
while( j < 5 ){
  console.log('while loop', j);
  j++
}


// The do...while Loop
// The do...while loop is a variant of the while loop.
// This loop will execute the code block once, before checking if the condition is true,
// then it will repeat the loop as long as the condition is true.


let k = 0;
do{
  console.log('do while loop', k);
  k++;
}while( k < 5 );

// The for...in Loop
// The for...in loop is used to iterate over the properties of an object.

const personA = {fname:"John", lname:"Doe", age:25};

for(e in personA){
  console.log(`${e}: ${personA.fname}`);
}


// The for...of Loop
// The for...of Loop
// The for...of loop iterates over the values of iterable objects such as arrays, strings, Maps, Sets, and NodeLists.

let lp = [{Name: " Gyamfi John"}]

for(e of lp ){
 console.log('for of loop', lp)
}


//JavaScript Generators
// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }


//JavaScript Math Object
//The JavaScript Math object allows you to perform mathematical tasks.


// JavaScript provides 8 mathematical constants that can be accessed as Math properties:

// Example
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// Math.round(5.7);    // returns 5
// Math.ceil(5.2);     // returns 6
// Math.floor(5.7);    // returns 5
// Math.pow(4, 2);    // returns 16
// Math.sqrt(64);     // returns 8
// Math.random()



const handdleGetRandomNumber = document.querySelector('.RandomBTN');


function getRandomInt() {
console.log(Math.floor(Math.random() * 100 + 1))
}
 
// function getRandomInt(min , max) {
//  console.log(Math.floor(Math.random() * ( max - min) ) + min)
// }

handdleGetRandomNumber.addEventListener('click',getRandomInt);

// A Regular Expression is a sequence of characters that forms a search pattern.

// Regex is a common shorthand for a regular expression.

// JavaScript RegExp is an Object for handling Regular Expressions.

// RegExp are be used for:

//     Text searching
//     Text replacing
//     Text validation


// w3schools  is a pattern (to be used in a search).
// i  is a modifier (modifies the search to be case-insensitive).
let myText = "visit W3schools"
let n = myText.search(/w3schools/i) // this the  regular expression.
console.log(n)



// Using String Methods

// Regular expressions are often used with the string methods:
// Method	Description
// match(regex) 	Returns an Array of results
// replace(regex) 	Returns a new String
// search(regex) 	Returns the index of the first match

//using match
let m = myText.match(/w3schools/i)
console.log('match returns an array',m);

//using replace 
let r = myText.replace(/Microsoft/i, "W3Schools")
console.log('replace returns strings',r);

//using search
let s = myText.search(/W3Schools/);
console.log('search returns index of the first match ', s)


// RexExp Alternation (OR)
// In a regular expression an alternation is denoted with a vertical line character |.
// An alternation matches any of the alternatives separated with |.

let myColors = "Black, white, red, green, blue, yellow.";
let colorResult = text.match(/red|green|blue/g);


// RegExp \d (digits) Metacharacter
// The \d metacharacter matches digits.

// Example
// A global search for digits in a string:

let texting1 = "Give 100%!";
const patterning = /\d/g;

let output = texting1.match(patterning);
console.log('output',output);

// RegExp \w (word) Metacharacter
// The \w metacharacter matches word characters.

// A word character is a character a-z, A-Z, 0-9, including _ (underscore).

// Example
// A global search for word characters:

let textInput = "Give 100%!";
const pattern = /\w/g;

let result = textInput.match(pattern);
console.log('result',result);


//Data Types in JavaScript
// JavaScript has 7 data types that can be divided into 2 categories:
// 1. Primitive data types Numeric And Non-Numeric
// : string, number, boolean, null, undefined, symbol
// 2. Non-primitive data type: object = arrays, functions, dates, RegExp, set, Map etc.


// // Number
// let length = 16;
// let weight = 7.5;

// // BigInt
// let x = 1234567890123456789012345n;
// let y = BigInt(1234567890123456789012345)
// // Strings
// let color = "Yellow";
// let lastName = "Johnson";

// // Boolean
// let x = true;
// let y = false;

// // Undefined
// let x;
// let y;

// // Null
// let x = null;
// let y = null;

// // Symbol
// const x = Symbol();
// const y = Symbol();

// // Object
// const person = {firstName:"John", lastName:"Doe"};

// // Array Object
// const cars = ["Saab", "Volvo", "BMW"];

// // Date Object
// const date = new Date("2022-03-25");


//toString 

const fruitsSting = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruitsSting.toString()
console.log('myList',myList)

const todayDate = new Date();
let textDate = todayDate.toString();
console.log('textDate',textDate)

//objext to string
let person = {
  firstname: "John",
  lastname: "Doe",
}
console.log('person',person.toString())



//JavaScript Type Conversion 
// Converting Strings to Numbers
let str = "123";
let num = Number(str);
console.log('num',num);

let routine = 'Learning JavaScript';

let Myday = routine === 'Learning JavaScript' ? 'Great day!' : 'Keep learning!';
console.log('Myday',Myday);
console.log('typeof Myday', typeof Myday); // returns "string"


//JavaScript Errors


try {
  1 + v
}catch(err){
  console.log('Error caught:', err.message);
}



// Reference Errors  A ReferenceError occurs if you use (reference) a variable that does not exist.
let x = 5;

try {
  x = y + 1;
} catch(err) {
  let text = err.name;
}


// JavaScript Type Errors
// A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.

 
let ttNum = 5;
// ttNum.toUpperCase(); // This will cause a TypeError because toUpperCase() is not a function for numbers.
// try {
//   Anna(5);
// } catch(err) {
//   let text = err.name;
// } 


//JavaScript Syntax Errors
// JavaScript Syntax Errors
// A Syntax Error occurs when the code violates JavaScript's grammar rules.
// // This line cannot be parsed by JavaScript
// let fName = "John); 



//JavaScript Silent Errors
//JavaScript Silent Errors

// let result = "Not Active.";
// let isActive = false;

// // ❌ Assignment, not comparison
// if (isActive = true) {
//   let result = "Active!";
// }



let isActive = false;

if (isActive) {
  console.log("The user is active.");
} else {
  console.log("The user is not active.");
}

let myR = isActive ? "Active!" : "Not Active.";
console.log('myR',myR);

//JavaScript Debugging
//Debugging means finding and fixing mistakes (bugs) in your code.
// When code fails, beginners often guess what is wrong.

// Debugging is the opposite: you check facts.

// A good debugging habit is: Read → Reproduce → Reduce → Fix

//     Read the error
//     Reproduce the problem
//     Reduce to a small example
//     Then fix it. 

console.warn("Hello world")

let users = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];


console.table(users);



// JavaScript Debugging Breakpoints