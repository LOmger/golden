jQuery(window).scroll(function() { 
    var animate = jQuery(document).scrollTop();
    if (animate > 100) {
        jQuery('.item1').addClass('animated fadeInLeft');
         jQuery('.item2').addClass('animated fadeInUp');
          jQuery('.item3').addClass('animated fadeInRight');
    }
    else {
        jQuery('item1').removeClass('animated fadeInLeft');
         jQuery('item2').removeClass('animated fadeInUp');
          jQuery('item3').removeClass('animated fadeInRight');
    }
});

