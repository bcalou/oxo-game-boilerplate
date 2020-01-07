
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

//direction character
window.addEventListener('keydown', function(){
  oxo.inputs.listenKey('up', function() {
    var div = document.querySelector('div');
    div.className='characterup';
  });

  oxo.inputs.listenKey('down', function() {
    var div = document.querySelector('div');
    div.className='characterdown';
  });

  oxo.inputs.listenKey('right', function() {
    var div = document.querySelector('div');
    div.className='characterright';
  });

  oxo.inputs.listenKey('left', function() {
    var div = document.querySelector('div');
    div.className='characterleft';
  });

  oxo.inputs.listenKey('space', function() {
    var div = document.querySelector('div');
    div.className='character';
  });
});

