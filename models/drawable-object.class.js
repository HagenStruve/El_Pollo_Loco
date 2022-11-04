class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 260;
    width = 180;
    height = 100;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }

    drawFrame(ctx) {
        if (this instanceof chicken || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset.right, this.y + this.offset.bottom, this.height - this.offset.top, this.width - this.offset.left);
            ctx.stroke();
        }
    }
}