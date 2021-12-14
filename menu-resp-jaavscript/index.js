const button = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");

button.addEventListener("click",()=>{
   menuList.classList.toggle('active');
})