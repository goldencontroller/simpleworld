function winscreen() {
		SFX.playsound("win.mp3");
		document.getElementById("scoreboard").remove();
		endscreen = Graphical.drawRect(document.getElementById("gamescreen"), "endscreen", 100, 100, 50, 50, "");
		endscreen.style.backgroundImage = "linear-gradient(deepskyblue, skyblue)";
		endtext = Graphical.drawRect(endscreen, "endtext", 100, 0, 50, 0);
		endtext.style.fontFamily = "Nunito";
		endtext.style.lineHeight = "8vmin";
		endtext.style.textAlign = "center";
		endtext.innerHTML = "<span style='font-size: 10vmin;'><br/>You made it!<br/>Final score: " + finalscore.toString() + "</span>";
		Graphical.drawRect(endscreen, "floor_deco", 100, 10, 50, 95, "green");
		Graphical.drawRect(endscreen, "player_deco", 10, 10, 15, 85, "DarkOrchid");
		setTimeout(function() {
			endscreen.style.animation = "fadeout 1s";
			endscreen.style.opacity = "0";
			setTimeout(function() {
				endscreen.remove();
				SFX.playmusic("soundtrack/POL-open-sky-short.wav");
				document.getElementById("musicfromsfxlibrary___plznocopyhtsidnameplzzz").volume = 0.2;
				stahtskreen = Graphical.drawRect(document.getElementById("gamescreen"), "startscreen", 100, 100, 50, 50, "");
				stahtskreen.style.backgroundImage = "linear-gradient(deepskyblue, skyblue)";
				mainmenutext = Graphical.drawRect(stahtskreen, "mainmenutext", 100, 0, 50, 0);
				mainmenutext.style.fontFamily = "Nunito";
				mainmenutext.style.lineHeight = "8vmin";
				mainmenutext.style.textAlign = "center";
				mainmenutext.innerHTML = "<span style='font-size: 15vmin;'><br/>Simple<br/>World<br/><br/></span><span id='selection0' style='font-size: 6vmin; color: grey;'>New Game</span><br/><span id='selection1' style='font-size: 6vmin;'>Controls</span><br/><span id='selection2' style='font-size: 6vmin;'>Credits</span>";
				Graphical.drawRect(stahtskreen, "floor_deco", 100, 10, 50, 95, "green");
				Graphical.drawRect(stahtskreen, "player", 10, 10, 15, 85, "DarkOrchid");
				document.addEventListener("keydown", keyfunc);
				mainmenu();
			}, 1000);
		}, 10000);
}