//0 ==> nothing
//1 => tree
//2 ==> rock
//3 ==> tree-on-fire
//4 ==> ashes
//5 ==> fire
//6 ==> kangoo
//7 ==> baby

gridLvl1Av = [
  [7, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 7, 1, 0],
  [1, 0, 0, 2, 2, 0, 1, 1, 1, 0],
  [6, 0, 0, 0, 0, 2, 0, 0, 1, 0]
];

gridLvl1AvReset = [
  [7, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 7, 1, 0],
  [1, 0, 0, 2, 2, 0, 1, 1, 1, 0],
  [6, 0, 0, 0, 0, 2, 0, 0, 1, 0]
];

gridLvl1Ap = [
  [7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 3, 0, 3, 0, 3, 0, 0],
  [0, 3, 3, 3, 3, 3, 5, 5, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 3, 0, 3, 0, 3, 3, 0, 3, 3],
  [3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 3, 0, 3, 3],
  [3, 3, 3, 0, 3, 0, 3, 7, 3, 0],
  [3, 0, 0, 5, 5, 0, 3, 3, 3, 0],
  [6, 0, 0, 0, 0, 5, 0, 0, 3, 0]
];

gridLvl1ApReset = [
  [7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 3, 0, 3, 0, 3, 0, 0],
  [0, 3, 3, 3, 3, 3, 5, 5, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 3, 0, 3, 0, 3, 3, 0, 3, 3],
  [3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 3, 0, 3, 3],
  [3, 3, 3, 0, 3, 0, 3, 7, 3, 0],
  [3, 0, 0, 5, 5, 0, 3, 3, 3, 0],
  [6, 0, 0, 0, 0, 5, 0, 0, 3, 0]
];

/////////////////////////////////////
// VAR

let gameIsOver = false;
let lvl1Comp = false;
let lvl2Comp = false;
let lvl3Comp = false;

/////////////////////////////////////

function loadGrid(grid, element) {
  let cells = element.getElementsByTagName("div");
  let rows = 10;
  let columns = 10;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      element = cells[row * 10 + column];
      let classEl = getClass(grid[row][column]);
      if (element.classList.contains("kangoo")) {
        element.classList.remove("kangoo");
      } else if (element.classList.contains("rock")) {
        element.classList.remove("rock");
      }
      if (classEl) element.classList.add(classEl);
      element.classList.add("cell");
    }
  }
}

function getClass(x) {
  let res;

  switch (x) {
    case 0:
      break;

    case 1:
      res = "tree";
      break;

    case 2:
      res = "rock";
      break;

    case 3:
      res = "tree-on-fire";
      break;

    // case 4:
    //   res = "ashes";
    //   break;

    case 5:
      res = "fire";
      break;

    case 6:
      res = "kangoo";
      break;

    case 7:
      res = "end";
      break;

    case 8:
      res = "baby";
      break;

    default:
      break;
  }
  return res;
}

// FUNCTION TO SWAP SCREENS

function swapKangooTo(oldGrid, grid) {
  let oldPos = fetchInGrid(oldGrid, 6);
  let posKangoo = fetchInGrid(grid, 6);
  console.log(posKangoo);
  let oldRow = oldPos[0];
  let oldColumn = oldPos[1];
  let kangooRow = posKangoo[0];
  let kangooColumn = posKangoo[1];
  eraseKangooInGrid(kangooRow, kangooColumn, grid);
  grid[oldRow][oldColumn] = 6;
}
function checkSwapeIsPossible() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  if (apres.classList.contains("hidden-display")) {
    // CURRENT SCREEN IS AVANT
    let grid = gridLvl1Av;
    let newGrid = gridLvl1Ap;
    let posKangoo = fetchInGrid(grid, 6);
    let row = posKangoo[0];
    let column = posKangoo[1];

    if (newGrid[row][column] === 5) {
      gameOver();
    }

    return true;
  } else {
    // CURRENT SCREEN IS APRES
    let grid = gridLvl1Ap;
    let newGrid = gridLvl1Av;
    let posKangoo = fetchInGrid(grid, 6);
    let row = posKangoo[0];
    let column = posKangoo[1];

    if (newGrid[row][column] === 2 || newGrid[row][column] === 1) {
      // ROCK or TREE ==> CANT SWAP
      console.log("Rock or Tree on the way can't swap");
      let value = newGrid[row][column];
      return false;
    }
    return true;
  }
}

function eraseKangooInGrid(row, column, grid) {
  grid[row][column] = 0;
}

