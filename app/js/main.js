$(function () {
    $('.product_list-inner').slick({
        arrows: false,
        dots: true, 
        responsive: [
            {
                breakpoint: 1000000,
                settings: "unslick"
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            }
        ]
    })
    $('.slider_inner').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider_arrows slider_arrows-left" src="./img/arrow.svg" alt="Arrow">',
        nextArrow: '<img class="slider_arrows slider_arrows-right" src="./img/arrow.svg" alt="Arrow">',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
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


// $(window).on("load resize", function(){
//     var width = $(document).width();

//     if (width > 772 ) {
//       $('.product_list-inner').slick('unslick');
// } else {
//   $('.product_list-inner').slick({  
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//   });
//     }
//   });