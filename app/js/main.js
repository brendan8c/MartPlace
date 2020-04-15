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
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        arrows: true,
        infinite: true,
        cssEase: "linear",
        speed: 500,
    });
});

//todo: выбор категорий
$(function() {
    var mixer = mixitup('.products__item-box');
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

});