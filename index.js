const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
    hamburger.classList.toggle("active");
    if(hamburger.classList.contains("active")) {
        navMenu.classList.add("display");
        navMenu.classList.remove("disappear");
    }
    else {
        navMenu.classList.add("disappear");
        navMenu.classList.remove("display");
    }
}
