function getComputerChoice() {

    // generate a random number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        computerChoice = "rock";
    } else if (computerChoice == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    // simply ask for user input and return it without any processing
    // assume player will type a valid string
    let humanChoice = prompt(`Choose rock, paper or scissors`);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // make input case insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) { //tie
        roundScore.textContent = "It's a tie!";

    } else if (humanChoice == "rock") { //not a tie and human chose rock
        
        if (computerChoice == "paper"){ // rock loses to paper
            roundScore.textContent = "You lose! Paper beats Rock";
            computerScore++;
        
        } else { // rock beats scissors
            roundScore.textContent = "You win! Rock beats Scissors";
            humanScore++;
        }

    } else if (humanChoice == "paper") { // not a tie and human chose paper
        
        if (computerChoice == "scissors"){ // paper loses to scissors
            roundScore.textContent = "You lose! Scissors beats Paper";
            computerScore++;
        
        } else { // paper beats rock
            roundScore.textContent = "You win! Paper beats Rock";
            humanScore++;
        }

    } else { // not a tie and human chose scissors
        
        if (computerChoice == "rock"){ // scissors loses to rock
            roundScore.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        
        } else { // scissors beats paper
            roundScore.textContent = "You win! Scissors beats Paper";
            humanScore++;
        }
    }
}

function announceScore() {
    if (humanScore < computerScore) { //computer wins
        finalScore.textContent = `You lose! Your Score: ${humanScore} Computer score: ${computerScore}`;
        // reset scores to play another game
        humanScore = 0;
        computerScore = 0;
    } else { //human wins
        finalScore.textContent = `You win! Your Score: ${humanScore} Computer score: ${computerScore}`;
        // reset scores to play another game
        humanScore = 0;
        computerScore = 0;
    }
}

function capitalizeFirstLetter(text) {
    text = text.toLowerCase();
    return text[0].toUpperCase() + text.slice(1);
}

let humanScore = 0;
let computerScore = 0;
let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");
let scoreBoard = document.querySelector(".scoreBoard");
let roundScore = document.querySelector(".roundScore");
let playerHand = document.querySelector(".playerHand");
let computerHand = document.querySelector(".computerHand");
let playerScoreBoard = document.querySelector(".playerScoreBoard");
let computerScoreBoard = document.querySelector(".computerScoreBoard");
let finalScore = document.querySelector(".finalScore")

rock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playerHand.textContent = "Rock";
    computerHand.textContent = `${capitalizeFirstLetter(computerChoice)}`;

    playRound("rock", computerChoice);

    if (computerScore == 5 || humanScore == 5) {
        announceScore();
    }

    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
});
paper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playerHand.textContent = "Paper";
    computerHand.textContent = `${capitalizeFirstLetter(computerChoice)}`;

    playRound("paper", computerChoice);

    if (computerScore == 5 || humanScore == 5) {
        announceScore();
    }

    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
});
scissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playerHand.textContent = "Scissors";
    computerHand.textContent = `${capitalizeFirstLetter(computerChoice)}`;

    playRound("scissors", computerChoice);

    if (computerScore == 5 || humanScore == 5) {
        announceScore();
    }

    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
});