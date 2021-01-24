
map = {};

playerpos = [];
velocity_up = 0;
scroll_pos = 0;
jumping = 0;
level_on = 1;
finalscore = 0;
tempscore = 0;

draw_level(levels[level_on - 1]);
scoreboard = Graphical.drawRect(document.getElementById("gamescreen"), "scoreboard", 100, 0, 50, 0);
scoreboard.style.zIndex = "3";
scoreboard.style.fontFamily = "Trebuchet MS";
scoreboard.style.fontSize = "5vmin";
scoreboard.style.whiteSpace = "pre";
scoreboard.style.userSelect = "none";
scoreboard.innerText = " SCORE: " + tempscore.toString();

function main() {

	onkeydown = onkeyup = function(e){
		e = e || event;
		map[e.keyCode] = e.type == 'keydown';
	}
	
	sensing = detect_sensing();
	
	enemyscript();
	
	if (map[39]) {
		if (playerpos[0] < document.getElementById("scrollscreen").style.width.split("vmin")[0] - 5) {
			if (!(sensing.touching_block_left)) {
				if (map[90]) {
					if (sensing.touching_water == false) {
						playerpos[0] += 0.4;
						if (playerpos[0] - scroll_pos > 50 && scroll_pos > -(parseFloat(document.getElementById("scrollscreen").style.width.split("vmin")[0]) - 100)) {
							scroll_pos -= 0.4;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
					else {
						playerpos[0] += 0.2;
						if (playerpos[0] - scroll_pos > 50 && scroll_pos > -(parseFloat(document.getElementById("scrollscreen").style.width.split("vmin")[0]) - 100)) {
							scroll_pos -= 0.2;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
				}
				else {
					if (sensing.touching_water == false) {
						playerpos[0] += 0.2;
						if (playerpos[0] - scroll_pos > 50 && scroll_pos > -(parseFloat(document.getElementById("scrollscreen").style.width.split("vmin")[0]) - 100)) {
							scroll_pos -= 0.2;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
					else {
						playerpos[0] += 0.1;
						if (playerpos[0] - scroll_pos > 50 && scroll_pos > -(parseFloat(document.getElementById("scrollscreen").style.width.split("vmin")[0]) - 100)) {
							scroll_pos -= 0.1;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
				}
			}
		}
	}
				
	if (map[37]) {
		if (playerpos[0] > 5) {
			if (!(sensing.touching_block_right)) {
				if (map[90]) {
					if (sensing.touching_water == false) {
						playerpos[0] -= 0.4;
						if (playerpos[0] + scroll_pos < 50 && scroll_pos < 0) {
							scroll_pos += 0.4;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
					else {
						playerpos[0] -= 0.2;
						if (playerpos[0] + scroll_pos < 50 && scroll_pos < 0) {
							scroll_pos += 0.2;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
				}
				else {
					if (sensing.touching_water == false) {
						playerpos[0] -= 0.2;
						if (playerpos[0] + scroll_pos < 50 && scroll_pos < 0) {
							scroll_pos += 0.2;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
					else {
						playerpos[0] -= 0.1;
						if (playerpos[0] + scroll_pos < 50 && scroll_pos < 0) {
							scroll_pos += 0.1;
							document.getElementById("scrollscreen").style.left = scroll_pos.toString() + "vmin";
						}
					}
				}
			}
		}
	}
	
	if (map[88] && !(sensing.touching_block_top)) {
		if (sensing.touching_water == false && sensing.touching_block_bottom) {
			velocity_up = 1.5;
			jumping = 1;
			SFX.playsound("jump.wav");
		}
		else if (sensing.touching_water) {
			velocity_up = 0.1;
			jumping = 1;
			//SFX.playsound("jump.wav");
		}
	}

	if (sensing.touching_block_top && sensing.touching_block_bottom != true) {
		velocity_up = -0.75;
	}
	
	if (sensing.touching_block_bottom == false) {
		if (sensing.touching_water == false) {
			velocity_up = velocity_up - 0.03;
		}
		else {
			velocity_up = velocity_up - 0.001;
		}
	} else { if ( jumping != 1 ) { velocity_up = 0; } else { jumping = 0; } }
	
	playerpos[1] -= velocity_up;
		
	Graphical.drawRect(document.getElementById("scrollscreen"), "player", 10, 10, playerpos[0], playerpos[1], "DarkOrchid");
	
	document.getElementById("scoreboard").innerText = " SCORE: " + tempscore.toString();

	if (playerpos[1] > 95 || sensing.touching_lava || player_touching_enemy) {
		document.getElementById("scrollscreen").remove();
		player_touching_enemy = false;
		playerpos = [];
		velocity_up = 0;
		scroll_pos = 0;
		jumping = 0;
		tempscore = 0;
		draw_level(levels[level_on - 1]);
		SFX.playsound("deathsfx.mp3");
	}
	
	if (playerpos[0] >= parseFloat(document.getElementById("scrollscreen").style.width) - 5) {
		document.getElementById("scrollscreen").style.animation = "fadeout 1s";
		document.getElementById("scrollscreen").style.opacity = "0";
		level_on++;
		finalscore += tempscore;
		if (level_on > levels.length) {
			setTimeout(function() {
				document.getElementById("scrollscreen").remove();
				player_touching_enemy = false;
				setTimeout(winscreen, 1000);
				SFX.stopmusic();
			}, 1600);
		}
		else {
			setTimeout(function() {
				document.getElementById("scrollscreen").remove();
				player_touching_enemy = false;
				playerpos = [];
				velocity_up = 0;
				scroll_pos = 0;
				jumping = 0;
				tempscore = 0;
				draw_level(levels[level_on - 1]);
				setTimeout(main, 1);
			}, 1600);
		}
	}
	else {
		setTimeout(main, 1);
	}
}
//alert("arrow keys to walk, x to jump, hold down z to run");
main();