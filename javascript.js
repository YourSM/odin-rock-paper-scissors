let humanScore = 0
let computerScore = 0

let humanSelection = 0
let computerSelection = 0


if (humanScore > computerScore) {
  console.log("Congratulations, you won!")
} else {
  console.log("Sorry, you lost against the computer...")
}

function getComputerChoice() {
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
    })

    const resultPara = document.createElement("p")
    results.appendChild(resultPara)

  const score = document.createElement("p")
  results.appendChild(score)

  
// add div for displaying results.
// change console.logs to DOM methods.
// Display running score amd announce winner when one player
// obtains 5 points.