'use strict';

//GENERATING THE SECRET NUMBER
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//INITIALIZING THE SCORE
let score = 20;
let highScore = 0;

let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
//ON CLICK EVENT FOR THE CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //document.querySelector('.message').textContent = 'Correct Number!';

  //WHEN THERE IS NO INPUT
  if (!guess) {
    console.log(displayMessage('No Number🛑'));
    //WHENN PLAYERS WIN
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //DISPLAYS WHEN USER GUESSES THE CORRECT NUMBER
    document.querySelector('.number').textContent = secretNumber;

    //HIGH SCORE
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //USING TENARY OPERATOR FOR CONDTION OF TOO HIGH AND LOW
      // document.querySelector('.message').textContent =
      //   score > secretNumber ? 'Too High' : 'Too Low!';
      displayMessage(score > secretNumber ? 'Too High' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('💥 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  //WHEN GUESS IS TOO HIGH
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.message').textContent = '💥 You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //WHEN GUESS ID TO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.message').textContent = '💥 You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//PLAY AGAIN FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function () {
  console.log('Play again');
  //CALLING THE SECRETNUMBER VARIABLE IS GOING TO CHANGE THE SECRET NUMB, ONCCE BUTTON IS CLICKED
  score = 20;
  //const secretNumber = Math.trunc(Math.random() * 20) + 1;

  //RESET ALL OTHER VALUES
  displayMessage('Start Guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
