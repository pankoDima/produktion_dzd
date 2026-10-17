const burgerMenu = document.querySelector("#menu")
console.log(burgerMenu)
const menu = document.querySelector(".menu")
console.log(menu)
const close = document.querySelector("#close")

burgerMenu.addEventListener("click", function(){
    menu.classList.add("active")
})
close.addEventListener("click", function(){
    menu.classList.remove("active")
})