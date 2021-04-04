//for computer -- random num between 1-3 determines rock paper or scissor 
function computerPicks() {
    let ranNum = Math.floor((Math.random() * 3) + 1);
    let computerSelection;
    if (ranNum === 1) {
        computerSelection = 'Rock';
    } else if (ranNum === 2) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection.toLowerCase();
}

//for human -- function that accepts either rock paper or scissor
function playerPicks() {
    let input = prompt('Rock, Paper, or Scissors???').toLowerCase();
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input
    }
}

//play 1 round of RPS, list each selected weapon
function playRound() {
    let computerSelection = computerPicks();
    let playerSelection = playerPicks();
    if (playerSelection === undefined) {
        console.log('error, you must select either "Rock", "Paper", or "Scissors"')
        return;
    }
    console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}`);
    //tie game, both selections match
    if (computerSelection === playerSelection) {
        console.log(`Tie game, you both selected ${playerSelection}!`)
        return
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('you win!')
        return true
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('you win!')
        return true
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('you win!')
        return true
    } else {
        console.log('You lose!')
        return false
    }
}

//loop over playRound() x times
//keep track of each players score
//first to x wins, console.log the winner

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < (rounds + 1); i++) {
        console.log(`Round ${i}:`)
        let playerWins = playRound();
        if (playerWins === undefined) {
            i--;
        } else if (playerWins === true) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    let playerWins = playerScore > computerScore;
    if (playerScore === computerScore) {
        console.log(`Darn, tie game \n player: ${playerScore} \n computer: ${computerScore}`)
    } else {
        console.log(`Final results: You ${playerWins === true ? 'won' : 'lost'}! \n player: ${playerScore} \n computer: ${computerScore} `);
    }
}

