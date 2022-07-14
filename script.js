function computerPlay(){
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playerPlay(){
    let input = prompt().toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === "Paper" && computerSelection === "Rock"){
        return ["You Win! Paper beats Rock", 1, 0];
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return ["You Lose! Paper beats Rock", 0, 1];
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return ["You Win! Scissors beat Paper", 1, 0];
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return ["You Lose! Scissors beat Paper", 0, 1];
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return ["You Win! Rock beats Scissors", 1, 0];
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return ["You Lose! Rock beats Scissors", 0, 1];
    }
    else if(playerSelection === computerSelection) return ["Draw", 0, 0];
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const resultArr = playRound(playerPlay(), computerPlay());
        console.log(resultArr[0]);
        playerScore += resultArr[1];
        computerScore += resultArr[2];
    }

    if (playerScore === computerScore) return "Final decision - Draw!";
    else if (playerScore > computerScore) return "Final decision - You Win!";
    else if (playerScore < computerScore) return "Final decision - You Lose!";
}

console.log(game());