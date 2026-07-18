function newGame() {

    document.getElementById("titleScreen").classList.add("hidden");

    document.getElementById("nameScreen").classList.remove("hidden");

}

function startAdventure() {

    const name = document.getElementById("playerName").value;

    if(name.trim() === ""){
        alert("이름을 입력해주세요!");
        return;
    }

    alert(name + "의 모험이 시작됩니다!");

}
