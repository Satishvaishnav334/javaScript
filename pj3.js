let btn = document.createElement("button");
console.dir(btn);
document.querySelector("body").prepend(btn);
btn.innerText = "click me";
btn.style.backgroundColor = "blue";

let para = document.querySelector("p");
console.dir(para);


//set new class on p tag
para.classList.add("newClass")
// para.classList.add("content")
console.dir(para.classList);