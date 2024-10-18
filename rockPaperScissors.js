// this is a file to play a playable game to play rock paper sciccors

// Get computer choice
let choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)];
}

// console.log(getComputerChoice(choice))
console.log(getComputerChoice(choice));
//get human choice
function getHumanChoice(){
    const playerSelection = prompt("Please enter value").toLowerCase;
    return playerSelection;
}

// see who wins
function game(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection===computerSelection){
        console.log("It's a tie! You both picked the same choice!")
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        console.log ("You win! Rock beats scissors.")
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        console.log ("You win! Paper beats rock.")
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        console.log ("You win! Scissors beats paper.")
    }
    else {
        console.log("You Lose!")
    }

}

(getHumanChoice)(getComputerChoice);

