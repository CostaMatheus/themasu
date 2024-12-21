let menuHamburger = document.querySelector(".menu-hamburger");
let linksContainer = document.querySelector(".links-container");

menuHamburger.addEventListener("click", function () {
    linksContainer.classList.toggle("active");
    menuHamburger.classList.toggle("active");
});

window.onscroll = () => {
    linksContainer.classList.remove("active");
    menuHamburger.classList.remove("active");
};