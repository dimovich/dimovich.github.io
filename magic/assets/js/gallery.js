$(window).on('load', function() {
    $('#photos').justifiedGallery({
	lastRow : 'justify', 
	rowHeight : 140, 
	rel : 'gallery',
	margins : 20
    }).on('jg.complete', function () {$('.swipeboximg').swipebox();});});
