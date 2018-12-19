// CREATING VARIABLES BY CALLING HTML DOM

const $body = document.querySelector("body");
let $gameContainer = $body.querySelector(".game__container");
let $settingsButton = $body.querySelector(".game__button--settings");
let $scoreBoard = $body.querySelector(".game__score");
let $game;
let $player;

// CREATING NEW OBJECTS

let game = {
  speed: 0.3,
  score: 10
};

let character = {
  height: 205,
  width: 120,
  x: 190,
  y: 40,
  sexe: "m",
  jump: 260
};

let challenge = { height: 140, width: 70, x: 0, y: 0 };

let bonus = {
  goodFriend: { height: 140, width: 70, x: 0, y: 0 },
  goodColleague: { height: 140, width: 70, x: 0, y: 0 }
};

let malus = {
  badFriend: { height: 70, width: 70, x: 860, y: 0 },
  badColleague: { height: 140, width: 70, x: 860, y: 0 },
  thief: { height: 140, width: 70, x: 860, y: 0 },
  train: { height: 140, width: 70, x: 860, y: 0 },
  virus: { height: 140, width: 70, x: 860, y: 0 },
  wifi: { height: 140, width: 70, x: 860, y: 0 }
};

let platform = { height: 140, width: 70, x: 0, y: 0 };

// CREATING SIMPLE VARIABLES

let backgroundPositionX = parseInt(
  window
    .getComputedStyle($gameContainer, null)
    .getPropertyValue("background-position-x"),
  10
);
let animationId;
let jumpFired = false;
let runningCount = 0;

// DEFINING FUNCTIONS

const consoleLog = (title, message, color) => {
  console.log(
    "%c" + title + " : " + message,
    "background-color:" + color + "; padding: 3px; font-weight: bold;"
  );
};

const showScore = () => {
  $scoreBoard.innerHTML = game.score + "/20";
};

const generatePlayer = () => {
  $player = document.createElement("div");
  $player.classList = "game__player " + character.sexe + "-i";
  $player.style.bottom = character.y + "px";
  $player.style.left = character.x + "px";
  $player.style.height = character.height + "px";
  $player.style.width = character.width + "px";
  $gameContainer.appendChild($player);
};

const generateMalus = () => {
  $malus = document.createElement("div");
  $malus.classList = "game__malus";
  $malus.style.bottom = Math.floor(Math.random() * (100 - 40) + 40) + "px";
  $malus.style.left = malus.badFriend.x + malus.badFriend.width + "px";
  $malus.style.height = malus.badFriend.height + "px";
  $malus.style.width = malus.badFriend.width + "px";
  $malus.style.background = "#d65dac";
  $gameContainer.appendChild($malus);
};

const jump = () => {
  $player.style.bottom = character.jump + "px";
  $player.classList = "game__player " + character.sexe + "-j";
  jumpFired = true;
  setTimeout(() => {
    $player.style.bottom = "40px";
    $player.classList = "game__player " + character.sexe + "-i";
    jumpFired = false;
  }, 650);
};

const collision = (rect1, rect2) => {
  if (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.height + rect1.y > rect2.y
  ) {
    consoleLog("collision", "collisiooooooon", "blue");
    return true;
  }
};

const updateScore = (update) => {
  if (update == "minus") {
    game.score -= 1
  } else {
    game.score += 1
  }
};

const checkCollision  = (element1,element2,domElement,update,remove) => {
  const loop = setInterval(()=>{
    if(!collision(element1, element2)){
      collision(element1, element2)
    }else{
      clearInterval(loop)
      updateScore(update)
      if(remove == "remove"){
        domElement.style.display = "none"
        consoleLog('remove','yes','violet')
      }
    }
  },10)
}

const updatePositions = () => {
  character.y = parseInt(
    window.getComputedStyle($player, null).getPropertyValue("bottom"),
    10
  );
  malus.badFriend.y = parseInt(
    window.getComputedStyle($malus, null).getPropertyValue("bottom"),
    10
  );
  malus.badFriend.x = parseInt(
    window.getComputedStyle($malus, null).getPropertyValue("left"),
    10
  );
  consoleLog("jump", character.y, "red");
  consoleLog("bgPos", backgroundPositionX, "green");
  consoleLog("malusPosY", malus.badFriend.y, "yellow");
  consoleLog("malusPosX", malus.badFriend.x, "yellow");
};

const draw = () => {
  if (!jumpFired) {
    if (runningCount > 8) {
      $player.classList = "game__player " + character.sexe + "-r";
      runningCount++;
      if (runningCount > 16) {
        runningCount = 0;
      }
    } else {
      $player.classList = "game__player " + character.sexe + "-i";
      runningCount++;
    }
  }
  $gameContainer.style.backgroundPositionX =
    (backgroundPositionX += game.speed) + "%";
  $malus.style.left =
    parseInt((malus.badFriend.x -= game.speed * 15), 10) + "px";
};

// MAIN LOOP

const mainLoop = () => {
  animationId = undefined;
  updatePositions();
  showScore();
  draw();
  start();
};

const start = () => {
  if (!animationId) {
    animationId = requestAnimationFrame(mainLoop);
  }
};

const stop = () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = undefined;
  }
};

// INTERACTION FUNCTIONS

document.addEventListener("keyup", event => {
  if (event.keyCode === 32 && !jumpFired && animationId) {
    jump();
  }
});

$settingsButton.addEventListener("click", () => {
  if (animationId) {
    $settingsButton.classList = "game__button--settings buttonPlay";
    stop();
  } else {
    $settingsButton.classList = "game__button--settings buttonPause";
    start();
  }
});

document.addEventListener("keydown", event => {
  if (event.keyCode === 27 || event.keyCode === 80) {
    if (animationId) {
      $settingsButton.classList = "game__button--settings buttonPlay";
      stop();
    } else {
      $settingsButton.classList = "game__button--settings buttonPause";
      start();
    }
  }
});

// CALLING FUNCTIONS

generatePlayer();
generateMalus();
start();
checkCollision(character,malus.badFriend,$malus,'minus','remove')
