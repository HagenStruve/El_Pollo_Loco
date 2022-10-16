class Cloud extends MovableObject {
    y = 50;
    height = 700;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/full.png');

        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    animate() {
   this.moveLeft();
    }

}