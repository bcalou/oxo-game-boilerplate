function deleteBaby(row, column) {
  gridAv[(row, column)] = 0;
  gridAp[(row, column)] = 0;
}

function wonBaby() {
  console.log("YOU WON A BABY KANGOO CONGRATS");
}

function wonBaby() {
  let div = document.getElementById("score");
  let baby = document.createElement("div");
  baby.classList.add("baby");
  div.appendChild(baby);
}

function playerHasAllBabies() {
  let babyInGrid = fetchInGrid("gridAv") || fetchInGrid("gridAp");
  console.log(babyInGrid);
}

function updateSpriteDirection(element, direction) {
  let kangoo =
    element.querySelector(".kangoo") ||
    element.querySelector(".kangoo--down") ||
    element.querySelector(".kangoo--left") ||
    element.querySelector(".kangoo--right");
  console.log(kangoo);
}
