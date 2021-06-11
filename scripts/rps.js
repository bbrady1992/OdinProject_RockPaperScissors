function computerPlay() {
    let plays = ['Rock', 'Paper', 'Scissors'];
    return plays[randomInt(0, plays.length)];
}

// Inclusive of min, exclusive of max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const gameKey = {"Rock": "Scissors", "Scissors": "Paper", "Paper": "Rock"};

function playRound(playerSelection, computerSelection) {
    let outcome = document.getElementById("outcome");
    let playerWinCount = document.getElementById("player-win-count");
    let computerWinCount = document.getElementById("computer-win-count");
    let tieCount = document.getElementById("tie-count");
    if (playerSelection === computerSelection) {
        outcome.textContent = `Tie. You both chose ${playerSelection}`;
        tieCount.textContent = (+tieCount.textContent + 1);
    } else if (gameKey[playerSelection] === computerSelection) {
        outcome.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerWinCount.textContent = (+playerWinCount.textContent + 1);
    } else {
        outcome.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerWinCount.textContent = (+computerWinCount.textContent + 1);
    }
}