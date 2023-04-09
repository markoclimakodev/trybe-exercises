/**
6 - Use switch/case to write a code that receives the name of a chess piece and returns the movements it can make.
*/

let chessPiece = 'Knight';

switch (chessPiece) {
  case 'Pawn':
    console.log(
      `Can move forward one or two squares on its first move.\n 
        After that, it can only move one square forward.\n 
        It captures diagonally one square forward.`
    );
    break;
  case 'Knight':
    console.log(
      `Moves in an L-shape: two squares in any direction,
       then one square perpendicular to the first two squares.`
    );
    break;
  case 'Bishop':
    console.log(`Moves diagonally any number of squares.`);
    break;
  case 'Rook':
    console.log(`Moves horizontally or vertically any number of squares.`);
    break;
  case 'Queen':
    console.log(
      `Moves diagonally, horizontally, or vertically any number of squares.`
    );
    break;
  case 'King':
    console.log(`Can move one square in any direction.`);
    break;
}