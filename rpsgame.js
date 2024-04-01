// global variables
playerScore = 0;
compScore = 0;
ties = 0;

// generate random integer between two values
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate a random move for the CPU player
function getCompMove() {
  let compMove = "";
  let rInt = getRandInt(1, 3);
  switch(rInt) {
    case 1:
      return compMove = "R";
    case 2:
      return compMove = "P";
    case 3:
      return compMove = "S";
  }
}

// get player move
function getPlayerMove() {
  let playerMove = prompt("What is your move? Enter (R)ock, (P)aper, or (S)cissors ");
  playerMove = playerMove.charAt(0).toUpperCase();
  if (playerMove === "R" || playerMove === "P" || playerMove === "S") {
    return playerMove;
  }
  else {
    getPlayerMove();
  }
}
// score the round
function scoreRound(playerMove, compMove) {
  if (playerMove === compMove) {
    ties++
    return "Tie";
  }
  else if (playerMove === "R") {
    if (compMove === "P") {
      compScore++
      return "Computer wins!";
    }
    playerScore++
    return "You win!";
  }
  else if (playerMove === "P") {
    if (compMove === "S") {
      compScore++
      return "Computer wins!";
    }
    playerScore++
    return "You win!";
  }
  else if (playerMove === "S") {
    if (compMove === "R") {
      compScore++
      return "Computer wins!";
    }
    playerScore++
    return "You win!";
  }
}

// start gameplay
function playGame(playerChoice) {
  // let roundCount = prompt("How many rounds would you like to play? ")
  for (i = 0; i < 1; i++) {
    let playerMove = playerChoice;
    let compMove = getCompMove();
    console.log(`player played: ${playerMove} and computer played ${compMove}`);
    console.log(scoreRound(playerMove, compMove))
  }
}

//playGame()

// set up buttons to send choice to function

const choiceButtons = document.querySelectorAll("button");


choiceButtons.forEach(button => {
  button.addEventListener("click", function() {
    playGame(button.id);
  });
  }
);