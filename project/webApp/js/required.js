var requiredInput = document.getElementById('user');
var requiredText = document.getElementById('topic')

var submit = document.getElementById('messageSubmit');

submit.addEventListener('click', function(e) {
	e.preventDefault();
	var formValid = true;
	var inputAlert = document.getElementById('inputRequired');
	var textAlert = document.getElementById('textfieldRequired');
	if(requiredInput.value == '') {
		formValid = false;
		inputAlert.style.display = 'block';
	} else {
		inputAlert.style.display = 'none';
	}
	if(requiredText.value == '') {
		formValid = false;
		textAlert.style.display = 'block';
	} else {
		textAlert.style.display = 'none';
	}
	if(formValid) {
		alert('message sent')
		requiredInput.value = '';
		requiredText.value = '';
	} else {
		alert('message not sent');
	}
});