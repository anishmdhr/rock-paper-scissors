function getComputerChoice(){
    let guess = Math.floor(Math.random()*10) +1;
    // console.log(guess);
    if (guess % 2 === 0) return "ROCK";
    else if (guess % 3 === 0) return "PAPER";
    else return "SCISSORS";
}

// console.log(getComputerChoice());

function playRound(playerSelection,computerSelection){
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "ROCK") return 1;
    else if (playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK") return 0; 
    else return 2;
}

function game(){
    for(let i = 0; i < 5; i++){
        
        const computerSelection = getComputerChoice(); 
        const playerSelection = getPlayerChoice();    
        console.log(playerSelection,computerSelection);   

        gameResult = playRound(playerSelection,computerSelection);

        if (gameResult === 1) {
            console.log(`You won!! ${playerSelection} beats ${computerSelection}`);
            playerWinCount++;
            console.log(`Player: ${playerWinCount}`);
        }
        else if(gameResult === 0){
            console.log(`You lost!  ${computerSelection} beats ${playerSelection}`);
            computerWinCount++;
            console.log(`Computer: ${computerWinCount}`);
        }
        else console.log('You drew.');
    }
    if(playerWinCount < computerWinCount) console.log('You have been bested by the computer.');
    else if (playerWinCount > computerWinCount) console.log('You have managed to beat the machine today');
    else console.log('You drew with the machine. You live to fight another day');
}

function getPlayerChoice(){
    let playerSelection = prompt('What is your weapon of choice?','Rock / Paper / Scissors');
    return playerSelection.toUpperCase(); 
}

let playerWinCount = 0;
let computerWinCount = 0;
// console.log(playRound(playerSelection,computerSelection));
game(playerWinCount,computerWinCount);
