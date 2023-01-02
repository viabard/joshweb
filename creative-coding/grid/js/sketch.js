function clamp(number, min, max){
    if(number < min){return min}
    else if(number > max){return max}
}
const SPACING = 100;
const BUFFER = 100;
let num_cols;
let num_rows;

let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // get grid
    num_cols = Math.ceil((windowWidth-BUFFER*2)/SPACING);
    num_rows = Math.ceil((windowHeight-BUFFER*2)/SPACING);

    console.log(num_cols + ' cols');
    console.log(num_rows + ' rows');

    // make points
    for(let i = 0; i < num_cols; i++){
        for(let j = 0; j < num_rows; j++){
            points.push(new Point(BUFFER + SPACING*i, BUFFER + SPACING*j));
        }
    }
}

function draw() {
    for(let i = 0; i < num_cols*num_rows; i++){
        points[i].move();
        points[i].show();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}