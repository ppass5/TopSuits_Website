$('#first').css({background:'none'});

/*Scrolling*/
$(window).scroll(function(){
    var $maxScroll=600;
    var $maxScale=1.3;
    var $x=$(window).scrollTop()/100+1;
    if($(window).scrollTop()>$maxScroll) $x=$maxScale;
//    $('#first .background').css({transform: 'scale('+$x+','+$x+')'});
        $('#first .astro').css({transform: 'scale('+$x+','+$x+')'});

});
