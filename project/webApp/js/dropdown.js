var shakeBell = document.getElementById('shakeBell');
var dropdownShowing = false;
shakeBell.addEventListener('click', function() {

	var dropdownElement = document.getElementById('dropdown');
	dropdownShowing = !dropdownShowing;
	var circle = document.getElementById("circle").setAttribute("fill", "#7477bf");
	if (dropdownShowing == true) {
		
		dropdownElement.style.left = shakeBell.offsetLeft+ 'px';
		dropdownElement.style.display = 'block';
		var header = document.querySelector('.header-container')
		dropdownElement.style.top = header.offsetTop + header.offsetHeight + 'px';
	} else {
		dropdownElement.style.display = 'none';
	}
	
});


