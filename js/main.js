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

  //Portfolio
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  




