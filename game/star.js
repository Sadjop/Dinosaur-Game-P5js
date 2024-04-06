class Star{

    constructor(){
        this.x = game.window_width + 70;
        this.y = Math.floor(random(100,230));
        this.w = 16;
        this.h = 16;
        this.type = Math.floor(random(3));
        switch (this.type) {
            case 0:
                this.img = game.sprite.get(1042, 15, 9, 9);
            break;
            case 1:X
                this.img = game.sprite.get(1042, 24, 9, 9);
            break;
            case 2:
                this.img = game.sprite.get(1042, 33, 9, 9);
            break;
        }
    }

    update(speed){
        this.x -= parseFloat(speed);
    }
    display(){
        image(this.img, this.x, this.y, this.w, this.h);
    }
}