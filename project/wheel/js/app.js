var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');

var missed = 0;
var start = document.querySelector('.btn__reset');

var phrases = [
	'Keep on coding',
	'You got it',
	'Knowledge is power',
	'I need to learn Javascript',
	'I am tired'
];
function setLifeCounter() {
	document.querySelectorAll('.tries img').forEach(function(t, i) {
			if (i < missed) {
				t.setAttribute('src', 'images/lostHeart.png')
			} else {
				t.setAttribute('src', 'images/liveHeart.png')
			}
	});
}
function reset() {
	document.querySelectorAll('.letter').forEach(function(r) {
		r.remove();
	});
	document.querySelectorAll('.space').forEach(function(r) {
		r.remove();
	});

	document.getElementById('overlay').style.display = 'none';
	var randomPhrase = getRandomPhraseAsArray(phrases);
	addPhraseToDisplay(randomPhrase);

	qwerty.querySelectorAll('button').forEach(function(b){
		b.classList.remove('chosen')
		b.removeAttribute('disabled');
		document.querySelectorAll('.letter').forEach(function(s) {
			s.classList.remove('show');
		});
	});
	missed = 0;
	setLifeCounter();
}
// click to hide overlay
start.onclick = reset;
//get random phrases
function getRandomPhraseAsArray(arr) {
	var randomArrIndex = Math.floor(Math.random()*arr.length);
	var selectPhrase = arr[randomArrIndex]
	var splitArr = selectPhrase.split('')
	return(splitArr)
}
 
getRandomPhraseAsArray(phrases);
//add phrase to display 
function addPhraseToDisplay(arr){
	for(var i = 0; i < arr.length; i += 1) {
		var character = document.createElement('li');
		character.innerHTML = arr[i];
		if (arr[i] == ' ') {
			character.classList.add('space');
		} else {
			character.classList.add('letter');
		};
		arr[i];
		document.getElementById('phrase').children[0].appendChild(character);
	};
};
function checkLetter(button) {
	var letters = document.getElementsByClassName('letter');
	var match = null;
	for(var i = 0; i < letters.length; i += 1) {
		if (button.innerHTML.toLowerCase() == letters[i].innerHTML.toLowerCase()) {
			letters[i].classList.add('show');
			match = letters[i];
		} 
	}
	return(match); 
}
qwerty.querySelectorAll('button').forEach(function(b){
	b.onclick = function () {
		this.setAttribute('disabled', true);
		this.classList.add('chosen');
		var letterFound = checkLetter(this);
		if (letterFound == null) {
			missed++;
		} 
		setLifeCounter();
		if (missed >= 5) {
			document.getElementById('overlay').style.display = 'block';
			document.querySelector('#overlay').className = 'lose';
			document.querySelector('.btn__reset').innerHTML = 'Restart Game';
		} 
		var lettersRemaining = 0;
		document.querySelectorAll('.letter').forEach(function(l) {
			if (!l.classList.contains('show')) {
				lettersRemaining++;
			}
		});
		if (lettersRemaining === 0) {
			document.getElementById('overlay').style.display = 'block';
			document.querySelector('#overlay').className = 'win';
			document.querySelector('.btn__reset').innerHTML = 'Restart Game';
		}
	}
})
