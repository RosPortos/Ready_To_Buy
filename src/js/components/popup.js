function showPopup(parent, item) {
    $(parent).on('click', function () {
        $(item).fadeIn(400);
        hideScroll();
    });
}

function hidePopup(item, item2) {
    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains(item)) {
            $(item2).fadeOut(400);
            showScroll();
        }
    });
}

const page = document.querySelector('.page');

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
};

const showScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
};

// Get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const getScrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return getScrollbarWidth;
};


showPopup('.one-item__link', ".popup--customer-unit");
hidePopup('popup--customer-unit', ".popup--customer-unit");
hidePopup('popup__btn--customer-unit', ".popup--customer-unit");


window.addEventListener('resize', () => {
    $('.popup--customer-unit').fadeOut(400);
    showScroll();
});