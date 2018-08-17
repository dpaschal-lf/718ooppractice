
class Deck{
	constructor(){
		this.cards = [];
	}
	makeCard(value, suite){
		var newCard = new Card(value, suite);
		this.cards.push(newCard);
	}
	shuffle(){
		var newCards = [];
		while(this.cards.length){
			var randomIndex = Math.floor(this.cards.length * Math.random());
			newCards.push( this.cards.splice(randomIndex,1)[0]);
		}
		this.cards = newCards;
	}
	deal(){
		return this.cards.pop()
	}
	add(newCard){
		debugger;
		if(newCard.constructor === Card){
			this.cards.push(newCard);
		} else {
			console.error('can only add cards');
		}
	}
}
















