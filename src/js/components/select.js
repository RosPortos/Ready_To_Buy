function select() {
    const selectTop = document.querySelectorAll(".select__top");
    const selectContent = document.querySelectorAll(".select__content");
    let selectInput = $(".select__input");

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('select__top')) {
            selectTop.forEach((item, i) => {

                if (target == item) {

                    item.classList.toggle('active');
                    $(selectContent[i]).slideToggle(300);
                }

                if (target != item) {

                    item.classList.remove('active');
                    $(selectContent[i]).slideUp(300);
                }
            });
        } else {
            selectTop.forEach((item, i) => {
                item.classList.remove('active');
                $(selectContent[i]).slideUp(300);
            });
        }

        selectInput.on('click', function () {
            let thisText = $(this).find('span').text();
            let thisImg = $(this).find('img').attr("src");
            let thisContent = $(this).parent();
            let thisParent = $(this).parent().prev();
            thisParent.find('.select__top-title').text(thisText);
            thisParent.find('.select__img').attr("src", thisImg);
            thisContent.slideUp(300);
        });
    });
}

select();