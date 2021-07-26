function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) return 'rock';
    else if (random === 2) return 'paper';
    else return 'scissor';
}

//Play Round

function playRound(playerSelection, computerSelection) {

    //ROCK
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') return 'draw';
        else if (computerSelection === 'paper') return 'loss';
        else return 'win';
    }

       //PAPER
       if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return 'win';
        else if (computerSelection === 'paper') return 'draw';
        else return 'loss';
    }

       //Scissors
       if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') return 'loss';
        else if (computerSelection === 'paper') return 'win';
        else return 'draw';
    }

}

function game() {
    const games = 5;
    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < games; i++) {
        let playerSelection = prompt("Please enter rock, paper, scissors").toLowerCase();
        let computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection);
        if(round === 'win') {
            playerCount++;
            console.log("You win");
        }
        else if(round == 'loss') {
            computerCount++;
            console.log("You lose");
        }
        else console.log("TIED");
    }

    if (playerCount > computerCount) return `The player wins against computer by ${playerCount} - ${computerCount}`;
    else if (computerCount > playerCount) return `The player loses against computer by ${computerCount} - ${playerCount}`;
    else return "DRAW";
}

console.log(game());