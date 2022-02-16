"use strict";

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
    var headerHeight = $('.header').outerHeight();
    $('.page').css('padding-top', "".concat(headerHeight, "px"));
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
    var itiSelectedFlag = $('.iti__selected-flag');
    $(itiSelectedFlag).append('<div class="country"><span></span><span></span></div>');
    $(itiSelectedFlag).append('<div class="test">Выберите страну</div>');
  }

  test5();
  $(document).on('click', '.iti__country', function () {
    var itiCountryName = $(this).find('.iti__country-name').text();
    var itiDialCode = $(this).find('.iti__dial-code').text();
    $('.iti__selected-flag').find('.country span:first').text(itiDialCode);
    $('.iti__selected-flag').find('.country span:last').text(itiCountryName);
    $('.iti__selected-flag').find('.test').remove();
  });
  $('.shop-page__btn-more').on('click', function () {
    $(this).toggleClass('active');
    $(this).parent().find('.shop-page__text').toggleClass('text-hide');
  });
});
"use strict";

function initDatepicker() {
  $("#datepicker").datepicker({
    changeMonth: false,
    changeYear: true,
    showOtherMonths: true,
    firstDay: 1,
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  });
  $("#datepicker2").datepicker({
    changeMonth: false,
    changeYear: true,
    showOtherMonths: true,
    firstDay: 1,
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  });
  var page = document.querySelector(".page");

  if (page.querySelector(".closed-part")) {
    $(".registration__input").click(function () {
      var parent = $(this).closest(".check-cu__detail-group");

      if (parent.children('.ui-datepicker').length == 0) {
        $('.ui-datepicker').appendTo(parent);
      }
    });
  } else {
    $('.ui-datepicker').appendTo(".registration__group--data");
  }
}

initDatepicker();
"use strict";

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  var _this2 = this;

  var _this = this; // массив объектов


  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

  this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var data = node.dataset.da.trim();
    var dataArray = data.split(",");
    var оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects); // массив уникальных медиа-запросов

  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  }); // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске

  var _loop = function _loop(_i) {
    var media = _this2.mediaQueries[_i];
    var mediaSplit = String.prototype.split.call(media, ',');
    var matchMedia = window.matchMedia(mediaSplit[0]);
    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });

    _this2.mediaHandler(matchMedia, оbjectsFilter);
  };

  for (var _i = 0; _i < this.mediaQueries.length; _i++) {
    _loop(_i);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (var i = 0; i < оbjects.length; i++) {
      var оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
      var _оbject = оbjects[_i2];

      if (_оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
      }
    }
  }
}; // Функция перемещения


DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);

  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }

  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }

  destination.children[place].insertAdjacentElement('beforebegin', element);
}; // Функция возврата


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);

  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}; // Функция получения индекса внутри родителя


DynamicAdapt.prototype.indexInParent = function (parent, element) {
  var array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}; // Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max


DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

var da = new DynamicAdapt("max");
da.init();
"use strict";

function toggleMenu() {
  $(".show-menu").click(function () {
    $(".menu").addClass("active");
  });
  $(".menu__close").click(function () {
    $(".menu").removeClass("active");
  });
}

toggleMenu();
"use strict";

function showPopup(parent, item) {
  $(parent).on('click', function () {
    $(item).fadeIn(400);
    hideScroll();
  });
}

function hidePopup(item, item2) {
  document.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains(item)) {
      $(item2).fadeOut(400);
      showScroll();
    }
  });
}

var page = document.querySelector('.page');

var hideScroll = function hideScroll() {
  var scrollWidth = "".concat(getScrollbarWidth(), "px");
  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';
};

var showScroll = function showScroll() {
  document.body.style.paddingRight = '';
  document.body.style.overflow = '';
}; // Get scrollbar width


var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';
  document.body.appendChild(outer);
  var getScrollbarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);
  return getScrollbarWidth;
};

showPopup('.one-item__link', ".popup--customer-unit");
hidePopup('popup--customer-unit', ".popup--customer-unit");
hidePopup('popup__btn--customer-unit', ".popup--customer-unit");
window.addEventListener('resize', function () {
  $('.popup--customer-unit').fadeOut(400);
  showScroll();
});
"use strict";

var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 2000,
    from = 0,
    to = 0;
$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});
$inputTo.on("input", function () {
  var val = $(this).prop("value");

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});
"use strict";

function select() {
  var selectTop = document.querySelectorAll(".select__top");
  var selectContent = document.querySelectorAll(".select__content");
  var selectInput = $(".select__input");
  document.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('select__top')) {
      selectTop.forEach(function (item, i) {
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
      selectTop.forEach(function (item, i) {
        item.classList.remove('active');
        $(selectContent[i]).slideUp(300);
      });
    }

    selectInput.on('click', function () {
      var thisText = $(this).find('span').text();
      var thisImg = $(this).find('img').attr("src");
      var thisContent = $(this).parent();
      var thisParent = $(this).parent().prev();
      thisParent.find('.select__top-title').text(thisText);
      thisParent.find('.select__img').attr("src", thisImg);
      thisContent.slideUp(300);
    });
  });
}

select();
"use strict";

$("#phone").intlTelInput();
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".shop-slider-swiper", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 5
      },
      930: {
        slidesPerView: 4
      },
      830: {
        slidesPerView: 3.4,
        spaceBetween: 15
      },
      310: {
        slidesPerView: 2.4,
        spaceBetween: 15
      }
    }
  });
  var swiper2 = new Swiper(".one-item__slider-min", {
    direction: 'vertical',
    spaceBetween: 16,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true
  });
  var swiper3 = new Swiper(".one-item__slider-big", {
    navigation: {
      nextEl: ".one-item__slider-big-button_next",
      prevEl: ".one-item__slider-big-button_prev"
    },
    pagination: {
      el: '.one-item__slider-big-pagination'
    },
    thumbs: {
      swiper: swiper2
    }
  });
});
"use strict";

$(".closed-part__tooltip").on('click', function () {
  $(this).toggleClass("active");
  $(this).find('.closed-part__tooltip-info').fadeToggle(200);
});

if ($('.tippy').length != 0) {
  tippy('.tippy', {
    duration: 300
  });
}
"use strict";
//# sourceMappingURL=main.js.map
