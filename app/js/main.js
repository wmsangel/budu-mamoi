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


    $('body').on('click', '.register-form__send', function () {

        $('.reg-form input.form-input').each(function(){
            if ($(this).val() == '') {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (!$('input#accept').is(':checked')) {
            $('label.for-accept').addClass('error')
        } else {
            $('label.for-accept').removeClass('error')
        }

        if (!$('.reg-form input.form-input').hasClass('error') && $('input#accept').is(':checked')) {
            $.ajax({
                type: 'POST',
                url: 'php/send.php', // обработчик формы отправки
                data: $('.reg-form').serialize(),
                success: function (data) {
                    if (data == 'Message has been sent') {
                        $('.reg-form').hide();
                        $('.register-form .thank-you').show();
                    }
                }
            })
        }

    });


    $('body').on('click', '.register-form-bottom__send', function () {

        $('.bottom-reg-form input.form-input').each(function(){
            if ($(this).val() == '') {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (!$('input#footer-accept').is(':checked')) {
            $('label.for-bottom-accept').addClass('error')
        } else {
            $('label.for-bottom-accept').removeClass('error')
        }

        if (!$('.bottom-reg-form input.form-input').hasClass('error') && $('input#footer-accept').is(':checked')) {
            $.ajax({
                type: 'POST',
                url: 'php/bottom-send.php', // обработчик формы отправки
                data: $('.bottom-reg-form').serialize(),
                success: function (data) {
                    if (data == 'Message has been sent') {
                        $('.bottom-reg-form').hide();
                        $('.section-register-bottom .thank-you').show();
                    }
                }
            })
        }

    });
});
