Graphical.unit_type = "vmin";
Graphical.drawRect(document.body, "gamescreen", 100, 100, 50, 50, "black");
function repos() {
	if (window.innerWidth > window.innerHeight) {
		document.getElementById("gamescreen").style.top = "0";
		document.getElementById("gamescreen").style.left = (window.innerWidth/2 - window.innerHeight/2).toString() + "px";
	}
	else {
		document.getElementById("gamescreen").style.left = "0";
		document.getElementById("gamescreen").style.top = (window.innerHeight/2 - window.innerWidth/2).toString() + "px";
	}
}
repos();
document.body.onresize = repos;