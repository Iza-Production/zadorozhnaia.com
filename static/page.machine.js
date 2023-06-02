$(document).ready(function() {
    $('#scene').parallax({
        relativeInput:true
    });


    $('#fullpage').fullpage({
        anchors:['page'],
        css3: true,
        resize : false,
        scrollBar:true,
        navigation: false,
        recordHistory: true,
        scrollingSpeed: 700,

        afterSlideLoad: function(){
            slidebg = $('.section.fp-section.active .slide.fp-slide.active').css('background-color');
            if( slidebg == 'rgb(51, 51, 51)' || slidebg == 'rgb(0, 0, 0)' || slidebg == 'rgb(17, 17, 17)' || slidebg == 'rgba(0, 0, 0, 0)' || slidebg == 'rgb(69, 77, 79)' || slidebg == 'rgb(184, 247, 254)') {
                $('body').addClass('inverted');
            } else {
                $('body').removeClass('inverted');
            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

            $('#slide'+nextSlideIndex+' div.back').animate({width: "105%", height: "105%", left: "-2%", top: "-2%"}, 200);
            $('.slide.fp-slide.active div.back').animate({width: "100%", height: "100%", left: "5%", top: "0%"}, 1000);
            if(nextSlideIndex == 13) {
                $('#slide13 .gall-wraper').show('slow');
            }
            if(slideIndex == 13) {

                $('#slide13 .gall-wraper').hide('slow');
            }
        }
    });
});