/*
	Class: State
		model that represents a Turing Machine State
*/
var State = function(){
	this.output0 = 0;
	this.output1 = 1;
	this.direction0 = true; //true is away from origin false is towards
	this.direction1 = true;
	this.nextState0 = null;
	this.nextState1 = null;		
};

$(function(){
	$tapeElem = $("#turingTape");
	executeStep();
});
	
//initialize states
var s1 = new State(),
	s2 = new State();

//set up state
var $tapeElem,
	tapeData = ["B"],
	tapePosition = 1;
	
//state configuration
var currState = s1;
	//s1, go to next up to next number
	s1.name = "s1";
	s1.outputB = 1; //mark 1 on 0 and go right
	s1.output0 = 1; //mark 1 on 0 and go right
	s1.output1 = 0;
	s1.directionB = false; //go right after marking a 1
	s1.direction0 = false; //go right after marking a 1
	s1.direction1 = true; //go left after marking a 0
	s1.nextStateB = s2;	
	s1.nextState0 = s2;
	s1.nextState1 = s1;
	
	//s2, go the right
	s2.name = "s2";
	s2.outputB = "B"; //mark B on 0 and go left
	s2.output0 = 0; //mark 1 on 0 and go left
	s2.output1 = 1;
	s2.directionB = true; //go left after marking a B
	s2.direction0 = false; //go left after marking a 1
	s2.direction1 = false; //go right after marking a 0
	s2.nextStateB = s1;	
	s2.nextState0 = s2;
	s2.nextState1 = s2;
	
/*
 * Function: renderTape
 */
function renderTape(){
	$tapeElem.empty();

	for(var i=1; i<tapeData.length; i++){
		var $span = $("<span>"+tapeData[i]+"</span>");
			(i === tapePosition) && $span.addClass("current");
			$tapeElem.append($span);
	}	
}

/*
 * Function: executeStep
 */
function executeStep(){

	console.log(currState.name, tapeData[tapePosition]);		

	if(tapePosition >= tapeData.length){
		tapeData.push("B");
	}

	switch(tapeData[tapePosition]){
		case "B":
				tapeData[tapePosition] = currState.outputB;

				//show state then change
				renderTape();
				tapePosition += (currState.directionB)?1:-1;
				currState = currState.nextStateB;				
				break;		
		case 0:
				tapeData[tapePosition] = currState.output0;

				//show state then change
				renderTape();
				tapePosition += (currState.direction0)?1:-1;
				currState = currState.nextState0;				
				break;
		case 1:
				tapeData[tapePosition] = currState.output1;
				
				//show state then change
				renderTape();
				tapePosition += (currState.direction1)?1:-1;
				currState = currState.nextState1;				
				break;
	}


	console.log(tapeData);
	console.log(tapePosition);
	console.log(currState.name);

	//if there is a next state		
	if(currState){
		setTimeout(function(){
			executeStep();
		}, 250);
	}
};
