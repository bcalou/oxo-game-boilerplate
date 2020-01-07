//1 => tree
//0 ==> nothing
//2 ==> rock

gridLvl1Av = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 2, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 2, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];

loadGrid(grid){
  for (var i = 5; i >= 0; i--) {
    if (grid[i][column]) continue;

    color = color === "yellow" ? "red" : "yellow";
    grid[i][column] = color;

    checkVictory();

    forEachCell(function(td, row, column) {
      if (grid[row][column]) td.className = grid[row][column];
    });

    break;
  }
}

function spaceSwitchScreens() {
  oxo.inputs.listenKey("space", function() {
    let avant = document.getElementById("avant");
    let apres = document.getElementById("apres");
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
    console.log(div);
  }
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  createGrid(100, avant);
  createGrid(100, apres);

  spaceSwitchScreens();
  let screen = getCurrentScreen();
  var kangoo = oxo.elements.createElement({
    type: "div", // optional
    class: "kangoo", // optional,
    obstacle: true, // optional,
    styles: {
      // optional
      // transform: "translate(50px, 50px)"
    },
    appendTo: "body" // optional
  });
});
