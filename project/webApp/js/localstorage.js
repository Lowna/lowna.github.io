var profileEmail = document.getElementById('profileEmail');
var profilePublic = document.getElementById('profilePublic');
var timezoneOffset = document.getElementById('timezone-offset');

window.addEventListener('load', function (event) {
    if(localStorage.getItem('profileEmail') == 'true') {
    	profileEmail.classList.add('active')
    }
     if(localStorage.getItem('profilePublic') == 'true') {
    	profilePublic.classList.add('active')
    }
   	timezoneOffset.value = localStorage.getItem('timezoneOffset')
});
profileEmail.addEventListener('click', function() {
	if(profileEmail.classList.contains('active')) {
		localStorage.setItem('profileEmail', false)
	} else {
		localStorage.setItem('profileEmail', true)
	}
	profileEmail.classList.toggle('active')
})
profilePublic.addEventListener('click', function() {
	if(profilePublic.classList.contains('active')) {
		localStorage.setItem('profilePublic', false)
	} else {
		localStorage.setItem('profilePublic', true)
	}
	profilePublic.classList.toggle('active')
})
timezoneOffset.addEventListener('change', function() {
	localStorage.setItem('timezoneOffset', this.value)
})
