$(document).ready(function(){


    $('.gallery-block__photos').slick({
        arrows: true,
        slidesToShow: 4,
        speed: 400,
        nextArrow: '<div class="slider-next-arrow"></div>',
        prevArrow: '<div class="slider-prev-arrow"></div>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.goto-link').on('click', function () {
        var currentLink = $(this).data('pageid');
        $("html, body").animate({
            scrollTop: $('#'+currentLink).offset().top
        }, 600);
    });


    $('.mobile-menu').on('click', function(){
        $('nav').toggleClass('opened');
        $(this).toggleClass('opened');
    });


});
