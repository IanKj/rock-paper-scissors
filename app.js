const summary = document.createElement('p');
const resultsContainer = document.querySelector('.results-container');
const playerButtons = document.querySelectorAll("#playerSelects button");
const winner = document.createElement('h3');

playerButtons.forEach(button => button.addEventListener('click', e => {
    let wpn = button.innerText.toLowerCase();
    button.classList.add('selected');
    summary.innerText = ''
    playRound(wpn);
}))

//returns computer pick at random - rock paper or scissor 
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
    const computerButtons = document.querySelectorAll('#computerSelects button');
    computerButtons.forEach(button => {
        if (button.innerText === computerSelection) {
            button.classList.add('selected')
        }
    })
    return computerSelection.toLowerCase();
}

//play 1 round of RPS, list selections
function playRound(wpn) {
    let computerSelection = computerPicks();
    let playerSelection = wpn;
    summary.innerText = `You selected ${playerSelection}, the computer selected ${computerSelection}`
    resultsContainer.append(summary);
    winner.innerText = 'You win'
    if (computerSelection === playerSelection) {
        winner.innerText = `Tie game, you both selected ${playerSelection}!`

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {

    } else {
        winner.innerText = 'You lose!'
    }
    resultsContainer.append(winner);
}

//play a game of x rounds
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

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('selected')
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
