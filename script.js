function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    // if (choice == 0) return 'Rock'
    // else if (choice == 1) return 'Paper'
    // else return 'Scissors'
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}
function playRound(playerSelection, computerSelection)
{
    // 0- TIE 
    // 1- PLAYER
    // -1- COMPUTER
    computerSelection = computerSelection.toUpperCase();
    //Tie 
    if (playerSelection == computerSelection)
    {
        return 0
    }
    //Computer wins
    else if ((playerSelection == 'ROCK' && computerSelection == 'PAPER') || (playerSelection == 'PAPER' && computerSelection == 'SCISSOR') || (playerSelection == 'SCISSOR' && computerSelection == 'ROCK'))
        return -1;
    //Player wins
    else return 1



}

function game(e)
{

    let playerSelection = e.target.id.toUpperCase();
    console.log(playerSelection);
    let computerSelection = getComputerChoice().toUpperCase();
    let result = playRound(playerSelection, computerSelection)
    if (result == 0)
    {
        displayResult.textContent = 'It\'s a tie'
    }
    else if (result == 1)
    {
        displayResult.textContent = `YOU WON! YOU chose ${playerSelection} and COMPUTER chose ${computerSelection}`
        playerScore.textContent = `${++playerWin}`

    }
    else {
        displayResult.textContent = `YOU LOST! COMPUTER chose ${computerSelection} and YOU chose ${playerSelection}`
        computerScore.textContent = `${++computerWin}`
    }
    setTimeout(()=>{checkWin()}, 3000);
}
function checkWin()
{
    if (playerWin >= 5) {
        displayResult.textContent = "Congrats! Player wins!"
        playerWin = 0;
        computerWin = 0;
        playerScore.textContent = `${playerWin}`
        computerScore.textContent = `${computerWin}`



    }
    else if (computerWin >= 5) {
        displayResult.textContent = "Oh no! Computer won!"
        playerWin = 0;
        computerWin = 0;
        playerScore.textContent = `${playerWin}`
        computerScore.textContent = `${computerWin}`


    }
}
function resetGame()
{
    console.log('reset')
    playerWin = 0;
    computerWin = 0;
    playerScore.textContent = `${playerWin}`;
    computerScore.textContent = `${computerWin}`;
    displayResult.textContent = ''


}

const buttons = document.querySelectorAll('.buttons > button')
const displayResult = document.querySelector('#output')
displayResult.style.textAlign = 'center'
buttons.forEach(button => button.addEventListener('click', game));

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame )

let playerWin = 0;
let computerWin = 0;

const playerScore = document.querySelector('#player_score')
playerScore.textContent = `${playerWin}`;
playerScore.style.textAlign = 'center'
playerScore.style.fontSize = '38px'
const computerScore = document.querySelector('#computer_score')
computerScore.textContent = `${computerWin}`;
computerScore.style.textAlign = 'center'
computerScore.style.fontSize = '38px'


