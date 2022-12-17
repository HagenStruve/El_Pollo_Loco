class StatusBarEndboss extends DrawableObject{

    ENDBOSS_LIVE = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    percentageEnboss;
    

    constructor() {
        super();
        this.loadImages(this.ENDBOSS_LIVE);
        this.x = -1000;
        this.y = 0;
        this.height = 250;
        this.width = 100;
        this.setPercentageEndboss();
    }

    setPercentageEndboss(percentageEnboss) {
        this.percentageEnboss = percentageEnboss;
        let pathEndboss = this.ENDBOSS_LIVE[this.resolveImageIndexEndboss()];
        this.img = this.imageCache[pathEndboss];
    }

    resolveImageIndexEndboss() {
        if (this.percentageEnboss == 0) {
            return 0;
        } else if (this.percentageEnboss <= 20) {
            return 1;
        } else if (this.percentageEnboss <= 40) {
            return 2;
        } else if (this.percentageEnboss <= 60) {
            return 3;
        } else if (this.percentageEnboss <= 80) {
            return 4;
        } else  {
            return 5;
        }
    }
}