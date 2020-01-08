// IF NEXT CELL IS ROCK
// SAVE NEXT CELL = currPosRock AND DIRECTION KANGOO = direction and GRID = grid
// let newPos = getNewPos(direction, currPosRock)
// checkNewValueInGrid(newPos[0], newPos[1], grid, isRock)
//
// return true or false
// if true
//

function checkSwapeIsPossible() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  if (avant.classList.contains("hidden-display")) {
    // CURRENT SCREEN IS AVANT
    return true;
  } else {
    console.log("in the function");
    // CURRENT SCREEN IS APRES
    let grid = gridLvl1Ap;
    let newGrid = gridLvl1Av;
    let posKangoo = fetchInGrid(grid, 6);
    let row = posKangoo[0];
    let column = posKangoo[1];
    if (newGrid[row][column] === 2) {
      // ROCK ==> CANT SWAP
      return false;
    }
    return true;
  }
}
