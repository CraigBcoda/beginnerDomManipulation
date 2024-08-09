'use strict';
// Secret number generating function. Random between 1-20
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 19.999) + 1;
};
const createMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Starting score
let scoreRunning = 20;
// Generate high score
let highScore = 0;
// Generating the secret number
let secretNumber = generateSecretNumber();
console.log(secretNumber);
// On guess button click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if there is no guess/ guess value is false which includes strings
  if (!guess) {
    createMessage(`🛑 No Number!`);
  } else if (guess !== secretNumber && scoreRunning > 0) {
    guess < secretNumber
      ? createMessage(`Guess Higher`)
      : createMessage(`Guess Lower`);
    scoreRunning += -1;
    document.querySelector(`.score`).textContent = scoreRunning;
    console.log(scoreRunning);
    if (scoreRunning === 0) createMessage(`You Lose!😢`);
  }

  //   What to do if guess is correct and score > 0
  else if (guess === secretNumber && scoreRunning > 0) {
    createMessage(`🎉Success!🎉`);
    document.querySelector('.number').textContent = secretNumber;
    scoreRunning += 3;
    document.querySelector(`.score`).textContent = scoreRunning;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreRunning > highScore) {
      document.querySelector('.highscore').textContent = scoreRunning;
      highScore = scoreRunning;
    }
  }
});
// game reset
document.querySelector('.again').addEventListener('click', function () {
  if (scoreRunning === 0) scoreRunning = 20;
  document.querySelector('.score').textContent = scoreRunning;
  secretNumber = generateSecretNumber();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
