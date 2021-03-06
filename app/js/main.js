//todo: слайдер №1

$(function() {
    $('.body__slide-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        infinite: true,
        cssEase: "linear",
        speed: 500,
    });
    // //todo: слайдер №2
    $('.products__items').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: false,
        arrows: true,
        infinite: true,
        cssEase: "linear",
        speed: 500,
        responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
});


//todo: рейтинг звёзд
$(function() {

    $(".rate-star").rateYo({
        // колличество звёздочек 
        rating: 5,
        // размер звёздочек "ширина"
        starWidth: "12px",
        // заблокирует использование звёздочек
        readOnly: true
    });
    $(".page__content-star").rateYo({
        // колличество звёздочек 
        rating: 5,
        // размер звёздочек "ширина"
        starWidth: "12px",
        // заблокирует использование звёздочек
        readOnly: true
    });
});
//todo: прикрутил range Slider
$(function() {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
        min: 0,
        max: 300,
        from: 30,
        to: 300,
        prefix: "$"
    });
});

//todo: переключение товаров с плитки на строки
$(function() {
    $(".icon-list").on("click", function() {
        $(".page__content-box, .page__content").addClass("list");
        $(".icon-list").addClass("active");
        $(".icon-th-large").removeClass("active");
    });
});

$(function() {
    $(".icon-th-large").on("click", function() {
        $(".page__content-box , .page__content").removeClass("list");
        $(".icon-th-large").addClass("active");
        $(".icon-list").removeClass("active");
    });
});

// todo: Кнопка меню "крестик"
$(function() {
    $('.checkbox4').on("click", function() {
        $('.menu__list').slideToggle();
        $('.search').slideToggle();
    });
});
// todo: Кнопка меню пользователя
$(function() {
    $('.user-btn').on("click", function() {
        $('.wrapper__btn-a0').toggleClass('activ');
        $('.header__logo-text').toggleClass('activ');
        $('.header__logo').toggleClass('activ');
    });
});
// todo: Stack of tabs 
$('.page02 .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.page02').find('.tab-item').removeClass('page02_tab-content-active-tab').hide();
    $('.page02 .page02_tabs').find('.tab').removeClass('page02_tabs-active');
    $(this).addClass('page02_tabs-active');
    $('#' + id).addClass('page02_tab-content-active-tab').fadeIn();
    return false;
});


//todo: выбор категорий
// #1grn Если в HTML в доме этот плагин не найдёт этот класс, всё то,
//#1grn что ниже этой записи работать не будет в этом файле... 
//#1grn Поэтому засунем его в самый низ и пусть тут и лежит.
$(function() {
    var mixer = mixitup('.products__item-box');
});