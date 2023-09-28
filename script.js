var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("visible")
});

if (window.innerWidth <= 768) {
    var splide = new Splide(".splide");
    splide.mount();
} else {
    var splide = new Splide(".splide", {
        type: "loop",
        perPage: 3,
        focus: "center",
    });

    splide.mount();
}