// const name = "users"
// let memebers = "users"
// var leaders = "boakye"

// let fullname = "boakkye"
// let users = ['yaw']
// let age = 25;
// let price = 2.34
// let data = {
//     name : "kofi"
// }

// let is_online = true;
// let available;
// let list = null;

// function getName(a, b){
//     return a + b
// }

// const getMember = (a, b) => a + b

// const box = document.querySelector('#checking');
// const item = document.querySelector(".box");

// users.concat()
// users.slice()
// users.indexOf()
// user.reduces()
// users.push()
// users.pop()
// users.unshift
// users.shift()
// users.flat()
// users.flatMap()
// users.splice()
// users.fill()
// users.copyWithin()
// users.includes()
// users.toString()
// users.length()
// users.join()


// // class MainUsers{
// //     constructor(name, age){
// //         this.name = name;
// //         this.age = age       
// //     }
// //     membersData(){
// //         console.log(this.name)
// //     }
// // }

// user.charAt()
// user.lastIndexOf()
// user.length
// user.toUpperCase()
// user.toLowerCase()
// user.indexOf()
// user.endsWith()
// user.startsWith()
// user.lastIndexOf()
// user.includes()
// user.trim()
// user.trimStart()
// user.trimEnd()
// user.padEnd()
// user.padStart()
// user.concat()
// user.split()
// user.substring()
// user.replace()
// user.replaceAll()


// Object.keys()
// Object.values()
// Object.freeze()
// Object.isFrozen()
// Object.isSealed()
// Object.assign()
// Object.entries()


// Number.isNaN
// Number.NaN
// Number.parseFloat
// Number.parseInt 
// Number.isInteger


 //for loop

// for(let p = 0; p <= 10; p++){
//     console.log(p)
// }

let pie = ['q','k', 'gg','bb']

// for(e of pie){
//     console.log(e)
// }

// while loop
// var i = 0;

// while(pie.length > i){
//     console.log(pie[i]);
//     i++;
// }

// while(1 == 1)(
//     console.log('sss')
// )

// do while loop
// do{
//     console.log('good')
// }while(pie.length > i){
//     console.log(pie[i])
// }

//nesto loop
// for(c = 0; c<= 3; c++){
//     console.log(c)
//     for(k = 0; k <= 10 ; k++){
//         console.log(k)
//     }
// }


// call back func

// pie.forEach((item) => {
//     console.log(item) 
// })


// console.log(pie.map((a, b) => {
//     return a +  b
// }))


//function

let age = 20;
let love = 90;

function greeting(a, b){
    let result = a + b;
    console.log( result ) 
}

greeting(age , love)


//nested fucn

let log = 'gyamfi john'
let sms = 10;


function  smspage(){
   displaylogin();
   displaysms();

   function displaylogin(){
    console.log(`you wellcome${log}`)
}
   function displaysms(){
    console.log(`you have recieve${sms}messages`)
   }
}

smspage();



//arrow func
const shake = () => 'pls if ur greeting shake my hands';
let answer = shake();
console.log(answer)


//settimeout
let time = new Date()

function morning() {
    console.log(`come to my house on ${time}sharp`)
}



setTimeout(morning(), 3000)



//class n contructor
class person{
    constructor(name,gender,country,contact){
        this.name = name;
        this.gender = gender;
        this.country = country;
        this.contact = contact;
    }
}

const person1 = new person('john','male','country','0558733370');
console.log(person1);



const code = 'jonny@2022';

if(code >= 8 || code.includes('@') || code >= 9){
    console.log('you have a strong password!')
}else if(code < 8 && code.includes(!'@')  ) {
    console.log('you have problem in your passworg')
}else if(code <= 7){
    console.log('bad password try again')
}else{
    console.log('you have no password')
}

//switch case
let student =  100;

switch(student){
case student = 100:
    console.log('exellent points!')
break;
case student = 80:
    console.log('very good points!')
break;
case student = 60:
    console.log('good points!')
break;
case student = 50:
    console.log('pass mark points!')
break;
case student = 40:
    console.log('credit points!')
break;
case student = 20:
    console.log('you fail!')
break;
default:{
    console.log('you did not take part in  the exams')
}
}


// weather app


let  weather = window.prompt('how is the weather today?')

if(weather == 'rain'){
    console.log('grab your umbrella!')
}else if(weather == 'sunny'){
    console.log('you do not need umbrella!')
}else{
    console.log('goodnight!')
}



//dom

let st = 'rbgksfhgdbhfgbfjbfjgbfu'

let mytext = document.getElementById('vb');
console.log(mytext)
mytext.setAttribute('style' , 'color:red;')
 
let paper = document.getElementById('vb');
let pp = '';
pp+=`<span>${st}`
paper.innerHTML = pp;

paper.setAttributeNS()








