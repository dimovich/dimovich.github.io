var x = true;

function toggleham() {
    var elem = document.getElementById("sidenav");
    if (Boolean(x)) {
	elem.style.pointerEvents = "auto";
	elem.style.opacity = "1";
    } else {
	elem.style.opacity = "0";
	elem.style.pointerEvents = "none";
    }
    x = !x;
}


/*
//stop click propagation inside ham
document.getElementById("ham").onclick = function (e) {
  e = e || window.event;
  e.cancelBubble = true;
  if (e.stopPropagation)
    e.stopPropagation();
}
*/


/*
function closeham() {
    if (!Boolean(x)) {
	var elem = document.getElementById("sidenav");
	elem.style.opacity = "0";
	elem.style.pointerEvents = "none";
	x = !x;
    }
}


document.addEventListener("click", function(){
    closeham();
});
*/
