/*Js Swiper Slider*/
$(document).ready(function(){
    var swiper = new Swiper('.slider-1', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        cssWidthAndHeight: true,
        slidesPerView: 'auto',
        visibilityFullFit: true,
        autoResize: false,
        grabCursor: true,
        scrollbar: '.swiper-scrollbar',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    $(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
/*End Js Swiper Slider*/
