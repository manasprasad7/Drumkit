var num = document.querySelectorAll(".drum").length;

for (var i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonplay = this.innerHTML;
    sound(buttonplay);
    buttonAnimation(buttoninnerHTML);

  });

}
document.addEventListener("keypress", function() {
  sound(event.key);
  buttonAnimation(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var bass = new Audio("D:/WEB DEV/Drum Kit Starting Files/sounds/kick-bass.mp3");
      bass.play();
      break;
    default:
  }
}

function buttonAnimation(currentkey) {
  var active = document.querySelector("." + currentkey);
  active.classList.add("pressed");
  setTimeout(function() {
    active.classList.remove("pressed");
  }, 100);
}
