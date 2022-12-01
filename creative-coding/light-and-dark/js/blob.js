class MyBlob {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xv = random(-5, 5);
        this.yv = random(-5, 5);
    }

    move(){
        this.x += this.xv;
        this.y += this.yv;

        if(this.x < 0 || this.x > width) this.xv *= -1;
        if(this.y < 0 || this.y > height) this.yv *= -1;
5    }
}