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
    type: "div", // optional
    class: "table", // optional,
    obstacle: true, // optional,
    styles: {
      // optional
      position: "absolute",
      // top: "300px",
      // left: "780px"
      top: x + "px",
      left: y + "px"
    },
    appendTo: ".frame" // optional
  });
}

function rotateBeer() {
  var beer = document.querySelector(".beer");
  let angle = 0;
  let direction = "right";
  setInterval(function() {
    console.log(direction, angle);
    if (direction === "right") {
      angle++;

      if (angle > 120) {
        direction = "left";
      }
    } else {
      angle--;

      if (angle < -120) {
        direction = "right";
      }
    }
    beer.style.transform = "rotate(" + angle + "deg)";
  }, 1);
}

// add 5 point score when beer touch table
function addScorePoint() {
  oxo.player.addToScore(5);
}

function game() {
  rotateBeer();
  move();
  createtable(300, 780);
  createtable(150, 650);
  createtable(150, 200);
  createtable(300, 70);
}

// oxo.inputs.listenKeyOnce("enter", function() {
oxo.screens.loadScreen("game", function() {
  game();
});
// });
