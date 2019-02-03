var colors = [];
var numOfSqrs = 6;
var winColor;

var modeButton = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".sqr");
var resetButton = document.querySelector(".reset")
var msg = document.querySelector("#msgDis");
var col = document.querySelector("#colorDis");
var h1 = document.querySelector("h1");

setupButtons();
reset();

function reset() {	
	colors = [];
	h1.style.background = "steelblue";
	resetButton.textContent ="New Colours";
	msg.textContent = "";
	genColor();
	setupSquares();
}

function setupButtons() {
	resetButton.addEventListener("click", reset);
	for (i=0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSqrs = 3: numOfSqrs = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (i=0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display ="none";
		};

		squares[i].addEventListener("click", function() {
			if (this.style.backgroundColor == winColor){
				msg.textContent = "Correct!";
				h1.style.background = winColor;
				resetButton.textContent ="Play Again?"
				changeColor(winColor);
			} else {
				msg.textContent ="Try Again!";
				this.style.background = "#232323";
			};
		});
	};
}

function changeColor(color) {
	for (i=0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function genColor() {
	for (i=0; i < numOfSqrs; i++) {
		colors.push(randomColor());
	};
	pick = Math.floor(Math.random() * numOfSqrs);
	winColor = colors[pick];
	col.textContent = winColor;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
