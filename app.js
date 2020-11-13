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

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  if (playRound(playerSelection, computerSelection) === "Player Wins") {
    playerScore++;
  } else if (
    playRound(playerSelection, computerSelection) === "Computer Wins"
  ) {
    computerScore++;
  }
  pdiv.textContent = `Player Score: ${playerScore}`;
  cdiv.textContent = `Computer Score: ${computerScore}`;
  if (playerScore === 5) {
    alert("Player Won");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert("Computer Won");
    playerScore = 0;
    computerScore = 0;
  }
});
paper.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "paper";
  if (playRound(playerSelection, computerSelection) === "Player Wins") {
    playerScore++;
  } else if (
    playRound(playerSelection, computerSelection) === "Computer Wins"
  ) {
    computerScore++;
  }
  pdiv.textContent = `Player Score: ${playerScore}`;
  cdiv.textContent = `Computer Score: ${computerScore}`;
  if (playerScore === 5) {
    alert("Player Won");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert("Computer Won");
    playerScore = 0;
    computerScore = 0;
  }
});
scissors.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "scissors";
  if (playRound(playerSelection, computerSelection) === "Player Wins") {
    playerScore++;
  } else if (
    playRound(playerSelection, computerSelection) === "Computer Wins"
  ) {
    computerScore++;
  }
  pdiv.textContent = `Player Score: ${playerScore}`;
  cdiv.textContent = `Computer Score: ${computerScore}`;
  if (playerScore === 5) {
    alert("Player Won");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert("Computer Won");
    playerScore = 0;
    computerScore = 0;
  }
});

score = document.querySelector(".score");

const pdiv = document.createElement("div");
pdiv.textContent = `Player Score: ${playerScore}`;

const cdiv = document.createElement("div");
cdiv.textContent = `Computer Score: ${computerScore}`;

score.appendChild(pdiv);
score.appendChild(cdiv);
