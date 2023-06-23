/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

//! My long solution:

function isSolved(board) {
  let isZero = false;

  //check middle value
  let middle = board[1][1];

  if (middle !== 0) {
    //checks middle
    if (board[1][0] === middle && board[1][2] === middle) {
      return middle;
    }
    //checks rest
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === 0 || board[2][2 - i] === 0) {
        isZero = true;
        continue;
      }
      if (board[0][i] === middle && board[2][2 - i] === middle) {
        return middle;
      }
    }
  } else {
    isZero = true;
  }

  //check top && left
  let topLeft = board[0][0];

  if (topLeft !== 0) {
    if (board[0][1] === topLeft && board[0][2] === topLeft) {
      return topLeft;
    }
    if (board[1][0] === topLeft && board[2][0] === topLeft) {
      return topLeft;
    }
  } else {
    isZero = true;
  }

  //check bottom and right
  let bottomRight = board[2][2];

  if (topLeft !== 0) {
    if (board[2][1] === bottomRight && board[2][0] === bottomRight) {
      return topLeft;
    }
    if (board[1][2] === bottomRight && board[0][2] === bottomRight) {
      return topLeft;
    }
  } else {
    isZero = true;
  }

  //check last two zereos
  if (board[1][0] === 0 || board[1][2] === 0) {
    isZero = true;
  }

  console.log(isZero);
  //check complete
  if (isZero) {
    return -1;
  } else {
    return 0;
  }
}
