//1 => tree
//0 ==> nothing
//2 ==> rock

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

function loadGrid(grid, element) {
  let cells = element.getElementsByClassName("cell");
  let rows = 10;
  let columns = 10;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      element = cells[row * 10 + column];
      color = getColor(grid[row][column]);
      element.style.backgroundColor = color;
    }
  }
}

function getColor(x) {
  let res;

  switch (x) {
    case 0:
      break;

    case 1:
      res = "red";
      break;

    case 2:
      res = "grey";
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
