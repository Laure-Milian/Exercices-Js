(function() { 

	var Player;
	var Computer;
	var Score;
	var Tentatives = 0;

	var TentativesMax = prompt("Choisir un nombre de vies");
	console.log(TentativesMax);

	var min = prompt("Choisir nombre min");
	console.log(min);

	var max = prompt("Choisir nombre max");
	console.log(max);

	$("#valider").click(function() {
		Player = parseInt($("#player").val(), 10);
		Computer = getRandomInt(min, max);
		Tentatives = Tentatives + 1;

		if (Tentatives <= TentativesMax) {
			Jeu(Player, Computer);
		}
		else {
			$("h2").html("Game over!");
			$("h3").html("");
		}
	});

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function Jeu(Player, Computer) {

		if (Player === Computer) {
			$("h2").html("Gagné !");
			$("h3").html("Votre nombre : " + Player + " Nombre de l'ordinateur : " + Computer);
		} 
		else {
			$("h2").html("Perdu !");
			$("h3").html("Votre nombre : " + Player + " Nombre de l'ordinateur : " + Computer);
		}

	};

})();