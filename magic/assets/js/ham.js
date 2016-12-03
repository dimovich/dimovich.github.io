$(window).on('load', function() {
    var x = true;

    $(document.body).click( function() {
	closeHam();
    });

    $(document).keyup(function(e) {
	if (e.keyCode == 27) { // escape key maps to keycode `27`
	    closeHam();
	}
    });

    $(window).scroll(function(){
	closeHam();
    });


    function closeHam() {
	if(!Boolean(x)) {
	    x = !x;
	    var elem = document.getElementById("sidenav");
	    elem.style.opacity = "0";
	    elem.style.pointerEvents = "none";
	    $(".hambtn").toggleClass("is-active");
	}
    }


    $(".hambtn").click( function(e) {
	e.stopPropagation(); // this stops the event from bubbling up to the body
	var elem = document.getElementById("sidenav");
	if (Boolean(x)) {
	    elem.style.pointerEvents = "auto";
	    elem.style.opacity = "1";
	} else {
	    elem.style.opacity = "0";
	    elem.style.pointerEvents = "none";
	}
	$(this).toggleClass("is-active");
	x = !x;
    });
});

