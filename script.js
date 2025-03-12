function getComputerChoice() {

    // generate a random number between 0 and 2
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        choice = "rock";
    } else if (choice == 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    let playerChoice = prompt(`Choose "rock", "paper" or "scissors"`);
    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;