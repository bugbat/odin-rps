// global variables
let playerScore = 0;
let compScore = 0;
let ties = 0;

// generate random integer between two values
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// start gameplay
function playGame(playerChoice) {
  // let roundCount = prompt("How many rounds would you like to play? ")
  for (i = 0; i < 1; i++) {
    let compChoice = getCompMove();
    setChoices(playerChoice, compChoice);
    scoreRound(playerChoice, compChoice);
  }
}

// generate a random move for the CPU player
function getCompMove() {
  let rInt = getRandInt(1, 3);
  switch(rInt) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

// score the round
function scoreRound(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    ties++;
    setScores("ties", ties);
    return;
  }
  else if (playerChoice === "Rock") {
    if (compChoice === "Paper") {
      compScore++;
      setScores("compScore", compScore);
      return;
    }
    playerScore++;
    setScores("playerScore", playerScore);
    return;
  }
  else if (playerChoice === "Paper") {
    if (compChoice === "Scissors") {
      compScore++;
      setScores("compScore", compScore);
      return;
    }
    playerScore++;
    setScores("playerScore", playerScore);
    return;
  }
  else if (playerChoice === "Scissors") {
    if (compChoice === "Rock") {
      compScore++;
      setScores("compScore", compScore);
      return;
    }
    playerScore++;
    setScores("playerScore", playerScore);
    return;
  }
}

// update html display for choices
function setChoices(playerChoice, compChoice) {
  const playerChoiceSpan = document.querySelector("#playerchoice");
  const compChoiceSpan = document.querySelector("#compchoice");
  playerChoiceSpan.textContent = playerChoice;
  compChoiceSpan.textContent = compChoice;
}

// update html display for scores
function setScores(field, score) {
  const scoreSpan = document.querySelector("#" + field);
  scoreSpan.textContent = score;
  if (score === 5 && field !== "ties") {
    const winnerPar = document.querySelector("#winner");
    if (field === "playerScore") {
      winnerPar.textContent = "Player wins!"
    }
    else {
      winnerPar.textContent = "Computer wins!"
    }
  }
}

// set up buttons to send choice to function
const choiceButtons = document.querySelectorAll("button");

choiceButtons.forEach(button => {
  button.addEventListener("click", function() {
    playGame(button.id);
  });
  }
);