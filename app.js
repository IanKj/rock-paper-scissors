const playerSelection = playerSelect();
const computerSelection = computerPicks();

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
function playerSelect() {
    return prompt('Rock, Paper, or Scissors???').toLowerCase();
}


//play 1 round of RPS, list each selected weapon
function playRound(computerSelection, playerSelection) {
    console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}`);
    //tie game, both selections match
    if (computerSelection === playerSelection) {
        console.log(`Tie game, you both selected ${playerSelection}!`)
        return
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('you win!')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('you win!')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('you win!')
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }

}

playRound(computerSelection, playerSelection);



