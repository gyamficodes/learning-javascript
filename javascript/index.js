
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



//for loop

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


//while loop

if(1 === 1){
    console.log('good idea yey')
}

//nesto loop

numb = [1,2,3,4,5,6,7,8,9,10]


for(let i = 0; i < 2; i++){
    for(let i = 0; i < 10; i++){
        console.log(num[i])
    }
}


//switch case

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
console.log(one);

























