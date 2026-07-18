const config = {

    type: Phaser.AUTO,

    width: 320,

    height: 576,

    backgroundColor:"#6ccf6c",

    pixelArt:true,

    scene:{
        preload,
        create,
        update
    }

};

const game = new Phaser.Game(config);

let player;
let cursors;

function preload(){

}

function create(){

    player=this.add.rectangle(
        160,
        288,
        16,
        16,
        0x0000ff
    );

    cursors=this.input.keyboard.createCursorKeys();

}

function update(){

    if(cursors.left.isDown){

        player.x-=2;

    }

    else if(cursors.right.isDown){

        player.x+=2;

    }

    if(cursors.up.isDown){

        player.y-=2;

    }

    else if(cursors.down.isDown){

        player.y+=2;

    }

}
