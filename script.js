// let humanScore = 0;
// let computerScore = 0;
// let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3
function generateTarget() {
    return Math.floor(Math.random() * 9);
}

console.log(generateTarget());

function compareGuesses(human, computer, target) {
    const humanDifference = Math.abs(human - target);
    const computerDifference = Math.abs(computer - target);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}