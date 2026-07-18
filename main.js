import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import VillageScene from "./scenes/VillageScene.js";


const config = {

    type: Phaser.AUTO,

    parent: "game",

    width: 360,

    height: 640,

    pixelArt: true,


    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    },


    physics: {

        default: "arcade",

        arcade: {

            debug: false

        }

    },


    scene: [

        BootScene,

        MenuScene,

        VillageScene

    ]

};


new Phaser.Game(config);
