//es6
class Card{
	constructor(value, suite){
		this.value = value;
		this.suite = suite;
		this.domElements = {};
	}
	render(){
		var translationTable = {
			'heart': '&hearts;',
			'club': '&clubs;',
			'spade': '&spades;',
			'diamond' : '&diams;'
		}
/*
<div class="card">
	<div class="value">A</div>
	<div class="suite">&hearts;</div>
</div>
*/

		this.domElements.card = $("<div>",{
			'class': 'card'
		});
		this.domElements.value = $("<div>",{
			'class': 'value',
			text: this.value
		});
		this.domElements.suite = $("<div>",{
			'class': 'suite',
			html: translationTable[this.suite]
		});
		this.domElements.suite.css('color','red');
		this.domElements.card.append(this.domElements.value, this.domElements.suite);
		return this.domElements.card;
	}
}












