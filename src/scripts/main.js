var btnChangeFilter = document.querySelector('.change-btn');
btnChangeFilter.addEventListener('click', function () {
    var filter = document.querySelector('.hide-filter');
    filter.classList.toggle('open-filter');
    this.classList.toggle('change-btn-open');
});


var slider = $('.bxslider3').bxSlider({
    pagerCustom: '#bx-pager',
    touchEnabled: true,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 28
});

$('.bxslider-link').mouseover(
    function () {
        var links = [].slice.apply(document.querySelectorAll(".bxslider-link"));
        var index = links.indexOf(this);
        slider.goToSlide(index);
    }
);


$('.my-map').click(function(){
    $('iframe').css('pointer-events','auto');
});


$('.bxslider2').bxSlider({
    minSlides: 2,
    maxSlides: 4,
    captions: true,
    slideWidth: 190,
    slideMargin: 28
});