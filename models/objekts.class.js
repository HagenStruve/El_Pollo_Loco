class Coin extends MovableObject {
    width = 100;
    height = 100;
    offset = {
        top: 50,
        bottom: 25,
        left: 50,
        right: 25
    };

    constructor(imagePath){
        super().loadImage(imagePath);
        this.x = 200 + Math.random() * 3000;
        this.y = 170 + Math.random() * 200;
    }
}


class Bottel extends MovableObject {
    width = 80;
    height = 80;
    offset = {
        top: 40,
        bottom: 20,
        left: 40,
        right: 20
    };
    y = 360;

    constructor(imagePath){
        super().loadImage(imagePath);
        this.x = 200 + Math.random() * 3000;
    }
}

    class Health extends MovableObject {
        width = 80;
        height = 80;
        offset = {
            top: 40,
            bottom: 20,
            left: 40,
            right: 20
        };
    
        constructor(imagePath){
            super().loadImage(imagePath);
            this.x = 200 + Math.random() * 3000;
            this.y = 170 + Math.random() * 200;
        }
}