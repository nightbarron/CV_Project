$(document).ready(function(){
      $("#about-img").animate({
        width: '100%',
        opacity: '1',
        top: '0%',
        left: '0%'
      });
      $(".about-btns").animate({
        left: '0px',
        opacity: '1'
      });
  });

  $('[href="#helloo"]').click(function() {
    $('body,html').animate({
      scrollTop: 0
    })
  });



