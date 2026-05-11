import { addDataPrices, name, age } from "./new.js";
import message from "./new.js";
import { data, num, page } from "./new.js";
import * as all from "./all_module.js";

let result = addDataPrices(10, 20);

document.querySelector(".demo").innerHTML =
  `The result of adding 10 and 20 is: ${result}`;
console.log(result);

console.log("Hello World!");
console.log(`Name: ${name}, Age: ${age}`);
console.log(message());
console.log(`Data: ${data}, Number: ${num}, Page: ${page}`);



// // Tree-Shaking
// Default is Flexible
// Default exports let you import using any name:
// When to Use Default Export?
// When	Why
// One main purpose	Good for modules with a primary function
// Flexible naming	Importers can choose any name
// Cleaner imports	Shorter and simpler import syntax
// Common pattern	Frameworks use it for the main API

// ========== Other Code ===========
// You can import modules in two ways, based on if they are named exports or default exports.


// The Module Namespace Object
// When you use the syntax: 

let  PI = all.PI;
let sum = all.add(5, 10);
let product = all.multiply(5, 10);

console.log(`PI: ${PI}, Sum: ${sum}, Product: ${product}`);


// How Dynamic Import Works
async function runAddData() {
   const module = await import("./dynamic.js");
   let result = module.addData(50, 10);
   console.log(result);
}

runAddData();

// temperatures.js

async function  tempDataC(x) {
    const celcuis = await import("./dynamic.js");
    let result = celcuis.convertCelcius(x)
    console.log('Celcuis', result);
}

tempDataC(50);

async function  tempDataF(x) {
    const celcuis = await import("./dynamic.js");
    let result = celcuis.toFahrenheit(x)
    console.log('Fahrenheit', result);
}

tempDataF(50);



// Metaprogramming
// Metaprogramming refers to a number of ways a program can manipulate itself:
// The Easy Explanation
// Normally, code handles data.
// With metaprogramming, code handles code.

const obj = {
  name: "Alice",
}

let mrArr = Object.keys(obj);
console.log(mrArr); // Output: ["name"]


// The Reflect Object
// Reflect is a object with methods for low-level operations on JavaScript objects.
// With the Reflect object you can get, set, delete, and check object properties in a consistent way.
// Reflect was added to JavaScript in ES6 (2015).

// Reflect.has()
// The Reflect.has() method checks if an object has a specific property.
const myPerson = {
  name: "Baeb",
  age: 30
}

const anwer = Reflect.has(myPerson, "name");
console.log(anwer); // Output: true

// to deleete property 
const deleteResult = Reflect.deleteProperty(myPerson, "age");
console.log(deleteResult); // Output: true

// to get property value
const nameValue = Reflect.get(myPerson, "name");
console.log(nameValue); // Output: "Baeb"


// JavaScript Typed Arrays
// JavaScript Typed Arrays are a set of array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. They were introduced in ECMAScript 2015 (ES6) to allow developers to work with binary data more efficiently, especially when dealing with large datasets or performing operations that require high performance, such as graphics processing or audio manipulation.
// Typed arrays was designed for handling Binary Data.

const myArrs =  new Uint8Array(8);
console.log(myArrs); // Output: Uint8Array(4) [0, 0, 0, 0]

const myBuf = new ArrayBuffer(16);
console.log(myBuf); // Output: ArrayBuffer { byteLength: 16 }


// JavaScript HTML DOM Navigation
let myTitle = document.getElementById("dd").firstChild.nodeValue;
console.log(myTitle);

// Removing a Child Node
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
 
//JavaScript HTML DOM Collections
// The getElementsByTagName() method returns an HTMLCollection object.
// An HTMLCollection object is an array-like list (collection) of HTML elements.
// The following codeselects all <p> elements in a document:

const myCollection = document.getElementsByTagName("p");
console.log(myCollection); // Output: HTMLCollection(3) [p#p1, p#p2, p#p3]

for(let i = 0; i < myCollection.length; i++) {
  console.log(myCollection[i].textContent);
  myCollection[i].style.color = "blue";
}


// JavaScript HTML DOM Node Lists
// The querySelectorAll() method returns a NodeList object.

const myNodeList = document.querySelectorAll("p");
console.log(myNodeList); // Output: NodeList(3) [p#p1, p#p2, p#p3]

myNodeList.forEach(node => {
  console.log(node.textContent);
  node.style.color = "red";
});