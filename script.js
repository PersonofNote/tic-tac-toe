const gameBoard = (() => {
var spots = [];
var gameController;
/* Where I'm at: I need to loop through the array but that means I have to push stuff to the array to begin with.
alkdghlkaghlkasgd
*/

for (var i = 0; i < 8; i++) {
    var newSpot = document.createElement('div');
    newSpot.id = i; 
    newSpot.className = "spot";
    newSpot.dataset.isClear = 'true';
    //newSpot.innerHTML = spots[i].value;
    newSpot.innerHTML = spots[i];
    document.getElementById("game-container").appendChild(newSpot);
     newSpot.addEventListener('click', function() { var clickId = this.id; pickSpot(clickId); return clickId; } )
    console.log(newSpot.id);
   
    //console.log(newSpot.value);
} 
return spots;
console.log(spots);
})();

function player(name,mark,isTurn) {
	this.name = name;
	this.mark = mark;
	this.isTurn = isTurn;
}

var playerOne = new player('Joe', 'X', true);
var playerTwo = new player('Susan', 'O', false);



function pickSpot(clicked) {
	var currentSpot = document.getElementById(clicked);
	var toMark;
	if (currentSpot.dataset.isClear == 'true') {
	if (playerOne.isTurn == true) {
		toMark = "X";
		document.getElementById("turnDisplay".innerHTML = "Player Two's Turn.")
		playerOne.isTurn = false;
		playerTwo.isTurn = true;
	}
	else if (playerTwo.isTurn == true) {
		toMark = "O";
		document.getElementById("turnDisplay".innerHTML = "Player One's Turn.")
		playerTwo.isTurn = false;
		playerOne.isTurn = true;
	}
	currentSpot.innerHTML = toMark;
	currentSpot.dataset.isClear = 'false';
	console.log(gameBoard);
	}
	else if (currentSpot.dataset.isClear == 'false') {
		return;
	}
	}

function newGame() {
for (var i = 0; i < spots.length; i++)
{
	var spot = document.getElementById(i);
	spot.innerHTML = " ";
	spot.dataset.isClear = "true";
}
}

/*
 Need: Two players.
 One game board.
 One display controller.

*/