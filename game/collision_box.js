class CollisionBox{

    constructor(entityType, distanceOffset, ... bird_y){

        if (arguments.length === 4) {
            this.x = arguments[0];
            this.y = arguments[1];
            this.w = arguments[2];
            this.h = arguments[3];
        }
        else {
            this.by = (bird_y.length >= 1) ? bird_y[0] : null;
            this.type = entityType;
            if(this.type!=6 && this.type!=7){
                this.x = game.window_width + distanceOffset;
            }
            this.boxes = [];

            switch (this.type) {

                // Petit cactus
                case 0:
                    this.boxes.push(new CollisionBox(this.x+75, 480, 39, 51));

                break;

                case 1:
                    this.boxes.push(new CollisionBox(this.x+75, 480, 38, 52));
                break;

                // Cactus x3
                case 2:
                    this.boxes.push(new CollisionBox(this.x+75, 479, 33, 45));
                break;
                case 3:
                    this.boxes.push(new CollisionBox(this.x+71,469,37, 55));
                break;

                // Cactus x2
                case 4:
                    this.boxes.push(new CollisionBox(this.x+71, 459, 43, 60));
                break;

                // Collisions GROS CACTUS A MODIFIER AVEC LE SPRITE CHOISI
                case 5:
                    this.boxes.push(new CollisionBox(this.x+71,469,16,38));                    
                break;

                // // Collisions Dino A MODIFIER AVEC LE SPRITE CHOISI
                case 6:
                    this.boxes.push(new CollisionBox(200,500,15,10));
                    this.boxes.push(new CollisionBox(212,500,40,10));
                    this.boxes.push(new CollisionBox(242,510,10,8));
                    this.boxes.push(new CollisionBox(246,518,10,8));
                    this.boxes.push(new CollisionBox(250,527,20,7));
                    this.boxes.push(new CollisionBox(232,490,11,10));
                    this.boxes.push(new CollisionBox(235,480,11,10));
                    this.boxes.push(new CollisionBox(245,482,27,13));
                    this.boxes.push(new CollisionBox(222,472,15,28));
                    this.boxes.push(new CollisionBox(235,460,15,19));

                break;

                // // Collisions Dino Allongé A MODIFIER AVEC LE SPRITE CHOISI
                case 7:
                    this.boxes.push(new CollisionBox(202,495,90,50));
                break;
                case 8:
                    this.boxes.push(new CollisionBox(this.x+74,this.by+25,11,8));
                    this.boxes.push(new CollisionBox(this.x+82,this.by+20,19,14));
                    this.boxes.push(new CollisionBox(this.x+86,this.by+15,11,8));
                    this.boxes.push(new CollisionBox(this.x+96,this.by+30,28,12));
                    this.boxes.push(new CollisionBox(this.x+102,this.by+37,48,12));
                    this.boxes.push(new CollisionBox(this.x+102,this.by+48,33,4));
                    this.boxes.push(new CollisionBox(this.x+102,this.by+51,8,20));
                    this.boxes.push(new CollisionBox(this.x+109,this.by+51,8,8));
                break;
                case 9:
                    // this.boxes.push(new CollisionBox(this.x+74,this.by+25,11,8));
                    // this.boxes.push(new CollisionBox(this.x+82,this.by+20,19,14));
                    // this.boxes.push(new CollisionBox(this.x+86,this.by+15,11,8));
                    // this.boxes.push(new CollisionBox(this.x+96,this.by+30,28,12));
                    // this.boxes.push(new CollisionBox(this.x+102,this.by+37,48,12));
                    // this.boxes.push(new CollisionBox(this.x+107,this.by+48,28,4));
                    // this.boxes.push(new CollisionBox(this.x+98,this.by+4,8,12));
                    // this.boxes.push(new CollisionBox(this.x+102,this.by+10,12,20));
                    // this.boxes.push(new CollisionBox(this.x+113,this.by+20,8,12));
                    // this.boxes.push(new CollisionBox(this.x+120,this.by+27,5,4));
                break;
            }
        }
    }

    update(speed){
        this.x -= speed;
    }

    getCollisionBoxes(){
        return this.boxes;
    }

    display(){
        fill(255,0,0,50);
        rect(this.x,this.y,this.w,this.h);
    }
}