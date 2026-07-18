export default class MenuScene extends Phaser.Scene {

    constructor(){
        super("MenuScene");
    }


    create(){

        this.add.text(
            400,
            180,
            "MONSTER\nQUEST",
            {
                fontSize:"64px",
                color:"#ffffff",
                align:"center"
            }
        ).setOrigin(0.5);


        let start = this.add.text(
            400,
            350,
            "모험 시작",
            {
                fontSize:"40px",
                backgroundColor:"#2ecc71",
                padding:20
            }
        )
        .setOrigin(0.5)
        .setInteractive();


        start.on("pointerdown",()=>{

            this.scene.start("TownScene");

        });

    }

}
