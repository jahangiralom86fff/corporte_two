$('.brand-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1100:{
            items:3
        },
        1200:{
            items:5
        }
    }
})

document.querySelectorAll('.Our-blog .single-bolg').forEach(function(card) {
    card.addEventListener('mouseover', function() {
        card.style.transform = 'translateY(-15px)';
        card.style.transition = 'all 0.4s ease';
    });

    card.addEventListener('mouseout', function() {
        card.style.transform = 'translateY(0)';
    });
});

const cards = document.querySelectorAll('.our-pricing .single-pricing');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(20px)';
        card.style.transition = '0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.transition = '0.3s';
        
    });
});