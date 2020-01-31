function showCalc(){
	c = document.getElementById("calculation");
	getQuoteButton = document.getElementById("getQuote");
	c.style.display = "block";
	getQuoteButton.style.visibility = "hidden";
	}

function hideCalc(){
	c = document.getElementById("calculation");
	getQuoteButton = document.getElementById("getQuote");
	c.style.display = "none";
	getQuoteButton.style.visibility = "initial";
}

getQuoteButton = document.getElementById("getQuote");
getQuoteButton.addEventListener("click", showCalc);

crossButton = document.getElementById("cross");
crossButton.addEventListener("click", hideCalc)