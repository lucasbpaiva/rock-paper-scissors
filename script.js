let humanScore = 0;
let computerScore = 0;

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

let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");
let scoreBoard = document.querySelector(".scoreBoard");
let roundScore = document.querySelector(".roundScore");
let playerScoreBoard = document.querySelector(".playerScoreBoard");
let computerScoreBoard = document.querySelector(".computerScoreBoard");
let finalScore = document.querySelector(".finalScore")

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());

    if (computerScore == 5 || humanScore == 5) {
        if (humanScore < computerScore) { //computer wins
            let para = document.createElement("p");
            para.textContent = `You lose!\n Your Score: ${humanScore}\n Computer score: ${computerScore}`;
            finalScore.appendChild(para);
            // reset scores to play another game
            humanScore = 0;
            computerScore = 0;
        } else { //human wins
            let para = document.createElement("p");
            para.textContent = `You win!\n Your Score: ${humanScore} Computer score: ${computerScore}`;
            finalScore.appendChild(para);
            // reset scores to play another game
            humanScore = 0;
            computerScore = 0;
        }
    }

    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());

    if (computerScore == 5 || humanScore == 5) {
        if (humanScore < computerScore) { //computer wins
            let para = document.createElement("p");
            para.textContent = `You lose!\n Your Score: ${humanScore}\n Computer score: ${computerScore}`;
            finalScore.appendChild(para);
            // reset scores to play another game
            humanScore = 0;
            computerScore = 0;
        } else { //human wins
            let para = document.createElement("p");
            para.textContent = `You win!\n Your Score: ${humanScore} Computer score: ${computerScore}`;
            finalScore.appendChild(para);
            // reset scores to play another game
            humanScore = 0;
            computerScore = 0;
        }
    }

    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())

    if (computerScore == 5 || humanScore == 5) {
        if (humanScore < computerScore) { //computer wins
            let para = document.createElement("p");
            para.textContent = `You lose!\n Your Score: ${humanScore}\n Computer score: ${computerScore}`;
            finalScore.appendChild(para);
            // reset scores to play another game
            humanScore = 0;
            computerScore = 0;
        } else { //human wins
            let para = document.createElement("p");
            para.textContent = `You win!\n Your Score: ${humanScore} Computer score: ${computerScore}`;
            finalScore.appendChild(para);
            // reset scores to play another game
            humanScore = 0;
            computerScore = 0;
        }
    }

    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
});