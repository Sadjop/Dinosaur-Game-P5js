class Cloud{

    constructor(){
        this.x = game.window_width+70;
        this.y = Math.floor(random(55,300));
        this.w = 9;
        this.h = 24;
        this.img = game.sprite.get(765, 15, 9, 27);
    }

    update(speed){
        this.x -= speed;
    }
    display(){
        image(this.img, this.x, this.y, this.w, this.h);
    }
}