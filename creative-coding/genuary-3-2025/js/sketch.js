let bg = 'rgba(0, 0, 0, 1)';
let bga = 'rgba(0, 0, 0, 0.1)';
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bg);
    rectMode(CENTER);
    strokeWeight(0);
}
function draw() {
    background(bga);
    let currentMilliseconds = Date.now();

    let red = 'rgb(255,0,0)';
    let orange = 'rgb(255,165,0)';
    let yellow = 'rgb(255,255,0)';
    let green = 'rgb(0,128,0)';
    let blue = 'rgb(0,191,255)';
    let indigo = 'rgb(75,0,130)';
    let violet = 'rgb(148,0,211)';

    let y = (Math.sin(2 * Math.PI * (currentMilliseconds%4000)/4000) + 1) / 2 * height;
    let x = (Math.sin(2 * Math.PI * (currentMilliseconds%6000)/6000) + 1) / 2 * width;

    fill('rgb(255, 0, 0)')
    rect(x, y, 100, 100, 50);
}