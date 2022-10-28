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


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.loadStatusBars();
    }

    setWorld() {
        this.character.world = this;
    }

    loadStatusBars() {
        this.health_statusBar.setPercentage(100);
        this.bottle_statusBar.setBottle(80);
        this.coin_statusBar.setCoin(60);
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.health_statusBar.setPercentage(this.character.energy);
                    this.bottle_statusBar.setBottle(this.character.energy+20);
                    this.coin_statusBar.setCoin(this.character.energy);
                }
            });
        }, 500);
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