function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);
  if (x == 1) {
    return "scissors";
  } else if (x == 2) {
    return "paper";
  } else if (x == 3) {
    return "rock";
  }
}

function getHumanChoice() {
  let myChoice = prompt("Rock, Paper, Scissors");
  return myChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function gameRule(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("equality");
      return alert("equality");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(computerChoice);
      computerScore++;
      console.log(humanScore + " humane");
      console.log(computerScore + " computer");
      return alert("Computer " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(computerChoice);
      humanScore++;
      console.log(humanScore + " humane");
      console.log(computerScore + " computer");
      return alert("Human " + humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(computerChoice);
      computerScore++;
      console.log(humanScore + " humane");
      console.log(computerScore + " computer");
      return alert("Computer " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(computerChoice);
      humanScore++;
      console.log(humanScore + " humane");
      console.log(computerScore + " computer");
      return alert("Human " + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(computerChoice);
      computerScore++;
      console.log(humanScore + " humane");
      console.log(computerScore + " computer");
      return alert("Computer " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(computerChoice);
      humanScore++;
      console.log(humanScore + " humane");
      console.log(computerScore + " computer");
      return alert("Human " + humanScore);
    }
  }
  const y = getHumanChoice();
  const z = getComputerChoice();
  gameRule(y, z);
}

playGame();
playGame();
playGame();
