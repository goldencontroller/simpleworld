
function draw_level(level) {
	level_split = level.split("\n");
	scrollscreen = document.createElement("DIV");
	scrollscreen.style.top = "0vmin"; scrollscreen.style.left = "0vmin";
	scrollscreen.style.width = (10 * level_split[1].length) + "vmin"; scrollscreen.style.height = "100vmin";
	//scrollscreen.style.backgroundColor = "skyblue";
	scrollscreen.style.backgroundImage = "linear-gradient(deepskyblue, skyblue)";
	scrollscreen.style.position = "absolute";
	scrollscreen.id = "scrollscreen";
	scrollscreen.style.opacity = "0";
	document.getElementById("gamescreen").appendChild(scrollscreen);
	if (level_on > 3 && level_on < 7) {
		bigwater = document.createElement("DIV");
		bigwater.style.top = "5vmin"; bigwater.style.left = "0vmin";
		bigwater.style.width = (10 * level_split[1].length) + "vmin"; bigwater.style.height = "95vmin";
		bigwater.style.backgroundColor = "DarkCyan";
		bigwater.style.position = "absolute";
		bigwater.setAttribute("class", "water");
		document.getElementById("scrollscreen").appendChild(bigwater);
	}
	for (r = 0; r < level_split.length; r++) {
		if (level_split[r] != "") {
			for (c = 0; c < level_split[r].length; c++) {
				if (level_split[r][c] == "@") {
					Graphical.drawRect(document.getElementById("scrollscreen"), "player", 10, 10, c * 10 + 5, r * 10 + 5, "DarkOrchid");
					playerpos = [c * 10 + 5, r * 10 + 5]
				}
				else if (level_split[r][c] == "#") {
					block = Graphical.drawRect(document.getElementById("scrollscreen"), "block", 10, 10, c * 10 + 5, r * 10 + 5, "green");
					block.removeAttribute("id");
					block.setAttribute("class", "block");
				}
				else if (level_split[r][c] == "$") {
					coin = Graphical.drawEllipse(document.getElementById("scrollscreen"), "block", 3, 3, c * 10 + 5, r * 10 + 5, "gold");
					coin.removeAttribute("id");
					coin.setAttribute("class", "coin");
				}
				else if (level_split[r][c] == "X") {
					lava = Graphical.drawRect(document.getElementById("scrollscreen"), "block", 10, 10, c * 10 + 5, r * 10 + 5, "red");
					lava.removeAttribute("id");
					lava.setAttribute("class", "lava");
				}
				else if (level_split[r][c] == "W") {
					water = Graphical.drawRect(document.getElementById("scrollscreen"), "block", 10, 10, c * 10 + 5, r * 10 + 5, "DarkCyan");
					water.removeAttribute("id");
					water.setAttribute("class", "water");
				}
				else if (level_split[r][c] == ">") {
					enemy = Graphical.drawRect(document.getElementById("scrollscreen"), "block", 10, 10, c * 10 + 5, r * 10 + 5, "Crimson");
					enemy.removeAttribute("id");
					enemy.setAttribute("class", "enemy");
					enemy.dataset.facing_left = true;
				}
				else if (level_split[r][c] == "|") {
					clip = Graphical.drawRect(document.getElementById("scrollscreen"), "block", 10, 10, c * 10 + 5, r * 10 + 5, "");
					clip.removeAttribute("id");
					clip.setAttribute("class", "enemyclip");
				}
				else if (level_split[r][c] == "C") {
					block = Graphical.drawRect(document.getElementById("scrollscreen"), "block", 10, 10, c * 10 + 5, r * 10 + 5, "");
					block.removeAttribute("id");
					block.setAttribute("class", "block");
					cloudsprite = Graphical.drawEllipse(document.getElementById("scrollscreen"), "sprite", 7.5, 7.5, c * 10 + 5, r * 10 + 5, "white");
					cloudsprite.style.zIndex = "5";
					cloudsprite.removeAttribute("id");
				}
			}
		}
	}
	scrollscreen.style.animation = "fadein 1s";
	scrollscreen.style.opacity = "1";
	if (level_on > 0 && level_on < 4) {
		SFX.playmusic("soundtrack/POL-rainbow-puzzle-short.wav");
	}
	else if (level_on > 3 && level_on < 7) {
		SFX.playmusic("soundtrack/POL-water-drops-short.wav");
	}
	else if (level_on > 6 && level_on < 10) {
		SFX.playmusic("soundtrack/POL-open-sky-short.wav");
	}
	document.getElementById("musicfromsfxlibrary___plznocopyhtsidnameplzzz").volume = 0.2;
}