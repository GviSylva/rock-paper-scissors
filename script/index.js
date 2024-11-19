function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissor"];
  const randomChoice = Math.floor(Math.random() * choice.length);

  return randomChoice;
}
