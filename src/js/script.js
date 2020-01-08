let orientation = 'right';
let position;
let stop = false;


oxo.screens.loadScreen("game", function() {
  initWalls();
  var lastdirection = 0;
  oxo.inputs.listenKeys(['up', 'down', 'right', 'left'], function(key) {
    direction(key);
    orientation = key;
  });
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 32) {
      stop = true;
      let div = document.querySelector("div");
      div.className = "character";
    }
  })
  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 32) {
      stop = false;
      let div = document.querySelector("div");
      div.className = "character" + orientation;
    } 
  })
  setInterval(automove, 12);
  position = oxo.animation.getPosition(character);
});

function initWalls() {
  var character = document.getElementById("character");
  oxo.animation.setPosition(character, { x: 175, y: 330 });
  let wall__left1 = oxo.elements.createElement({
    type: "div", // optional
    class: "wall__left1", // optional,
    obstacle: true, // optional,
    styles: {
      //optional
    },
    appendTo: "body" // optional
  });
  let wall__bot1 = oxo.elements.createElement({
    type: "div", // optional
    class: "wall__bot1", // optional,
    obstacle: true, // optional,
    styles: {
      //optional
    },
    appendTo: "body" // optional
  });
  let wall__top1 = oxo.elements.createElement({
    type: "div", // optional
    class: "wall__top1", // optional,
    obstacle: true, // optional,
    styles: {
      //optional
    },
    appendTo: "body" // optional
  });
  let wall__right1 = oxo.elements.createElement({
    type: "div", // optional
    class: "wall__right1", // optional,
    obstacle: true, // optional,
    styles: {
      //optional
    },
    appendTo: "body" // optional
  });
}

function direction(key) {
  let div = document.querySelector("div");
  div.className = "character" + key;
}

function automove() {
  if (stop) {
    return;
  }
  let character = document.getElementById('character');

  if (orientation === 'up') {
    oxo.animation.setPosition(character, {x: position.x, y: position.y--}); 
  }
  if (orientation === 'down') {
    oxo.animation.setPosition(character, {x: position.x, y: position.y++});
  }
  if (orientation === 'right') {
    oxo.animation.setPosition(character, {x: position.x++, y: position.y});
  }
  if (orientation === 'left') {
    oxo.animation.setPosition(character, {x: position.x--, y: position.y});
  }
}
