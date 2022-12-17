class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    health_statusBar = new StatusBar(0);
    bottle_statusBar = new StatusBar(40);
    coin_statusBar = new StatusBar(80);
    endboss_statusBar = new StatusBarEndboss();
    thowableObjects = [];
    chickenHitSound = new Audio('audio/chicken_scream.mp3');
    collectSound = new Audio('audio/collect.mp3');
    collisionSound = new Audio('audio/hit_character.mp3');
    bottleBreak = new Audio('audio/bottle_break.mp3');



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.endboss = this.level.enemies[0];
        this.draw();
        this.setWorld();
        this.run();
        this.loadStatusBars();
        this.collisinAndCollect();
    }

    setWorld() {
        this.character.world = this;
    }

    loadStatusBars() {
        this.health_statusBar.setPercentage(100);
        this.bottle_statusBar.setBottle(0);
        this.coin_statusBar.setCoin(0);
        this.endboss_statusBar.setPercentageEndboss(this.endboss.energy / 10);
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowableObjects();
        }, 150);
    }

    collisinAndCollect() {
        setInterval(() => {
            this.checkCollisionsAbove();
            this.checkHitEnemie();
            this.checkCollect();
            this.checkEndboss();
        }, 10);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit();
                this.health_statusBar.setPercentage(this.character.energy);
                this.collisionSound.play();
            }
        });
    }

    checkCollisionsAbove() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isAboveColliding(enemy) && enemy.energy > 0 && !this.character.isHurt()) {
                enemy.hit();
                this.chickenHitSound.play();
            }
        });
    }

    checkThrowableObjects() {
        if (this.keyboard.SPACE && this.character.collectedbottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100, this.character.otherDirection);
            this.thowableObjects.push(bottle);
            this.character.loseBottle();
            this.bottle_statusBar.setBottle(this.character.collectedbottles);
        }
    }

    checkHitEnemie() {
        this.thowableObjects.forEach((to) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isCollect(to)) {
                    enemy.hit();
                    to.hit();
                    this.chickenHitSound.play();
                    this.bottleBreak.play();
                }
            });
        });
    }

    checkCollect() {
        this.level.bottel.forEach((bottel) => { this.collectBottle(bottel); });

        this.level.coin.forEach((coin) => { this.collectCoin(coin); });

        this.level.health.forEach((health) => { this.collectHealth(health); });
    }

    collectBottle(bottel) {
        if (this.character.isCollect(bottel)) {
            this.character.collectbottles();
            let index = this.level.bottel.indexOf(bottel);
            this.level.bottel.splice(index, 1);
            this.collectSound.play();
        }
        this.bottle_statusBar.setBottle(this.character.collectedbottles);
    }

    collectCoin(coin) {
        if (this.character.isCollect(coin)) {
            this.character.collectCoin();
            this.coin_statusBar.setCoin(this.character.collectedCoin);
            let index = this.level.coin.indexOf(coin);
            this.level.coin.splice(index, 1);
            this.collectSound.play();
        }
    }

    collectHealth(health) {
        if (this.character.isCollect(health)) {
            this.character.collectHealth();
            this.health_statusBar.setPercentage(this.character.energy);
            let index = this.level.health.indexOf(health);
            this.level.health.splice(index, 1);
            this.collectSound.play();
        }
    }

    draw() {
        this.addCanvasAndBackgroundToMap();

        this.addStatusbarsToMap();

        this.addMovableObjectsToMap();

        //draw is called again and again
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    checkEndboss() {
        if (this.character.x >= 2800) this.endboss_statusBar.x = 350;
        this.endboss_statusBar.setPercentageEndboss(this.endboss.energy / 10);
      }

    addCanvasAndBackgroundToMap() {
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundobjects);
    }

    addStatusbarsToMap() {
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.health_statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.endboss_statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.bottle_statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.coin_statusBar);
        this.ctx.translate(this.camera_x, 0);
    }

    addMovableObjectsToMap() {
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.bottel);
        this.addObjectsToMap(this.level.health);
        this.addObjectsToMap(this.thowableObjects);

        this.ctx.translate(-this.camera_x, 0);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.height, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}