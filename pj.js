// //check the number is multiple of 5 or not 

// let num = prompt("Enter number to check number is multiple of 5 or not");

// if(num % 5 === 0){
//     console.log("yes",num,"multiple of 5 table on ",num/5," number");
// }
// else{
//     console.log("sorry",num,"not multiple of 5 table");
// }

// //give a grade according to precentage

// let pre = prompt("Enter your precentage");

// if(pre>=80 && pre<=100){
//     console.log("A")
// }
// else if(pre<80 && pre>=60){
//     console.log("B")
// }
// else if(pre<60 && pre>=40){
//     console.log("C")
// }
// else {
//     console.log("Fail")
// }

//print all even number from 0 to 100

// for(let i = 1 ; i <= 100; i++){
//    if(i % 2 === 0){
//     console.log(i);
//    }
// }


//guess number game

let gameNum = 25;
let useNum = prompt("Guess a rendom number :");
while(gameNum != useNum){
   useNum = prompt('you guess wrong number , guess again');
    
}
console.log("congratulation you guess right number :")