$('.carousel-one').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      800:{
          items:2
      },
      1500:{
          items:3
      }
  }
})

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});