// CREATING VARIABLES BY CALLING HTML DOM

const $body = document.querySelector("body");
const $gameContainer = $body.querySelector(".game__inGame");
const $settingsButton = $body.querySelector(".game__button--settings");
const $scoreBoard = $body.querySelector(".game__score");
const $startDisplay = $body.querySelector(".game__start")
const $endDisplay = $body.querySelector(".game__end")
const $gameSound = $body.querySelector(".game-sound")
const $jumpSound= $body.querySelector(".jump-sound")
const $winSound= $body.querySelector(".winPoint-sound")
const $loseSound= $body.querySelector(".losePoint-sound")
const $winGameSound= $body.querySelector(".winGame-sound")
const $loseGameSound= $body.querySelector(".loseGame-sound")
let $game;
let $player;
const $popUp = $body.querySelector(".popup")
const $startButton = $body.querySelector('.button__play')
const $changeSkin = $body.querySelector('.button__carrousel')
const $soundButton = $body.querySelector('.popuptext__content--sound')
const $creditButton = $body.querySelector('.popuptext__content--credits')
const $credit = $body.querySelector('.popuptext__credits')

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
  sexe: "m",
  jump: 360,
};

let challenge = { height: 205, width: 370, x: 2050, y: 40 };

let challenge2 = { height: 205, width: 370, x: 4300, y: 40 };

let final = { height: 205, width: 310, x: 5800, y: 40 };

// let bonusName = ['goodFriend','goodColleague']

let malusName = ['badFriend','badColleague','thief','virus']//,'train',wifi']

let bonus = {
  goodFriend: { height: 205, width: 120, x: 1000, y: 40 },
  goodColleague: { height: 205, width: 120, x: 1000, y: 40 }
};

let malus = {
  badFriend: { height: 195, width: 110, x: 860, y: 40 },
  badColleague: { height: 195, width: 110, x: 860, y: 40 },
  thief: { height: 195, width: 110, x: 860, y: 40 },
  train: { height: 150, width: 500, x: 860, y: 40 },
  virus: { height: 110, width: 140, x: 860, y: 40 },
  wifi: { height: 70, width: 70, x: 860, y: 40 }
};

let malus2 = {
  badFriend: { height: 195, width: 110, x: 1500, y: 40 },
  badColleague: { height: 195, width: 110, x: 1500, y: 40 },
  thief: { height: 195, width: 110, x: 1500, y: 40 },
  train: { height: 150, width: 500, x: 1500, y: 40 },
  virus: { height: 110, width: 140, x: 1500, y: 40 },
  wifi: { height: 70, width: 70, x: 1500, y: 40 }
};


let malus3 = {
  badFriend: { height: 195, width: 110, x: 2900, y: 40 },
  badColleague: { height: 195, width: 110, x: 2900, y: 40 },
  thief: { height: 195, width: 110, x: 2900, y: 40 },
  train: { height: 150, width: 500, x: 2900, y: 40 },
  virus: { height: 110, width: 140, x: 2900, y: 40 },
  wifi: { height: 70, width: 70, x: 2900, y: 40 }
};

let malus4 = {
  badFriend: { height: 195, width: 110, x: 3400, y: 40 },
  badColleague: { height: 195, width: 110, x: 3400, y: 40 },
  thief: { height: 195, width: 110, x: 3400, y: 40 },
  train: { height: 150, width: 500, x: 3400, y: 40 },
  virus: { height: 110, width: 140, x: 3400, y: 40 },
  wifi: { height: 70, width: 70, x: 3400, y: 40 }
};

let malus5 = {
  badFriend: { height: 195, width: 110, x: 3900, y: 40 },
  badColleague: { height: 195, width: 110, x: 3900, y: 40 },
  thief: { height: 195, width: 110, x: 3900, y: 40 },
  train: { height: 150, width: 500, x: 3900, y: 40 },
  virus: { height: 110, width: 140, x: 3900, y: 40 },
  wifi: { height: 70, width: 70, x: 3900, y: 40 }
};

let platform = { height: 140, width: 70, x: 0, y: 0 };

// CREATING SIMPLE VARIABLES

let soundCheck = true
let creditCheck = false
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
  $malus.classList = "game__malus game__"+name;
  $malus.style.bottom = malus[name].y + "px";
  $malus.style.left = (malus[name].x + malus[name].width) + "px";
  $malus.style.height = malus[name].height + "px";
  $malus.style.width = malus[name].width + "px";
  $gameContainer.appendChild($malus);
};

