var FPS = 30;
var canvasHeight = window.innerHeight - 30;
var canvasWidth = 600;
var message = "";
if (window.innerWidth < 600) {
	canvasWidth = window.innerWidth;
}

setInterval(function() {
	update();
	draw();
}, 1000/FPS);

var player = {
	color: "green",
	x: 220,
	y: canvasHeight - 60,
	width: 20,
	height: 32,
	draw: function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x, this.y, this.width, this.height);
		// console.log("I drew a thing" + canvasHeight);
	}
};

function update() {
	player.x = Math.max(0, Math.min(player.x, canvasWidth-player.width));
}

function draw() {
	canvas.clearRect(0, 0, canvasWidth, canvasHeight);
	canvas.fillStyle = "black";
	canvas.fillRect(0, 0, canvasWidth, canvasHeight);
	player.draw();
}

function getMousePos(canvas, evt) {
	var rect = canvasElement.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
}

function writeMessage(canvas, newMessage) {
	var context = canvas.getContext('2d');
	message = newMessage;
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = '16pt Calibri';
	context.fillStyle = 'black';
	context.fillText(message, 10, 25);
}
