export default class TownScene extends Phaser.Scene {

    constructor(){
        super("TownScene");
    }


    create(){

        const w = this.scale.width;
        const h = this.scale.height;


        this.cameras.main.setBackgroundColor("#3a7d44");


        // 마을 이름
        this.add.text(
            w / 2,
            60,
            "새벽마을",
            {
                fontSize:"48px",
                color:"#ffffff"
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
        this.add.text(
            60,
            200,
            "🌲",
            {
                fontSize:"60px"
            }
        ).setOrigin(0.5);


        this.add.text(
            w-60,
            200,
            "🌲",
            {
                fontSize:"60px"
            }
        ).setOrigin(0.5);


        this.add.text(
            80,
            450,
            "🌲",
            {
                fontSize:"60px"
            }
        ).setOrigin(0.5);


        this.add.text(
            w-80,
            450,
            "🌲",
            {
                fontSize:"60px"
            }
        ).setOrigin(0.5);



        // 플레이어
        this.player = this.add.rectangle(
            w/2,
            h/2,
            32,
            32,
            0x3366ff
        );



        this.moveX = 0;
        this.moveY = 0;



        // 방향키

        this.makeButton(
            300,
            480,
            "▲",
            0,
            -3
        );


        this.makeButton(
            300,
            580,
            "▼",
            0,
            3
        );


        this.makeButton(
            240,
            530,
            "◀",
            -3,
            0
        );


        this.makeButton(
            360,
            530,
            "▶",
            3,
            0
        );

    }



    makeButton(x,y,text,mx,my){

        const button = this.add.text(
            x,
            y,
            text,
            {
                fontSize:"50px",
                color:"#ffffff",
                backgroundColor:"#000000",
                padding:10
            }
        )
        .setOrigin(0.5)
        .setDepth(100)
        .setInteractive();



        button.on(
            "pointerdown",
            ()=>{
                this.moveX = mx;
                this.moveY = my;
            }
        );


        button.on(
            "pointerup",
            ()=>{
                this.moveX = 0;
                this.moveY = 0;
            }
        );


        button.on(
            "pointerout",
            ()=>{
                this.moveX = 0;
                this.moveY = 0;
            }
        );

    }



    update(){

        this.player.x += this.moveX;
        this.player.y += this.moveY;


        this.player.x = Phaser.Math.Clamp(
            this.player.x,
            16,
            this.scale.width-16
        );


        this.player.y = Phaser.Math.Clamp(
            this.player.y,
            16,
            this.scale.height-16
        );

    }

}
