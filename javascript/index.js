
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

let foodstaff = ['apple','banana','mango']
let foodstaf = ['apple','banana','mango']
// foodstaff[0] = 'beans';.
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

console.log(foodstaff);
console.log(foodstaf);



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