const generateMalus2 = (name) => {
  $malus2 = document.createElement("div");
  $malus2.classList = "game__malus game__"+name;
  $malus2.style.bottom = malus2[name].y + "px";
  $malus2.style.left = (malus2[name].x + malus2[name].width) + "px";
  $malus2.style.height = malus2[name].height + "px";
  $malus2.style.width = malus2[name].width + "px";
  $gameContainer.appendChild($malus2);
};

const generateMalus3 = (name) => {
  $malus3 = document.createElement("div");
  $malus3.classList = "game__malus game__"+name;
  $malus3.style.bottom = malus3[name].y + "px";
  $malus3.style.left = (malus3[name].x + malus3[name].width) + "px";
  $malus3.style.height = malus3[name].height + "px";
  $malus3.style.width = malus3[name].width + "px";
  $gameContainer.appendChild($malus3);
};

const generateMalus4 = (name) => {
  $malus4 = document.createElement("div");
  $malus4.classList = "game__malus game__"+name;
  $malus4.style.bottom = malus4[name].y + "px";
  $malus4.style.left = (malus4[name].x + malus4[name].width) + "px";
  $malus4.style.height = malus4[name].height + "px";
  $malus4.style.width = malus4[name].width + "px";
  $gameContainer.appendChild($malus4);
};

const generateMalus5 = (name) => {
  $malus5 = document.createElement("div");
  $malus5.classList = "game__malus game__"+name;
  $malus5.style.bottom = malus5[name].y + "px";
  $malus5.style.left = (malus5[name].x + malus5[name].width) + "px";
  $malus5.style.height = malus5[name].height + "px";
  $malus5.style.width = malus5[name].width + "px";
  $gameContainer.appendChild($malus5);
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
  $challenge.classList = "game__challenge challenge1";
  $challenge.style.bottom = challenge.y + "px";
  $challenge.style.left = (challenge.x + challenge.width) + "px";
  $challenge.style.height = challenge.height + "px";
  $challenge.style.width = challenge.width + "px";
  $gameContainer.appendChild($challenge);
};

const generateChallenge2 = () => {
  $challenge2 = document.createElement("div");
  $challenge2.classList = "game__challenge challenge2";
  $challenge2.style.bottom = challenge2.y + "px";
  $challenge2.style.left = (challenge2.x + challenge2.width) + "px";
  $challenge2.style.height = challenge2.height + "px";
  $challenge2.style.width = challenge2.width + "px";
  $gameContainer.appendChild($challenge2);
};

const generateFinal = () => {
  $final = document.createElement("div");
  $final.classList = "game__challenge challenge5";
  $final.style.bottom = final.y + "px";
  $final.style.left = (final.x + final.width) + "px";
  $final.style.height = final.height + "px";
  $final.style.width = final.width + "px";
  $gameContainer.appendChild($final);
};

const jump = () => {
  $player.style.bottom = character.jump + "px";
  $player.classList = "game__player " + character.sexe + "-j";
  jumpFired = true;
  $jumpSound.play()
  setTimeout(() => {
    $player.style.bottom = "40px";
    $player.classList = "game__player " + character.sexe + "-i";
    jumpFired = false;
  }, 900);
};

