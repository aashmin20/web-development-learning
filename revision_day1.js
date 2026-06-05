// Revision day 1
// Variables
let myname = "Ash";
console.log(myname);

const birthcountry = "india";
console.log(birthcountry);

let age = 19;
age = 20;
console.log(age);

// birthcountry = "USA";

let city = "sgnr";
console.log(city);

// Data Types
console.log(typeof myname);
console.log(typeof age);

let isloggedin = true;
console.log(isloggedin);

let foods = ["breads", "butter", "chicken" , "mutton"];
console.log(foods);

let obj ={name: "Ash", age: 19, skills: "JS"};
console.log(obj);

// Conditions
let num = -4;
if (num>0){
    console.log("positive");
}else if (num<0){
    console.log("negative");
}else{
    console.log("Zero");
}

let n = 64;
if (n>50){
    console.log("greater than 50 i.e.= "+n);
}else{
    console.log("lesser");
}

let a = 19;
if (a>18){
    console.log("prsn eligible to vote\n is an adult");
}
else{
    console.log("is minor");
}

let x =0;
if (x===0){
    console.log("no. is zero");
}
else{
    console.log("not zero");
}

// operators

let b=10;
let c=20;
console.log(b+c);
console.log(b*c);
console.log(c%b);
if(b>c){
    console.log(b);
}else{
    console.log(c);
}

if(b==c){
    console.log("equal");
}else{
    console.log("not equal");
}

// logical operators
let hasid=true;
a=16;
if (a>18 && hasid){
    console.log("can vote");
}else{
    console.log("can't");
}
hasid=false;
if(!hasid){
    console.log("get id");
}

let marks = 65;
let attendance = 80;

if (marks > 40 && attendance > 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

let A = true;
let B = false;

if (A || B) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

// optional
let d=10;
if(d>0 && d%2==0 && d>=10){
    console.log("correct");
}else{
    console.log("not correct");
}
    


