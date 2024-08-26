'use strict'

let secretNumber = Math.floor(Math.random()*20)+1;
let currentScore = 20;
let highScore = 0;
let win = false;
let gameOver = false;

const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const resetSecretNum = () => {
    secretNumber = Math.floor(Math.random()*20)+1;
}

const resetGame = () => {
    
    resetSecretNum();

    //reset flags
    gameOver = false;
    win = false;
    
    //resent score
    currentScore = 20;
    document.querySelector('.score').textContent = currentScore;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

const decrementScore = () =>{
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
    if(currentScore === 0){
        displayMessage('Game Over! Reset and try again');
        gameOver = true;
    }
}

const validGuess = (guess) => {
    if(!guess){
        displayMessage('No number entered');
        return false
    }else if(guess <= 0 || guess > 20){
        displayMessage('Enter a number between 1 and 20');
        return false
    }
    return true;
}

const validateGuess = (guess) => {
    if(guess > secretNumber){
        displayMessage('Lower');
        decrementScore();
    }else if(guess < secretNumber){
        displayMessage('Higher');
        decrementScore();
    }else{
        displayMessage('Correct!!');
        //show secret number
        document.querySelector('.number').textContent = secretNumber;
        //change background to green
        document.querySelector('body').style.backgroundColor = '#60b347';
        //change number width
        document.querySelector('.number').style.width = '30rem';
        
        //check for highscore update
        if(currentScore > highScore){
            highScore = currentScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
}

checkBtn.addEventListener('click', () => {
    if(!gameOver && !win){
        let guessValue = guess.value
        if(validGuess(guessValue)) {
            validateGuess(guessValue);
        }
    }
});

resetBtn.addEventListener('click', () => {
    resetGame();
});
