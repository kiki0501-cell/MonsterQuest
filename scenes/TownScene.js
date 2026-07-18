export default class TownScene extends Phaser.Scene {

    constructor(){
        super("TownScene");
    }


    create(){

        const w = this.scale.width;
        const h = this.scale.height;


        // 배경
        this.cameras.main.setBackgroundColor("#3a7d44");


        // 마을 이름
        this.add.text(
            w / 2,
            60,
            "새벽마을",
            {
                fontSize:"48px",
                color:"#ffffff",
                fontFamily:"Jua"
            }
        ).setOrigin(0.5);



        // 집
        this.add.rectangle(
            w / 2,
            220,
            120,
            100,
            0xb5651d
        );


        this.add.text(
            w / 2,
            220,
            "🏠",
            {
                fontSize:"70px"
            }
        ).setOrigin(0.5);



        // 나무
        this.createTree(60,200);
        this.createTree(w-60,200);
        this.createTree(80,450);
        this.createTree(w-80,450);



        // 플레이어
        this.player = this.add.rectangle(
            w / 2,
            h / 2,
            32,
            32,
            0x3366ff
        );



        this.cursors =
        this.input.keyboard.createCursorKeys();


    }



    createTree(x,y){

        this.add.text(
            x,
            y,
            "🌲",
            {
                fontSize:"60px"
            }
        ).setOrigin(0.5);

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



        // 화면 밖 못 나가게

        this.player.x =
        Phaser.Math.Clamp(
            this.player.x,
            16,
            this.scale.width-16
        );


        this.player.y =
        Phaser.Math.Clamp(
            this.player.y,
            16,
            this.scale.height-16
        );


    }

}
