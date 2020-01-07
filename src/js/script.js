//0 ==> nothing
//1 => tree
//2 ==> rock
//3 ==> tree-on-fire
//4 ==> ashes
//5 ==> fire

gridLvl1Av = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 2, 2, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 1, 0]
];

gridLvl1Ap = [
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 3, 0, 3, 0, 3, 0, 0],
  [0, 3, 3, 3, 3, 3, 5, 5, 0, 0],
  [0, 3, 0, 0, 4, 0, 0, 0, 3, 0],
  [0, 3, 0, 3, 0, 3, 3, 0, 3, 3],
  [3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 3, 3, 3, 3],
  [3, 3, 3, 0, 3, 0, 3, 0, 3, 0],
  [3, 0, 0, 5, 5, 0, 3, 3, 3, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 3, 0]
];

function loadGrid(grid, element) {
  let cells = element.getElementsByClassName("cell");
  let rows = 10;
  let columns = 10;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      element = cells[row * 10 + column];
      let classEl = getClass(grid[row][column]);
      element.classList.add(classEl);
    }
  }
}

//0 ==> nothing
//1 => tree
//2 ==> rock
//3 ==> tree-on-fire
//4 ==> ashes
//5 ==> fire

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

    case 4:
      res = "ashes";
      break;

    case 5:
      res = "fire";
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
    console.log("pute");
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
    div.classList.add("cell");
    element.appendChild(div);
  }
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  createGrid(100, avant);
  createGrid(100, apres);
  loadGrid(gridLvl1Av, avant);
  spaceSwitchScreens();
});
