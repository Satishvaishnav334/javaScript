//function is used for perform a block of code for multiple times
//repeated work

// function hi() {
//     console.log("hi");
//     console.log("hi1");
//     console.log("hi2");
//     console.log("hi3");
//     console.log("hi4");
//     console.log("hi5");
// }
// hi();
// hi();

// //sum function

// function sum(a, b) {
//     return a + b;
// }
// let val = sum(1, 3);
// console.log(val)

//Arrow Funtion

// let multi = (a, b) => {
//     console.log(a * b);
// }
// multi(5, 10);


// count vovls in strint function

// let str = "satish vaishnav";

// function volw(str) {
//     let count = 0;
//     for (let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// volw(str);

// let volww = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// volww(str);


//forEach Loop for Arrays
let str = ["Progran Start"]; //Only for Array not for string
str.forEach(function hi(){
    console.log("Hello");
})

//creating a function for print square of Array items

// let arr = [25,3,54,85,45,25];
// arr.forEach( function square(val){
//     console.log(val**2);
// });


// //Arrow function for cube

// arr.forEach((val)=>{
//     console.log(val**3);
// });

//print item, index, Array
let arr = ["rajasthan", "Gujrat", "Maharastra", "Goa", "Delhi"]
arr.forEach((val,index,arr)=>{
    console.log(val,index,arr);
});

//ForEach is higher order function / method