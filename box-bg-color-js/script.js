const buttons = document.getElementsByTagName("button");
const boxes = document.getElementsByClassName("box");

buttons[0].addEventListener("click",()=>{
    boxes[0].classList.toggle("bg-style");
});
buttons[1].addEventListener("click",()=>{
    boxes[1].classList.toggle("bg-style-2");
});
buttons[2].addEventListener("click",()=>{
    boxes[2].classList.toggle("bg-style-3");
});
buttons[3].addEventListener("click",()=>{
    boxes[3].classList.toggle("bg-style-4");
});





















// const boxes = document.querySelector(".boxes");
// const box = document.querySelectorAll(".box");
// const buttons = document.querySelectorAll("button");

// const bgColor = document.createElement("div");
// bgColor.setAttribute("class","bg-color");

// const bgColorTwo = document.createElement("div");
// bgColorTwo.setAttribute("class","bg-color-2");

// const bgColorThree = document.createElement("div");
// bgColorThree.setAttribute("class","bg-color-3");

// const bgColorFour = document.createElement("div");
// bgColorFour.setAttribute("class","bg-color-4");

// buttons.forEach(button => {
//     button.addEventListener("click",()=>{
//         box.forEach(b=>{
//                 b.appendChild(bgColor);
//                 b.style.backgroundColor = "red";
//         })
//     })
// })