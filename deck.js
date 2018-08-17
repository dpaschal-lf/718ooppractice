

class Deck{
	constructor(){
		this.cards = [];
	}
	makeCard(value, suite){
		var newCard = new Card(value, suite);
		this.cards.push(newCard);
	}
}