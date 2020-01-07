var beer = document.querySelector(".beer");

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
      timeDifference = (mouseupTime - mousedownTime) / 3; // transforme le temps d'appui en pixels
    oxo.animation.move(beer, "up", timeDifference, true);
  });
  collision();
}
function addScorePoint() {
  oxo.player.addToScore(5);
}

function collision() {
  var beer = document.querySelector(".beer");
  var table = document.querySelector(".table");
  var touch;

  oxo.elements.onCollisionWithElement(beer, table, function() {
    touch = true;
    console.log("win");
    oxo.animation.setPosition(beer, { x: 0, y: 0 });
    addScorePoint();
  });
  // if (!touch && beer.offsetTop < 100) {
  //   console.log("lose");

  //   oxo.animation.setPosition(beer, { x: 60, y: 0 });
  // }
}



function game() {
  move();
}

oxo.inputs.listenKeyOnce("enter", function() {
  oxo.screens.loadScreen("game", function() {
    game();
  });
});
