// IF NEXT CELL IS ROCK
// SAVE NEXT CELL = currPosRock AND DIRECTION KANGOO = direction and GRID = grid
// let newPos = getNewPos(direction, currPosRock)
// checkNewValueInGrid(newPos[0], newPos[1], grid, isRock)
//
// return true or false
// if true
//

function swapKangooTo(currentGrid, grid) {
  let currentPos = fetchInGrid(currentGrid, 6);
  let currentRow = currentPos[0];
  let currentColumn = currentPos[1];
  eraseKangooInGrid(currentRow, currentColumnn, grid);
  grid[currentRow][currentColumnn] = 6;
}

function eraseKangooInGrid(row, column, grid) {
  grid[row][column] = 0;
}
