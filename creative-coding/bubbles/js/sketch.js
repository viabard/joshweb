function clamp(number, min, max){
    if(number < min){return min}
    else if(number > max){return max}
}

class Bubble {
    constructor(x, start_at, size) {
        this.x = x;
        this.start_at = start_at;
        this.size = size;

      
      
      
        this.width = 60;
        this.height = this.width*2;
        this.start_x = x;
        this.start_y = 0-this.size/2;

        this.x_moves = [];
        this.y_moves = [];
        this.steps = 1000;

        let i = 0;
        while(i*this.height < windowHeight){
            if(i%2 == 0){
                let x3 = this.start_x, y3 = this.start_y, x4 =this.start_x, y4 =this.start_y+this.height, x1 =this.start_x+this.width, y1 =this.start_y, x2 =this.start_x+this.width, y2 =this.start_y+this.height;
                //bezier(x1, y1, x2, y2, x3, y3, x4, y4);
                for(let j = 0; j<this.steps; j++){
                    let t = j / this.steps;
                    let x = bezierPoint(x1, x2, x3, x4, t);
                    let y = bezierPoint(y1, y2, y3, y4, t);
                    this.x_moves.push(x);
                    this.y_moves.push(y);
                }
              
            }else{
                let x3 = this.start_x, y3 = this.start_y+this.height, x4 = this.start_x, y4 = this.start_y, x1 = this.start_x+this.width, y1 = this.start_y+this.height, x2 = this.start_x+this.width, y2 = this.start_y;
                //bezier(x1, y1, x2, y2, x3, y3, x4, y4);
                  let temp_moves_x = [];
                  let temp_moves_y = [];
                  for(let j = 0; j<this.steps; j++){
                    let t = j / this.steps;
                    let x = bezierPoint(x1, x2, x3, x4, t);
                    let y = bezierPoint(y1, y2, y3, y4, t);
                    temp_moves_x.push(x);
                    temp_moves_y.push(y);
                }
              this.x_moves = this.x_moves.concat(temp_moves_x.reverse())
              this.y_moves = this.y_moves.concat(temp_moves_y.reverse())
            }

            this.start_y += this.height;
            i++;
        }
      this.y_moves = this.y_moves.reverse();

      this.x_ind = this.x_moves.length * this.start_at;
      this.y_ind = this.y_moves.length * this.start_at;

    }

    move(speed = 1, sway = 1, jitter = 1) {
        speed = Math.trunc(speed);
        
        if(this.y_ind >= this.y_moves.length){this.y_ind = 0}
        if(this.x_ind >= this.x_moves.length){this.x_ind = 0}
        this.x_ind += 1 + speed;
        this.y_ind += 1 + speed;
        this.x = this.x_moves[this.x_ind] + ((Math.random() - 0.5) * jitter);
        this.y = this.y_moves[this.y_ind] + ((Math.random() - 0.5) * jitter);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.size, this.size);
    }
}

let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 100; i++){
        let random_width = Math.trunc(Math.random()*windowWidth);
        let random_size = 20 + Math.random()*120;

        bubbles.push(new Bubble(random_width, Math.random(), random_size));
    }
    bubble = new Bubble(200, 0, 200);
    
}

function draw() {
    background(0, 0, 0);
    
    fill(255);
    for(let i = 0; i < bubbles.length; i++){
        let speed = 10 + Math.random()*20;
        let jitter = speed / 10000;
        bubbles[i].move(speed, 0, jitter);
        bubbles[i].show();
    }

    
}