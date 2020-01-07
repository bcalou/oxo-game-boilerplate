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

function getNewPos(direction, pos) {
  let row = pos[O];
  let column = pos[1];
  let newRow = row;
  let newColumn = col;
  if (direction === "down") {
    newRow++;
  } else if (direction === "up") {
    newRow--;
  } else if (direction === "left") {
    newColumn--;
  } else if (direction === "right") {
    newColumn++;
  }

  if (row > 0 && row < 10 && col > 0 && col < 10) {
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

function moveKangoo(direction, grid, element) {
  let pos = fetchInGrid(grid, 2);
  let newPos = getNewPos(direction, pos);
  if (checkNewValueInGrid(newPos[0], newPos[1], grid)) {
    let newRow = newPos[0];
    let newColumn = newPos[1];
    let row = pos[0];
    let column = pos[1];
    grid[newRow][newColumn] = 2;
    grid[row][column] = 1;
    loadGrid(grid, element);
  }
}
