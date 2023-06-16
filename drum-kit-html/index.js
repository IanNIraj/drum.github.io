var numButton = document.querySelectorAll("button").length;
var audio = new Audio();

for (var i = 0; i < numButton; i++) {
  var button = document.querySelectorAll("button")[i];
  button.addEventListener("click", function() {
    makeSound(this.innerText);
  });
  button.addEventListener("mouseover", function() {
    showDrumName(this.innerText);
  });
  button.addEventListener("mouseout", function() {
    hideDrumName();
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audio.src = "sounds/tom-1.mp3";
      audio.play();
      break;

    case "a":
      audio.src = "sounds/tom-2.mp3";
      audio.play();
      break;

    case "s":
      audio.src = "sounds/tom-3.mp3";
      audio.play();
      break;

    case "d":
      audio.src = "sounds/tom-4.mp3";
      audio.play();
      break;

    case "j":
      audio.src = "sounds/snare.mp3";
      audio.play();
      break;

    case "k":
      audio.src = "sounds/crash.mp3";
      audio.play();
      break;

    case "l":
      audio.src = "sounds/kick-bass.mp3";
      audio.play();
      break;

    case "p":
    audio.src="sounds/pig.mp3";
    audio.play();
    break;
  }
}

function showDrumName(drumName) {
  var drumNameElement = document.getElementById("drum-name");
  drumNameElement.innerText = drumName;
  drumNameElement.style.display = "block";
}

function hideDrumName() {
  var drumNameElement = document.getElementById("drum-name");
  drumNameElement.style.display = "none";
}
