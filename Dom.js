//window is a global object with lot of method and properties

// let id = document.getElementById("id").innerHTML = "murchedis";

// let classname = document.getElementsByClassName(".class");

// let tag = document.getElementsByTagName("p"); //tag name

// let car2 = document.querySelector("h1"); //select single Query

// let car = document.querySelectorAll(".cars"); //select All Query

// console.dir(car[0].innerText = "newcar");

// console.log(car2.firstChild.innerText = "abxc") //frist element of car2 element wich is h1 

//for DOM manipulation properties

// 1. tagName : return tag and element nodes
// 2. inner.Text : return Text content of the element and its children 
// 3. innerHTML : returns the plain text or HTML contents in the element
// 4. textContent : return textual content even for hidden element


//Question
// let h1 = document.querySelector("h2"); 
// console.dir(h1.innerText);
// h1.innerText = h1.innerText + "  from chiku ji ";


// let divs = document.querySelectorAll(".sclass");
// console.dir(divs);
// let idx = 1;
// for(let div of divs){
//     div.innerText = `this is div =>${idx}`;
//     idx++;
// }


//Attribute get and set
// let h4 = document.querySelector("h4");
// console.dir("h4");
// console.dir(h4.getAttribute("class"));
// //set Atrtribite
// h4.setAttribute("class","Newcarsd")
// console.dir(h4.getAttribute("class"));

//change style from javaScript

let p = document.querySelector("p");
// p.style.backgroundColor = "green";
// p.style.fontSize = "20px";


//Creating Element by Javascript
let h1 = document.createElement("h1");
h1.innerHTML = "<i> Hello i am New Heading</i>"
document.querySelector("body").append(h1);     //adds at the and of node(inside)
document.querySelector("body").prepend(h1);   //adds at the start of node(inside)
document.querySelector("body").before(h1);   //adds before node (outside)
document.querySelector("body").after(h1);   //adds after node(outside)

// p.remove();// remove node