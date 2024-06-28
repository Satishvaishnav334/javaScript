//conditional statements
//If else


let x = 19;
if(x > 18 && x < 75){
  console.log("you can drive")
}
else if (x>75){
  console.log("sorry your age is greater then 75 you cannot drive")
}
else{
  console.log(" sorry you cannot drive");
}

// Switch

let a = "Namste";

switch(a){
  case "hello":
    console.log("value of a is = ",a);
    break;
  case "hii":
    console.log("value of a is = ",a);
    break;
  case "Namste":
    console.log("value of a is = ",a);
    break;
  default:
    console.log("value is not valid = ",a);
}