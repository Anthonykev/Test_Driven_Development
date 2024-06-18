// rock-paper-scissors.js
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
    drawScore++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }

  console.log(
    `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`
  );
  console.log(
    `Player: ${playerScore} | Computer: ${computerScore} | Draws: ${drawScore}`
  );
}

function sayHello(name) {
  console.log("Hello, " + name);
  return;
}

sayHello("Anthony");

console.log("This is a debugging statement");

if (playerScore === 10) {
  console.log("Player reached 10 points");
}

if (playerScore === 20) {
  console.log("Player reached 20 points");
}

// Funktion zum Testen des Spiels in der Konsole
function testGame() {
  const choices = ["rock", "paper", "scissors"];
  for (let i = 0; i < 10; i++) {
    const playerChoice = choices[Math.floor(Math.random() * 3)];
    playGame(playerChoice);
  }
}

testGame();

console.log("This is a missing semicolon");
