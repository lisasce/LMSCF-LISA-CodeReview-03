var teamMembers = JSON.parse(team);
console.log(teamMembers.length);
for (i=0; i < teamMembers.length ; i++){
	var member = `
				<div class="teamSMALL" id="smallDIVmember${i}">
	        		<a href= "mailto:${teamMembers[i].email}">
	        		<img  src="../img/${teamMembers[i].pic}" alt="member" title="click me to @ me!">
	        		</a>
	        		<p>${teamMembers[i].firstName}</p>
        		</div>

        		<div class="teamBIG" id="bigDIVmember${i}">
	        		<div>
						<a href= "mailto:${teamMembers[i].email}">
	        			<img  src="../img/${teamMembers[i].pic}" alt="member" title="click me to @ me!">
	        			</a>	
	        		</div>

	        		<div class="details">
		        		<p>Details about:
		        			<ul>
			        			<li>First Name: ${teamMembers[i].firstName}</li>
			        			<li>Last Name: ${teamMembers[i].lastName}</li>
			        			<li>E-Mail: ${teamMembers[i].email}</li>
			        			<li>Languages: ${teamMembers[i].languages}</li>
			        			
		        			</ul>
		        		</p>
		        	</div>
        		</div>
	`;
	document.getElementById("content").innerHTML += member;
}



function showTeamBIG(i){
	console.log(i);
	big = document.getElementById("bigDIVmember"+i);
	big.style.display = "flex";
	smallDIVmember = document.getElementsByClassName("teamSMALL");
	for (i=0; i< smallDIVmember.length; i++){
		smallDIVmember[i].style.opacity = "0.5";
	}

}

function hideTeamBIG(i){
	big = document.getElementById("bigDIVmember"+i);
	big.style.display = "none";
	for (i=0; i< smallDIVmember.length; i++){
		smallDIVmember[i].style.opacity = "1";
	}

}


var smallDIVmember = document.getElementsByClassName("teamSMALL");
console.log(smallDIVmember);
for (i=0; i< smallDIVmember.length; i++){
	smallDIVmember[i].setAttribute("onmouseover", "showTeamBIG("+i+")");
	smallDIVmember[i].setAttribute("onmouseout", "hideTeamBIG("+i+")");
}