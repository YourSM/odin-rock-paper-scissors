function getComputerChoice(y) {
  let x = Math.random();
  if (x >= 0 && x <= 0.3) {
    y = "Rock";
  } else if (x >= 0.4 && x <= 0.6) {
    y = "Scissors";
    } else y = "Paper";
    console.log(y)
  }

getComputerChoice()

function getHumanChoice() {
  humanChoice = prompt('Please choose between "Rock" "Paper" and "Scissors"');
  if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
    getComputerChoice(humanChoice);
  } else {
      console.log(humanChoice)
  }
}

  getHumanChoice()