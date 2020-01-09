//0 ==> nothing
//1 => tree
//2 ==> rock
//3 ==> tree-on-fire
//4 ==> ashes
//5 ==> fire
//6 ==> kangoo
//7 ==> end
//8 ==> baby

let gridAv = [];
let gridAp = [];
let gridLvl1Av = [
  [7, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 8, 1, 0],
  [1, 0, 0, 2, 2, 0, 1, 1, 1, 0],
  [6, 0, 0, 0, 0, 2, 0, 0, 1, 0]
];

let gridLvl1Ap = [
  [7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 3, 0, 3, 0, 3, 0, 0],
  [0, 3, 3, 3, 3, 3, 5, 5, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 3, 0, 3, 0, 3, 3, 0, 3, 3],
  [3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 3, 0, 3, 3],
  [3, 3, 3, 0, 3, 0, 3, 8, 3, 0],
  [3, 0, 0, 5, 5, 0, 3, 3, 3, 0],
  [6, 0, 0, 0, 0, 5, 0, 0, 3, 0]
];

let gridLvl2Av = [
  [0, 7, 1, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 1, 1, 8, 1, 1, 0, 0, 0],
  [2, 1, 1, 0, 2, 0, 0, 1, 2, 1],
  [0, 1, 0, 2, 8, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 2, 0, 2, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [0, 2, 0, 2, 0, 0, 1, 0, 0, 0],
  [1, 8, 1, 1, 1, 6, 1, 0, 8, 0]
];

let gridLvl2Ap = [
  [0, 7, 3, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 3, 3, 8, 3, 3, 0, 0, 0],
  [5, 3, 3, 0, 5, 0, 0, 3, 5, 3],
  [0, 0, 0, 5, 8, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 3, 3, 0, 3, 0, 0],
  [0, 3, 3, 3, 3, 0, 3, 0, 3, 0],
  [3, 0, 0, 0, 5, 0, 5, 0, 0, 0],
  [3, 0, 0, 0, 3, 0, 3, 0, 3, 0],
  [0, 5, 0, 5, 0, 0, 3, 0, 0, 0],
  [3, 8, 3, 3, 3, 6, 3, 0, 8, 0]
];

let gridLvl3Av = [
  [0, 1, 7, 0, 0, 1, 1, 1, 8, 0],
  [0, 8, 1, 0, 8, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
  [2, 0, 1, 8, 2, 8, 2, 1, 0, 0],
  [0, 2, 0, 1, 0, 1, 8, 1, 2, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 2, 0, 0, 1, 0, 2, 8, 1, 0],
  [1, 0, 1, 8, 2, 0, 2, 1, 1, 1],
  [0, 0, 0, 1, 1, 2, 0, 1, 1, 1],
  [6, 0, 2, 0, 0, 0, 0, 0, 1, 1]
];

let gridLvl3Ap = [
  [0, 3, 7, 0, 0, 3, 3, 3, 8, 0],
  [0, 8, 3, 0, 8, 0, 3, 0, 3, 0],
  [0, 3, 3, 3, 0, 3, 0, 0, 0, 0],
  [5, 0, 3, 8, 5, 8, 5, 3, 0, 0],
  [0, 5, 0, 0, 0, 3, 8, 3, 5, 0],
  [3, 0, 3, 3, 0, 3, 0, 3, 0, 3],
  [0, 5, 0, 0, 0, 0, 5, 8, 0, 0],
  [3, 0, 3, 8, 5, 0, 5, 3, 3, 0],
  [0, 0, 0, 3, 3, 5, 0, 0, 0, 0],
  [6, 0, 5, 0, 0, 0, 0, 0, 3, 3]
];

/////////////////////////////////////

function loadGrid(grid, element) {
  let cells = element.getElementsByTagName("div");
  let rows = 10;
  let columns = 10;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      element = cells[row * 10 + column];
      let classEl = getClass(grid[row][column]);
      element.className = "";
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
    let grid = gridAv;
    let newGrid = gridAp;
    let posKangoo = fetchInGrid(grid, 6);
    let row = posKangoo[0];
    let column = posKangoo[1];

    if (newGrid[row][column] === 5) {
      gameOver();
    }

    return true;
  } else {
    // CURRENT SCREEN IS APRES
    let grid = gridAp;
    let newGrid = gridAv;
    let posKangoo = fetchInGrid(grid, 6);
    let row = posKangoo[0];
    let column = posKangoo[1];

    if (newGrid[row][column] === 2 || newGrid[row][column] === 1) {
      console.log("ROCK OR TREE ON THE SAME CELL CAN'T SWAP");
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
    switchScreen();
  });
}

function switchScreen() {
  if (gameIsOver) return;
  if (!checkSwapeIsPossible()) return;
  const gameBg = document.querySelector(".bg");
  gameBg.classList.toggle("bg--ap");
  avant.classList.toggle("hidden-display");
  apres.classList.toggle("hidden-display");
  let currentGrid, element, oldGrid;
  let screen = getCurrentScreen();
  if (screen === "avant") {
    oldGrid = gridAp;
    currentGrid = gridAv;
    element = avant;
    console.log("current map is " + screen);
    swapKangooTo(oldGrid, currentGrid);
    initControls(currentGrid, element);
  } else {
    oldGrid = gridAv;
    currentGrid = gridAp;
    element = apres;
    console.log("current map is " + screen);
    swapKangooTo(oldGrid, currentGrid);
    initControls(currentGrid, element);
  }
  loadGrid(currentGrid, element);
}

function resetScreen() {
  if (getCurrentScreen() == "apres") {
    switchScreen();
  } else {
    switchScreen();
    switchScreen();
  }
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
  return false;
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

function checkNewValueInGrid(row, column, grid, direction) {
  let value = grid[row][column];
  if (value == 1) {
    // TREE
    return false;
  } else if (value == 7) {
    // END
    if (playerHasAllBabies()) levelCompleted();
  } else if (value == 8) {
    // BABY
    deleteBaby(row, column);
    wonBaby();
    console.log("KANGOO HAS SAVED A BABY");
    return true;
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
    updateSpriteDirection(direction);
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
  console.log("KANGOO MOVED A ROCK");
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
    updateSpriteDirection(direction);
  }
}

///////
function initGame() {
  createGrid(100, avant);
  createGrid(100, apres);
  loadGrid(gridAv, avant);
}

function initControls(grid, element) {
  oxo.inputs.listenKeys(["up", "down", "left", "right"], function(key) {
    if (!gameIsOver) moveKangoo(key, grid, element);
  });
}

// HUD / INFOS LEVELS
function displayLvlText(string) {
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.classList.add("level");
  p.innerHTML = "LEVEL " + string;
}

// SPRITE KANGOO
function updateSpriteDirection(direction) {
  let screen = getCurrentScreen();
  let element = screen == "avant" ? avant : apres;
  let kangoo =
    element.querySelector(".kangoo") ||
    element.querySelector(".kangoo--down") ||
    element.querySelector(".kangoo--left") ||
    element.querySelector(".kangoo--right");
  let spriteClass;
  switch (direction) {
    case "up":
      spriteClass = "kangoo";
      break;
    case "down":
      spriteClass = "kangoo--down";

      break;
    case "left":
      spriteClass = "kangoo--left";

      break;
    case "right":
      spriteClass = "kangoo--right";

      break;
    default:
      break;
  }
  kangoo.classList = spriteClass;
}

function swipeSpriteKangoo(currElement, currElement) {
  currPos;
}

// LEVELS

let gameIsOver = false;
let lvl1Comp = false;
let lvl2Comp = false;
let lvl3Comp = false;

function loadLvl1() {
  displayLvlText(1);
  gridAv = gridLvl3Av;
  gridAp = gridLvl3Ap;
}

function loadLvl2() {
  displayLvlText(2);
  gridAv = gridLvl2Av;
  gridAp = gridLvl2Ap;
  console.log(gridAv);
  console.log(gridAp);
  let avant = document.getElementById("avant");
  loadGrid(gridAv, avant);
  resetScreen();
  resetBabies();
  console.log("LEVEL 2 LOADED");
}

function loadLvl3() {
  displayLvlText(3);
  gridAv = gridLvl3Av;
  gridAp = gridLvl3Ap;
  let avant = document.getElementById("avant");
  loadGrid(gridAv, avant);
  resetScreen();
  resetBabies();
  console.log("LEVEL 3 LOADED");
}

function levelCompleted() {
  if (lvl1Comp && lvl2Comp) {
    lvl3Comp = true;
    // WIN SCREEN
  } else if (lvl1Comp) {
    lvl2Comp = true;
    loadLvl3();
    // LOAD LVL 3
  } else {
    lvl1Comp = true;
    loadLvl2();
    // LOAD LVL 2
  }
}

// BABY

function deleteBaby(row, column) {
  gridAv[row][column] = 0;
  gridAp[row][column] = 0;
}

function resetBabies() {
  let div = document.getElementById("score");
  let toDelete = div.querySelectorAll("div");
  toDelete.forEach(element => {
    element.remove();
  });
}

function wonBaby() {
  let div = document.getElementById("score");
  let baby = document.createElement("div");
  baby.classList.add("babyhead");
  baby.style.width = "50px";
  baby.style.height = "50px";
  div.appendChild(baby);
}

function playerHasAllBabies() {
  let babyInGrid = fetchInGrid(gridAv, 8);
  if (babyInGrid) {
    return false;
  } else {
    return true;
  }
}

// DECOR
function loadGameBg() {
  const question = document.getElementById("question");
  const story = document.getElementById("story");
  const controls = document.getElementById("controls");

  question.addEventListener("click", () => {
    controls.classList.toggle("hidden-display");
  });
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  loadLvl1();
  console.log("LEVEL 1 LOADED");
  initGame();
  loadGameBg();

  initControls(gridAv, avant);
  spaceSwitchScreens();
});

function gameOver() {
  gameIsOver = true;
  setTimeout(() => {
    oxo.screens.loadScreen("gameover", function() {
      console.log("KANGOO FAILED");
    });
  }, 1000);
}

// oxo.screens.loadScreen("gameover", () => {});
