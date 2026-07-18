export default class TownScene extends Phaser.Scene {

    constructor(){
        super("TownScene");
    }


    create(){

        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;


        this.add.text(
            centerX,
            80,
            "새벽마을",
            {
                fontSize:"48px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);


        this.player = this.add.rectangle(
            centerX,
            centerY,
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
