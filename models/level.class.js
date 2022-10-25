class Level {
    enemies;
    clouds;
    backgroundobjects;
    coin;
    bottel;
    level_end_x = 3500;

    constructor(enemies, clouds, backgroundobjects, coin, bottel){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.coin = coin;
        this.bottel = bottel;
    }
}