class star{
    constructor(position, size = 1, twinkle_speed = 1){
        this.position.x = position[0];
        this.position.y = position[1];
        this.size = size;
        this.twinkle_speed = twinkle_speed; 
    }

    
}


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0, 0, 0);
}