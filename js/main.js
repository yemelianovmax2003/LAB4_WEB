
$(function () {
    /* Burger menu open from click*/
    $('.btn__div').on('click', function () {
        $('.header__menu-list').slideToggle();
    });
    /* Burger menu close from click on link*/
    $('.header__menu-link').on('click', function () {
        $('.header__menu-list').slideUp(100);
    });
});