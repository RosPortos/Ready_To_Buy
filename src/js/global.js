document.addEventListener('DOMContentLoaded', function () {

    $('.btn-text-show').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.text-hide').slideToggle(200);
    });

    $('.header__catalog--show').on('click', function () {
        $('.catalog-list').addClass('active');
    });

    $('.catalog-list__closed').on('click', function () {
        $('.catalog-list').removeClass('active');
    });

    function test() {
        let headerHeight = $('.header').outerHeight();
        $('.page').css('padding-top', `${headerHeight}px`);
    }
    test();

    $(window).resize(function () {
        test();
    });

    $('.shop-page__btn').on('click', function () {
        $('.shop-page-modal').fadeIn(100);
        $('.overley').fadeIn(300);
        $('body').addClass('scroll-hide');
    });

    $('.modal__closed, .overley').on('click', function () {
        $('.shop-page-modal').fadeOut(300);
        $('.overley').fadeOut(300);
        $('body').removeClass('scroll-hide');
    });


    $('.show-filter').on('click', function () {
        $('.advanced-search__filter').addClass('active');
        $('body').addClass('scroll-hide');
    });

    $('.filter__closed').on('click', function () {
        $('.advanced-search__filter').removeClass('active');
        $('body').removeClass('scroll-hide');
    });

    $('.tab').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');
    });

    $('.lang-toggle').on('click', function () {
        $(this).next().slideToggle(300);
    });

    $(document).mouseup(function (e) {
        var container = $('.header__lang');
        if (container.has(e.target).length === 0) {
            $('.lang-wrap').slideUp(300);
        }
    });



    $('body').on('click', '.password-show', function () {
        if ($('#password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
        }
        return false;
    });


    $('.mobil-nav__search-btn').on('click', function () {
        $('.mobil-nav__search').slideToggle(300);
    });


    function test5() {
        let itiSelectedFlag = $('.iti__selected-flag');
        $(itiSelectedFlag).append('<div class="country"><span></span><span></span></div>');
        $(itiSelectedFlag).append('<div class="test">Выберите страну</div>');
    }
    test5();


    $(document).on('click', '.iti__country', function () {
        let itiCountryName = $(this).find('.iti__country-name').text();
        let itiDialCode = $(this).find('.iti__dial-code').text();
        $('.iti__selected-flag').find('.country span:first').text(itiDialCode);
        $('.iti__selected-flag').find('.country span:last').text(itiCountryName);
        $('.iti__selected-flag').find('.test').remove();
    });


    $('.shop-page__btn-more').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.shop-page__text').toggleClass('text-hide');
    });

    function myFunction(textBlock) {
        var copyText = document.getElementById(textBlock);
        copyText.select();
        document.execCommand("copy");
    }








});