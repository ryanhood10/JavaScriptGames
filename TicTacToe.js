// constants for the game board
const ROWS = 3;
const COLS = 3;

// constants for the players
const PLAYER_X = "X";
const PLAYER_O = "O";

// constant for the empty cell value
const EMPTY_CELL = "";

// initialize the game board to be an empty 3x3 grid
let gameBoard = [
  [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
  [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
  [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
];

// initialize the current player to be PLAYER_X
let currentPlayer = PLAYER_X;

// function to switch the current player
function switchPlayer() {
  if (currentPlayer === PLAYER_X) {
    currentPlayer = PLAYER_O;
  } else {
    currentPlayer = PLAYER_X;
  }
}

// function to check if the game is over
function checkGameOver() {
  // check for a win by checking each row, column, and diagonal
  for (let i = 0; i < ROWS; i++) {
    if (gameBoard[i][0] !== EMPTY_CELL && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
      return true;
    }
    if (gameBoard[0][i] !== EMPTY_CELL && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
      return true;
    }
  }
  if (gameBoard[0][0] !== EMPTY_CELL && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
    return true;
  }
  if (gameBoard[0][2] !== EMPTY_CELL && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
    return true;
  }

  // check for a draw by checking if there are any empty cells
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (gameBoard[i][j] === EMPTY_CELL) {
        return false;
      }
    }
  }

  // if we reach here, it means the game is a draw
  return true;
}

// function to handle a player's move
function handleMove(row, col) {
  // if the cell is not empty, return without doing anything
  if (gameBoard[row][col] !== EMPTY_CELL) {
    return;
  }}

  // place the current player's symbol in the cell
  gameBoard[row][col] = currentPlayer;

  // check if the game is over
  if (checkGameOver()) {}
    // display the winner
