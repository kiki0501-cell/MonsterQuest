import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import TownScene from "./scenes/TownScene.js";


const config = {

    type: Phaser.AUTO,

    width: window.innerWidth,
    height: window.innerHeight,

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    backgroundColor:"#14213d",

    scene:[
        BootScene,
        MenuScene,
        TownScene
    ]

};


new Phaser.Game(config);
