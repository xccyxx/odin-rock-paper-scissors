let humanScore = 0;
let computerScore = 0;
let round = 1;

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

const computerSelection = getcomputerSelection();



// const playGame = () => {

    let playRound = (humanSelection, computerSelection) => {
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
        }
        if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            roundResult.innerText = `You win! ${humanSelection} beats ${computerSelection}.`;
            messageContainer.appendChild(roundResult);
            humanScore++;
        }

        if (
            (humanSelection === "rock" && computerSelection === "paper") ||
            (humanSelection === "paper" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "rock")
        ) {
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

        round++;
    }

    // for (let i = 0; i < 5; i++) {
    //     console.log(`\n Round${i + 1}`)
    
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