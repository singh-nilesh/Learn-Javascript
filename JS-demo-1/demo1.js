// use console.log() to print to the console( inspect)
console.log("Hello World");
var name = "Raj";
let action = 'erroer';
let num = 10;

// let v/s var
var str2 = 'A';
console.log(str2);

if(str2 == 'A'){
    let str2 = 'B';  // let is Used in Block Scope
    console.log(str2);// where as var is used in Function Scope

}
console.log(str2);

// Constants
const PI = 3.14;   // Use Block letter to Name Constants
console.log(PI);
/*
PI = 3; // Uncaught TypeError: Assignment to constant variable.
*/

// use Back tick `` for using Formating template, to use varibales
// but normal strings/datatypes  can be concatinated.
console.log('Hello %{name}'+action);
console.log(`Hello ${name}`+num);

// use  document.getElementById() to access HTML elements 
document.getElementById('heading').innerHTML = `Hello ${name}`;
document.getElementById('para').textContent = ` hey ${name}`

/*
// Types of prompts & Input Metohds

// 1. prompt --> allows user to enter input
window.prompt("Enter Your Name");

// 2. confirm --> allows user to select yes or no
window.confirm("Are you sure?");
// 3. alert --> allows user to see an alert
window.alert("You are in danger");
*/


// Button OnClick
document.getElementById('btnPrompt').onclick = function(){
    name = document.getElementById('name').value+" ";
    name += window.prompt("Enter Your Last Name");
}

document.getElementById('btnConfirm').onclick = function(){
    window.confirm("Are you sure?");
}

document.getElementById('btnAlert').onclick = function(){
    window.alert(`${name}You are in danger`);
}

// Typecasting of Datatypes
var no1 = 10;
console.log(no1,typeof(no1));

var str1 = String(no1);
// for other Datatypes, use String(), Number(), Boolean(), Array(), Object() etc
console.log(str1,typeof(str1));




// Undefinded variables typeCasting
var z;
z = Number(z);
console.log(z,typeof(z)); // returns NaN

z = String(z);
console.log(z,typeof(z)); // returns "NaN"

z = Boolean(z);
console.log(z,typeof(z)); 
/*
The Boolean() function in JavaScript converts its argument to a boolean value. 
When you pass NaN to the Boolean() function, it evaluates to false. However, 
the typeof operator is checking the type of the variable z, not its value. 
Since z was previously converted to a string "NaN", it's a non-empty string, 
and any non-empty string in JavaScript evaluates to true when converted to a boolean.
So, typeof(z) would indeed return "boolean" and z would be true.
*/

var y;
y = Boolean(y);
console.log(y,typeof(z)); // returns false, because y is undefined

var r;
r = String(r);
console.log(r,typeof(r)); // returns "undefined"



// you can Store HTML elements in variables
const heading = document.getElementById('heading');
heading.textContent = "Changed Heading";

// Math functions in javascript
console.log(Math.max(10,20,30,40,50));
console.log(Math.min(10,20,30,40,50));
console.log(Math.abs(-10));
console.log(Math.sqrt(100));
console.log(Math.pow(10,2));
console.log(Math.floor(10.9));
console.log(Math.ceil(10.1));
console.log(Math.round(10.5));
console.log(Math.random());

// Random Number Generator
let min = 1;
let max = 6;
console.log(Math.random); // Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log(Math.floor(Math.random()*(max-min+1)+min)); // returns a random number between min and max

// If-Else statements
if(10>5){
    console.log("10 is greater than 5");
}
else{
    console.log("10 is less than 5");
}

// Ternary Operator
let time = 10;
let message = time > 12 ? 'Good Morning' : 'Good Afternoon';
console.log(message);



// Switch case ststements
let testScore = 72; // window.prompt("What is your test score? :");
let grade;

switch(true){
    case testScore >= 90: grade = 'A';
        break;
    case testScore >= 80: grade = 'B';
        break;
    case testScore >= 70: grade = 'C';
        break;
    default : grade = 'D';
}
console.log(`Your Grade is ${grade}`);


// String  methords

let str4 = " Dragon";

console.log(str4.length);
console.log(str4.trim());
console.log(str4.repeat(3));
console.log(str4.startsWith('g'));
// there are others as well like reverse, endswith, etc.
console.log(str4.padEnd(10,"A"));

// String slicing
console.log(str4.slice(3,7));


// methord Chaining --> Using multiple methords in same line
let username = '  dRAgoN  ';

console.log( username.trim().charAt(0).toUpperCase()) //name with 1st letter Uppercase
console.log(username.trim().slice(1).toLowerCase())

let num1 = Math.round(Math.random()*9)+1; // random number generator (1 -10)

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase() +num1;
console.log(username);


//   = assignment operator
//  == comparison operator (compare if values are equal, irrispective of data type)
// === Strict equality operator, (both value & data type has to be same.)

const pi = 3.14;

pi == '3.14'? console.log('PI') : console.log('not PI'); // compare values
pi === '3.14'? console.log('PI') : console.log('not PI'); // compare values & data type
pi === 3.14? console.log('PI') : console.log('not PI');

//  != Inequality operator,
//  !== strict inequality operator.
pi != '3.14'? console.log('not PI') : console.log('PI'); // compare values
pi !== '3.14'? console.log('not PI') : console.log('PI'); // compare values & data type
pi !== 3.14? console.log('not PI') : console.log('PI');

//While loop 
let i = 0;

while(i<5){
    console.log(i);
    i++;
}

// for loop
for(let i=0;i<5;i++){
    console.log(i);
}

// check if it's a number , NaN
if (!isNaN(pi)){
    console.log('Not a Number');
}
