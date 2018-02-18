const gameBoard = (() => {
	const spots = [".", ".",".",".",".",".",".",".","."];
var gameController;

for (var i = 0; i < spots.length; i++) {
    var newSpot = document.createElement('div');
    newSpot.id = i; 
    newSpot.className = "spot";
    newSpot.dataset.isClear = 'true';
    //newSpot.innerHTML = spots[i].value;
    newSpot.innerHTML = spots[i];
    document.getElementById("game-container").appendChild(newSpot);
     newSpot.addEventListener('click', function() { var clickId = this.id; play(clickId); return clickId; } )
    console.log(newSpot.id);
    //console.log(newSpot.value);
} 
return spots;
})();

function player(name,mark,isTurn) {
	this.name = name;
	this.mark = mark;
	this.isTurn = isTurn;
}

var playerOne = new player('Joe', 'X', true);
var playerTwo = new player('Susan', 'O', false);


console.log(playerOne);

function play(clicked) {
	var currentSpot = document.getElementById(clicked);
	var toMark;
	console.log(currentSpot.dataset.isClear);
	if (currentSpot.dataset.isClear == 'true') { console.log("I'm true!");
	if (playerOne.isTurn == true) {
		toMark = "X";
		document.getElementById("turnDisplay".innerHTML = "Player Two's Turn.")
		playerOne.isTurn = false;
		playerTwo.isTurn = true;
		
	}
	else if (playerTwo.isTurn == true) {
		toMark = "O";
		playerTwo.isTurn = false;
		playerOne.isTurn = true;
	}
	currentSpot.innerHTML = toMark;
	currentSpot.dataset.isClear = 'false';
	console.log(currentSpot.dataset)
	//console.log("Spot " + currentSpot.id + "is now full.");
	//console.log("Because isClear = " + currentSpot.dataset.isClear);
	
	}
	else if (currentSpot.dataset.isClear == 'false') {
		console.log("This spot is full.");
		return;
	}
	
	
}

/*
 Need: Two players.
 One game board.
 One display controller.

*/