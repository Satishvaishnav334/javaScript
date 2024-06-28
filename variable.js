console.log("Hello World")

console.log("Hello \nChiku ji")  //line breaker \n

//This is a Comment

/* This is multiple
line Comments*/

let x = 5;
//variable name  =  variable value
console.log(x);

// 3 type key word for declare variable
var fulName = "Chiku";   //Globel variable used old 
let age = 24  //Block level new 2015 
const CGPA = 9.9 //not change one assign

// Data Types
let str = "string";
let num = 1234;     //Number
let bool = true;     //Boolean
let Bint = BigInt("1234");  //BigInt
let undifine_ = undefined;
let null_val = null;
let symbal_val = Symbol("@")

console.log(str);
console.log(num);
console.log(bool);
console.log(Bint);
console.log(undifine_);
console.log(null_val);
console.log(symbal_val);


//Objects

const student = {
    fulName:"Satish",
    age:20,
    CGPA:8.6,
    ISpass:true
};
console.log(typeof (student));
console.log(student["fulName"]);
console.log(student["age"]);
console.log(student["CGPA"]);
console.log(student["ISpass"]);
console.log(typeof student["fulName"]);