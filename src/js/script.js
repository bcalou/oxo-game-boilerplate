let orientation = 'right';
let position;
let stop = false;

oxo.screens.loadScreen("home", function() {
  playAudiohome();
  oxo.inputs.listenKey("enter", function() {
    oxo.screens.loadScreen("game", function() {
      playAudioback();
      initWalls();
      interaction();
      var lastdirection = 0;
      oxo.inputs.listenKeys(['up', 'down', 'right', 'left'], function(key) {
        direction(key);
        orientation = key;
      });
      document.addEventListener('keydown', function(e) {
        if (e.keyCode === 32) {
          stop = true;
          let div = document.getElementById("character");
          div.className = "puke";
        }
      });
      document.addEventListener('keyup', function(e) {
        if (e.keyCode === 32) {
          stop = false;
          let div = document.getElementById("character");
          div.className = "character" + orientation;
        } 
      });
      setInterval(automove, 12);
      position = oxo.animation.getPosition(character);
    });
  });
});

function initWalls() {
  var character = document.getElementById("character");
  oxo.animation.setPosition(character, { x: 175, y: 330 });

  let obstacles = [
    { x: 153, y: 0, width: 20, height: 700 },
    { x: 150, y: 735, width: 1200, height: 22 },
    { x: 150, y: 0, width: 1200, height: 30 },
    { x: 1360, y: 60, width: 20, height: 690 },
    { x: 180, y: 505, width: 148, height: 65 },
    { x: 410, y: 505, width: 276, height: 65 },
    { x: 660, y: 505, width: 28, height: 220 },
    { x: 677, y: 630, width: 35, height: 100 },
    { x: 710, y: 683, width: 110, height: 20 },
    { x: 820, y: 375, width: 353, height: 65 },
    { x: 1050, y: 558, width: 20, height: 65 },
    { x: 820, y: 0, width: 23, height: 180 },
    { x: 820, y: 323, width: 23, height: 10 },
    { x: 1280, y: 375, width: 90, height: 65 },
    { x: 850, y: 325, width: 90, height: 30 },
    { x: 1310, y: 270, width: 30, height: 100 },
    { x: 1050, y: 553, width: 290, height: 33 },
    { x: 335, y: 350, width: 299, height: 50 },
    { x: 285, y: 5, width: 94, height: 50 },
    { x: 723, y: 5, width: 47, height: 50 },
    { x: 610, y: 5, width: 70, height: 50 },
    { x: 170, y: 685, width: 51, height: 50 },
    { x: 830, y: 0, width: 510, height: 50 },
    { x: 180, y: 540, width: 51, height: 50 },
    { x: 640, y: 580, width: 20, height: 50 },
    { x: 610, y: 540, width: 20, height: 50 }
  ];

  obstacles.forEach(function(obstacle) {
    oxo.elements.createElement({
      type: "div",
      class: "hitbox boucled",
      obstacle: true,
      styles: {
        position: "absolute",
        transform: "translate(" + obstacle.x + "px, " + obstacle.y + "px)",
        width: obstacle.width + "px",
        height: obstacle.height + "px",
        color: "red"
      }
    });
  });
}

function direction(key) {
  let div = document.getElementById("character");
  div.className = "character" + key;
}

function automove() {
  if (stop) {
    pauseAudio();
    return;
  }
  playAudio();
  oxo.animation.move(character, orientation, 1);
};

function interaction() {
  var character = document.getElementById("character");
  let displaygrab = oxo.elements.createElement({
    type: "div", // optional
    class: "displaygrab", // optional,
    obstacle: false, // optional,
    styles: {
      //optional
    },
    appendTo: "body" // optional
  });

  oxo.elements.onCollisionWithElement(
  character,
  displaygrab,
  function detect() {
    console.log("cangrab");
    oxo.inputs.listenKey("e", function test() {
      oxo.inputs.cancelKeyListener("e");
      console.log("test");
    });
 });
};

oxo.inputs.listenKey('r', function() {
  oxo.screens.loadScreen('end', function() {
    playAudioend();
  });
});

function playAudio() { 
  var walking = document.getElementById("myAudio");
  walking.play();
};
function pauseAudio() { 
  var walking = document.getElementById("myAudio");
  walking.pause();
};

function playAudioback() {
  var backmusic = document.getElementById("backmusic");
  backmusic.play();
  backmusic.volume = 0.1;
};

function playAudiohome() {
  var backmusic = document.getElementById("homemusic");
  backmusic.play();
  backmusic.volume = 0.1;
};


function playAudioend() {
  var backmusic = document.getElementById("endmusic");
  backmusic.play();
  backmusic.volume = 0.1;
};
