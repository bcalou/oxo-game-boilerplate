var santaSpeed = 1;
var stageSpeed = 10;
var direction = "left";
var directionDown = "down";
var gravity = 1;
var size = 4;
var santa;
var fireplace;
var santaInterval;
var stageInterval;
var ground;

oxo.inputs.listenKeyOnce("enter", function() {
  if (oxo.screens.getCurrentScreen !== "game") {
    oxo.screens.loadScreen("game", function() {
      ground = oxo.elements.createElement({
        obstacle: true,
        class: "stage__ground", // optional,
        styles: { // optional
          transform: 'translate(0px, 610px)'
        },
      });
      //Random function for fireplace
      setTimeout(fireplace, 3000);
      santa = oxo.elements.createElement({
        class: "character__santa", // optional,
        styles: { // optional
          transform: 'translate(50px, 290px)'
        },
      });
      santaInterval = setInterval(playerFall, santaSpeed);

      oxo.elements.onCollisionWithElement(santa, ground, function() {
        console.log("collision with ground");
      });
    });
  }
});

function fireplace() {
  var fireplaceEl = oxo.elements.createElement({
    class: 'stage__fireplace',
    obstacle: true,
    styles: {
      transform: 'translate(50px, 8px)'
    }
  });

  oxo.elements.onCollisionWithElement(santa, fireplaceEl, function() {
    console.log("you lost");
  });

  var interval = setInterval(function() {
    oxo.animation.move(fireplaceEl, direction, size, true); 
  }, 10);

  oxo.elements.onLeaveScreenOnce(fireplaceEl, function()  {
    fireplaceEl.remove();
    clearInterval(interval);
    console.log('left')
  }, true)

  setTimeout(fireplace, 1000 * oxo.utils.getRandomNumber(1, 2));



}

function jump() {
  if (gravity > 0) {
    gravity = -gravity;
    setTimeout(function() {
      gravity = -gravity;
    }, 1000);
  }
}

function playerFall() {
  oxo.animation.move(santa, directionDown, gravity, true);
}


oxo.inputs.listenKey("up", function() {
  jump();
});