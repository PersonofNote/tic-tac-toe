const gameBoard = (() => {
	const spots = [".", ".",".",".",".",".",".",".","."];
var playerOne = new player('Joe', 'X', true);
var playerTwo = new player('Susan', 'O', false);
var gameController;

/*const spots = [
{name: "1", value: "X"},
{name: "2", value: "O"},
{name: "3", value: " X"},
{name: "4", value: ""},
{name: "5", value: "x"},
{name: "6", value: "o"},
{name: "7", value: "x"},
{name: "8", value: "o"},
{name: "9", value: "x"},
];
*/
for (var i = 0; i < spots.length; i++) {
    var newSpot = document.createElement('div');
    newSpot.id = i; 
    newSpot.className = "spot";
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




function play(clicked) {
	document.getElementById(clicked).innerHTML = "X";
}

/*
 Need: Two players.
 One game board.
 One display controller.

*/