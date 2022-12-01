class MyBlob {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xv = random(-10, 10);
        this.yv = random(-10, 10);
    }

    move(){
        this.x += this.xvel;
        this.y += this.yvel;

        if(this.x < 0 || this.x > width) this.xvel *= -1;
        if(this.y < 0 || this.y > height) this.yvel *= -1;
    }
}