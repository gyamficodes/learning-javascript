
let name = 30;
console.log(name  + 10)


//checkbox
document.getElementById('mybutton').onclick = function(){
    if(document.getElementById('mychecbox').checked == true){
        console.log('you have subscribe')
    }else{
        console.log('you have not subscribe')
    }
};


//printig
const names = ['monday', 'tuesday', 'wenesday', 'thursday', 'friday'];

const elment= document.getElementById('weekdays');

let html = '';
for(item of names){
    html+=`<li>${item}</li>`
}

elment.innerHTML = html;


const nam = ['kofi is going to school n i come from sunyani'];

const pic = document.getElementById('card')
let week = '';

for(we of nam){
    week+=`<h6>${we}`
}

pic.innerHTML = week;


 // adding arrays
const fruits = []

const food = "Boakye"
fruits.push(...food)

console.log(fruits)


function add(...number){
    for(item of number){
        console.log(item + 50)
    }
}


add(1,2,3,4, 5, 9)


// how to get user name

let username;

document.getElementById('mybtn').onclick = function(){
    username = document.getElementById('myinput').value;
    console.log(username)
};



// count app

let count = 0;

document.getElementById('decrease').onclick = function(){
    count -=1;
    document.getElementById('countlabel').innerHTML = count;
}

document.getElementById('reset').onclick = function(){
    count =0;
    document.getElementById('countlabel').innerHTML = count;
}

document.getElementById('increase').onclick = function(){
    count +=1;
    document.getElementById('countlabel').innerHTML = count;
}



// weather qpp

// let weather = window.prompt('how is the weather today')

// if(weather == 'rainny'){
//     console.log('grab your umbrella')
// }else{
//     console.log('pls you can go without umbrella')
// }



//for loop === repeat some code a certain amount of time

let talent = ['skills','ideas','kowmlegd','capabilities']
console.log(talent)
 
for(e of talent){
    console.log(e)
}

num = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < num.length; i++){
    if(i === 5){
        break;
    }
    console.log(num[i])
}


//while loop === it repeat some code when a condition is true.
// potentialy infinite.

// while(1 === 1){
//     // console.log('good idea yey')
// }

// var numbb = [1,2,3,4,5,6,7,8,9,10]
// let i = 0;
// while(i < numbb.length){
//     console.log('finis', numbb[i]);
//     i++;
// }
    

//nesto loop == loop created within loops

numb = [1,2,3,4,5,6,7,8,9,10]


for(let i = 0; i < 2; i++){
    for(let i = 0; i < 10; i++){
        console.log(num[i])
    }
}


// do while loop == do something and check when the condition is true
// then it loops.


 



//switch case =statements tha examine a value for a match clauses

let grade = 'a';

switch(grade){
    case grade = 'a':
        console.log('excellent')
        break;
        case grade = 'b':
        console.log('very good')
        break;
        case grade = 'c':
            console.log('good')
            break;
            case grade = 'd':
                console.log('credit')
                break;
                case grade = 'e':
                    console.log('poor')
                    break;
                    case grade = 'f':
                        console.log('fail')
                        break;
};



let vegetable = 'orange'

if(vegetable == 'food'){
    console.log('yes is the real one')
}else if(vegetable == 'carrot'){
    console.log('its a vegetable')
}else if(vegetable == 'beans'){
    console.log('its not vegetable')
}else if(vegetable == 'orange'){
    console.log('its a fruit')
};


const family = 40;
const church = 10;
const school = 5;


function add(a, b){
    console.log(a + b)
}

add(family, school)


// type of 

let p = 'jonny';
console.log(typeof p)

 let a = 10;
 console.log(typeof a)

 let c = true;
 console.log(typeof c)




 //2D array
 const farms = ['ruminant','fowl','crops'];
 const bu = [1,2,3,4,5,6,7,8,9,10]
 const letters = ['a','d','c']

const one =[farms, bu, letters];
// one [][] = 'tom';
console.log(one);




// && and || it helps us to check more than one conditions
// and (all conditions mus be true)
// or (either conditions must be true)



let temp = 15;

if(temp > 10 && temp < 30){
    console.log('good weather')
}else{
    console.log('not good at all')
}


let tem = 20;


if(tem < 0 || tem > 30) {
    console.log('good')
}else{
    console.log('bad')
}


//! not logical operator it reverse boolean value 
// true - false or false -true


