class Ground{

    img; imgGameNotStarted;

    constructor(){
        this.x = 0;
        this.x2 = -1089;
        this.y = 525;
        this.w = 1089;
        this.h = 20;
    }

    update(speed){
        this.x -= speed;
        if(this.x<this.x2){
            this.x = 0;
        }
    }
    display(){
        image(this.img, this.x, this.y, this.w, this.h);
        image(this.img, this.x-this.x2, this.y, this.w, this.h);
    }
    displayGameNotStarted(){
        image(this.imgGameNotStarted, 200, this.y, 80, this.h);
    }
}