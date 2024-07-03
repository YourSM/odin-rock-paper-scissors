let humanScore = 0
let computerScore = 0

let humanSelection = 0
let computerSelection = 0

for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
  if (humanSelection === computerSelection) {
    --i;
  }
}

if (humanScore > computerScore) {
  console.log("Congratulations, you won!")
} else {
  console.log("Sorry, you lost against the computer...")
}

function getComputerChoice(y) {
  let randomSelection = Math.random();
  if (randomSelection >= 0 && randomSelection <= 0.3) {
    computerChoice = "rock";
  } else if (randomSelection >= 0.4 && randomSelection <= 0.6) {
    computerChoice = "scissors";
    } else computerChoice = "paper";
   return(computerSelection = computerChoice)
  }

function getHumanChoice() {
  let humanChoice = prompt('Please choose between "Rock" "Paper" and "Scissors"');
  if (humanChoice === null) {
    console.log("You didn\'t choose an appropriate value, so one was assigned!");
    return(humanSelection = getComputerChoice(humanChoice));
} else if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
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