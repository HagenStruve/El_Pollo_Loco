class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    collectedCoin = 0;
    collectedbottles = 20;
    enemieLive = 100;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };


    isColliding(mo) {
        return this.y + this.width > mo.y &&
            this.x + this.height > mo.x &&
            this.y < mo.y &&
            this.x < mo.x + mo.height;
    }

    isCollect(mo) {
        return this.y + this.width - this.offset.left > mo.y - mo.offset.right &&
            this.x + this.height - this.offset.top > mo.x - mo.offset.right &&
            this.y + this.offset.bottom < mo.y + mo.width - mo.offset.left &&
            this.x + this.offset.right < mo.x + mo.height - mo.offset.top;
    }

    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    loseBottle() {

        if (this.collectedbottles > 0) {
            this.collectedbottles -= 20;
        }
    }

    collectbottles() {
        this.collectedbottles += 20;
        if (this.collectedbottles > 100) {
            this.collectedbottles = 100;
        }
    }

    collectCoin() {
        this.collectedCoin += 20;
        if (this.collectedCoin > 100) {
            this.collectedCoin = 100;
        }
    }

    collectHealth(){
        if (this.energy < 100) {
            this.energy += 20;
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    dmgChicken(){
        this.enemieLive -= 100;
    }

    chickenIsDead() {
        return this.enemieLive == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable object should always fall
            return true;
        } else
            return this.y < 260
    }


    jump() {
        this.speedY = 30;
    }
}
