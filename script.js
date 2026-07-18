let player = {
    x: 5,
    y: 5
};

const map = [
"GGGGGGGGGG",
"GTTGGGGTTG",
"GGGGGGGGGG",
"GGGHHGGGGG",
"GGGGGGGGGG",
"GGGGGGGGGG",
"GGTTGGGGGG",
"GGGGGGTTGG",
"GGGGGGGGGG",
"GGGGGGGGGG"
];

function newGame(){
    document.getElementById("titleScreen").classList.add("hidden");
    document.getElementById("nameScreen").classList.remove("hidden");
}

function startAdventure(){

    const name = document.getElementById("playerName").value.trim();

    if(name===""){
        alert("이름을 입력하세요!");
        return;
    }

    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");

    drawMap();
}

function drawMap(){

    const canvas=document.getElementById("gameCanvas");
    const ctx=canvas.getContext("2d");

    const size=32;

    ctx.clearRect(0,0,320,320);

    for(let y=0;y<10;y++){

        for(let x=0;x<10;x++){

            let tile=map[y][x];

            if(tile==="G"){
                ctx.fillStyle="#79d45b";
            }

            if(tile==="T"){
                ctx.fillStyle="#1d7f35";
            }

            if(tile==="H"){
                ctx.fillStyle="#8b5a2b";
            }

            ctx.fillRect(x*size,y*size,size,size);

            if(tile==="H"){
                ctx.fillStyle="#d43d3d";
                ctx.fillRect(x*size+8,y*size+8,16,16);
            }

        }

    }

    ctx.fillStyle="blue";
    ctx.fillRect(
        player.x*size+6,
        player.y*size+6,
        20,
        20
    );

}

document.addEventListener("keydown",function(e){

    switch(e.key){

        case "ArrowUp":
            if(player.y>0) player.y--;
            break;

        case "ArrowDown":
            if(player.y<9) player.y++;
            break;

        case "ArrowLeft":
            if(player.x>0) player.x--;
            break;

        case "ArrowRight":
            if(player.x<9) player.x++;
            break;

        default:
            return;

    }

    drawMap();

});
