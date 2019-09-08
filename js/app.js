window.onload = function(){
	//nav toggle
	var toggleNav = document.getElementById('showHide');

	toggleNav.addEventListener('click', function(e) {
		e.preventDefault();
		var nav = document.getElementById('toggleNav');
		if (nav.style.display === 'none' || nav.style.display === '') {
			nav.style.display = 'flex';
		} else {
			nav.style.display = 'none';
		}
	});
	//portfolio hover
	document.getElementById('portfolio').onmouseover =  function() {
		document.querySelectorAll('.overlay').forEach(function(over) {
			over.style.display = 'none';
		})
	};
	document.querySelectorAll('.port-img').forEach(function(img) {
		img.onmouseover = function(e) {
			e.stopPropagation();
			img.nextSibling.style.display = 'block';
		};

		img.nextSibling.onmouseleave = function(e) {
			e.stopPropagation();
			img.nextSibling.style.display = 'none';
		};
		img.nextSibling.onmouseover = function(e) {
			e.stopPropagation();
		};
	});

	//toggle resume and bio
	var resume = document.getElementById('cv');
	var bio = document.getElementById('bio');

	var toggleInfo = document.getElementById('toggleResume');
	
	toggleInfo.addEventListener('click', function() {
		var resume = document.getElementById('cv');
		var bio = document.getElementById('bio');
		
		if(resume.style.display === 'none' || resume.style.display === '') {
			resume.style.display = 'block';
			bio.style.display = 'none';
			toggleInfo.innerHTML = 'bio'
		} else {
			bio.style.display = 'block';
			resume.style.display = 'none';
			toggleInfo.innerHTML = 'cv';
		}
	});
	//skills 
	function skillAnimation() {
		var skills = document.getElementById('skills');
		if (window.innerHeight + window.scrollY >= skills.offsetTop) {
			document.querySelectorAll('.rect').forEach(function(rect) {
				var skillLevel = rect.dataset.value;
				rect.style.width = 'calc(' + skillLevel + '0% - 25px)';
			});
		} else if(window.innerHeight + window.scrollY <= skills.offsetTop) {
			document.querySelectorAll('.rect').forEach(function(rect) {
				rect.style.width = '10px';
			});
		} 
	}
	window.onscroll = function(){
		skillAnimation();
	};
	skillAnimation();

	//form validation
	var requiredName = document.getElementById('name');
	var requiredEmail = document.getElementById('email');
	var requiredText = document.getElementById('message');

	var submit = document.getElementById('messageSubmit');

	submit.addEventListener('click', function(e) {
		e.preventDefault();
		var formValid = true;
		var nameAlert = document.getElementById('nameRequired');
		var emailAlert = document.getElementById('emailRequired');
		var messageAlert = document.getElementById('textfieldRequired');
		
		if(requiredName.value == '') {
			formValid = false;
			nameAlert.style.display = 'block';
		} else {
			nameAlert.style.display = 'none';
		}
		if(requiredEmail.value == '') {
			formValid = false;
			emailAlert.style.display = 'block';
		} else {
			emailAlert.style.display = 'none';
		}
		if(requiredText.value == '') {
			formValid = false;
			messageAlert.style.display = 'block';
		} else {
			messageAlert.style.display = 'none';
		}
		if(formValid) {
			
			let data = {
				name: requiredName.value,
				emailAddress: requiredEmail.value,
				message: requiredText.value
			};
	
		    fetch('https://lowna.prod.with-datafire.io/contact', {
		        method: 'POST', // *GET, POST, PUT, DELETE, etc.
		        mode: 'cors', // no-cors, cors, *same-origin
		        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		        credentials: 'same-origin', // include, *same-origin, omit
		        headers: {
		            'Content-Type': 'application/json',
		            // 'Content-Type': 'application/x-www-form-urlencoded',
		        },
		        redirect: 'follow', // manual, *follow, error
		        referrer: 'no-referrer', // no-referrer, *client
		        body: JSON.stringify(data), // body data type must match "Content-Type" header
		    })
		    .then(response => response.json())
		    .then(data => {
		    	requiredName.value = '';
				requiredEmail.value = '';
				requiredText.value = '';
				alert('Thanks for contacting me, I\'ll be in touch!');
		    }); // parses JSON response into native JavaScript objects 

		} else {
			alert('Invalid submission!');
			
		}
	})




//end window onload	
};