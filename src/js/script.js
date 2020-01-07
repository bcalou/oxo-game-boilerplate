oxo.screens.loadScreen("game", function() {
  initWalls();
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

//direction character
window.addEventListener("keydown", function() {
  oxo.inputs.listenKey("up", function() {
    var div = document.querySelector("div");
    div.className = "characterup";
  });

  oxo.inputs.listenKey("down", function() {
    var div = document.querySelector("div");
    div.className = "characterdown";
  });

  oxo.inputs.listenKey("right", function() {
    var div = document.querySelector("div");
    div.className = "characterright";
  });

  oxo.inputs.listenKey("left", function() {
    var div = document.querySelector("div");
    div.className = "characterleft";
  });

  oxo.inputs.listenKey("space", function() {
    var div = document.querySelector("div");
    div.className = "character";
  });
});
