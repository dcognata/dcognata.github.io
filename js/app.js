moment.locale("fr");

window.addEventListener("load", function() {
	document.getElementById("age").innerHTML = moment().diff("1996-10-06", 'y');
	document.body.style.opacity = 1;
}, false);

var Ui = {
	galadrimContent: false,
	cremedelacremeContent: false,
	cimesContent: false,

	toggleExperience: function(element, content) {
		this[content] = !this[content];
		if (this[content]) {
			document.getElementById(content).classList.add("active");
			element.value = "RÉDUIRE";
		}
		else {
			document.getElementById(content).classList.remove("active");
			element.value = "EN SAVOIR PLUS";
		}
	}
};
