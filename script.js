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

function playRound(humanChoice, computerChoice) {
    // make input case insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) { //tie
        roundScore.textContent = "It's a tie!";

    } else if (humanChoice == "rock") { //not a tie and human chose rock
        
        if (computerChoice == "paper"){ // rock loses to paper
            roundScore.textContent = "You lose!\r\n Paper beats Rock";
            computerScore++;
        
        } else { // rock beats scissors
            roundScore.textContent = "You win!\r\n Rock beats Scissors";
            humanScore++;
        }

    } else if (humanChoice == "paper") { // not a tie and human chose paper
        
        if (computerChoice == "scissors"){ // paper loses to scissors
            roundScore.textContent = "You lose!\r\n Scissors beats Paper";
            computerScore++;
        
        } else { // paper beats rock
            roundScore.textContent = "You win!\r\n Paper beats Rock";
            humanScore++;
        }

    } else { // not a tie and human chose scissors
        
        if (computerChoice == "rock"){ // scissors loses to rock
            roundScore.textContent = "You lose!\r\n Rock beats Scissors";
            computerScore++;
        
        } else { // scissors beats paper
            roundScore.textContent = "You win!\r\n Scissors beats Paper";
            humanScore++;
        }
    }
}

function announceFinalScore() {
    if (humanScore < computerScore) { //computer wins
        finalScore.textContent = `You lose!\r\n Your Score: ${humanScore}    |    Computer score: ${computerScore}`;
    } else { //human wins
        finalScore.textContent = `You win!\r\n Your Score: ${humanScore}    |    Computer score: ${computerScore}`;
    }
    let rematchButton = document.createElement("button");
    rematchButton.textContent = "Play again?";
    finalScoreBoard.appendChild(rematchButton);

    rematchButton.addEventListener("click", () => {
        roundScore.textContent = "";
        finalScore.textContent = "";
        playerHand.src = "./images/question-mark.png";
        computerHand.src = "./images/question-mark.png";
        finalScoreBoard.removeChild(rematchButton);
        // reset scores to play another game
        humanScore = 0;
        computerScore = 0;
        updateScoreBoard();
    })
}

function capitalizeFirstLetter(text) {
    text = text.toLowerCase();
    return text[0].toUpperCase() + text.slice(1);
}

function updateScoreBoard() {
    playerScoreBoard.textContent = `Player: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
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
let finalScoreBoard = document.querySelector(".finalScoreBoard");
let finalScore = document.querySelector(".finalScore");

rock.addEventListener("click", () => {

    if (computerScore < 5 && humanScore < 5) { //stop button from working if the game is over
        let computerChoice = getComputerChoice();

        playerHand.src = "./images/rock.png";
        computerHand.src = `./images/${computerChoice}.png`;
    
        playRound("rock", computerChoice);
        updateScoreBoard();
    
        if (computerScore == 5 || humanScore == 5) {
            announceFinalScore();
        }
    }
});

paper.addEventListener("click", () => {

    if (computerScore < 5 && humanScore < 5){ //stop button from working if the game is over
        let computerChoice = getComputerChoice();

        playerHand.src = "./images/paper.png";
        computerHand.src = `./images/${computerChoice}.png`;
    
        playRound("paper", computerChoice);
        updateScoreBoard();
    
        if (computerScore == 5 || humanScore == 5) {
            announceFinalScore();
        }
    }
});

scissors.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) { //stop button from working if the game is over
        let computerChoice = getComputerChoice();

        playerHand.src = "./images/scissors.png";
        computerHand.src = `./images/${computerChoice}.png`;
    
        playRound("scissors", computerChoice);
        updateScoreBoard();

        if (computerScore == 5 || humanScore == 5) {
            announceFinalScore();
        }
    }
});