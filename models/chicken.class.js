class chicken extends MovableObject {
    width = 70;
    height = 70;
    y = 370;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);


        this.x = 200 + Math.random() * 3000;
        this.speed = 0.15 + Math.random() * 0.55;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            if (this.chickenIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
        }, 150)
    }
}