jQuery(window).scroll(function() { 
    var animate = jQuery(document).scrollTop();
    if (animate > 100) {
        jQuery('.item1').addClass('animated fadeInLeft');
         jQuery('.item2').addClass('animated fadeInUp');
          jQuery('.item3').addClass('animated fadeInRight');
    }
    else {
        jQuery('.item1').removeClass('animated fadeInLeft');
         jQuery('.item2').removeClass('animated fadeInUp');
          jQuery('.item3').removeClass('animated fadeInRight');
    }
});

   
$(function () {
  $('.book').click(function (){
    $('.modal').addClass('show');
  });
  $('.overlay').click(function(){
    $('.modal').removeClass('show')
  }); 
});

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.5;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}