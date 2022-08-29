function updateAge() {
	var age = -1
	var currentdate = new Date();
	var year = currentdate.getFullYear();
	var month = currentdate.getMonth();
	var day = currentdate.getDay();

	if (month == 12) {
		if (day > 20) {
			age = year - 2000;
		}
	} else {
		age = year - 2001;
	}

	document.getElementById("age-tag").innerHTML = age;
}

function printAge()  {
	alert("Dave is " + document.getElementById("age-tag").textContent + " years old.");
}

function newTab() {
	window.open("https://www.linkedin.com/in/matt-burseth-profile/", "_blank");
}

function changePage() {
	window.location.replace("about-me.html");
}

function changeToHomePage() {
	window.location.replace("index.html");
}
