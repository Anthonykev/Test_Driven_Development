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

// function unusedFunction() {
//   console.log("This function is never used");
// }

// let unusedVar = 42;

if (playerScore == 10) {
  console.log("Player reached 10 points");
}

// let computerChoice = "rock";

console.log("This is a debugging statement");
function sayHello(name) {
  console.log("Hello, " + name);
  return;
}

sayHello("World");

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

const { prop1, prop2 } = obj;

playGame("rock");
playGame("paper");
playGame("scissors");

playerChoice = "rock";
var exampleVar = "This should be let or const";
console.log("This is a missing semicolon");

// Zusätzliche Fehler:
function anotherFunction() {
  console.log("This is another function");
}

const anotherVar = "Another unused variable";

if ((playerScore = 20)) {
  console.log("Player reached 20 points");
}
