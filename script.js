function computerPlay () {
  const options = ['Rock', 'Paper', 'Scissors']
  return options[Math.floor(Math.random() * options.length)]
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return [1, 0]
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return [0, 1]
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return [1, 0]
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return [0, 1]
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return [1, 0]
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return [0, 1]
  } else if (playerSelection === computerSelection) return [0, 0]
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

const restartBtn = document.querySelector('.restart-button')
restartBtn.addEventListener('click', function () {
  playerScore = 0
  computerScore = 0
  resultsDiv.textContent = ''
  resultsDiv.append(playerScoreDiv, computerScoreDiv)
  game([0, 0])
})

const resultsDiv = document.querySelector('.results')

let playerScore = 0
let computerScore = 0

const playerScoreDiv = document.createElement('div')
const computerScoreDiv = document.createElement('div')

resultsDiv.append(playerScoreDiv, computerScoreDiv)

function game (roundResults = [0, 0]) {
  playerScore += roundResults[0]
  computerScore += roundResults[1]

  if (playerScore === 5) {
    resultsDiv.textContent = 'You Win!'
    return
  }
  if (computerScore === 5) {
    resultsDiv.textContent = 'You Lose!'
    return
  }
  playerScoreDiv.textContent = 'PLAYER: ' + playerScore
  computerScoreDiv.textContent = 'MACHINE: ' + computerScore
}

game()
