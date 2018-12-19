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
var test;

oxo.inputs.listenKeyOnce("enter", function() {
  if (oxo.screens.getCurrentScreen !== "game") {
    oxo.screens.loadScreen("game", function() {
      ground = oxo.elements.createElement({
        obstacle: true,
        class: "stage__ground", // optional,
        styles: {
          // optional
          transform: "translate(0px, 700px)"
        }
      });
      ground__santa = oxo.elements.createElement({
        obstacle: false,
        class: "greenjump", // optional,
        styles: { // optional
        transform: 'translate(0px, 700px)'
        },
      });
      //jump max of the character
      jump__max = oxo.elements.createElement({
        obstacle: false,
        class: "jump__max", // optional,
        styles: { // optional
        transform: 'translate(0x, 700px)'
        },
      });
      //jump max of character obstacle
      jump__max__obstacle = oxo.elements.createElement({
        obstacle: true,
        class: "jump__max_obstacle", // optional,
        styles: { // optional
        transform: 'translate(0x, 700px)'
        },
      });
      //Random function for fireplace
      setTimeout(fireplace, 1000);

      santa = oxo.elements.createElement({
        class: "character__santa", // optional,
        styles: {
          // optional
          transform: "translate(50px, 500px)"
        }
      });
      santaInterval = setInterval(playerFall, santaSpeed);
      oxo.elements.onCollisionWithElement(santa, ground, function() {
        test = false;
        console.log("collision with ground");
      });
      oxo.elements.onCollisionWithElement(santa, jump__max, function() {
        gravity = -gravity;
        console.log("collision with ground");
      });
    });
  }
});

function fireplace() {
  var fireplaceEl = oxo.elements.createElement({
    class: "stage__fireplace",
    obstacle: true
  });

  var interval = setInterval(function() {
    oxo.animation.move(fireplaceEl, direction, size, true);
  }, 10);

  oxo.elements.onLeaveScreenOnce(
    fireplaceEl,
    function() {
      fireplaceEl.remove();
      clearInterval(interval);
      console.log("left");
    },
    true
  );

  setTimeout(fireplace, 1000 * oxo.utils.getRandomNumber(1, 5));
}

function jump() {
  gravity = -8;
};

function fall(){
setTimeout(function() {
  gravity = -gravity;
  }, 4);
};

function playerFall() {
  oxo.animation.move(santa, directionDown, gravity, true);
}

var keycodeJump; 
document.addEventListener("keyup", function(e){
  keycodeJump = e.keyCode
  if(keycodeJump === 38){
  fall();
  };
});

oxo.inputs.listenKey("up", function() {
  if(!test){
    jump();
  } 
  test = true;
  console.log(test)
});