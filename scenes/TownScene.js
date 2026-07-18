export default class TownScene extends Phaser.Scene {

    constructor(){
        super("TownScene");
    }


    create(){

        const w = this.scale.width;
        const h = this.scale.height;


        this.cameras.main.setBackgroundColor("#3a7d44");


        this.add.text(
            w/2,
            60,
            "새벽마을",
            {
                fontSize:"48px",
                color:"#ffffff",
                fontFamily:"Jua"
            }
        ).setOrigin(0.5);



        this.add.rectangle(
            w/2,
            220,
            120,
            100,
            0xb5651d
        );


        this.add.text(
            w/2,
            220,
            "🏠",
            {
                fontSize:"70px"
            }
        ).setOrigin(0.5);



        this.createTree(60,200);
        this.createTree(w-60,200);
        this.createTree(80,450);
        this.createTree(w-80,450);



        this.player = this.add.rectangle(
            w/2,
            h/2,
            32,
            32,
            0x3366ff
        );


        this.moveX = 0;
        this.moveY = 0;



        // 모바일 방향키

        this.createButton(
            60,
            h-150,
            "▲",
            ()=>{
                this.moveX = 0;
                this.moveY = -3;
            }
        );


        this.createButton(
            60,
            h-70,
            "▼",
            ()=>{
                this.moveX = 0;
                this.moveY = 3;
            }
        );


        this.createButton(
            20,
            h-110,
            "◀",
            ()=>{
                this.moveX = -3;
                this.moveY = 0;
            }
        );


        this.createButton(
            100,
            h-110,
            "▶",
            ()=>{
                this.moveX = 3;
                this.moveY = 0;
            }
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



    createButton(x,y,text,func){

        let btn = this.add.text(
            x,
            y,
            text,
            {
                fontSize:"40px",
                backgroundColor:"#222222",
                padding:10
            }
        )
        .setOrigin(0.5)
        .setInteractive();


        btn.on(
            "pointerdown",
            func
        );


        btn.on(
            "pointerup",
            ()=>{
                this.moveX = 0;
                this.moveY = 0;
            }
        );

    }



    update(){


        this.player.x += this.moveX;
        this.player.y += this.moveY;



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
