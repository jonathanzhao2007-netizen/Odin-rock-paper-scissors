function getComputerChoice() {
    const num = Math.random() * 3;
    if (num < 1) {
        return "scissors";
    } else if (num < 2) {
        return "paper";
    } else {
        return "rock";
    }
}
function getHumanChoice() {
    const num = prompt("Type 0 for scissors, 1 for paper, and 2 for rock.");
    if (num < 1) {
        return "scissors";
    } else if (num < 2) {
        return "paper";
    } else {
        return "rock";
    }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "scissors") {
            if (computerChoice === "scissors") {
                console.log("Tie! Both scissors.");
            } else if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore += 1;
            } else {
                console.log("You win! Scissors beats paper.");
                humanScore += 1;
            }
        } else if (humanChoice === "rock") {
            if (computerChoice === "rock") {
            console.log("Tie! Both rock.");
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore += 1;
            } else {
                console.log("You lose! Paper beats rock.");
                computerScore += 1;
            }
        } else {
            if (computerChoice === "paper") {
            console.log("Tie! Both paper.");
            } else if (computerChoice === "rock") {
                console.log("You win! Paper beats rock.");
                humanScore += 1;
            } else {
                console.log("You lose! Scissors beats paper.");
                computerScore += 1;
            }
        }
    }
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score is " + humanScore + "\n");
        console.log("The computer score is " + computerScore + "\n");
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore === computerScore) {
        console.log("You tied.");
    } else {
        console.log("You lost :(  ");
    }
    console.log("The score was " + humanScore + ":" + computerScore);
}

playGame();