class Endboss extends MovableObject {
    width = 300;
    height = 300;
    y = 150;
    speed = 400;
    energy = 1000;
    z = 0;
    offset = {
        top: 120,
        bottom: 120,
        left: 120,
        right: 90
    };
    otherDirection = false;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    IMAGE_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGE_DEAD);

        this.x = 3200 + Math.random() * 500;
        this.speed = 0.45 + Math.random() * 0.55;
        this.animate();
    }

    animate() {

        setInterval(() => this.whichDirectionMove(), 20)

        setInterval(() => this.enbossMoveOrDie(), 200)

        setInterval(() => this.endbossPlay(), 200)
    }

    whichDirectionMove() {
        if (this.endbossOnStartMap())
            this.changeToMoveRight();

        if (this.enbossOnEndMap())
            this.changeToMoveLeft();
    }

    enbossMoveOrDie() {
        if (this.isDead())
            this.winGame();
        else
            if (this.moveOtherDirection())
                this.moveRight();
            else
                this.moveLeft();
    }

    endbossPlay() {
        if (this.deadAnimationFinished())
            this.enbossLastAnimation();
        else
            if (this.isDead())
                this.enbossDeadAnimation();
            else
                if (this.endbossSeriouslyInjured())
                    this.endbossHurt();
                else
                    if (this.endbossLoseEnergy())
                        this.endbossAttack();
                    else
                        if (this.firstHitEndboss())
                            this.endbossAlert();
                        else
                            this.playAnimation(this.IMAGES_WALKING);

    }

    deadAnimationFinished() {
        return this.z == -2;
    }

    enbossLastAnimation() {
        this.playAnimation(this.IMAGE_DEAD);
        this.y = 200;
    }

    enbossDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.z -= 1;
    }

    endbossSeriouslyInjured() {
        return this.energy < 399;
    }

    endbossHurt() {
        this.playAnimation(this.IMAGES_HURT);
        this.speed = 70;
    }

    endbossLoseEnergy() {
        return this.energy < 699;
    }

    endbossAttack() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.speed = 30;
    }

    firstHitEndboss() {
        return this.energy < 999;
    }

    endbossAlert() {
        this.playAnimation(this.IMAGES_ALERT);
        this.speed = 10;
    }

    changeToMoveRight() {
        this.otherDirection = true;
    }

    changeToMoveLeft() {
        this.otherDirection = false;;
    }

    endbossOnStartMap() {
        return this.x < -30;
    }

    enbossOnEndMap() {
        return this.x > 3500;
    }

    winGame() {
        setTimeout(function () {
            stopGameWin();
        },
            1500);
    }

    moveOtherDirection() {
        return this.otherDirection == true;
    }
}