$(function () {
    $('.slider_inner').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider_arrows slider_arrows-left" src="./img/arrow.svg" alt="Arrow">',
        nextArrow: '<img class="slider_arrows slider_arrows-right" src="./img/arrow.svg" alt="Arrow">',
        dots: true
    })



    $(document).ready(function () {
        $("#close_btn").hide();
        $(".menu_btn").click(function () {
            $(".dropdown_menu").show();
            $(".menu_btn").hide();
            $("#close_btn").show()
        });
        $("#close_btn").click(function () {
            $(".dropdown_menu").hide();
            $("#close_btn").hide();
            $(".menu_btn").show()
        });
    });
});