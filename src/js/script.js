//navigate from home to game
oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
  }
});

// var rebound = 300;         //height in pixels of players rebounds
var ySpeed1 = 50;             //gravity strength in pixels per [gameSpeed]
var ySpeed2 = 50;
var gameSpeed = 10;           //game speed
var movementSpeed = 10;       //left and right player speed
var platformSpawning = 750;   //speed of new platforms spawning
var gravity = 10;
var flying = true;

function destroyObj(obj) {
obj = null;
}


function game() {


  //player 1 jump
  function jump() {

    if (ySpeed1 < 0) {
      return;
    }

    ySpeed1 = -7;

    setTimeout(function() {
      ySpeed1 = 5;
    }, 300
    );
    
  }
  //player 2 jump
  function jump2() {

    if (ySpeed2 < 0) {
      return;
    }

    ySpeed2 = -7;

    setTimeout(function() {
      ySpeed2 = 5;
    }, 500);
    
  }

  var platforms;

  //platform spawning
  setInterval(() => {

    var platform = oxo.elements.createElement({
      type: 'div', // optional
      class: 'game__platform game__platform--up', // optional,
      styles: { // optional
        transform: 'translate(' + oxo.utils.getRandomNumber(100, 1080) + 'px, ' + oxo.utils.getRandomNumber(50, 450) + 'px)'
      },
      appendTo: 'body' // optional
    });

    oxo.elements.onCollisionWithElement(player1, platform, function() {
      if (oxo.animation.getPosition(player1).y + 40 <= oxo.animation.getPosition(platform).y) {
        jump();
      }});

    oxo.elements.onCollisionWithElement(player2, platform, function() {
      if (oxo.animation.getPosition(player2).y + 40 <= oxo.animation.getPosition(platform).y) {
        jump2();
      }});

    oxo.elements.onLeaveScreenOnce(platform, function() {
      platform.remove();
    }, true);

    platforms = document.querySelectorAll('.game__platform');
    
  }, platformSpawning);



  var player2 = document.getElementById('player2');
  var player1 = document.getElementById('player1'); 
  var startingPlatform = document.getElementById('platform');
  oxo.animation.setPosition(startingPlatform, {x: 0, y: 600});
  oxo.animation.setPosition(player1, {x: 200, y: 500});
  oxo.animation.setPosition(player2, {x: 850, y: 500});

  var platformStart = document.getElementById('platform');
  oxo.elements.onCollisionWithElement(player1, platformStart, jump);
  oxo.elements.onCollisionWithElement(player2, platformStart, jump2);








  //moving system

  var pressed = [];


  document.addEventListener('keydown', function(event) {
    if (pressed.indexOf(event.key) === -1) {
      pressed.push(event.key);
    }
  });
  document.addEventListener('keyup', function(event) {
    if (pressed.indexOf(event.key) >= 0) {
      pressed = pressed.filter(key => key !== event.key);
    }
  });



  setInterval(() => {

    if (flying === true) {
      oxo.animation.move(player1, 'down', ySpeed1, true);

      oxo.animation.move(player2, 'down', ySpeed2, true);
    }

  }, gravity);



  var player1Y;
  var player2Y;


  setInterval(function() {


    // console.log('game is running');
    // console.log(pressed);

    if (pressed.indexOf('q') !== -1) {
      oxo.animation.move(player2, 'left', movementSpeed);
    };
    if (pressed.indexOf('d') !== -1) {
      oxo.animation.move(player2, 'right', movementSpeed);
    };
    if (pressed.indexOf('ArrowLeft') !== -1) {
      oxo.animation.move(player1, 'left', movementSpeed);
    };
    if (pressed.indexOf('ArrowRight') !== -1) {
      oxo.animation.move(player1, 'right', movementSpeed);
    };

    player1Y = oxo.animation.getPosition(player1);
    player2Y = oxo.animation.getPosition(player2);


    if (player1Y.y < player2Y.y) {
      if (player1Y.y <= 200) {
        for (let platform of platforms) {
          oxo.animation.move(platform, 'down', (player1Y.y + 800) / 400, true)
        }
      }
    } else if (player2Y.y <= 200) {
      for (let platform of platforms) {
        oxo.animation.move(platform, 'down', (player2Y.y + 800) / 400, true)
      }
    };
  }, gameSpeed);

};
