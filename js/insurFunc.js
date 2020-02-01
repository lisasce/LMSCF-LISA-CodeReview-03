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



var teamMembers = JSON.parse(team);
console.log(teamMembers.length);
for (i=0; i < teamMembers.length ; i++){
	var member = `
				<div class="teamSMALL" id="smallDIVmember${i}">
	        		<img  src="../img/${teamMembers[i].pic}" alt="member">
	        		<p>member ${teamMembers[i].firstName}</p>
        		</div>

        		<div class="teamBIG" id="bigDIVmember${i}">
	        		<div>
	        			<img  src="../img/${teamMembers[i].pic}" alt="member">
	        		</div>

	        		<div>
		        		<p>Details about:
		        			<ul>
			        			<li>${teamMembers[i].firstName}</li>
			        			<li>${teamMembers[i].lastName}</li>
			        			<li>${teamMembers[i].email}</li>
			        			
		        			</ul>
		        		</p>
		        	</div>
        		</div>
	`;
	document.getElementById("content").innerHTML += member;
}



function showTeamBIG(i){
	console.log(item);
	big = document.getElementById("bigDIVmember"+i);
	big.style.display = "flex";

}

function hideTeamBIG(i){
	big = document.getElementById("bigDIVmember"+i);
	big.style.display = "none";

}


var smallDIVmember = document.getElementsByClassName("smallDIVmember");
console.log(smallDIVmember);
for (i=0; i< smallDIVmember.length; i++){
	smallDIVmember[i].setAttribute("onmouseover", "showTeamBIG("+i+")");
	smallDIVmember[i].setAttribute("onmouseout", "hideTeamBIG("+i+")");
}