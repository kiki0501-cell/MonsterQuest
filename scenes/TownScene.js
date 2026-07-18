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
            w / 2,
            h / 2,
            32,
            32,
            0x3366ff
        );



        this.speed = 3;


        // 이동 상태
        this.move = {
            up:false,
            down:false,
            left:false,
            right:false
        };


        // 방향 버튼
        this.createButton(
            w/2,
            h-170,
            "▲",
            "up"
        );


        this.createButton(
            w/2,
            h-50,
            "▼",
            "down"
        );


        this.createButton(
            w/2-70,
            h-110,
            "◀",
            "left"
        );


        this.createButton(
            w/2+70,
            h-110,
            "▶",
            "right"
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



    createButton(x,y,text,dir){

        let button = this.add.text(
            x,
            y,
            text,
            {
                fontSize:"50px",
                color:"#ffffff",
                backgroundColor:"#222222",
                padding:10
            }
        )
        .setOrigin(0.5)
        .setDepth(10)
        .setInteractive();



        button.on(
            "pointerdown",
            ()=>{
                this.move[dir]=true;
            }
        );


        button.on(
            "pointerup",
            ()=>{
                this.move[dir]=false;
            }
        );


        button.on(
            "pointerout",
            ()=>{
                this.move[dir]=false;
            }
        );

    }



    update(){


        if(this.move.left){
            this.player.x -= this.speed;
        }


        if(this.move.right){
            this.player.x += this.speed;
        }


        if(this.move.up){
            this.player.y -= this.speed;
        }


        if(this.move.down){
            this.player.y += this.speed;
        }



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
