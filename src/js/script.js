//0 ==> nothing
//1 => tree
//2 ==> end
//3 ==> tree-on-fire
//4 ==> ashes
//5 ==> fire
//6 ==> start

gridLvl1Av = [
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 7, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];

gridLvl1Ap = [
  [2, 0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 3, 0, 3, 0, 3, 0, 0],
  [0, 3, 3, 3, 3, 3, 5, 5, 0, 0],
  [0, 3, 0, 0, 4, 0, 0, 0, 3, 0],
  [0, 3, 0, 3, 0, 3, 3, 0, 3, 3],
  [3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 3, 4, 3, 3],
  [3, 3, 3, 0, 3, 0, 3, 7, 3, 0],
  [3, 0, 0, 5, 5, 0, 3, 3, 3, 0],
  [6, 0, 0, 0, 0, 5, 0, 0, 3, 0]
];

/////////////////////////////////////
// VAR

let gameOver = false;
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
      res = "end";
      break;

    case 3:
      res = "tree-on-fire";
      break;

    case 4:
      res = "ashes";
      break;

    case 5:
      res = "fire";
      break;

    case 6:
      res = "kangoo";
      break;

    case 7:
      res = "baby";
      break;

    default:
      break;
  }
  return res;
}

function spaceSwitchScreens() {
  oxo.inputs.listenKey("space", function() {
    avant.classList.toggle("hidden-display");
    apres.classList.toggle("hidden-display");
    let currentGrid, element;
    let screen = getCurrentScreen();
    if (screen === "avant") {
      currentGrid = gridLvl1Av;
      element = avant;
    } else {
      currentGrid = gridLvl1Ap;
      element = apres;
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
    return [newRow, newColumn];
  } else {
    return [row, column];
  }
}

function checkNewValueInGrid(row, column, grid) {
  let value = grid[row][column];
  if (value == 1) {
    // TREE
    return false;
  } else if (value == 2) {
    // END
  } else if (value == 3) {
    // TREEONFIRE
    return false;
  } else if (value == 5) {
    // FIRE
  } else {
    return true;
  }
}

function moveKangoo(direction, grid, element) {
  let pos = fetchInGrid(grid, 6);
  let newPos = getNewPos(direction, pos);
  console.log(newPos);
  if (checkNewValueInGrid(newPos[0], newPos[1], grid)) {
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

function initGame() {
  createGrid(100, avant);
  createGrid(100, apres);
  loadGrid(gridLvl1Av, avant);
}

function initControls(grid, element) {
  oxo.inputs.listenKeys(["up", "down", "left", "right"], function(key) {
    moveKangoo(key, grid, element);
  });
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  initGame();
  initControls(gridLvl1Av, avant);
  spaceSwitchScreens();
});
