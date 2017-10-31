$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }

  });
});
