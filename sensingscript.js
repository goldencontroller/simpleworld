function detect_sensing() {
	out = {
		touching_block_top: false,
		touching_block_bottom: false,
		touching_block_left: false,
		touching_block_right: false,
		touching_lava: false,
		touching_water: false
	}
	for (block of document.getElementsByClassName("block")) {
		// only scan for what you need
		if (parseInt(block.style.left) >= playerpos[0] - 15 && parseInt(block.style.left) <= playerpos[0] + 5 && parseInt(block.style.top) >= playerpos[1] - 15 && parseInt(block.style.top) <= playerpos[1] + 5) {
			rect_collide = Graphical.directionalCollision(document.getElementById("player"), block);
			if (rect_collide == "left") {
				out.touching_block_left = true;
				playerpos[0] = parseInt(block.style.left.split("vmin")) - 5;
			}
			else if (rect_collide == "right") {
				out.touching_block_right = true;
				playerpos[0] = parseInt(block.style.left.split("vmin")) + 15;
			}
			else if (rect_collide == "top") {
				out.touching_block_top = true;
				playerpos[1] = parseInt(block.style.top.split("vmin")) + 15;
			}
			else if (rect_collide == "bottom") {
				out.touching_block_bottom = true;
				playerpos[1] = parseInt(block.style.top.split("vmin")) - 5;
				break;
			}
		}
	}
	for (coin of document.getElementsByClassName("coin")) {
		if (parseInt(coin.style.left) >= playerpos[0] - 15 && parseInt(coin.style.left) <= playerpos[0] + 5 && parseInt(coin.style.top) >= playerpos[1] - 15 && parseInt(coin.style.top) <= playerpos[1] + 5) {
			if (Graphical.rectCollision(document.getElementById("player"), coin)) {
				coin.remove();
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				SFX.playsound("coinsfx.mp3");
				tempscore += 100;
			}
		}
	}
	for (lava of document.getElementsByClassName("lava")) {
		if (parseInt(lava.style.left) >= playerpos[0] - 15 && parseInt(lava.style.left) <= playerpos[0] + 5 && parseInt(lava.style.top) >= playerpos[1] - 15 && parseInt(lava.style.top) <= playerpos[1] + 5) {
			if (Graphical.rectCollision(document.getElementById("player"), lava)) {
				out.touching_lava = true;
			}
		}
	}
	for (water of document.getElementsByClassName("water")) {
		//if (parseInt(water.style.left) >= playerpos[0] - 15 && parseInt(water.style.left) <= playerpos[0] + 5 && parseInt(water.style.top) >= playerpos[1] - 15 && parseInt(water.style.top) <= playerpos[1] + 5) {
			if (Graphical.rectCollision(document.getElementById("player"), water)) {
				out.touching_water = true;
			}
		//}
	}
	return out;
}