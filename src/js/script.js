//0 ==> nothing
//1 => tree
//2 ==> rock
//3 ==> tree / ashes
//4 ==> ashes
//5 ==> fire
let kangoo;

gridLvl1Av = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 2, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 2, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];

gridLvl1Ap = [
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 2, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 2, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
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

    case 6:
      res = "kangoo";
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
    console.log(getCurrentScreen());
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

  spaceSwitchScreens();
  let screen = getCurrentScreen();
  loadGrid(gridLvl1Av, avant);
});
