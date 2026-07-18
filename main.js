import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import TownScene from "./scenes/TownScene.js";


const config = {

    type: Phaser.AUTO,


    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH,

        width: 360,

        height: 640

    },


    backgroundColor:"#14213d",


    scene:[

        BootScene,

        MenuScene,

        TownScene

    ]

};


new Phaser.Game(config);
