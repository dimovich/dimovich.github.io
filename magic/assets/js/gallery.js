$(document).ready(function(){
    $('.g-container').slick({
	dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   });
});




/*$(window).on('load', function() {
    var mq = window.matchMedia( "(max-width: 820px)" );
    if (mq.matches) {
	$('#photos').justifiedGallery({
	    lastRow: 'hide',
	    rowHeight : 140,
	    margins : 20
	});
    } else {
	$('#photos').justifiedGallery({
	    lastRow : 'justify', 
	    rowHeight : 140,
	    margins : 20
	});
    }
});
*/
