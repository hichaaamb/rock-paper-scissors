let computerSelection = "";
let playerSelection = "";
let playerScoreValue = 0;
let computerScoreValue = 0;

choices = ["✊", "✋", "✌️"];
function getComputerSelection() {
  computerSelection = choices[Math.floor(Math.random() * 3)];
}

function paper() {
  playerSelection = "✋";
  document.getElementById("player-emoji").textContent = playerSelection;
  getComputerSelection();
  document.getElementById("computer-emoji").textContent = computerSelection;
  playRound(playerSelection, computerSelection);
}
function rock() {
  playerSelection = "✊";
  document.getElementById("player-emoji").textContent = playerSelection;
  getComputerSelection();
  document.getElementById("computer-emoji").textContent = computerSelection;
  playRound(playerSelection, computerSelection);
}
function scissors() {
  playerSelection = "✌️";
  document.getElementById("player-emoji").textContent = playerSelection;
  getComputerSelection();
  document.getElementById("computer-emoji").textContent = computerSelection;
  playRound(playerSelection, computerSelection);
}
function playRound(playerSelection, computerSelection) {
  if (playerScoreValue == 5 && computerScoreValue < playerScoreValue) {
    document.getElementById("title").textContent = "YOU'VE WON THE GAME !";
    document.getElementById("title").style.color = "green";
    reset();
  } else {
    if (playerSelection == "✋" && computerSelection == "✌️") {
      document.getElementById("status").textContent = "You lost!";
      document.getElementById("description").textContent =
        "Paper is beaten by scissors";

      computerScoreValue += 1;
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✊" && computerSelection == "✋") {
      document.getElementById("status").textContent = "You lost!";
      document.getElementById("description").textContent =
        "Rock is beaten by paper";

      computerScoreValue += 1;
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✌️" && computerSelection == "✊") {
      document.getElementById("status").textContent = "You lost!";
      document.getElementById("description").textContent =
        "Scissors is beaten by rock";

      computerScoreValue += 1;
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✌️" && computerSelection == "✌️") {
      document.getElementById("status").textContent = "It's a tie!";
      document.getElementById("description").textContent =
        "Scissors ties with scissors";
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✊" && computerSelection == "✊") {
      document.getElementById("status").textContent = "It's a tie!";
      document.getElementById("description").textContent =
        "Rock ties with rock";
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✋" && computerSelection == "✋") {
      document.getElementById("status").textContent = "It's a tie!";
      document.getElementById("description").textContent =
        "Paper ties with paper";
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✋" && computerSelection == "✊") {
      document.getElementById("status").textContent = "You win!";
      document.getElementById("description").textContent = "Paper beats rock";
      playerScoreValue += 1;
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
    if (playerSelection == "✊" && computerSelection == "✌️") {
      document.getElementById("status").textContent = "You win!";
      document.getElementById("description").textContent =
        "Rock beats scissors";
      playerScoreValue += 1;
      document.getElementById("player-score-value").textContent =
        playerScoreValue;
      document.getElementById("computer-score-value").textContent =
        computerScoreValue;
    }
  }
}
