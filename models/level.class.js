class Level {
    enemies;
    clouds;
    backgroundobjects;
    coin;
    level_end_x = 3500;

    constructor(enemies, clouds, backgroundobjects,coin){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.coin = coin;
    }
}