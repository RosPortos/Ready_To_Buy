$(".closed-part__tooltip").on('click', function () {
    $(this).toggleClass("active");
    $(this).find('.closed-part__tooltip-info').fadeToggle(200);
});


if($('.tippy').length != 0) {
    tippy('.tippy', {
        duration: 300,
    });
} 

