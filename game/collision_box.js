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

                // Bidon droit
                case 0:
                    this.boxes.push(new CollisionBox(this.x+70, 475, 39, 51));

                break;

                // Bidon à l'envert
                case 1:
                    this.boxes.push(new CollisionBox(this.x+80, 475, 39, 51));
                break;

                // Sac
                case 2:
                    this.boxes.push(new CollisionBox(this.x+74, 479, 34, 55));
                break;

                // Poubelle vide
                case 3:
                    this.boxes.push(new CollisionBox(this.x+70,465,40, 70));
                break;

                // Poubelle sac
                case 4:
                    this.boxes.push(new CollisionBox(this.x+80, 450, 30, 35));
                    this.boxes.push(new CollisionBox(this.x+71, 480, 48, 62));
                break;

                // Poubelle renversée
                case 5:
                    this.boxes.push(new CollisionBox(this.x+81,480,30,30));
                    this.boxes.push(new CollisionBox(this.x+70,505,40,30));
                    this.boxes.push(new CollisionBox(this.x+105,445,56,80));
                break;

                // Personnage
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

                // Personnage Allongé
                case 7:
                    this.boxes.push(new CollisionBox(202,495,90,50));
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