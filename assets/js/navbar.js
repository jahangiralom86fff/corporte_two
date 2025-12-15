
$(document).ready(function () {
    $('.mobile_menu').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
});

window.addEventListener("scroll", function (){

    const navbar = document .querySelector(".header .main-navbar");
    if( window .scrollY > 40){
        navbar .style .top = "0px";
    } else{
        navbar .style .top = "40px";
    }
});