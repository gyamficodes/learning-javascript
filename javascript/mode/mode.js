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