let humanScore = 0;
let computerScore = 0;
let round = 1;
let gameEnded = false;

const getcomputerSelection = () => {
    let randomSelection = Math.floor(Math.random() * 3);
    if (randomSelection === 0) {
        return "rock";
    } else if (randomSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const playRound = (humanSelection, computerSelection) => {
    let messageContainer = document.querySelector(".message-container");
    messageContainer.innerHTML = "";

    let roundMsg = document.createElement("p");
    roundMsg.innerText = `Round ${round}`;
    roundMsg.style.fontWeight = "bold";
    messageContainer.appendChild(roundMsg);

    let humanSelectionMsg = document.createElement("p");
    humanSelectionMsg.innerText = `Your choice: ${humanSelection}`
    messageContainer.appendChild(humanSelectionMsg);

    let computerSelectionMsg = document.createElement("p");
    computerSelectionMsg.innerText = `Computer's choice: ${computerSelection}`
    messageContainer.appendChild(computerSelectionMsg);

    let roundResult = document.createElement("p");

    if (humanSelection === computerSelection) {
        roundResult.innerText = "Tie";
        messageContainer.appendChild(roundResult);
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        roundResult.innerText = `You win! ${humanSelection} beats ${computerSelection}.`;
        messageContainer.appendChild(roundResult);
        humanScore++;
    } else {
        roundResult.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
        messageContainer.appendChild(roundResult);
        computerScore++;
    }

    let humanScoreMsg = document.createElement("p");
    humanScoreMsg.innerText = `Your score: ${humanScore}`
    messageContainer.appendChild(humanScoreMsg);

    let computerScoreMsg = document.createElement("p");
    computerScoreMsg.innerText = `Computer's score: ${computerScore}`
    messageContainer.appendChild(computerScoreMsg);

    let finalResult = document.createElement("p");
    if (humanScore >= 5) {
        finalResult.innerText = "The game has ended...\nYou are the winner!";
        gameEnded = true;
    }
    if (computerScore >= 5) {
        finalResult.innerText = "The game has ended...\nComputer is the winner.";
        gameEnded = true;
    }
    messageContainer.appendChild(finalResult);
    round++;
}

document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector(".container");
    container.addEventListener("click", (e) => {
        if (e.target.className === "choice" && !gameEnded) {
            const humanSelection = e.target.textContent.toLowerCase();
            const computerSelection = getcomputerSelection();
            playRound(humanSelection, computerSelection);
        }
    });
});