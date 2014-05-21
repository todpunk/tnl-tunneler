var FPS = 30;
var canvasHeight = window.innerHeight - 30;
var canvasWidth = 600;
var message = "";
var walls = [];
var wallWidth = 30;
var wallSpeed = 5;

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

function wall() {
	this.leftx = 0;
	this.rightx = canvasWidth-wallWidth;
	this.y = 0;
}


function update() {
	player.x = Math.max(0, Math.min(player.x, canvasWidth-player.width));
	walls.push(new wall())
	for (var i = 0; i < walls.length; i=i+1) {
		var ourwall = walls[i];
		ourwall.y = ourwall.y + wallSpeed;
	}
}

function draw() {
	canvas.clearRect(0, 0, canvasWidth, canvasHeight);
	canvas.fillStyle = "black";
	canvas.fillRect(0, 0, canvasWidth, canvasHeight);
	for (var i = 0; i < walls.length; i=i+1) {
		var ourwall = walls[i];
		if(ourwall.y > canvasHeight) {
			// Maybe delete the unused wall?
		}
		canvas.fillStyle = "#006400";
		canvas.fillRect(ourwall.leftx, ourwall.y, wallWidth, wallSpeed);
		canvas.fillStyle = "#006400";
		canvas.fillRect(ourwall.rightx, ourwall.y, wallWidth, wallSpeed);
	}
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
