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

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

function loadGrid(grid, element) {
  let cells = element.getElementsByClassName("cell");
  let rows = 10;
  let columns = 10;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      element = cells[row * 10 + column];
      let classEl = getClass(grid[row][column]);
      if (classEl) element.classList.add(classEl);
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
      res = "start";
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
    div.classList.add("cell");
    element.appendChild(div);
  }
}

function createKangoo(element, x, y) {
  // let kangoo = oxo.elements.createElement({
  //   type: "div",
  //   class: "kangoo"
  // });
  // element.appendChild(kangoo);
  // if (x && y) {
  //   kangoo.style.pos.left = x;
  //   kangoo.style.pos.top = y;
  // }
}

function getStartPos(grid, element) {
  let cells = element.getElementsByClassName("cell");
  let rows = 10;
  let columns = 10;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === 6) {
        let startCell = cells[row * 10 + column];
        console.log(startCell);
        var position = getPosition(startCell);
        return position;
      }
    }
  }
}

function initGame() {
  createGrid(100, avant);
  createGrid(100, apres);
  loadGrid(gridLvl1Av, avant);
}

function initLevel(grid, element, func) {
  let pos = getStartPos(grid, element);
  console.log("Start position is " + pos.x + " , " + pos.y);
  createKangoo(element, pos.x, pos.y);
}

function initControlls(element) {
  let kangoo = element.getElementsByClassName("kangoo")[0];
  console.log(kangoo.style.top + "top");
  oxo.inputs.listenKeys(["up", "down", "left", "right"], function(key) {
    console.log(key);
    const step = 70;
    const { style } = kangoo;
    console.log(style.top);
    if (key === "down") {
      style.top = `${parseInt(style.top) + step}px`;
    } else if (key === "up") {
      // style.top = `${parseInt(style.top) - step}px`;
    } else if (key === "left") {
    } else if (key === "right") {
    }
  });
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  initGame();
  initLevel(gridLvl1Av, avant);
  // initControlls(avant);
  spaceSwitchScreens();
});
