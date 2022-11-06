class Level {
    enemies;
    clouds;
    backgroundobjects;
    coin;
    bottel;
    health;
    level_end_x = 3500;

    constructor(enemies, clouds, backgroundobjects, coin, bottel, health){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.coin = coin;
        this.bottel = bottel;
        this.health = health;
    }
}