const updateScore = (update) => {
  if (update == "minus") {
    game.score -= 1
    $loseSound.play()
    $player.style.animation = "losePoint 0.3s ease"
  } else if (update == "plus"){
    game.score += 1
    $winSound.play()
    $player.style.animation = "winPoint 0.3s ease"
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

const activeQuizz = (number) =>{
  $settingsButton.style.display = "none"
  let getAnswers = $body.querySelectorAll(".question__"+number)
  let gameQuizzs = $body.querySelectorAll(".game__quizz")
  for (let i=0; i<getAnswers.length ;i++){
    getAnswers[i].addEventListener('click',()=>{
      if(getAnswers[i].classList.contains('question__answer-true')){
        game.score++
        for(let j=0; j<gameQuizzs.length; j++){
          gameQuizzs[j].style.display = "none"
        }
        $settingsButton.style.display = "block"
        start()
        $player.style.animation = "winPoint 0.3s ease"
        $winSound.play()
      }else{
        game.score--
        for(let j=0; j<gameQuizzs.length; j++){
          gameQuizzs[j].style.display = "none"
        }
        $settingsButton.style.display = "block"
        start()
        $player.style.animation = "losePoint 0.3s ease"
        $loseSound.play()
      }
    }) 
  }
} 

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

const checkCollision  = (element1,element2,update,domElement,remove,challengeNumber) => {
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
      }else if(element2 == challenge || element2 == challenge2){
        stop()
        $body.querySelector(".game__quizz"+challengeNumber).style.display = "block"
        activeQuizz('answer'+challengeNumber)
      }else if(element2 == final){
        stop()
        $gameSound.pause()
        $settingsButton.style.display = "none"
        $body.querySelector(".game__end").style.display = "flex"
        $gameContainer.classList = "game__inGame finalStage"
        if(game.score>=10){
          $winGameSound.play()
          $body.querySelector('.finalScore').innerHTML = "Vous avez votre diplome !"
        }else{
          $loseGameSound.play()
          $body.querySelector('.finalScore').innerHTML = "Vous n'avez pas votre diplome !"
        }
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
  // if(array == 'bonus'){
  //   return bonusName[Math.floor(Math.random() * Math.floor(2))]
  // }else 
  if (array == 'malus'){
    return malusName[Math.floor(Math.random() * Math.floor(4))]
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
  $malus2.style.left =
  parseInt((malus2[mName].x -= game.speed), 10) + "px";
  $malus3.style.left =
  parseInt((malus3[mName].x -= game.speed), 10) + "px";
  $malus4.style.left =
  parseInt((malus4[mName].x -= game.speed), 10) + "px";
  $malus5.style.left =
  parseInt((malus5[mName].x -= game.speed), 10) + "px";
  // $bonus.style.left =
  // parseInt(((bonus[bName].x) -= game.speed), 10) + "px";
  $challenge.style.left =
  parseInt(((challenge.x) -= game.speed), 10) + "px";
  $challenge2.style.left =
  parseInt(((challenge2.x) -= game.speed), 10) + "px";
  $final.style.left =
  parseInt(((final.x) -= game.speed), 10) + "px";
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
    // bName = chooseName('bonus')
    generateMalus(mName);
    checkCollision(character,malus[mName],'minus',$malus,'remove')
    removeOutElement(malus,$malus)
    mName = chooseName('malus')
    generateMalus2(mName);
    checkCollision(character,malus2[mName],'minus',$malus2,'remove')
    removeOutElement(malus,$malus2)
    mName = chooseName('malus')
    generateMalus3(mName);
    checkCollision(character,malus3[mName],'minus',$malus3,'remove')
    removeOutElement(malus,$malus3)
    mName = chooseName('malus')
    generateMalus4(mName);
    checkCollision(character,malus4[mName],'minus',$malus4,'remove')
    removeOutElement(malus,$malus4)
    mName = chooseName('malus')
    generateMalus5(mName);
    checkCollision(character,malus5[mName],'minus',$malus5,'remove')
    removeOutElement(malus,$malus5)
    // generateBonus(bName)
    // checkCollision(character,bonus[bName],'plus',$bonus)
    // removeOutElement(bonus,$bonus)
    generateChallenge()
    checkCollision(character,challenge,'nothing',$challenge,'nothing','1')
    generateChallenge2()
    checkCollision(character,challenge2,'nothing',$challenge2,'nothing','2')
    generateFinal()
    checkCollision(character,final,'nothing',$final,'nothing')
  }
}

// INTERACTION FUNCTIONS

$changeSkin.addEventListener('click',()=>{
  if(character.sexe == "m"){
    $body.querySelector('.player__select').classList = "player__select player__select--girl"
    $body.querySelector('.button__carrousel--text').innerHTML = "Monique"
    character.sexe = "f"
  }else{
    $body.querySelector('.player__select').classList = "player__select player__select--man"
    $body.querySelector('.button__carrousel--text').innerHTML = "Berni"
    character.sexe = "m"
  }
})

$soundButton.addEventListener('click',()=>{
let allAudios = $body.querySelectorAll('audio')
  if(soundCheck){
    for(let i = 0; i<allAudios.length; i++){
      allAudios[i].volume = 0
    }
    $soundButton.innerHTML = "SOUNDS : OFF"
    soundCheck = false
  } else {
    for(let i = 0; i<allAudios.length; i++){
      allAudios[i].volume = 1
    }
    $soundButton.innerHTML = "SOUNDS : ON"
    soundCheck = true
  }
})

$creditButton.addEventListener('click', ()=>{
  if(!creditCheck){
    $credit.style.display = "flex"
    creditCheck = true
  }else{
    $credit.style.display = "none"
    creditCheck = false
  }
})

$startButton.addEventListener('click',()=>{
  $startDisplay.style.display = "none"
  $gameContainer.style.display = "block"
  $gameSound.currentTime = 0
  $gameSound.play()
  setTimeout(()=>{
    generatePlayer();
    deployElements()
    start()
  },100) 
})

$popUp.addEventListener('click',()=>{
  $body.querySelector('.popuptext').classList.toggle("show");
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




