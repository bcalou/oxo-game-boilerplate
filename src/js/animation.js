/* Animation Choosing Characters 1 PLAYER or 2 PLAYERS*/

var tID; //we will use this variable to clear the setInterval()

setTimeout(function() {

/* LOADING PAGE */

// var names = document.querySelector('.back__home');
// console.log(names);
// names.addEventListener('click', function(){
//   oxo.screens.loadScreen('home', function() {
//     // game.html is loaded, do something
//   });
// });

var names = document.querySelector('.mode__img');
console.log(names);
names.addEventListener('click', function(){
  oxo.screens.loadScreen('oneplayer', function() {
    // game.html is loaded, do something
  });
});

var names = document.querySelector('.mode__img__2Players');
console.log(names);
names.addEventListener('click', function(){
  oxo.screens.loadScreen('twoplayers', function() {
    // game.html is loaded, do something
  });
});

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