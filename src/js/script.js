function move() {
  let mousedownTime;
  var beer = document.querySelector(".beer");
  var arrow = document.querySelector(".arrow");
  // calcule le temps que l'on reste appuyer sur la souris
  beer.addEventListener("mousedown", () => {
    mousedownTime = new Date().getTime();
  });
  beer.addEventListener("mouseup", function() {
    const mouseupTime = new Date().getTime(),
      timeDifference = (mouseupTime - mousedownTime) / 2; // transforme le temps d'appui en pixels
    oxo.animation.move(beer, "up", timeDifference, true);
    console.log(timeDifference);
    console.log();
  });

  collision();
}

function resetBeerPosition() {
  var beer = document.querySelector(".beer");
  oxo.animation.setPosition(beer, { x: 0, y: 0 });
}

// detect when beer touch table
function collision() {
  var beer = document.querySelector(".beer");
  var table = document.querySelector(".table");
  var touch;

  oxo.elements.onCollisionWithElement(beer, table, function() {
    touch = true;
    console.log("win");
    resetBeerPosition();
    addScorePoint();
  });
  if (!touch) {
    console.log("lose");
    resetBeerPosition();
  }
}
function createtable(x, y) {
  var element = oxo.elements.createElement({
    type: "div",
    class: "table",
    obstacle: true,
    styles: {
      position: "absolute",
      top: x + "px",
      left: y + "px"
    },
    appendTo: ".frame"
  });
}

// add 5 point score when beer touch table
function addScorePoint() {
  oxo.player.addToScore(5);
}

function game() {
  move();
  createtable(100, 70);
  createtable(100, 300);
  createtable(100, 760);

  arrowDegrees();
}

// oxo.inputs.listenKeyOnce("enter", function() {
oxo.screens.loadScreen("game", function() {
  game();
});
// });
