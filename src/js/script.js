oxo.screens.loadScreen("end", function() {
  oxo.inputs.listenKey("enter", function() {
    oxo.screens.loadScreen("game", function() {
      initWalls();
      interaction();
    });
  });
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
    var div = document.querySelector("div.antoine");
    div.className = "antoine characterup";
  });

  oxo.inputs.listenKey("down", function() {
    var div = document.querySelector("div.antoine");
    div.className = "antoine characterdown";
  });

  oxo.inputs.listenKey("right", function() {
    var div = document.querySelector("div.antoine");
    div.className = "antoine characterright";
  });

  oxo.inputs.listenKey("left", function() {
    var div = document.querySelector("div.antoine");
    div.className = "antoine characterleft";
  });
});

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
      if (character) console.log("cangrab");
      oxo.inputs.listenKey("e", function test() {
        oxo.inputs.cancelKeyListener("e");
        console.log("test"); // WIP need to interact only in the collision div
      });
    });
}
