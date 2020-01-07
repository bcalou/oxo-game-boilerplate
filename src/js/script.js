function spaceSwitchScreens() {
  oxo.inputs.listenKey("space", function() {
    let avant = document.getElementById("avant");
    let apres = document.getElementById("apres");
    avant.classList.toggle("hidden-display");
    apres.classList.toggle("hidden-display");
    console.log(getCurrentScreen());
  });
}

function getCurrentScreen() {
  let screen = avant.classList.contains("hidden-display") ? "apres" : "avant";
  return screen;
}

function createGrid(x, element) {
  for (let i = 0; i < x; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    element.appendChild(div);
    console.log(div);
  }
}

oxo.screens.loadScreen("game", function() {
  let avant = document.getElementById("avant");
  let apres = document.getElementById("apres");
  createGrid(avant, 100);
  createGrid(apres, 100);

  spaceSwitchScreens();
  let screen = getCurrentScreen();
  var kangoo = oxo.elements.createElement({
    type: "div", // optional
    class: "kangoo", // optional,
    obstacle: true, // optional,
    styles: {
      // optional
      // transform: "translate(50px, 50px)"
    },
    appendTo: "body" // optional
  });
});
