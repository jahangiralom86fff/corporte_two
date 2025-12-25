
$(document).ready(function () {
    $('.mobile_menu').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
});

const navbar = document.querySelector(".header .main-navbar");

function updateNavbar() {
    if (window.scrollY > 40) {
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "40px";
    }
}

window.addEventListener("load", updateNavbar);
window.addEventListener("scroll", updateNavbar);

//preloder start now//
window.addEventListener('load', () => {
   let preloder = document.querySelector(".preloder");
   if (preloder) {
      setTimeout(() => {
        preloder.style.display = "none";
      }, 800);
   }
});
//preloder start End//