$(function(){
    $('.slideshow img:gt(0)').hide();
    setInterval(function(){$('.slideshow :first-child').fadeOut(2000).next('img').fadeIn(2000).end().appendTo('.slideshow');}, 4000);
});