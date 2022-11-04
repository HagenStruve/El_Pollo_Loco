class ThrowableObject extends MovableObject {
    
    

    IMAGES_THROWBOTTLES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.trow(otherDirection);
        this.loadImages(this.IMAGES_THROWBOTTLES);
    }

    trow(otherDirection) {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            if (otherDirection == true) {
                this.x -= 10;
            } else 
            if (otherDirection == false){
                this.x += 10;
            }
            this.playAnimation(this.IMAGES_THROWBOTTLES);
        }, 25);
    }
}