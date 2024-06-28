//create username 

// let fullName = prompt("Enter your full name without space =>");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);


//print avarege of given number
// let marks = [94,65,54,86,56];
// let sum = 0;
// for(let i of marks){
//     console.log(i);
//     sum += i;
// }
// console.log("Avarge of marks is =:> "+sum/marks.length);


//save Discounted price
// let price = [200,500,800,100,900];
// for(let i of price){
//     // console.log(i);
//     let j = i-i*10/100;
//     console.log(j);
// }

//creating Array
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// ];

//1. Remove the first company from the Array

// companies.shift();

//2. Remove Uber and Add Ola

// companies.splice(2,1,"Ola");
// console.log(companies);

//3. Add Amazon at the end
// companies.push("Amazon");
// console.log(companies);


//filter topper by reduce method
let  marks = [55,69,89,95,86,84,85,89,99,96,97];
let topper = marks.filter((val)=>{
    return val >= 85;
})
console.log(topper);

//input a number and create a Array

let input = prompt("Enter your number");
let arr = [];
for(i=1;i <= input;i++){
    arr[i-1] = i;
}
console.log(arr);

//calculate sum of all Array

let sum = arr.reduce((res,carr)=>{
    return res+carr;
});
console.log("the sum of all item is = ",sum);

//calculate product of all Array
let pdc = arr.reduce((res,carr)=>{
    return res*carr;
});
console.log("the sum of all item is = ",pdc);

