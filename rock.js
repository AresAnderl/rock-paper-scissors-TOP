// implementation:

// Prompt the user to type in a number. store the result and compare ir later on with the value random generated
const humanChoose = Number(
  prompt(`What do you choose (please, only write the number): 
    1:Rock
    2:Paper
    3:Scrissors`),
);

// use randomness to generate a number between 1 and 3 for the 3 options
const randomNumber = Math.ceil(Math.random() * 3);
let computerChoose =
  randomNumber === 1
    ? "rock"
    : false || randomNumber === 2
      ? "paper"
      : false || randomNumber === 3
        ? "scissors"
        : false;

// log to the console the selections to make it easier to debug

console.log(randomNumber, computerChoose, humanChoose);

// if else statements to create the function to determine who wins
const compareResults = function () {
  if (humanChoose === randomNumber) {
    console.log(`It is a tie. you both choose ${computerChoose}`);
    return;
  }

  if (randomNumber === 1) {
    console.log(
      `${humanChoose === 2 ? "You win: you chose paper and machine chose " + computerChoose : "You lose: you chose scissors and machine chose " + computerChoose}`,
    );
  } else if (randomNumber === 2) {
    console.log(
      `${humanChoose === 3 ? "You win: you chose scissors and machine chose " + computerChoose : "You lose: you chose rock and machine chose " + computerChoose}`,
    );
  } else if (randomNumber === 3) {
    console.log(
      `${humanChoose === 1 ? "You win: you chose rock and machine chose " + computerChoose : "You lose: you chose paper and machine chose " + computerChoose}`,
    );
  }
};

compareResults();
