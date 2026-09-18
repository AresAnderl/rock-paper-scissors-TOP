// implementation:

// all selectors:
let playerWins = 0;
let computerWins = 0;
let ties = 0;

const playerWinHTML = document.querySelector(".player--count");
const computerWinHTML = document.querySelector(".computer--count");
const tieHTML = document.querySelector(".tie--count");

const playButtons = document.querySelector(".play--game");
const winnerCongrats = document.querySelector(".winner--congrats");

// put name to computrer selection
const getRPS = (number) => {
  return number === 1
    ? "rock"
    : number === 2
      ? "paper"
      : number === 3
        ? "scissors"
        : false;
};

const whoWins = (player, computer) => {
  // tie case
  if (player === computer) {
    ties++;
    return "tie";
  }
  // rock case
  if (player === "rock") {
    if (computer === "scissors") {
      playerWins++;
      return "player wins";
    } else {
      computerWins++;
      return "computer wins";
    }
  }
  // paper case
  if (player === "paper") {
    if (computer === "rock") {
      playerWins++;
      return "player wins";
    } else {
      computerWins++;
      return "computer wins";
    }
  }
  // scissors case
  if (player === "scissors") {
    if (computer === "paper") {
      playerWins++;
      return "player wins";
    }
    {
      computerWins++;
      return "computer wins";
    }
  }
};

const sumWins = (winner) => {
  if (winner === "tie") {
    tieHTML.textContent = `ties: ${ties}`;
  }
  if (winner === "player wins") {
    playerWinHTML.textContent = `player wins: ${playerWins}`;
  }
  if (winner === "computer wins") {
    computerWinHTML.textContent = `computer wins: ${computerWins}`;
  }
};

// use randomness to generate a number between 1 and 3 for the 3 options
const computerTry = () => {
  const randomNumber = Math.ceil(Math.random() * 3);
  const computerChoose = getRPS(randomNumber);
  return computerChoose;
};

// when user click button get their selection and play game
const humanTry = (e) => {
  const target = e.target;
  console.log(target);
  if (target.classList.contains("rock")) {
    console.log("rock");
    playGame("rock");
  } else if (target.classList.contains("scissors")) {
    console.log("scissors");
    playGame("scissors");
  } else if (target.classList.contains("paper")) {
    console.log("paper");
    playGame("paper");
  }
};

const resetCounters = () => {
  playerWins = 0;
  playerWinHTML.textContent = "player wins: 0";
  computerWins = 0;
  computerWinHTML.textContent = "computer wins: 0";
  ties = 0;
  tieHTML.textContent = "ties: 0";
};

// check if game is finished
const finishGame = () => {
  if (playerWins === 5) {
    winnerCongrats.textContent = "player has won the game!";
    resetCounters();
  }
  if (computerWins === 5) {
    winnerCongrats.textContent = "computer has won the game!";
    resetCounters();
  }
};

//play game
const playGame = (player) => {
  if (winnerCongrats.textContent.length > 1) {
    winnerCongrats.textContent = " ";
  }
  const computer = computerTry();
  const winner = whoWins(player, computer);
  console.log(`computer chose: ${computer}. player chose: ${player}`);
  sumWins(winner);
  finishGame();
};

// select div element that contains the buttons

console.log(playButtons);

playButtons.addEventListener("click", humanTry);