function spaceSwitchScreens() {
  oxo.inputs.listenKey("space", function() {
    if (gameIsOver) return;
    if (!checkSwapeIsPossible()) return;
    avant.classList.toggle("hidden-display");
    apres.classList.toggle("hidden-display");
    let currentGrid, element, oldGrid;
    let screen = getCurrentScreen();
    if (screen === "avant") {
      oldGrid = gridLvl1Ap;
      currentGrid = gridLvl1Av;
      element = avant;
      console.log("current map is " + screen);
      swapKangooTo(oldGrid, currentGrid);
      initControls(currentGrid, element);
    } else {
      oldGrid = gridLvl1Av;
      currentGrid = gridLvl1Ap;
      element = apres;
      console.log("current map is " + screen);
      swapKangooTo(oldGrid, currentGrid);
      initControls(currentGrid, element);
    }
    loadGrid(currentGrid, element);
  });
}

function getCurrentScreen() {
  let screen = avant.classList.contains("hidden-display") ? "apres" : "avant";
  return screen;
}

function createGrid(x, element) {
  for (let i = 0; i < x; i++) {
    let div = document.createElement("div");
    element.appendChild(div);
  }
}

// FUNCTION USED TO MOVE KANGOUROU

function fetchInGrid(grid, x) {
  let rows = 10;
  let columns = 10;
  let pos = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === x) {
        pos = [row, column];
        return pos;
      }
    }
  }
}

function getNewPos(direction, pos) {
  let row = pos[0];
  let column = pos[1];
  let newRow = row;
  let newColumn = column;
  if (direction === "down") {
    newRow++;
  } else if (direction === "up") {
    newRow--;
  } else if (direction === "left") {
    newColumn--;
  } else if (direction === "right") {
    newColumn++;
  }

  if (newRow >= 0 && newRow < 10 && newColumn >= 0 && newColumn < 10) {
    console.log("in range ");
    return [newRow, newColumn];
  } else {
    console.log("out of range");
    return [row, column];
  }
}

function checkNewValueInGrid(row, column, grid, direction) {
  let value = grid[row][column];
  if (value == 1) {
    // TREE
    return false;
  } else if (value == 7) {
    // END
  } else if (value == 3) {
    // TREEONFIRE
    return false;
  } else if (value == 5) {
    // FIRE
  } else if (value == 2) {
    if (direction) {
      let pos = [row, column];
      let element = avant;
      moveRock(pos, direction, grid, element);
      return false;
    }
    // ROCK
  } else {
    return true;
  }
}

function moveKangoo(direction, grid, element) {
  let pos = fetchInGrid(grid, 6);
  let newPos = getNewPos(direction, pos);
  console.log(newPos);
  if (pos[0] == newPos[0] && pos[1] == newPos[1]) {
    return; // OUT OF RANGE
  }
  if (checkNewValueInGrid(newPos[0], newPos[1], grid, direction)) {
    let newRow = newPos[0];
    let newColumn = newPos[1];
    let row = pos[0];
    let column = pos[1];
    grid[newRow][newColumn] = 6;
    grid[row][column] = 0;
    loadGrid(grid, element);
  }
}

///////

// FUNCTION USED TO MOVE ROCK
function isEmpty(pos, grid) {
  let row = pos[0];
  let column = pos[1];
  let value = grid[row][column];
  if (value == 0) {
    // TREE
    return true;
  } else {
    return false;
  }
}

function moveRock(pos, direction, grid, element) {
  console.log("Moving rock");
  let currPosRock = pos;
  let newPos = getNewPos(direction, currPosRock);
  if (isEmpty(newPos, grid)) {
    let newRow = newPos[0];
    let newColumn = newPos[1];
    let row = currPosRock[0];
    let column = currPosRock[1];
    grid[newRow][newColumn] = 2;
    grid[row][column] = 0;
    loadGrid(grid, element);
  }
}

///////
function initGame() {
  createGrid(100, avant);
  createGrid(100, apres);
  loadGrid(gridLvl1Av, avant);
}

function initControls(grid, element) {
  oxo.inputs.listenKeys(["up", "down", "left", "right"], function(key) {
    if (!gameIsOver) moveKangoo(key, grid, element);
  });
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  initGame();
  initControls(gridLvl1Av, avant);
  spaceSwitchScreens();
  displayLvlText(1);
  setTimeout(() => {
    displayLvlText(2);
  }, 5000);
});

function gameOver() {
  gameIsOver = true;
  setTimeout(() => {
    oxo.screens.loadScreen("gameover", function() {
      console.log("Perdu");
    });
  }, 1000);
}

// HUD
function displayLvlText(string) {
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.classList.add("level");
  p.innerHTML = "LEVEL " + string;
}
