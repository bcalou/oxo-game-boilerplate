var beer = document.querySelector(".beer");
function move() {
  let mousedownTime;
  var beer = document.querySelector(".beer");

  beer.addEventListener("mousedown", () => {
    mousedownTime = new Date().getTime();
  });

  beer.addEventListener("mouseup", function() {
    const mouseupTime = new Date().getTime(),
      timeDifference = (mouseupTime - mousedownTime) / 3;
    console.log(timeDifference);
    oxo.animation.move(beer, "up", timeDifference, true);
  });
}

function collision() {
  var beer = document.querySelector(".beer");
  var table = document.querySelector(".table");
  oxo.elements.onCollisionWithElement(beer, table, function() {
    alert("you win !!!");
    oxo.animation.setPosition(beer, { x: 10, y: 0 });
  });
}

function game() {
  move();
  collision();
}

oxo.inputs.listenKeyOnce("enter", function() {
  oxo.screens.loadScreen("game", function() {
    game();
  });
});
