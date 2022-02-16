document.addEventListener('DOMContentLoaded', function () {

    var swiper = new Swiper(".shop-slider-swiper", {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            930: {
                slidesPerView: 4,
            },
            830: {
                slidesPerView: 3.4,
                spaceBetween: 15,
            },
            310: {
                slidesPerView: 2.4,
                spaceBetween: 15,
            },
        },
    });

    var swiper2 = new Swiper(".one-item__slider-min", {
        direction: 'vertical',
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper3 = new Swiper(".one-item__slider-big", {
        navigation: {
            nextEl: ".one-item__slider-big-button_next",
            prevEl: ".one-item__slider-big-button_prev",
        },
        pagination: {
            el: '.one-item__slider-big-pagination',
        },
        thumbs: {
            swiper: swiper2,
        },
    });

});