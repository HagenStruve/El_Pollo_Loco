class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = 480;
    height = 1440;

    constructor(imagePath){
        super().loadImage(imagePath);
    }
}