let level1;

function initLevel1() {

    level1 = new Level(
        [
            new Endboss(),
            new chicken(),
            new chicken(),
            new chicken(),
            new chicken(),
            new chicken(),
            new chicken(),
            new chicken(),
            new chicken(),
            new chicken()
        ],
        [
            new Cloud()
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -1439),
            new BackgroundObject('img/5_background/layers/3_third_layer/full.png', -1439),
            new BackgroundObject('img/5_background/layers/2_second_layer/full.png', -1439),
            new BackgroundObject('img/5_background/layers/1_first_layer/full.png', -1439),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 0),

            new BackgroundObject('img/5_background/layers/air.png', 1439),
            new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 1439),
            new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 1439),
            new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 1439),

            new BackgroundObject('img/5_background/layers/air.png', 2878),
            new BackgroundObject('img/5_background/layers/3_third_layer/full.png', 2878),
            new BackgroundObject('img/5_background/layers/2_second_layer/full.png', 2878),
            new BackgroundObject('img/5_background/layers/1_first_layer/full.png', 2878),
        ],

        [
            new Coin('img/8_coin/coin_2.png'),
            new Coin('img/8_coin/coin_2.png'),
            new Coin('img/8_coin/coin_2.png'),
            new Coin('img/8_coin/coin_2.png'),
            new Coin('img/8_coin/coin_2.png')
        ],

        [
            new Bottel('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),

            new Bottel('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottel('img/6_salsa_bottle/2_salsa_bottle_on_ground.png')
        ],

        [
            new Health('img/7_statusbars/3_icons/icon_health.png'),
            new Health('img/7_statusbars/3_icons/icon_health.png')
        ]
    )
}