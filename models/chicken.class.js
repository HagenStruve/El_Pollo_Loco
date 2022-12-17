class chicken extends MovableObject {
    width = 70;
    height = 70;
    y = 370;
    energy = 20;

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


        this.x = 700 + Math.random() * 3000;
        this.speed = 0.15 + Math.random() * 0.55;

        this.animate();

    }

    animate() {

        setInterval(() => this.chickenMove(), 1000 / 60);

        setInterval(() => this.chickenPlay(), 1000 / 6);
    }

    chickenMove() {
        if (!this.isDead())
            this.moveLeft();
    }

    chickenPlay() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else
            this.playAnimation(this.IMAGES_WALKING);
    }
}