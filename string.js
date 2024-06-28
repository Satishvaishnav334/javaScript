//String in javaScript

let str = "Hello chiku ji";  //double quorts
let str2 = 'Hi satish sir';  //single quorts

srt_length = str.length;   //length of string
console.log(srt_length);

console.log(str[1]);       //accessing 2 index char

//Template Literals
str3 = `this is a speacial string`;  //backticks 
console.log(typeof str3)   //string type

//using object key value in string

let obj = {
    item:"pen",
    price:250,
}
//using varible in string is called string interpolation
let output = `this is a ${obj.item} and there valur is ${obj.price}`;
console.log(output);

//scape characters
let str4 = "i am\nin new line" ; //\n is a single character
console.log(str4);
console.log(str4.length);

//String methods
let str5 = "Pushpa Devi";
str5 = str5.toUpperCase();
console.log(str5);

let str6 = "Shanker Das";
str6 = str6.toLowerCase();
console.log(str6);

let str7 = "     gourav     Das       ";
str7 = str7.trim();  //space remove from string
console.log(str7);


//string is immuteble it not can be change
 
let str8 = "chikku vaishnav";
// str8 = str8.slice(0,3);   //give 0 to 2 char
console.log(str8);

let str9 = str7.concat(str7);  //joint strings
console.log(str9);

let str10 = str8.replace("c","m");  //Replace only frist single char
console.log(str10);

let str11 = str8.replaceAll("k","o"); //replace All char
console.log(str11);

console.log(str8.charAt("3")); //the char in index number




