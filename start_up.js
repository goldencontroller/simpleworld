Graphical.drawImg(document.getElementById("gamescreen"), "logoimage", 100, 100, 50, 50, "logoimage.jpg");
count = 0;
keyfunc = function(){ k = event.key; };
k = "";
selection = 0;
function intro() {
	
	if ( count < 2020 ) {
		count++;
		setTimeout(intro, 1);
	}
	else {
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
		document.getElementById("logoimage").remove();
	}
	
}
function actuallyStartTheGame() {
	document.removeEventListener("keydown", keyfunc);
	document.getElementById("startscreen").remove();
	var mainscript = document.createElement("script");
	mainscript.src = "main.js";
	SFX.stopmusic();
	document.body.appendChild(mainscript);
}
function controlsscreen() {
	if (k == "Enter") {
		k = "";
		mainmenutext.innerHTML = "<span style='font-size: 15vmin;'><br/>Simple<br/>World<br/><br/></span><span id='selection0' style='font-size: 6vmin;'>New Game<br/></span><span id='selection1' style='font-size: 6vmin; color: grey;'>Controls<br/></span><span id='selection2' style='font-size: 6vmin;'>Credits</span>";
		mainmenu();
	}
	else { setTimeout(controlsscreen, 1); }
}
function creditsscreen() {
	if (k == "Enter") {
		k = "";
		mainmenutext.innerHTML = "<span style='font-size: 15vmin;'><br/>Simple<br/>World<br/><br/></span><span id='selection0' style='font-size: 6vmin;'>New Game<br/></span><span id='selection1' style='font-size: 6vmin;'>Controls<br/></span><span id='selection2' style='font-size: 6vmin; color: grey;'>Credits</span>";
		mainmenu();
	}
	else { setTimeout(creditsscreen, 1); }
}
function mainmenu() {
	if (k == "Enter") {
		k = "";
		if (selection == 0) {
			document.getElementById("startscreen").style.animation = "fadeout 1s";
			document.getElementById("startscreen").style.opacity = "0";
			setTimeout(actuallyStartTheGame, 999);
		}
		
		else if (selection == 1) {
			mainmenutext.innerHTML = "<span style='font-size: 5vmin;'><br/><br/>Arrow keys to walk<br/>Hold down Z to run<br/>X to jump<br/><br/><span style='color: grey;'>Return to menu</span></span>";
			controlsscreen();
		}
		else if (selection == 2) {
			mainmenutext.innerHTML = "<span style='font-size: 5vmin;'><br/><br/>Developed by Yikuan Sun<br/>Graphics design by no one lol 'cause there are none<br/>Background music from PlayOnLoop.com<br/>Licensed under Creative Commons by Attribution 4.0<br/><br/><span style='color: grey;'>Return to menu</span></span>";
			creditsscreen();
		}
	}
	else {
		setTimeout(mainmenu, 1);
	}
	if (k == "ArrowDown" && selection < 2) {
		k = "";
		document.getElementById("selection" + selection.toString()).style.color = "black";
		selection++;
		document.getElementById("selection" + selection.toString()).style.color = "grey";
	}
	else if (k == "ArrowUp" && selection > 0) {
		k = "";
		document.getElementById("selection" + selection.toString()).style.color = "black";
		selection -= 1;
		document.getElementById("selection" + selection.toString()).style.color = "grey";
	}
}
intro();