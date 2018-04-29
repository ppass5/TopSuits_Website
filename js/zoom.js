$('#first').css({background:'none'});

/*Scrolling*/
$(window).scroll(function(){
    var $maxScroll=600;
    var $maxScale=1.3;
    var $x=$(window).scrollTop()/100+1;
    // var $x=$('html, body').animate({scrollTop: $('#welcome').offset().top -100 }, 'slow');

    /*this statment scrolls out back in again when max is reached*/
   if($(window).scrollTop()>$maxScroll) $x=$maxScale;
   /*this statment scrolls out when max is reached*/

    $('#first .astro').css({transform: 'scale('+$x+','+$x+')'});

});
