import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import TownScene from "./scenes/TownScene.js";


const config = {

    type: Phaser.AUTO,

    width: 800,

    height: 600,

    backgroundColor: "#14213d",

    scene: [
        BootScene,
        MenuScene,
        TownScene
    ]

};


new Phaser.Game(config);
