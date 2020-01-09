// AUDIO

// let fireSound = new Audio("../assets/audio/fire.mp3");
// let hitSound = new Audio("../assets/audio/hit.mp3");
// let jump1Sound = new Audio("../assets/audio/jump1.mp3");
// let jump2Sound = new Audio("../assets/audio/jump2.mp3");
// let loseSound = new Audio("../assets/audio/lose.mp3");
// let pickupSound = new Audio("../assets/audio/pickup.mp3");
// let winSound = new Audio("../assets/audio/win.mp3");

// function playAudio(str) {
//   console.log("pute");
//   switch (str) {
//     case "fire":
//       fireSound.play();
//       break;
//     case "hit":
//       hitSound.play();
//       break;
//     case "jump":
//       let random = oxo.utils.getRandomNumber(1, 2);
//       if (random === 1) {
//         jump1Sound.play();
//       } else {
//         jump2Sound.play();
//       }

//       break;
//     case "lose":
//       loseSound.play();
//       break;
//     case "pickup":
//       pickupSound.play();
//       break;
//     case "win":
//       winSound.play();
//       break;

//     default:
//       break;
//   }
// }

// function playAudio(str) {
//   switch (str) {
//     case "fire":
//       playSound("../assets/audio/fire.mp3");
//       break;
//     case "hit":
//       hitSound.play();
//       break;
//     case "jump":
//       let random = oxo.utils.getRandomNumber(1, 2);
//       if (random === 1) {
//         playSound("../assets/audio/jump-01.mp3");
//       } else {
//         playSound("../assets/audio/jump-02.mp3");
//       }

//       break;
//     case "lose":
//       loseSound.play();
//       break;
//     case "pickup":
//       pickupSound.play();
//       break;
//     case "win":
//       winSound.play();
//       break;

//     default:
//       break;
//   }
// }

function playSound(url) {
  let audio = document.createElement("audio");
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function() {
    audio.remove(); //Remove when played.
  };
  document.body.appendChild(audio);
}
