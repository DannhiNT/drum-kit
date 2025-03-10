const buttons = document.querySelectorAll(".drum");

buttons.forEach(btn => btn.addEventListener("click", handleClick));

function handleClick(e) {
  const buttonInnerHTML = e.currentTarget.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

buttons.forEach(btn => btn.addEventListener("keydown", handleKey));
function handleKey(e) {
  const eventKey = e.key;
  makeSound(eventKey);
  buttonAnimation(eventKey);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 200);
}


//Another way of implementation using 'this' keyword:
// const buttons = document.querySelectorAll(".drum");

// buttons.forEach(btn => btn.addEventListener("click", handleClick.bind(btn)));

// function handleClick(e) {
//   const key = this.innerHTML;
//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//     case "k":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//     case "l":
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//     default: console.log(key);
//   }
// }