t = 10;
v = 5;

if(v !== t){
    console.log('true')
}else{
    console.log('false')
}


//breaak === it braek loops entirely
// continue === it skip iteratios of a loops 


//tenary operator === shortcut os if and else statemen
 // conditions ? espress true or espres false

checkwiner(true);

function checkwiner(win){
    win ? console.log('you win') : console.log('you lose')
}



// //varriables scope == where we can access varriables

// for(let v = 0; v < 3; v+=1){
//     console.log(v)
// }//let varriables the console always dey inside

// for(var m = 0; m < 3; v+=1){
// }//let varriables the console always dey outside
// console.log(m)



// template leterals === delimited with (`)
let user = 'john';
console.log(`hello ${user}`)


// tolocalstring(local, {option})
//locale it specify the language
//option it object is formating string

let mynum = 1234.5678;

// mynum = mynum.toLocaleString('en-US'); usa
// mynum = mynum.toLocaleString('hi-IN'); //hindi
// mynum = mynum.toLocaleString('de-DE'); //standard german



 mynum = mynum.toLocaleString(undefined, {style: 'currency', currency: "USD"}); 
// mynum = mynum.toLocaleString('hi-IN'); //hindi
console.log(mynum);


//Arrays ==they can store multiples values

let foo = ['app','ban','man','ma'];
let foodstaff = ['apple','banana','mango','apple'];
let foodstaf = ['apple','banana','mango'];
// foodstaff[0] = 'beans';.
// console.log(foo.map((item) => ({
//     return: item + 'abc'
// }) )
// console.log(foo.find((item) => item > 'app'))
// console.log(foo.findIndex((item) => item == 'app'))
 //console.log(foo.filter((item) => item > 'app'))	Creates a new array with every element in an array that pass a test   
// console.log(kk.every((item) => item > 0))Checks if every element in an array pass a test
//foodstaff.push('fish') adding an element to the last of array.
// foodstaff.pop() remove last element of an array.
// foodstaff.unshift('pawpaw') adding an element to the begining of array.
//foodstaff.shift() remove last element of an array.
//console.log(foodstaff.length) checking tht amount of element in the array.
//console.log(foodstaff.indexOf('mango')) checking the position of that Element.
//console.log(foodstaff.concat(foodstaf)) adding two different arrays together.
//foodstaff.splice(2, 0, "Lemon", "Kiwi"); method can be used to add new items to an array:
//foodstaff = foodstaff.sort(); arrangement of the Element. eg alphabatical order
//foodstaff.sort().reverse() it reverse the alphabatical order to it previous state.
//foo.copyWithin(2,0 ) //Copies array elements within the array, to and from specified positions
 //console.log(foo.entries()) Returns a key/value pair Array Iteration Object
//console.log(foodstaff.includes('apple'))  === it checks when der is apple inside
// console.log(foodstaff.lastIndexOf( 'banana'))
 //console.log(foo.fill('fake')) 	Fill the elements in an array with a static value
// every == Checks if every element in an array pass a test
// const ages = [32, 33, 16, 40];
//keys ===Returns a Array Iteration Object, containing the keys of the original array
// map ==Return a new array with the square root of all element values:
// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.map((a, b)  => ({
//     return : a + b
// })))
// const keys = fruit.keys();

// let text = "";
// for (let x of keys) {
//   text += x + "<br>";
// }
//document.getElementById("demo").innerHTML = text;


//every === 	Checks if every element in an array pass a test
// ages.every(checkAge)

// function checkAge(age) {
//   console.log(age > 18  ) ;
// }
  
//find ===Find the first element with a value over 18:
// const ages = [3, 10, 18, 20];


// document.getElementById("demo").innerHTML = ages.find(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

console.log(foodstaff);
// console.log(foodstaf);
console.log(foo)




