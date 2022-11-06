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
    thowableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkHitEnemie();
        this.checkCollect();
        this.loadStatusBars();
    }

    setWorld() {
        this.character.world = this;
    }

    loadStatusBars() {
        this.health_statusBar.setPercentage(100);
        this.bottle_statusBar.setBottle(0);
        this.coin_statusBar.setCoin(0);
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowableObjects();
        }, 500);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.health_statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowableObjects() {
        if (this.keyboard.SPACE && this.character.collectedbottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100, this.character.otherDirection);
            this.thowableObjects.push(bottle);
            this.character.loseBottle();
            this.bottle_statusBar.setBottle(this.character.collectedbottles);
            console.log('wurf', this.thowableObjects)
        }
    }

    checkHitEnemie() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                this.thowableObjects.forEach((to) => {
                    if (to.isCollect(enemy)) {
                        let index = this.level.enemies.indexOf(enemy);
                    this.level.enemies.splice(index, 1);
                        console.log('DMG');
                    }
                });
            });
        }, 10);
    }

    checkCollect() {
        setInterval(() => {
            this.level.bottel.forEach((bottel) => {
                if (this.character.isCollect(bottel)) {
                    this.character.collectbottles();
                    let index = this.level.bottel.indexOf(bottel);
                    this.level.bottel.splice(index, 1);
                }
                this.bottle_statusBar.setBottle(this.character.collectedbottles);
            });

            this.level.coin.forEach((coin) => {
                if (this.character.isCollect(coin)) {
                    this.character.collectCoin();
                    this.coin_statusBar.setCoin(this.character.collectedCoin);
                    let index = this.level.coin.indexOf(coin);
                    this.level.coin.splice(index, 1);
                }
            });

            this.level.health.forEach((health) => {
                if (this.character.isCollect(health)) {
                    this.character.collectHealth();
                    this.health_statusBar.setPercentage(this.character.energy);
                    let index = this.level.health.indexOf(health);
                    this.level.health.splice(index, 1);
                }
            });
        }, 10);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundobjects);

        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.health_statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.bottle_statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // ----------- Space for fixed objects -----------
        this.addToMap(this.coin_statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.bottel);
        this.addObjectsToMap(this.level.health);
        this.addObjectsToMap(this.thowableObjects);

        this.ctx.translate(-this.camera_x, 0);

        //draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
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