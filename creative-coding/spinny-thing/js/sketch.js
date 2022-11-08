let s;
let r = 0;
let g = 0;
let b = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    s = new PointString(windowWidth/2, windowHeight/2, 750, 0, 0.85, 40);

}

function draw() {
    background(255);
    
    fill(0);

    stroke(r, g, b);
    strokeWeight(2);

    s.move();
    s.move(); // faster!
    s.show();

}
