$(function () {
    // $('.slider').slick({
    //     infinite: true,
    //     fade: true
    // })



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