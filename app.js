const summary = document.createElement('p');
const resultsContainer = document.querySelector('.results-container');
const playerButtons = document.querySelectorAll("#playerSelects button");
const winner = document.createElement('h3');
const playerScore = document.querySelector('#playerScore span')
const computerScore = document.querySelector('#computerScore span')
const hiddenContainer = document.querySelector('#winnerMessage')
const hiddenMessage = document.querySelector('#winnerMessage h2')
const playAgainBtn = document.querySelector('#playAgainBtn')
const playerAndCompbtns = document.querySelectorAll('#playerSelects button, #computerSelects button')


let playerScoreCount = 0;
let computerScoreCount = 0;
const playTo = document.querySelector('select');
let playingTo = parseInt(playTo.value);

playTo.addEventListener('change', (e) => {
    playingTo = parseInt(playTo.value);
    playerScoreCount = 0;
    computerScoreCount = 0;
    computerScore.innerText = computerScoreCount;
    playerScore.innerText = playerScoreCount;
    hiddenContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    buttonsOff(false)
    summary.innerText = '';
    winner.innerText = '';
})

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

function playRound(wpn) {
    let computerSelection = computerPicks();
    let playerSelection = wpn;
    summary.innerText = `You selected ${playerSelection}, the computer selected ${computerSelection}`
    resultsContainer.append(summary);
    winner.innerText = 'You win'
    let playerWins = true;
    if (computerSelection === playerSelection) {
        winner.innerText = `Tie game, you both selected ${playerSelection}!`
        playerWins = undefined;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {

    } else {
        winner.innerText = 'You lose!'
        playerWins = false;
    }
    resultsContainer.append(winner);
    return playerWins
}

playerButtons.forEach(button => button.addEventListener('click', e => {
    let wpn = button.innerText.toLowerCase();
    button.classList.add('selected');
    summary.innerText = ''
    let roundWinner = playRound(wpn);
    if (roundWinner === true) {

        playerScoreCount++;
        playerScore.innerText = playerScoreCount;
        if (checkForWin(playerScoreCount)) {
            hiddenMessage.innerText = 'You won the match!';
            showWinningBanner(true);
            buttonsOff(true);
        }
    } else if (roundWinner === false) {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        if (checkForWin(computerScoreCount)) {
            hiddenMessage.innerText = 'You lost the match!';
            showWinningBanner(true);
            buttonsOff(true);
        }
    }
}))

playAgainBtn.addEventListener('click', e => {
    playerScoreCount = 0;
    computerScoreCount = 0;
    buttonsOff(false);
    showWinningBanner(false);

})
function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('selected')
}

function checkForWin(score) {
    if (score === playingTo) {
        return true
    }
}

const buttonsOff = function (boolean) {
    for (let button of playerAndCompbtns) {
        if (boolean === true) {
            button.disabled = true;
            button.classList.add('deactivated');
        } else {
            button.disabled = false;
            button.classList.remove('deactivated');
        }
    }
}

function showWinningBanner(boolean) {
    if (boolean === true) {
        resultsContainer.classList.add('hidden');
        hiddenContainer.classList.remove('hidden')
    } else {
        resultsContainer.classList.remove('hidden');
        hiddenContainer.classList.add('hidden')
        summary.innerText = '';
        winner.innerText = '';
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
