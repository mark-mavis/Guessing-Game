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
let message = document.querySelector('.message');

const updateScore = () =>{
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
    if(currentScore === 0){
        document.querySelector('.message').textContent = 'Game Over! Reset and try again';
        gameOver = true;
    }
}

const validGuess = (guess) => {
    let message = document.querySelector('.message');
    if(!guess){
        message.textContent = 'No number entered';
        return false
    }else if(guess <= 0 || guess > 20){
        message.textContent = 'Enter a number between 1 and 20';
        return false
    }
    return true;
}

const validateGuess = (guess) => {
    if(guess > secretNumber){
        message.textContent = 'Lower';
        updateScore();
    }else if(guess < secretNumber){
        message.textContent = 'Higher';
        updateScore();
    }else{
        message.textContent = 'Correct!!';
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
    secretNumber = Math.floor(Math.random()*20)+1;
    
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
});

