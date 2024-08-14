const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
    switch (humanChoice) {
        case "rock":
        case "r":
            return "rock";
        case "paper":
        case "p":
            return "paper";
        case "scissors":
        case "scissor":
        case "s":
            return "scissors";
        default:
            console.log("Invalid Input, Please try again.")
            return getHumanChoice();
    }
} 

// const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        if (humanChoice === computerChoice) {
            console.log("Tie");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;    
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else {
            console.log("Error");
        }
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    // for (let i = 0; i < 5; i++) {
    //     console.log(`\n Round${i + 1}`)
        const computerSelection = getComputerChoice();
    
        // playRound(humanSelection, computerSelection);

    //     if (i === 4) {
    //         if (humanScore > computerScore) {
    //             console.log("The game has ended...\nYou are the winner!")
    //         } else if (humanScore < computerScore) {
    //             console.log("The game has ended...\nComputer is the winner.")
    //         } else {
    //             console.log("The game has ended...\nDraw.")
    //         }
    //     }
    // }
// }
// playGame();

document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body");
    body.addEventListener("click", (e) => {
        if (e.target.className === "choice") {
            const humanSelection = e.target.textContent.toLowerCase();
            playRound(humanSelection, computerSelection);
        }
    });
});