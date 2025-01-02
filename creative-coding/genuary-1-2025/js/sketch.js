let bg = 100;

let waves = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bg);
    waves.push(new Wave(100, 100, 0, 10, 200, 10));
}
// push waves not shooting lines, build out wave.js

function draw() {
    background(bg);
    let waves_copy = [...waves];
    let waves_spliced = 0;
    for (let i = 0; i < waves.length; i++) {
        waves[i].move();
        // check to see if wave is dead
        if (waves[i].isAlive()) {
            waves[i].show();
        } else {
            waves_copy.splice(i - waves_spliced, 1);
            waves_spliced++;
        }
    }
    waves = waves_copy;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(bg);
}