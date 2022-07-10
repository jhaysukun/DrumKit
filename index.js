var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
	drumButtons[i].addEventListener("click", function () {

		var buttonInnerHTML = this.innerHTML;

		playSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);

	});
}

//For keyboard press

document.addEventListener("keydown", function (event) {

	   playSound(event.key);

	   buttonAnimation(event.key);

});

function playSound(key) {

	switch (key) {
		case "w":
			var tom1 = new Audio("sounds/w.mp3");
			tom1.play();
			break;

		case "a":
			var tom2 = new Audio("sounds/a.mp3");
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio("sounds/s.mp3");
			tom3.play();
			break;

		case "d":
			var tom4 = new Audio("sounds/d.mp3");
			tom4.play();
			break;

		case "j":
			var crash = new Audio("sounds/j.mp3");
			crash.play();
			break;

		case "k":
			var snare = new Audio("sounds/k.mp3");
			snare.play();
			break;

		case "l":
			var kick = new Audio("sounds/l.mp3");
			kick.play();
			break;

	}
}

function buttonAnimation(currentKey) {

   var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);

}
