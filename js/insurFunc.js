// VARIABLES

var getQuoteButton = document.getElementById("getQuote");
var crossButton = document.getElementById("cross");
var calcButton = document.getElementById("calculate");
var resetButton = document.getElementById("reset");
var c = document.getElementById("calculation");




// DISPLAY FUNCTIONS

function resetFunc(){
	resetButton.click();
	document.getElementById("resultMSG").innerHTML = "Printed calculation goes hier";
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
	var cond = `<p id="conditions">All statements are subject to the terms, exclusions and conditions of the applicable policy. In all instances current policy contract language prevails. Products, services and discounts referenced herein are not available in all states or in all underwriting companies. Furthermore, the products and prices of our various CF Insurance business segments differ. Coverage is subject to individual policyholders meeting the applicable underwriting qualifications and state availability. Other terms, conditions and exclusions may apply.</p>`;
	if ( isNaN(hp) || isNaN(a) || n == ""){
		alert("Some fields are empty. Sorry, we need full information to quote.");
	}
	else{
		if (a < 18){
			alert("Sorry, you are too young for an insurance.");
		}
		else{

			if (c == "AU"){
				insuranceTotal = (hp * 100) / a + 50;
			}
			else if (c == "HU"){
				insuranceTotal = (hp * 120) / a + 100;
			}
			else if (c == "GR"){
				insuranceTotal = (hp * 150) / (a+3) + 50;
			}	
			document.getElementById("resultMSG").innerHTML = (msg + insuranceTotal.toFixed(2)+cond);
		}
	}	
}


// EVENTS

calcButton.addEventListener("click", getVal);
getQuoteButton.addEventListener("click", showCalc);
crossButton.addEventListener("click", hideCalc);
