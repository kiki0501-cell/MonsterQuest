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
        this.createTree(60,200);
        this.createTree(w-60,200);
        this.createTree(80,450);
        this.createTree(w-80,450);



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



        // 방향키 위치

        this.makeButton(
            70,
            h-170,
            "▲",
            0,
            -3
        );


        this.makeButton(
            70,
            h-70,
            "▼",
            0,
            3
        );


        this.makeButton(
            20,
            h-120,
            "◀",
            -3,
            0
        );


        this.makeButton(
            120,
            h-120,
            "▶",
            3,
            0
        );

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



    makeButton(x,y,text,mx,my){


        let circle = this.add.circle(
            x,
            y,
            28,
            0x000000,
            0.45
        )
        .setDepth(100)
        .setInteractive();



        let arrow = this.add.text(
            x,
            y,
            text,
            {
                fontSize:"28px",
                color:"#ffffff"
            }
        )
        .setOrigin(0.5)
        .setDepth(101);



        circle.on(
            "pointerdown",
            ()=>{
                this.moveX = mx;
                this.moveY = my;
            }
        );


        circle.on(
            "pointerup",
            ()=>{
                this.moveX = 0;
                this.moveY = 0;
            }
        );


        circle.on(
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
