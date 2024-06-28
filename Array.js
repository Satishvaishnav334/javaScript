// let student = ["satish","3rd sem",21,"Ahmedabad"];
       //index     0      1   2   3       4
// let marks = [99,45,68,86,89];

// console.log(student[0]);   //first index item 

// console.log(student.pop());       //print Ahmedabad and remove last item from Array 
// console.log(student);                

// student.push("chiku");   //Add item in last of Array
// student.push("chiku");   //Add item in last of Array

// console.log(student.toString()); //convert all item into String not update Array
// console.log(student); 

// console.log(student.shift());      //print satish and remove first item from Array
// console.log(student);        

// console.log(student.concat(marks));      //concat multiple Array not update
// console.log(student);                 

// student.unshift("miku");    //Add item on start of Array
// console.log(student);    

//slice is not update orignal Array
// console.log(student.slice(1,3));

//splice is update Array
// student.splice(1,1,"4th");  //(start,delete,Add) update Array
// console.log(student);

// 1. map method 
arr = [55,25,65,54,56];
let newArr = arr.map((val)=>{
   return val;
})
console.log(newArr);

// 2. Filter method create a copy not update
//find even number in Array 

let evenArr = arr.filter((val)=>{
   return val%2 === 0;
})
console.log(evenArr);


//find Odd Number in Array

let oddArr = arr.filter((val)=>{
   return val%2 !== 0;
})
console.log(oddArr);

//devided by 3
let greaterthen3Arr = arr.filter((val)=>{
   return val>3;
})
console.log(greaterthen3Arr);

// Reduce it return single value
const Nsum = [1,2,3,4];

const sum = Nsum.reduce((res,curr)=>{
   return res + curr;
})
console.log(sum);