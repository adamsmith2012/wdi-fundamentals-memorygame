
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
	var gameBoard = document.getElementById('main-board');

	for(var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

var isMatch = function(cards) {

	if(cards[0] === cards[1]) {
		alert("The cards match!");
	}
	else {
		alert("The cards don't match!");
	}

	resetBoard();
}

var resetBoard = function() {

	var cards = document.getElementsByClassName('card');

	for(var i=0; i < cards.length; i++) {
		cards[i].innerHTML = "";
	}

}

//checks to see if there are cards in play
var isTwoCards = function() {

	if(this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png" alt="king">';
	}
	else {
		this.innerHTML = '<img src="queen.png" alt="queen">';
	}

	// add card to array of cards in play
	cardsInPlay.push(this.getAttribute('data-card'));

	// if you have two cards in play, check for a match
	if (cardsInPlay.length === 2) {

	    // pass the cardsInPlay as an argument to the isMatch function
	    isMatch(cardsInPlay);

	    // clear cards in play array for your next try
	    cardsInPlay = [];
  	
  	}

}

createBoard();