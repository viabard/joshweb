let cubeWidth = 75;

class IsometricCube {
	constructor(x, y, width, height, leftColor, rightColor, topColor, moveHeight=0, movingSpeed=0.01) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.leftColor = leftColor;
		this.rightColor = rightColor;
		this.topColor = topColor;
		this.moveHeight = moveHeight;
		this.progress = 0;
		this.currentHeight = this.height;
		this.moving = false;
		this.movingSpeed = movingSpeed;
		this.moved = false;
	}
	
	show() {

		// left face
		fill(this.leftColor);
		let newLeftX = this.x - (this.width * Math.cos(Math.PI/6));
		let newLeftY = this.y - (this.width * Math.sin(Math.PI/6));
		beginShape();
		vertex(this.x, this.y);
		vertex(newLeftX, newLeftY);
		vertex(newLeftX, newLeftY-this.currentHeight);
		vertex(this.x, (newLeftY-this.currentHeight) + (this.y-newLeftY));
		endShape(CLOSE);

		// right face
		fill(this.rightColor);
		let newRightX = this.x + (this.width * Math.cos(Math.PI/6));
		let newRightY = this.y - (this.width * Math.sin(Math.PI/6));
		beginShape();
		vertex(this.x, this.y);
		vertex(newRightX, newRightY);
		vertex(newRightX, newRightY-this.currentHeight);
		vertex(this.x, (newRightY-this.currentHeight) + (this.y-newRightY));
		endShape(CLOSE);

		// top face
		fill(this.topColor);
		beginShape();
		vertex(this.x, this.y-this.currentHeight);
		vertex(newLeftX, newLeftY-this.currentHeight); //out to the left
		vertex(this.x, (newLeftY-this.currentHeight) - (this.y-newRightY));
		vertex(newRightX, newRightY-this.currentHeight);
		endShape(CLOSE);
	}

	move(moveHeight) {

		let progressTimesPi = this.progress * Math.PI - Math.PI/2;
		progressTimesPi = (Math.sin(progressTimesPi) + 1)/2;
		this.currentHeight = lerp(this.height, moveHeight, progressTimesPi);

		if (this.progress <= 1) {
			this.progress += this.movingSpeed;
		} else {
			this.moved = true;
			this.height = this.currentHeight;
		}
	}

	getMovedStatus() {
		return this.moved;
	}
}

let x = [];
let pixelGrid = [];
let posXDiff = cubeWidth * Math.cos(Math.PI/6) * 2;
let posYDiff = cubeWidth * Math.sin(Math.PI/6);

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	
	//create grid of cubes
	
	for (let x = 0; x < width+(cubeWidth*2); x += posXDiff) {
		let tempYList = [];
		let xi = Math.round(x/posXDiff);

		for (let y = 0; y < height+(cubeWidth*4); y += posYDiff) {
			let yi = Math.round(y/posYDiff);
			if (yi%2 == 0) {
				var thingy = posXDiff/2;
			} else {
				thingy = 0;
			}
			tempYList.push(new IsometricCube(x-thingy, y, cubeWidth, random(10, 200), 'rgba(255,34,231,1)', 'rgba(211,230,53,1)', 'rgba(222,150,150,1)'));
		}
		pixelGrid.push(tempYList);
	}
}

function draw() {
	background(255);
	stroke('rgb(0, 0, 0)');
	fill('rgb(100, 200, 50)')
	strokeWeight(1);
	for (let y = 0; y < height+(cubeWidth*4); y += posYDiff) {
		let yi = Math.round(y/posYDiff);
		for (let x = 0; x < width+(cubeWidth*2); x += posXDiff) {
			let xi = Math.round(x/posXDiff);
			pixelGrid[xi][yi].move(100);
			pixelGrid[xi][yi].show();
		}
	}
}