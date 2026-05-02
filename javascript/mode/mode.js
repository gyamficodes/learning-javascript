import { addDataPrices, name, age } from "./new.js";
import message from "./new.js";

let result = addDataPrices(10, 20);

document.querySelector(".demo").innerHTML =
  `The result of adding 10 and 20 is: ${result}`;
console.log(result);

console.log("Hello World!");
console.log(`Name: ${name}, Age: ${age}`);
console.log(message());



