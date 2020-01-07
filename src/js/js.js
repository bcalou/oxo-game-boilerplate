function initControlls(element) {
  oxo.inputs.listenKeys(["up", "down", "left", "right"], function(key) {
    if (key === "down") {
    } else if (key === "up") {
    } else if (key === "left") {
    } else if (key === "right") {
    }
  });
}

function getCurrentPos() {
  let pos = fetchInGrid("2");
}

function getModifier(direction) {
  return modifier;
}

function fetchInGrid(x) {
  let pos = [row, column];
  return pos;
}

function moveKangoo(currentPos, modifier) {
  // check if index + modifier --> tombe 1,3,5 ou 2 ------> fetchInGrid()
  // 5 --> degats
  // 1 ou 3 quitte la fonction
  // 2 lvl WIN
  // PUIS
  //current index --> grid replace 0
  //PUIS
  // index + modifier --> grid replace 6
}
