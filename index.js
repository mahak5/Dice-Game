var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var dicenum1 = 'dice' + randomNum1 + '.png';
var dicenum2 = 'dice' + randomNum2 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', dicenum1);
document.querySelectorAll('img')[1].setAttribute('src', dicenum2);
if (randomNum1 > randomNum2) document.querySelector('h1').textContent = 'Player 1 wins';
else if (randomNum2 > randomNum1) document.querySelector('h1').textContent = 'Player 2 wins';
else document.querySelector('h1').textContent = 'Its a tie!';

function myFunc() {
	document.querySelector('h1').textContent = 'Who is the winner?';
	document.querySelectorAll('img')[0].setAttribute('src', 'dice1.png');
	document.querySelectorAll('img')[1].setAttribute('src', 'dice1.png');
}
