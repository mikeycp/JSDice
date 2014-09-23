//Dice Functions


function rollDFate() {
var D6;
var fudge;
var nDf = new Array(4);

	for(var x = 0; x<4; x++) {
	
	D6 = Math.floor(Math.random() * 6) + 1;
		if(D6 === 1 || D6 === 2) {
			fudge = '-';
		} else if(D6 === 3 || D6 === 4) {
			fudge = "blank";
		} else {
			fudge = "+";
		}//if -- conversion to fudge dice
	
		nDf[x] = fudge;
	}//for
	
	console.log("Fudge: You rolled [" + nDf + "]");
}//rollDfate()

function rollnDx(numRoll, numSides) {
	var Dx;
	var nDx = new Array(numRoll);
	var numRoll;

	for(var x = 0; x<numRoll; x++) {
		var Dx = Math.floor(Math.random() * numSides) + 1;
		nDx[x] = Dx;
	}//for

	console.log(numRoll + "D" + numSides + ": You rolled [" + nDx + "]" );
}//rollnDx(numRoll, numSides)

/*function rollD4(numRoll) {
var D4 = Math.round(Math.random() * 3) + 1;
var nDx = new Array(numRoll);
var numRoll;

for(var x = 0; x<numRoll; x++) {
	var D4 = Math.round(Math.random() * 3) + 1;
	nDx[x] = D4;
}

console.log(numRoll + "D4: You rolled [" + nDx + "]" );
}

function rollD6() {
var D6 = Math.round(Math.random() * 6);

	if(D6 === 0) {
		D6 = Math.round(Math.random() * 6);
	}
	
	console.log("D6: You rolled a " + D6);
}

function rollD10() {
var D10 = Math.round(Math.random() * 10);

	if(D10 === 0) {
		D10 = Math.round(Math.random() * 10);
	}
	
	console.log("D10: You rolled a " + D10);
}

function rollD12() {
var D12 = Math.round(Math.random() * 12);

	if(D12 === 0) {
		D12 = Math.round(Math.random() * 12);
	}
	
	console.log("D12: You rolled a " + D12);
}

function rollD20() {
var D20 = Math.round(Math.random() * 20);

		if(D20 === 0) {
			D20 = Math.round(Math.random() * 20);
		}
	
	console.log("D20: You rolled a " + D20);
}

function rollD100() {
var D100 = Math.round(Math.random() * 100);

	if(D100 === 0) {
			D100 = Math.round(Math.random() * 100);
	}
	
	console.log("D100: You rolled a " + D100);
}*/

rollDFate();
rollnDx(50,7);
rollnDx(50,2);
rollnDx(50,20);
rollnDx(20,20);
/*rollD4(5);
rollD6();
rollD10();
rollD12();
rollD20();
rollD100();*/