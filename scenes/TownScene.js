
export default class TownScene extends Phaser.Scene {

    constructor(){
        super("TownScene");
    }


    create(){

        const w = this.scale.width;
        const h = this.scale.height;


        this.cameras.main.setBackgroundColor("#3a7d44");


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


        this.speed = 3;


        // 방향 버튼
        this.createButton(w/2, h-150, "▲", "up");
        this.createButton(w/2, h-50, "▼", "down");
        this.createButton(w/2-70, h-100, "◀", "left");
        this.createButton(w/2+70, h-100, "▶", "right");


        this.move = {
            up:false,
            down:false,
            left:false,
            right:false
        };

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

        let btn = this.add.text(
            x,
            y,
            text,
            {
                fontSize:"50px",
                backgroundColor:"#000000",
                padding:10
            }
        )
        .setOrigin(0.5)
        .setInteractive();


        btn.on("pointerdown",()=>{
            this.move[dir]=true;
        });


        btn.on("pointerup",()=>{
            this.move[dir]=false;
        });


        btn.on("pointerout",()=>{
            this.move[dir]=false;
        });

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
