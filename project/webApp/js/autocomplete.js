document.getElementById('user').addEventListener('keyup', function () {
	var resultsElement = document.getElementById('autoCompleteResults');
	if (this.value !== '') {
		var userNames = [
			'Victoria Chambers', 
			'Dale Byrd',
			'Dawn Wood',
			'Dan Oliver' 
		]
		var results = [];
		for(var i = 0; i < userNames.length; i++) {
			if (userNames[i].toLowerCase().includes(this.value.toLowerCase())) {
				results.push(userNames[i])
			}
		}
		resultsElement.innerHTML = '';
		for(var i = 0; i < results.length; i++) {
			var result = document.createElement('li');
			result.innerHTML = results[i];
			result.onclick = function() {
				var user = document.getElementById('user');
				user.value = this.innerHTML
				resultsElement.style.display = 'none';
			}
			resultsElement.appendChild(result);
		}
		resultsElement.style.display = 'block'
	} else {
		resultsElement.style.display = 'none';
	}

});
function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

document.onclick = function(e) {
	var autoComplete = document.getElementById("autoComplete");
	if(!isDescendant(autoComplete, e.target)) {
		var resultsElement = document.getElementById('autoCompleteResults');
		resultsElement.style.display = 'none';
	}

	var dropdownElement = document.getElementById('dropdown');
	var shakeBell = document.getElementById('shakeBell');
	if(!isDescendant(dropdownElement, e.target) && e.target !== shakeBell) {
		dropdownElement.style.display = 'none';
		dropdownShowing = false;
	}
}
