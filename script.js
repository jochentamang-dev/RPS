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
            return 'Scissors';
    }
}
function playRound(playerSelection, computerSelection)
{
    // 0- TIE 
    // 1- PLAYER
    // -1- COMPUTER
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    //Tie 
    if (playerSelection == computerSelection)
    {
        return 0
    }
    //Computer wins
    else if ((playerSelection == 'ROCK' && computerSelection == 'PAPER') || (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') || (playerSelection == 'SCISSORS' && computerSelection == 'ROCK'))
        return -1;
    //Player wins
    else return 1



}

function game()
{
    let playerWin = 0
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        let playerSlection = prompt("Enter Rock, Paper, or Scissors").toUpperCase();
        let computerSelection = getComputerChoice().toUpperCase();
        let result = playRound(playerSlection, computerSelection)
        if (result == 0)
        {
            console.log("IT'S A TIE")    
        }
        else if (result == 1)
        {
            console.log(`YOU WIN! ${playerSlection} BEATS ${computerSelection}`)
            playerWin++
        }
        else {
            console.log(`YOU LOSE! ${computerSelection} BEATS ${playerSlection}`)
            computerWin++
        }
    }
    console.log(`PLAYER WON ${playerWin} ROUND
    COMPUTER WON ${computerWin} ROUND`)

    if (playerWin == computerWin)
    {
        console.log("ITS A TIEEEEE!!")
    }
    else if (playerWin > computerWin)
    {
        console.log("Player won!")
    }
    else {
        console.log("Computer won!")
    }
}

game();
