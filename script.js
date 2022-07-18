function computerPlay () {
  const options = ['Rock', 'Paper', 'Scissors']
  return options[Math.floor(Math.random() * options.length)]
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return ['You Win! Paper beats Rock', 1, 0]
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return ['You Lose! Paper beats Rock', 0, 1]
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return ['You Win! Scissors beat Paper', 1, 0]
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return ['You Lose! Scissors beat Paper', 0, 1]
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return ['You Win! Rock beats Scissors', 1, 0]
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return ['You Lose! Rock beats Scissors', 0, 1]
  } else if (playerSelection === computerSelection) return ['Draw', 0, 0]
}

const rockBtn = document.querySelector('.rock-button')
rockBtn.addEventListener('click', function () {
  game(playRound('Rock', computerPlay()))
})

const paperBtn = document.querySelector('.paper-button')
paperBtn.addEventListener('click', function () {
  game(playRound('Paper', computerPlay()))
})

const scissorsBtn = document.querySelector('.scissors-button')
scissorsBtn.addEventListener('click', function () {
  game(playRound('Scissors', computerPlay()))
})

const resultsDiv = document.querySelector('.results')

let playerScore = 0
let computerScore = 0

function game (roundResults) {
  if (playerScore === 5 || computerScore === 5) return

  const result = roundResults[0]
  playerScore += roundResults[1]
  computerScore += roundResults[2]

  resultsDiv.textContent = `Result: ${result} | Player: ${playerScore} | Machine: ${computerScore}`
}
