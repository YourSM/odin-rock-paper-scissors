let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

function getComputerChoice(y) {
  let x = Math.random();
  if (x >= 0 && x <= 0.3) {
    y = "rock";
  } else if (x >= 0.4 && x <= 0.6) {
    y = "scissors";
    } else y = "paper";
   return(y)
  }

function getHumanChoice() {
  let humanChoice = prompt('Please choose between "Rock" "Paper" and "Scissors"');
  if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
    return(humanChoice.toLowerCase());
  } else {
      console.log("You didn\'t choose an appropriate value, so one was assigned!");
      return(getComputerChoice(humanChoice));
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lost! Paper beats rock!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You won! Rock beats scissors!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lost! Scissors beats paper!");
  } else  if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You won! Paper beats rock!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You won! Scissors beats paper!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lost! Rock beats scissors!")
  } else {
      console.log("You tied as both sides choose " + humanSelection + "! No points were assigned!");
  }
}