var life = 3;
var score = 0;

function create_obstacle() {
  var ennemy = oxo.elements.createElement({
    type: "div",
    class: "ennemy",
    obstacle: false,
    appendTo: "body"
  });
  oxo.animation.setPosition(ennemy, { x: 1900, y: 800 });
}

function create_item() {
  var item = oxo.elements.createElement({
    type: "div",
    class: "item",
    obstacle: false,
    appendTo: "body"
  });
  oxo.animation.setPosition(item, { x: 1900, y: 830 });
}

function create_obj() {
  var obj = oxo.elements.createElement({
    type: "div",
    class: "obj",
    obstacle: false,
    appendTo: "body"
  });
  oxo.animation.setPosition(obj, { x: 1900, y: 840 });
}

function move_obstacle() {
  setInterval(() => {
    var ennemy = document.querySelectorAll(".ennemy");
    for (let i = 0; i < ennemy.length; i++) {
      oxo.animation.move(ennemy[i], "left", 10, true);
    }
  }, 10);
}

function move_item() {
  setInterval(() => {
    var item = document.querySelectorAll(".item");
    for (let i = 0; i < item.length; i++) {
      oxo.animation.move(item[i], "left", 10, true);
    }
  }, 10);
}

function move_obj() {
  setInterval(() => {
    var obj = document.querySelectorAll(".obj");
    for (let i = 0; i < obj.length; i++) {
      oxo.animation.move(obj[i], "left", 10, true);
    }
  }, 10);
}
function random_obstacle() {
  setInterval(() => {
    create_obstacle();
  }, 5000);
}

function random_item() {
  setInterval(() => {
    create_item();
  }, 9000);
}

function random_obj() {
  setInterval(() => {
    create_obj();
  }, 12000);
}

function clear_obstacle() {
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

function clear_item() {
  setInterval(() => {
    var item = document.querySelectorAll(".item");
    for (let i = 0; i < item.length; i++) {
      oxo.elements.onLeaveScreen(
        item[i],
        function() {
          item[i].remove();
        },
        true
      );
    }
  }, 10);
}

function clear_obj() {
  setInterval(() => {
    var obj = document.querySelectorAll(".obj");
    for (let i = 0; i < obj.length; i++) {
      oxo.elements.onLeaveScreen(
        obj[i],
        function() {
          obj[i].remove();
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

function collision_obstacle() {
  var character = document.querySelector(".character");
  var ennemy = document.querySelectorAll(".ennemy");
  var health = document.querySelector(".health");
  for (let i = 0; i < ennemy.length; i++) {
    oxo.elements.onCollisionWithElement(character, ennemy[i], function() {
      ennemy[i].remove();
      life = life - 1;

      if (life === 2) {
        health.style.width = "100px";
      }
      if (life === 1) {
        health.style.width = "50px";
      }
      if (life === 0) {
        health.style.width = "0px";
      }
    });
  }
}

function collision_item() {
  var character = document.querySelector(".character");
  var item = document.querySelectorAll(".item");
  var health = document.querySelector(".health");
  for (let i = 0; i < item.length; i++) {
    oxo.elements.onCollisionWithElement(character, item[i], function() {
      item[i].remove();
      life = life + 1;
      if (life === 3) {
        health.style.width = "150px";
      }
      if (life === 2) {
        health.style.width = "100px";
      }
      if (life === 0) {
        health.style.width = "0px";
      }
      if (life > 3) {
        life = 3;
      }
    });
  }
}

function collision_obj() {
  var character = document.querySelector(".character");
  var obj = document.querySelectorAll(".obj");
  var obj_gauge = document.querySelector(".obj_gauge");
  for (let i = 0; i < obj.length; i++) {
    oxo.elements.onCollisionWithElement(character, obj[i], function() {
      obj[i].remove();
    });
  }
}

function time_score() {
  var score_txt = document.querySelector(".score_txt");
  score = score + 1;
  score_txt.innerHTML = "Score :" + score;
}

function display_final_score() {
  var display_score = document.querySelector(".final_score");
  display_score.innerHTML = "Votre Score: " + score;
  clearInterval(score_interval);
}

function lose() {
  if (life === 0) {
    oxo.screens.loadScreen("end", function() {
      display_final_score();
    });
  }
}

function game() {
  var character = document.querySelector(".character");
  oxo.animation.setPosition(character, { x: 100, y: 790 });
  create_obstacle();
  create_item();
  random_obstacle();
  random_item();
  random_obj();
  move_obstacle();
  move_item();
  move_obj();
  setInterval(() => {
    collision_obstacle();
    collision_item();
    collision_obj();
  }, 100);
  jump();
  setInterval(() => {
    lose();
  }, 10);
  var score_interval = setInterval(() => {
    time_score();
  }, 500);
  time_score();
  clear_obstacle();
  clear_item();
  clear_obj();
}

oxo.inputs.listenKeyOnce("enter", function() {
  oxo.screens.loadScreen("game", function() {
    game();
  });
});
