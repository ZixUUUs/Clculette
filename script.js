function getComputerChoice() {
  let computerChoice = ["rock", "scissors", "paper"];
  let random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

function getHumanChoice(callback) {
  document.querySelector(".Rock").addEventListener("click", () => {
    callback("rock");
  });
  document.querySelector(".Paper").addEventListener("click", () => {
    callback("paper");
  });
  document.querySelector(".Scissors").addEventListener("click", () => {
    callback("scissors");
  });
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function updatesScores() {
  document.querySelector(".Humane").textContent = humanScore;
  document.querySelector(".Computer").textContent = computerScore;
}

function playRound(computer, humanChoice) {
  if (computer == humanChoice && humanScore == computerScore) {
    alert("That's a tie!");
  } else if (
    (computer == "rock" && humanChoice == "paper") ||
    (computer == "paper" && humanChoice == "scissors") ||
    (computer == "scissors" && humanChoice == "rock")
  ) {
    console.log("human win round");
    humanScore++;
  } else {
    console.log("computer win round");
    computerScore++;
  }
  updatesScores();
}

document.querySelector(".run").addEventListener("click", function () {
  let runButton = document.querySelector(".run");
  runButton.disabled = true;

  getHumanChoice(function (humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    runButton.disabled = false;
  });
});
