$(document).ready(function(){
    $('.progress-title > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

//scroll up btn start//
const scrollUp = document .getElementById("scrollUp");

window .addEventListener ("scroll", function(){
    if(window.scrollY > 250){
        scrollUp.style .display = "block";
    }else{
        scrollUp.style .display = "none";
    }
});

scrollUp.addEventListener("click", function(){
  window .scrollTo({
    top:0,
    behavior: "smooth"
  });
});
//scroll up btn down End//