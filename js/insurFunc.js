// VARIABLES

var getQuoteButton = document.getElementById("getQuote");
var crossButton = document.getElementById("cross");
var calcButton = document.getElementById("calculate");
var resetButton = document.getElementById("reset");
var c = document.getElementById("calculation");




// DISPLAY FUNCTIONS

function resetFunc(){
	resetButton.click();
}

function showCalc(){
	c.style.display = "block";
	getQuoteButton.style.visibility = "hidden";
}

function hideCalc(){
	c.style.display = "none";
	getQuoteButton.style.visibility = "initial";
	resetFunc();
}

function getVal(){
	var name = document.forms["formular"]["name"].value;
	var age = parseInt(document.forms["formular"]["age"].value);
	var horse = parseInt(document.forms["formular"]["horse"].value);
	var country = document.forms["formular"]["country"].value;
	resetFunc();
	calculateInsurance(horse, age, name, country);
}

function calculateInsurance(hp, a, n, c){
	var insuranceTotal = 0;
	var msg = n + ", your insurance would cost in total: EUR ";
	if (c == "AU"){
		insuranceTotal = (hp * 100) / a + 50;
	}
	else if (c == "HU"){
		insuranceTotal = (hp * 120) / a + 100;
	}
	else if (c == "GR"){
		insuranceTotal = (hp * 150) / (a+3) + 50;
	}	
	document.getElementById("resultMSG").innerText = (msg + insuranceTotal.toFixed(2));
}


// EVENTS

calcButton.addEventListener("click", getVal);
getQuoteButton.addEventListener("click", showCalc);
crossButton.addEventListener("click", hideCalc);
