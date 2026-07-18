const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const SIZE = 32;

let player = {
    x: 5,
    y: 5
};

const professor = {
    x: 4,
    y: 2
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

function newGame() {
    document.getElementById("titleScreen").classList.add("hidden");
    document.getElementById("nameScreen").classList.remove("hidden");
}

function startAdventure() {

    const name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("이름을 입력하세요!");
        return;
    }

    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");

    drawMap();
}

function drawMap() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < 10; y++) {

        for (let x = 0; x < 10; x++) {

            const tile = map[y][x];

            if (tile === "G") ctx.fillStyle = "#79d45b";
            if (tile === "T") ctx.fillStyle = "#1d7f35";
            if (tile === "H") ctx.fillStyle = "#8b5a2b";

            ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);

            if (tile === "H") {
                ctx.fillStyle = "#d43d3d";
                ctx.fillRect(x * SIZE + 8, y * SIZE + 8, 16, 16);
            }
        }
    }

    // 애드박사
    ctx.fillStyle = "#ffcc66";
    ctx.fillRect(
        professor.x * SIZE + 6,
        professor.y * SIZE + 6,
        20,
        20
    );

    // 플레이어
    ctx.fillStyle = "#0066ff";
    ctx.fillRect(
        player.x * SIZE + 6,
        player.y * SIZE + 6,
        20,
        20
    );
}

function canMove(x, y) {

    if (x < 0 || x > 9 || y < 0 || y > 9)
        return false;

    const tile = map[y][x];

    if (tile === "T") return false;
    if (tile === "H") return false;

    return true;
}

function movePlayer(dir) {

    let nx = player.x;
    let ny = player.y;

    if (dir === "up") ny--;
    if (dir === "down") ny++;
    if (dir === "left") nx--;
    if (dir === "right") nx++;

    if (canMove(nx, ny)) {
        player.x = nx;
        player.y = ny;
    }

    checkNPC();

    drawMap();
}

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowUp") movePlayer("up");
    if (e.key === "ArrowDown") movePlayer("down");
    if (e.key === "ArrowLeft") movePlayer("left");
    if (e.key === "ArrowRight") movePlayer("right");

});

function checkNPC() {

    const dx = Math.abs(player.x - professor.x);
    const dy = Math.abs(player.y - professor.y);

    if (dx + dy === 1) {

        document.getElementById("dialogText").innerText =
            "애드박사 : 안녕! 몬스터를 연구하고 있단다. 조금만 기다려 주렴!";

        document.getElementById("dialogBox").classList.remove("hidden");

    }

}

function closeDialog() {

    document.getElementById("dialogBox").classList.add("hidden");

}

drawMap();
