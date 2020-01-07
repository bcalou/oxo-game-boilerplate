var life = 0;

function create_obstacle() {
  var ennemy = oxo.elements.createElement({
    type: "div",
    class: "ennemy",
    obstacle: false,
    appendTo: "body"
  });
  oxo.animation.setPosition(ennemy, { x: 1900, y: 800 });
}

function move_obstacle() {
  setInterval(() => {
    var ennemy = document.querySelectorAll(".ennemy");
    for (let i = 0; i < ennemy.length; i++) {
      oxo.animation.move(ennemy[i], "left", 10, true);
    }
  }, 10);
}

function random_obstacle() {
  setInterval(() => {
    create_obstacle();
  }, 5000);
}

function clear() {
  setInterval(() => {
    var ennemy = document.querySelectorAll(".ennemy");
    for (let i = 0; i < ennemy.length; i++) {
      oxo.elements.onLeaveScreen(
        ennemy[i],
        function() {
          ennemy[i].remove();
        },
        true
      );
    }
  }, 10);
}

function jump() {
  var character = document.querySelector(".character");
  oxo.inputs.listenKey("space", function() {
    lock = 1;
    character.classList.toggle("jump");
  });
}

function collision() {
  var character = document.querySelector(".character");
  var ennemy = document.querySelectorAll(".ennemy");
  var health = document.querySelector(".health");
  for (let i = 0; i < ennemy.length; i++)
    oxo.elements.onCollisionWithElement(character, ennemy[i], function() {
      life = life + 1;
      if (life == 1) {
        health.style.width = "100px";
      }
      if (life == 2) {
        health.style.width = "50px";
      }
      if (life - character.style.width > 3) {
        health.style.width = "0px";
      }
      console.log(life);
    });
}

function game() {
  var character = document.querySelector(".character");
  oxo.animation.setPosition(character, { x: 100, y: 790 });
  create_obstacle();
  random_obstacle();
  move_obstacle();
  setInterval(() => {
    collision();
  }, 100);
  jump();
  clear();
}

oxo.inputs.listenKeyOnce("enter", function() {
  oxo.screens.loadScreen("game", function() {
    game();
  });
});
