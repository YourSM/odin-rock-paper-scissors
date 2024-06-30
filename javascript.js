getHumanChoice()
getComputerChoice()
function getComputerChoice(y) {
  let x = Math.random();
  if (x >= 0 && x <= 0.3) {
    y = "rock";
  } else if (x >= 0.4 && x <= 0.6) {
    y = "scissors";
    } else y = "paper";
    console.log(y)
  }

function getHumanChoice() {
  let humanChoice = prompt('Please choose between "Rock" "Paper" and "Scissors"');
  if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
    console.log(humanChoice.toLowerCase());
  } else {
      getComputerChoice(humanChoice);
    
  }
}