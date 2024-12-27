function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;

    case 1:
      computerChoice = "paper";
      break;

    case 2:
      computerChoice = "scissors";
      break;

    default:
      break;
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper or scissors?").toLowerCase();

  if (humanChoice != "rock" && "paper" && "scissors") {
    alert("Please, enter one of the valid choices");
  }
}
