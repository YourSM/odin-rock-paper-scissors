

let humanScore = 0
let computerScore = 0

let humanSelection = 0
let computerSelection = 0

function getComputerChoice(y) {
  let x = Math.random();
  if (x >= 0 && x <= 0.3) {
    y = "rock";
  } else if (x >= 0.4 && x <= 0.6) {
    y = "scissors";
    } else y = "paper";
   return(computerSelection = y)
  }

function getHumanChoice() {
  let humanChoice = prompt('Please choose between "Rock" "Paper" and "Scissors"');
  if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
    return(humanSelection = humanChoice.toLowerCase());
  } else {
      console.log("You didn\'t choose an appropriate value, so one was assigned!");
      return(humanSelection = getComputerChoice(humanChoice));
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lost! Paper beats rock!");
      return(++computerScore);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You won! Rock beats scissors!");
      return(++humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lost! Scissors beats paper!");
      return(++computerScore);
  } else  if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You won! Paper beats rock!");
      return(++humanScore);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You won! Scissors beats paper!");
      return(++humanScore);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lost! Rock beats scissors!")
      return(++computerScore);
  } else {
      console.log("You tied as both sides choose " + humanChoice + "! No points were assigned!");
  }
}

for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
  if (humanSelection === computerSelection) {
    --i;
  }
}