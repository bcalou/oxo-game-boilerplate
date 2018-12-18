//navigate from home to game
oxo.inputs.listenKeyOnce('enter', function() {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
  }
});

var gravity = 70;  //Speed of falling
var time;
var flying = true;


function game() {


  var platform = document.getElementById('platform');   //platform object
  oxo.animation.setPosition(platform, {x: 0, y: 550});

  var player = document.getElementById('player');     //player object
  oxo.animation.setPosition(player, {x: 600, y: 0});

  

  time = setInterval(down, gravity); 

  function down() {

    // collision test
    oxo.elements.onCollisionWithElement(player, platform, function() {
      flying = false;
      console.log('collision');
    });

    if ( flying === true) {
      oxo.animation.move(player, 'down', 10);
    };

    oxo.inputs.listenArrowKeys(function(key) {
      if ( key === 'right' ) {
        oxo.animation.move(player, 'right', 10);
      } else if (key === 'left') {
        oxo.animation.move(player, 'left', 10);
      } else if (key === 'up') {
        oxo.animation.move(player, 'up', 200);
        setTimeout(() => {
          flying = true;
        }, 300);
      }
    });

  };




  // var ground = 0;

  // while ( ground <= 0 ) {
  //   oxo.animation.move(player, 'down', gravity);
  //   ground = 0;
  //   var ennemy = document.getElementById('ennemy');
  //   oxo.elements.onCollisionWithElement(player, platform, function() {
  //     ground = 1;
  //   });
  // }
    


  
  
  
  // Not working prototype of moving and jumping

  // oxo.inputs.listenArrowKeys(function(key) {
  //   if ( key === 'right' ) {
  //     oxo.animation.move(player, 'right', 3);
  //   } else if (key === 'left') {
  //     oxo.animation.move(player, 'left', 3);
  //   } else if (key === 'up') {
  //     oxo.animation.move(player, 'up', 200);
  //     setTimeout( function() {
  //       oxo.animation.move(player, 'down', 200);
  //     }, 400);
  //   }
  // });
};