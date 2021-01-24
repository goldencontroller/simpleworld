player_touching_enemy = false;
function enemyscript() {
	i = 0;
	while (i < document.getElementsByClassName("enemy").length) {
		if (parseFloat(document.getElementsByClassName("enemy")[i].style.left) < playerpos[0] + 60 && parseFloat(document.getElementsByClassName("enemy")[i].style.left) > playerpos[0] - 60) {
			for (j = 0; j < document.getElementsByClassName("enemyclip").length; j++) {
				enemyenemyclipcollision = Graphical.directionalCollision(document.getElementsByClassName("enemy")[i], document.getElementsByClassName("enemyclip")[j]);
				if (enemyenemyclipcollision == "left") {
					document.getElementsByClassName("enemy")[i].dataset.facing_left = "true";
				}
				else if (enemyenemyclipcollision == "right") {
					document.getElementsByClassName("enemy")[i].dataset.facing_left = "false";
				}
				/*if (Graphical.rectCollision(document.getElementsByClassName("enemy")[i], document.getElementsByClassName("enemyclip")[j])) {
					if (document.getElementsByClassName("enemy")[i].dataset.facing_left == "true") {
						document.getElementsByClassName("enemy")[i].dataset.facing_left = "false";
					}
					else {
						document.getElementsByClassName("enemy")[i].dataset.facing_left = "false";
					}
				}*/
			}
			if (document.getElementsByClassName("enemy")[i].dataset.facing_left == "true") {
				document.getElementsByClassName("enemy")[i].style.left = (parseFloat(document.getElementsByClassName("enemy")[i].style.left) - 0.1).toString() + "vmin";
			}
			else {
				document.getElementsByClassName("enemy")[i].style.left = (parseFloat(document.getElementsByClassName("enemy")[i].style.left) + 0.1).toString() + "vmin";
			}
			enemyplayercollision = Graphical.directionalCollision(document.getElementsByClassName("enemy")[i], document.getElementById("player"));
			if (enemyplayercollision == "top") {
				document.getElementsByClassName("enemy")[i].remove();
				i -= 1;
				velocity_up = 1;
				tempscore += 100;
			}
			else if (enemyplayercollision == "left" || enemyplayercollision == "right" || enemyplayercollision == "bottom") {
				player_touching_enemy = true;
				break;
			}
		}
		i++;
	}
}