// // Loops in JavaScript :=>
//     // 1. For Loop:=>
// let size = 0;
// for(let i = 1;i<=5;i++){
//     console.log("Hello Chiku ji")
//     size++;
// }
// console.log(size);  //count number of loop 


// // 2. While Loop :=> t is entry level condition check loop
// let i = 1;
// while( i <=5){
//     console.log("Namste satya bhai");
//     i++;
// }


// // 3. Do While Loop :=> It is exit level condition check loop
// //atlist one time excute
// let j = 1;
// do{
//     console.log("Hello satish sir")
//     j++;
// }while(j<=5);


// 4 For of loop :=> it is used on strings and array

// let str = "Hello my self satish ";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);

// 5. For in Loop :=> used on objrcts

const student = {
    name : "satish kumar",
    age : 20,
    E_no : 2304030101550,
    CGPA : 9.9,
    IsPass : true
}

for(let key in student){
    console.log("key =",key,", value =",student[key])
    
}