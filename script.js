const icon = document.querySelector("#toggle");
const navBar = document.querySelector("#nav");
icon.addEventListener("click", function(){
    navBar.classList.toggle("active");
})