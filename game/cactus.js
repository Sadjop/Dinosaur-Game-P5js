class Cactus{

    constructor(){

        this.randomDistance = Math.floor(random (40,80));
        this.x = game.window_width + this.randomDistance;
        this.type = Math.floor(random(6));
        this.collisionBoxes=[];

        if(this.type < 3){
            this.h = 66;
            this.y = 470;
        }else{
            this.h = 96;
            this.y = 444;
        }
        switch (this.type) {
            // Bidon droit
            case 0:
                this.w = 51;
                this.img = game.sprite.get(261, 7, 39, 51);
            break;

            // Bidon à l'envert
            case 1:
                this.w = 52;
                this.img = game.sprite.get(303, 7, 38, 52);
            break;
            
            // Sac
            case 2:
                this.w = 45;
                this.img = game.sprite.get(341, 14, 33, 45);
            break;

            // Poubelle vide
            case 3:
                this.w = 45;
                this.img = game.sprite.get(373, 14, 37, 45);
            break;

            // Poubelle sac
            case 4:
                this.w = 56;
                this.img = game.sprite.get(410, 3, 37, 56);
            break;

            // Poubelle renversée
            case 5:
                this.w = 92;
                this.img = game.sprite.get(447, 20, 92, 39);
            break;

            // Personnage
            case 6:
                this.w = 51;
                this.img = game.sprite.get(539, 14, 68, 51);
        }
        this.createCollisionBoxes(this.randomDistance-70);
    }

    update(speed){
        this.x -= speed;
    }
    createCollisionBoxes(distanceOffset){
        for (let b of new CollisionBox(this.type,distanceOffset).getCollisionBoxes()){
            this.collisionBoxes.push(b);
        }
    }
    display(){
        image(this.img, this.x, this.y, this.w, this.h);
    }
}