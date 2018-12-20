/* Animation Choosing Characters 1 PLAYER or 2 PLAYERS*/

var tID; //we will use this variable to clear the setInterval()

oxo.screens.loadScreen('home', function() {

  var names = document.querySelector('.mode__img__2Players');
  names.addEventListener('click', function(){
  oxo.screens.loadScreen('game', game);
  });

});

/* LOADING PAGE */

// var names = document.querySelector('.back__home');
// console.log(names);
// names.addEventListener('click', function(){
//   oxo.screens.loadScreen('home', function() {
//     // game.html is loaded, do something
//   });
// });

// var names = document.querySelector('.mode__img');
// console.log(names);
// names.addEventListener('click', function(){
//   oxo.screens.loadScreen('oneplayer', function() {
//     // game.html is loaded, do something
//   });
// });

/* END OF LOADING PAGE */

  
var images = document.querySelectorAll('.mode__img');
  images.forEach(function(mode__img) {
  mode__img.onmouseout = function stopAnimate() {
    clearInterval(tID);
  } //end of stopAnimate()
    
    
  mode__img.onmouseover = function animateScript() {
    
    var position = 130 //start position for the image slicer
    const interval = 170; //170 ms of interval for the setInterval()
    const diff = 130; //diff as a variable for position offset
      
    tID = setInterval(() => {
      
      mode__img.style.backgroundPosition =
        `-${position}px 0px`;
      //we use the ES6 template literal to insert the variable "position"
        
      if (position < 1040) {
        position = position + diff;
      }
      //we increment the position by 260 each time
      else {
        position = 130;
      }
      //reset the position to 260px, once position exceeds 1536px
        
      }, interval); //end of setInterval
    } //end of animateScript()
  });

setTimeout(function() {
  var images = document.querySelectorAll('.mode__img__2Players');
    images.forEach(function(mode__img__2Players) {
      mode__img__2Players.onmouseout = function stopAnimate() {
      clearInterval(tID);
    } //end of stopAnimate()
    
    
    mode__img__2Players.onmouseover = function animateScript() {
    
      var position = 260 //start position for the image slicer
      const interval = 170; //170 ms of interval for the setInterval()
      const diff = 260; //diff as a variable for position offset
      
      tID = setInterval(() => {
      
        mode__img__2Players.style.backgroundPosition =
          `-${position}px 0px`;
        //we use the ES6 template literal to insert the variable "position"
        
        if (position < 2080) {
          position = position + diff;
        }
        //we increment the position by 50 each time
        else {
          position = 260;
        }
        //reset the position to 520px, once position exceeds 1536px
        
      }, interval); //end of setInterval
    } //end of animateScript()
  });
  
});
/* END OF Animation Choosing Characters 1 PLAYER or 2 PLAYERS*/



  
  
  
function game() {

  

  document.body.classList.add("backgroundLava")

    // var rebound = 300;         //height in pixels of players rebounds
  var ySpeed1 = 50;             //gravity strength in pixels per [gameSpeed]
  var ySpeed2 = 50;
  var gameSpeed = 10;           //game speed
  var movementSpeed = 10;       //left and right player speed
  var platformSpawning = 750;   //speed of new platforms spawning
  var gravity = 10;
  var flying = true;
  var rebound = 5
  
  function destroyObj(obj) {
  obj = null;
  }
  
  
    //player 1 jump
    function jump() {
  
      if (ySpeed1 < 0) {
        return;
      }
  
      ySpeed1 = -rebound;
  
      setTimeout(function() {
        ySpeed1 = rebound+2;
      }, 500
      );
      
    }
    //player 2 jump
    function jump2() {
  
      if (ySpeed2 < 0) {
        return;
      }
  
      ySpeed2 = -rebound;
  
      setTimeout(function() {
        ySpeed2 = rebound+2;
      }, 500);
      
    }
  
    var platforms;
  
    //platform spawning
    var platfromSpawn = setInterval(() => {
  
      var platform = oxo.elements.createElement({
        type: 'div', // optional
        class: 'game__platform game__platform--up', // optional,
        styles: { // optional
          transform: 'translate(' + oxo.utils.getRandomNumber(100, 1080) + 'px, ' + oxo.utils.getRandomNumber(0, 450) + 'px)'
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
  
  
  
    function end() {

      var tryAgain = document.getElementById('retry')
      

      tryAgain.addEventListener("click", function(){
        document.location.reload()
      });

      // tryAgain.addEventListener('click', function () {
      //   location.reload()
      // })
      
    }
  
  
  
  
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
  
  
    var game = setInterval(function() {
  
  
      // console.log('game is running');
      // console.log(pressed);
  
      if (pressed.indexOf('q') !== -1) {
        oxo.animation.move(player1, 'left', movementSpeed);
      };
      if (pressed.indexOf('d') !== -1) {
        oxo.animation.move(player1, 'right', movementSpeed);
      };
      if (pressed.indexOf('ArrowLeft') !== -1) {
        oxo.animation.move(player2, 'left', movementSpeed);
      };
      if (pressed.indexOf('ArrowRight') !== -1) {
        oxo.animation.move(player2, 'right', movementSpeed);
      };
  
      player1Y = oxo.animation.getPosition(player1);
      player2Y = oxo.animation.getPosition(player2);

      if (player2Y.y > 900) {
        player1.remove()
        clearInterval(game)
        clearInterval(platfromSpawn)

        oxo.screens.loadScreen('end', end)
        console.log('load end')
      }

      if (player1Y.y > 900) {
        player1.remove()
        clearInterval(game)
        clearInterval(platfromSpawn)

        oxo.screens.loadScreen('end2', end)
        console.log('load end')
      }


  
  
      if (player1Y.y < player2Y.y) {
        if (player1Y.y <= 200) {
          for (let platform of platforms) {
            oxo.animation.move(platform, 'down', (player1Y.y + 800) / 200, true)
          }
        }
      } else if (player2Y.y <= 200) {
        for (let platform of platforms) {
          oxo.animation.move(platform, 'down', (player2Y.y + 800) / 300, true)
        }
      };
    }, gameSpeed);
  
  };
  
  
  