// strings === they are use to manupulate text / characters.
let kk = [1,2,3,4,45]
let fullname = 'gyamfi john';
let info = 'kumasi';
// console.log(fullname.toLocaleLowerCase()) === Returns a string converted to lowercase letters, using the host's locale
//console.log(fullname.toLocaleUpperCase())  === it  returns a string to uppercase
//console.log(fullname.charAt(0))  === it showns the specific index of string
//console.log(fullname.length)  == it shows the amount of strings u have
//console.log(fullname.indexOf('y')) === it shows u the postion of a certain test
//console.log(fullname.endsWith('john')) === it check when it ends with a certain text
//console.log(fullname.includes('gyamfi'))  == it checks to see it the text have something
//console.log(fullname.slice(0,3))  === Extracts a part of a string and returns a new string
//console.log(fullname.split())   ===  it converts strings to arrays
//console.log(fullname.startsWith('gyamfi')) === it check when it start with a certain text
//console.log(fullname.substring(1, 4)) it shows some part of the string when u specifies an index
//console.log(fullname.trim()) === it clear the white space of a string
//console.log(fullname.trimStart()) Returns a string with removed whitespaces from the start
// console.log(fullname.trimEnd()) Returns a string with removed whitespaces from the end
//console.log(fullname.concat(info)) == ading two Stringtogrther
// console.log(fullname.lastIndexOf('y')) === it gives u the num of a certain string
//console.log(fullname.repeat(3))  === it repeats the string number of Time u want
console.log(fullname)


//number ==== numerics eg; 1234567
var mynumber = 50; 
// console.log(Number.isInteger(mynumber)) it checks wether the data type is integer
//  let div = 20 / 'john';  it checks when the number is not legal
// console.log(div)
// console.log(Number.isNaN(div)) // it checks wether a number is nan or not
//console.log(Number.parseFloat(20,30,40,50)); it parse the number and return the first number
//console.log(Number.parseInt(300.5)); it remove the decimal point and rturn integer
console.log(mynumber.toFixed(2))

console.log(mynumber)



//spread operators ... it used to expand arrays n strings.
 const pass =[1,2,3,4,5,6,7]
console.log(...pass)

const helo = 'thomas';
console.log(...helo);


//rest operator === represents an indefinet number of parameters
//(packs aguments into arrays)

let b = 2;
let k = 2;
let o = 2;
let x = 2;

console.log(sum(b, k, o, x));

function sum(b, k, ...numbers){
    let total = 0;
    for(number of numbers){
        total += number
    }
    return total
}



// callbackfunctions == a function passed as an aguments
// it ensures that a functions is not going to work until task is completed
//eg wait for the file to load








// for each




// array.map == it loops and returns array;

let students = ['nana yaw', 'monica','john']



 //array.filter ===

 const numers = [1,2,3,4,5,6,7]

console.log(numers.filter(numers => numers> 2))




// reduce() === reducess an array to a single value [sum]



//function expreaion == funtion without a name (anonymous function)

// sayhello();

// function sayhello(){
//     console.log('hello')
// }

let counting = 0;


function decreasecounting(){
    counting -=1;
    document.getElementById('label').innerHTML = counting;
}

function increasecounting(){
    counting +=1;
    document.getElementById('label').innerHTML = counting;
}


let usernamee;

function personusernamee(){
 usernamee =   document.getElementById('myinputt').value;
    console.log(usernamee)
}


let checkes;

function mycheckcheckes(){
    if(document.getElementById('mychecboxx').checked == true){
        alert('you have subscribe')
    }else{
        alert('you have not subscribe')
    }
}


// Arrow functions === its a compact to a traditonal alternative func.




//setTimeout

setTimeout(mynessage, 3000)
setTimeout(mynessag, 3000)

function mynessage(){
    console.log('kofi is a boy')
}

function mynessag(){
    console.log('ama is a girl')
}

//setInterval  == it involks a funtion repeatedly after number millons o seconds
// let counttt = 0;

// let max = window.prompt('count the number #?');
// max = Number(max);

// const myTimer = setInterval(countup, 1000);
// function countup(){
//     counttt+=1;
//     console.log(counttt);
//     if(counttt >= max){
//         clearInterval(myTimer);
//     }
// }



//date the date object is used  to work with dates  and time

let date = new Date();

let year = date.getFullYear(); //=== u will the year
let dayofmonth = date.getDay(); // === u will get the day of the week
let month = date.getMonth(); // it helps to get month
let second = date.getSeconds();
let hours = date.getHours();
let minute = date.getMinutes();

date = date.toLocaleString()
// document.getElementById('demo').innerHTML = year;
document.getElementById('demo').innerHTML = second;


// class n constructor

  class users{
  constructor(fullname,age,country){
    this.fullname = fullname;
    this.age = age;
    this.country = country;
  }
}

const users1 = new users('john', 40, 'kumasi');
 console.log(users1);




//snychronous   === in order sequence
//from start to end







//async





 



 




