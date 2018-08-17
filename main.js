
$(document).ready( startApp );

var sim;
function startApp(){
	sim = new Deck();
	var suites = ['heart','club','spade','diamond'];
	var values = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
	for(suite_index = 0; suite_index < suites.length; suite_index++){
		for(values_index = 0; values_index < values.length; values_index++){
			sim.makeCard(values[values_index], suites[suite_index]);
		}
	}
	sim.shuffle();
}