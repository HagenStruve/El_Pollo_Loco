class ThrowableObject extends MovableObject {

    IMAGES_THROWBOTTLES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.trow(otherDirection);
        this.loadImages(this.IMAGES_THROWBOTTLES);
        this.loadImages(this.IMAGES_SPLASH);
    }

    trow(otherDirection) {
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => this.throwDirection(otherDirection), 25);

        setInterval(() => this.bottlePlay(), 1000 / 10);
    }

    throwDirection(otherDirection) {
        if (otherDirection == true) {
            this.x -= 10;
        } else
            if (otherDirection == false) {
                this.x += 10;
            }
    }

    bottlePlay() {
        if (this.energy < 100) {
            this.playAnimation(this.IMAGES_SPLASH);
        } else {
            this.playAnimation(this.IMAGES_THROWBOTTLES);
        }
    }
}