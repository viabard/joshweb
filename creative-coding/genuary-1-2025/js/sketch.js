let bg = 100;

let waves = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bg);
    for (let i = 0; i < 20; i++) {
        waves.push(new Wave(width-1, 100, 0, 10, 200, 10));
    }
}
// push waves not shooting lines, build out wave.js

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  

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
            // remove a wave
            waves_copy.splice(i - waves_spliced, 1);
            waves_spliced++;

            // add a new wave
            waves_copy.push(new Wave(1, getRandomInt(0, height), 0, getRandomInt(7, 14), getRandomInt(50, 100), getRandomInt(4, 9)));
        }
    }
    waves = waves_copy;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(bg);
}