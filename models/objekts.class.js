class Coin extends MovableObject {
    width = 100;
    height = 100;

    constructor(imagePath){
        super().loadImage(imagePath);
        this.x = 200 + Math.random() * 3000;
        this.y = 170 + Math.random() * 200;
    }
}


class Bottel extends MovableObject {
    width = 80;
    height = 80;
    y = 360;

    constructor(imagePath){
        super().loadImage(imagePath);
        this.x = 200 + Math.random() * 3000;
    }
}