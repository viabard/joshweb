class MyBlob {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xv = random(-10, 10);
        this.yv = random(-10, 10);
    }

    move(){
        this.x += this.xv;
        this.y += this.yv;

        if(this.x < 0 || this.x > width) this.xv *= -1;
        if(this.y < 0 || this.y > height) this.yv *= -1;
    }
}