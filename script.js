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
        console.log("It's a tie!");

    } else if (humanChoice == "rock") { //not a tie and human chose rock
        
        if (computerChoice == "paper"){ // rock loses to paper
            console.log("You lose! Paper beats Rock");
            computerScore++;
        
        } else { // rock beats scissors
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }

    } else if (humanChoice == "paper") { // not a tie and human chose paper
        
        if (computerChoice == "scissors"){ // paper loses to scissors
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        
        } else { // paper beats rock
            console.log("You win! Paper beats Rock");
            humanScore++;
        }

    } else { // not a tie and human chose scissors
        
        if (computerChoice == "rock"){ // scissors loses to rock
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        
        } else { // scissors beats paper
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
    }
}

function playGame() {

    let humanChoice = "maybe rock?";
    let computerChoice = "perhaps paper?";

    let i = 0;

    while ((computerScore < 3 & humanScore < 3) & (i < 5 || gameTied)) { //play until either the player or computer reaches a score of 3
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        gameTied = humanScore == computerScore; //boolean to tell whether the game is tied or not
        i++;
    }

    if (humanScore < computerScore) { //computer wins
        console.log(`You lose!\n Computer score: ${computerScore}\n Your Score: ${humanScore}`);
    } else { //human wins
        console.log(`You win!\n Computer score: ${computerScore}\n Your Score: ${humanScore}`);
    }

    // reset scores to play another game
    humanScore = 0;
    computerScore = 0;
}

alert("Open the console to play a game:\n Ctrl + Shift + J on Windows/Linux\n Cmd + Option + J on Mac")
console.log("Call function playGame() to play a game of rock, paper, scissors")

// play a single round
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

// playRound(humanChoice, computerChoice);