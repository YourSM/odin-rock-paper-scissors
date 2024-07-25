let humanScore = 0
let computerScore = 0

let humanSelection = 0
let computerSelection = 0

function getComputerChoice() {
  let randomSelection = Math.random();
  if (randomSelection >= 0 && randomSelection <= 0.3) {
    computerChoice = "rock";
  } else if (randomSelection >= 0.4 && randomSelection <= 0.6) {
    computerChoice = "scissors";
    } else computerChoice = "paper";
   return(computerSelection = computerChoice)
  }

function playRound(humanChoice, computerChoice) { 
  if (humanChoice === "rock" && computerChoice === "paper") {
      resultPara.textContent = "You lost! Paper beats rock"
      return(++computerScore);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
      resultPara.textContent = "You won! Rock beats scissors!";
      return(++humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      resultPara.textContent = "You lost! Scissors beats paper!";
      return(++computerScore);
  } else  if (humanChoice === "paper" && computerChoice === "rock") {
    resultPara.textContent = "You won! Paper beats rock!";
      return(++humanScore);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultPara.textContent = "You won! Scissors beats paper!";
      return(++humanScore);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    resultPara.textContent = "You lost! Rock beats scissors!"
      return(++computerScore);
  } else {
    resultPara.textContent = "You tied as both sides choose " + humanChoice + "! No points were assigned!";
  }
}

const selection = document.querySelector("#selection");
const results = document.querySelector("#results");
const resultPara = document.createElement("p");
const score = document.createElement("p");
const winner = document.createElement("p");

results.appendChild(resultPara)
results.appendChild(score)
results.appendChild(winner)

selection.addEventListener("click", (event) => {
  let target = event.target;
  switch(target.id) {
    case "rock" :
      playRound("rock", getComputerChoice())
      score.textContent = "Computer:" + computerScore + "player" + humanScore;
      break;
    case "paper" :
      playRound("paper", getComputerChoice());
      score.textContent = "Computer:" + computerScore + "player" + humanScore;
      break;
    case "scissors" :
      playRound("scissors", getComputerChoice());
      score.textContent = "Computer:" + computerScore + "player" + humanScore;
      break;
  }
  if (humanScore === 5 || computerScore === 5) {
   if (humanScore > computerScore) {
     winner.textContent = "Congratulations, you won the game!"
   } else {
     winner.textContent = "Sorry, you lost against the computer..."
   }
   humanScore = 0
  computerScore = 0
 } else winner.textContent = ""
})