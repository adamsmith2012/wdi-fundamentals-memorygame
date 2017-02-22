var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if(cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
*/

var createCards = function() {
	var gameBoard = document.getElementById('main-board');

	for(var i=0; i < 4; i++) {
		var newItem = document.createElement('div');
		newItem.className = "card";
		gameBoard.appendChild(newItem);
	}
}

createCards();