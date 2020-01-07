oxo.screens.loadScreen("game", function() {
  initWalls();
});

function initWalls() {
  let wall__left1 = oxo.elements.createElement({
    type: "div", // optional
    class: "wall__left1", // optional,
    obstacle: true, // optional,
    styles: {
      //optional
    },
    appendTo: "body" // optional
  });
  let wall__left2 = oxo.elements.createElement({
    type: "div", // optional
    class: "wall__left2", // optional,
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
