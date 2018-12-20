// CREATING VARIABLES BY CALLING HTML DOM

const $body = document.querySelector("body");
let $gameContainer = $body.querySelector(".game__inGame");
let $settingsButton = $body.querySelector(".game__button--settings");
let $scoreBoard = $body.querySelector(".game__score");
let $startDisplay = $body.querySelector(".game__start")
let $quizzDisplay = $body.querySelector(".game__quizz")
let $endDisplay = $body.querySelector(".game__end")
let $game;
let $player;
let $popUp = $body.querySelector(".popup")
let $startButton = $body.querySelector('.button__play')


// CREATING NEW OBJECTS

let game = {
  speed: 5,
  score: 10
};

let character = {
  height: 205,
  width: 120,
  x: 190,
  y: 40,
  sexe: "f",
  jump: 360,
};

let challenge = { height: 205, width: 370, x: 2050, y: 40 };

let bonusName = ['goodFriend','goodColleague']

let malusName = ['badFriend','badColleague','thief','train','virus','wifi']

let bonus = {
  goodFriend: { height: 205, width: 120, x: 1000, y: 40 },
  goodColleague: { height: 205, width: 120, x: 1000, y: 40 }
};

let malus = {
  badFriend: { height: 205, width: 120, x: 760, y: 40 },
  badColleague: { height: 205, width: 120, x: 760, y: 40 },
  thief: { height: 205, width: 120, x: 860, y: 40 },
  train: { height: 150, width: 300, x: 860, y: 40 },
  virus: { height: 70, width: 70, x: 860, y: 40 },
  wifi: { height: 70, width: 70, x: 860, y: 40 }
};

let platform = { height: 140, width: 70, x: 0, y: 0 };

// CREATING SIMPLE VARIABLES

let i = 0
let bName
let mName
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

const generateMalus = (name) => {
  $malus = document.createElement("div");
  $malus.classList = "game__malus game_"+name;
  $malus.style.bottom = malus[name].y + "px";
  $malus.style.left = (malus[name].x + malus[name].width) + "px";
  $malus.style.height = malus[name].height + "px";
  $malus.style.width = malus[name].width + "px";
  $gameContainer.appendChild($malus);
};

const generateBonus = (name) => {
  $bonus = document.createElement("div");
  $bonus.classList = "game__bonus game_"+name;
  $bonus.style.bottom = bonus[name].y + "px";
  $bonus.style.left = (bonus[name].x + bonus[name].width) + "px";
  $bonus.style.height = bonus[name].height + "px";
  $bonus.style.width = bonus[name].width + "px";
  $gameContainer.appendChild($bonus);
};

const generateChallenge = () => {
  $challenge = document.createElement("div");
  $challenge.classList = "game__challenge";
  $challenge.style.bottom = challenge.y + "px";
  $challenge.style.left = (challenge.x + challenge.width) + "px";
  $challenge.style.height = challenge.height + "px";
  $challenge.style.width = challenge.width + "px";
  $gameContainer.appendChild($challenge);
};

const jump = () => {
  $player.style.bottom = character.jump + "px";
  $player.classList = "game__player " + character.sexe + "-j";
  jumpFired = true;
  setTimeout(() => {
    $player.style.bottom = "40px";
    $player.classList = "game__player " + character.sexe + "-i";
    jumpFired = false;
  }, 900);
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
  } else if (update == "plus"){
    game.score += 1
  } 
};

const updatePositions = (element,axis,domElement) => {
  if(axis == "y"){
    element.y = parseInt(
      parseInt(window.getComputedStyle(domElement, null).getPropertyValue("bottom"),10)
    );
  } else {
    element.x = parseInt(
      parseInt(window.getComputedStyle(domElement, null).getPropertyValue("left"),10)
    )
  }
}

const activeQuizz = () =>{
  let getAnswers = $quizzDisplay.querySelectorAll('.question__answer')
  for (let i=0; i<getAnswers.length ;i++){
    getAnswers[i].addEventListener('click',()=>{
      if(getAnswers[i].classList.contains('question__answer-true')){
        game.score++
        $quizzDisplay.style.display = "none"
        start()
      }else{
        game.score--
        $quizzDisplay.style.display = "none"
        start()
      }
    }) 
  }
} 

const checkCollision  = (element1,element2,update,domElement,remove) => {
  const loop = setInterval(()=>{
    updatePositions(element2,'x',domElement)
    updatePositions(element2,'y',domElement)
    if(!collision(element1, element2)){
      collision(element1, element2)
    }else{
      clearInterval(loop)
      updateScore(update)
      if(remove == "remove"){
        domElement.remove()
      }else if(element2 == challenge){
        stop()
        $quizzDisplay.style.display = "block"
        activeQuizz()
      }
    }
  },10)
}

const removeOutElement = (element,domElement) =>{
  const loop = setInterval(()=>{
    updatePositions(element,'x',domElement)
    if(element.x<(-100)){
      clearInterval(loop)
      domElement.remove()
    }
  },10)
}


const chooseName = (array) => {
  if(array == 'bonus'){
    return bonusName[Math.floor(Math.random() * Math.floor(2))]
  }else if (array == 'malus'){
    return malusName[Math.floor(Math.random() * Math.floor(6))]
  }else{
    return false
  }
}

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
  $malus.style.left =
  parseInt((malus[mName].x -= game.speed), 10) + "px";
  $bonus.style.left =
  parseInt(((bonus[bName].x) -= game.speed), 10) + "px";
  $challenge.style.left =
  parseInt(((challenge.x) -= game.speed), 10) + "px";
  $gameContainer.style.backgroundPositionX =
    (backgroundPositionX -= game.speed) + "px";
};


// MAIN LOOP

const mainLoop = () => {
  animationId = undefined;
  showScore();
  draw();
  start();
  updatePositions(character,'y',$player)
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
}

const deployElements = () =>{
  if(!animationId){
    mName = chooseName('malus')
    bName = chooseName('bonus')
    generateMalus(mName);
    checkCollision(character,malus[mName],'minus',$malus,'remove')
    removeOutElement(malus,$malus)
    generateBonus(bName)
    checkCollision(character,bonus[bName],'plus',$bonus)
    removeOutElement(bonus,$bonus)
    generateChallenge()
    checkCollision(character,challenge,'nothing',$challenge)
  }
}

// INTERACTION FUNCTIONS

$startButton.addEventListener('click',()=>{
  $startDisplay.style.display = "none"
  $gameContainer.style.display = "block"
  setTimeout(()=>{
    generatePlayer();
    deployElements()
    start()
  },100) 
})

$popUp.addEventListener('click',()=>{
  $body.querySelector('.popuptext').classList.toggle("show");
  console.log('ok')
})

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




