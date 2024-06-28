//Operator

// 1. Arithmetic Operator
let [a,b] = [5,2];

console.log("a = ",a);
console.log("b = ",b);

// A. Modulor Operator
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);

// B. Expinentiation Operator
console.log("a ** b = ",a ** b);

// C. Increment and Decrement
console.log("a++ = ",a++);    //frist print then change 
console.log("Now a is = ",a);
console.log("++b = ",++b);    //frist change then print
console.log("Now a is = ",b);

// 2. Asignment Operator
let x = 15;
console.log(x);
x += 4;           //x = x + 4
console.log(x);
x -= 4;           //x = x - 4
console.log(x);
x *= 4;           //x = x * 4
console.log(x);
x /= 4;           //x = x / 4
console.log(x);
x %= 4;           //x = x % 4
console.log(x);
x **= 4;           //x = x ** 4
console.log(x);

// 3. Comparison Operator
let [c,d] = [5,2]
console.log(c<d);     //Return  False
console.log(c>d);    //Return True 
console.log(c<=d);    //Return False 
console.log(c>=d);    //Return True 
console.log("c != d = ",c!=d);    //Return True
let x1 = 5;
let x2 = "5" 
console.log("x1 == x2 = ",x1==x2);    //Return True compair Only values not data type 
console.log("x1 === x2 = ",x1===x2);    //Return False if  values equal but  data type is not equal

// 4. Logical Operators

// A. && AND Operator
let a1 = 5;
let a2 = 2;

console.log("Condition1 && Condition2 = ", a1>a2 && a1 != a2)  //Return True when all condition is true 
console.log("Condition1 && Condition2 = ", a1==a2 && a1 != a2)  //Return False when any 1 condition is false 

// B. || OR Operator

console.log("Condition1 || Condition2 = ", a1>a2 || a1 != a2)  //Return True when atlist 1 condition is true 
console.log("Condition1 || Condition2 = ", a1==a2 || a1 <= a2)  //Return False when all conditions is false 

// C. ! NOT Operator

console.log("!(Condition) = ", !(a1 == a2))  //Return True if condition is false 
console.log("!(Condition) = ", !(a1 != a2))  //Return False if condition is true


// D. Ternary Oprator
let age = 22;

let result = age>18 ? "Adult" : "Not Adult";
        //condition ?  true  :  flase
console.log(result)