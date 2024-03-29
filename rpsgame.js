// generates random integer between two values
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generates a random move for the CPU player
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

// gets player move
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
// scores the round
function scoreRound(playerMove, compMove) {
  if (playerMove === compMove) {
    return "Tie";
  }
  else if (playerMove === "R" && compMove === "S") {
    return "You win!"
  }
  else if (playerMove === "P" && compMove === "R") {
    return "You win!"
  }
  else if (playerMove === "S" && compMove === "P") {
    return "You win!"
  }
  else {
    return "Computer wins!"
  }
}

// starts gameplay
function playGame() {
  let roundCount = prompt("How many rounds would you like to play? ")
  for (i = 0; i < roundCount; i++) {
    let playerMove = getPlayerMove();
    let compMove = getCompMove();
    console.log(`player played: ${playerMove} and computer played ${compMove}`);
    console.log(scoreRound(playerMove, compMove))
  }


}

playGame()