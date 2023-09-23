var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".primary__navigation")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("visible")
});