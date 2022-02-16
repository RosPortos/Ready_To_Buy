function initDatepicker() {

    $("#datepicker").datepicker({
        changeMonth: false,
        changeYear: true,
        showOtherMonths: true,
        firstDay: 1,
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    });

    $("#datepicker2").datepicker({
        changeMonth: false,
        changeYear: true,
        showOtherMonths: true,
        firstDay: 1,
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    });


    const page = document.querySelector(".page");

    if (page.querySelector(".closed-part")) {
        $(".registration__input").click(function() {
            let parent = $(this).closest(".check-cu__detail-group");
            
            if(parent.children('.ui-datepicker').length == 0) {
                
                $('.ui-datepicker').appendTo(parent);
            }
        });
    } else {
        $('.ui-datepicker').appendTo(".registration__group--data");
    }
}

initDatepicker();