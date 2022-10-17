class Level {
    enemies;
    clouds;
    backgroundobjects;
    level_end_x = 1400;

    constructor(enemies, clouds, backgroundobjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
    }
}