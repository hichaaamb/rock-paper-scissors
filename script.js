let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  computerSelection = choices[randomIndex];
  return computerSelection;
}
function paper() {
  playerSelection = "paper";
}
function scissors() {
  playerSelection = "scissors";
}
function rock() {
  playerSelection = "rock";
}
function playRound(computerSelection, playerSelection) {
  if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    alert("You lose!!");
  } else if (computerSelection == playerSelection) {
    alert("It's a tie!");
  } else {
    alert("You win !");
  }
}
