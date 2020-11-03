function computerPlay() {
  let random = Math.random() * 100;
  let answer = Math.floor(random);
  if (answer < 33) {
    return "rock";
  } else if (answer < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer Wins";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer Wins";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer Wins";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player Wins";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player Wins";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player Wins";
  }
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 4; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt().toLowerCase();
    if (playRound(playerSelection, computerSelection) === "Player Wins") {
      playerScore++;
    } else if (
      playRound(playerSelection, computerSelection) === "Computer Wins"
    ) {
      computerScore++;
    }
  }
  if (playerScore < computerScore) {
    console.log("loose");
  } else {
    console.log("win");
  }
}
game();
