export default class TownScene extends Phaser.Scene {

    constructor(){
        super("TownScene");
    }


    create(){

        this.add.text(
            180,
            80,
            "새벽마을",
            {
                fontSize:"48px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);


        this.player = this.add.rectangle(
            180,
            320,
            32,
            32,
            0x3366ff
        );


        this.cursors = this.input.keyboard.createCursorKeys();

    }


    update(){

        let speed = 3;


        if(this.cursors.left.isDown){
            this.player.x -= speed;
        }


        if(this.cursors.right.isDown){
            this.player.x += speed;
        }


        if(this.cursors.up.isDown){
            this.player.y -= speed;
        }


        if(this.cursors.down.isDown){
            this.player.y += speed;
        }


    }

}
