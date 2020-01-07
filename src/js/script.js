
oxo.screens.loadScreen('game', function() { 
  oncollision();
});


function oncollision(){
  let character = document.getElementById('character');

  let element = oxo.elements.createElement({
    type: 'div', // optional
    class: 'my-element', // optional,
    obstacle: true, // optional,
    styles: {//optional
    },
    appendTo: 'body' // optional
  });

  console.log(character);
  oxo.elements.onCollisionWithElementOnce(character, element, function() {
    // Character is touched by ennemy
    console.log('touch')
  });
}

