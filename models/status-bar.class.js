class StatusBar extends DrawableObject{


    IMAGES_HEALT = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    percentage = 100;
    bottles = 0;
    coins = 0;
    

    constructor(y) {
        super();
        this.loadImages(this.IMAGES_HEALT);
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_COIN);
        this.x = 25;
        this.y = y;
        this.height = 200;
        this.width = 60;
        this.setPercentage(100);
        this.setBottle(0);
        this.setCoin(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALT[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 80) {
            return 4;
        } else {
            return 5;
        }
    }

    setBottle(bottles) {
        this.bottles = bottles;
        let bottle = this.IMAGES_BOTTLE[this.resolveImageIndexBottle()];
        this.img = this.imageCache[bottle];
    }

    resolveImageIndexBottle() {
        if (this.bottles == 100) {
            return 5;
        } else if (this.bottles == 80) {
            return 4;
        } else if (this.bottles == 60) {
            return 3;
        } else if (this.bottles == 40) {
            return 2;
        } else if (this.bottles == 20) {
            return 1;
        } else {
            return 0;
        }
    }

    setCoin(coins) {
        this.coins = coins;
        let coin = this.IMAGES_COIN[this.resolveImageIndexCoin()];
        this.img = this.imageCache[coin];
    }

    resolveImageIndexCoin() {
        if (this.coins == 100) {
            return 5;
        } else if (this.coins == 80) {
            return 4;
        } else if (this.coins == 60) {
            return 3;
        } else if (this.coins == 40) {
            return 2;
        } else if (this.coins == 20) {
            return 1;
        } else {
            return 0;
        }
    }
}