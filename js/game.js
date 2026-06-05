let inventory = [];

let gameState = {
    frogChecked:false,
    keyFound:false
};

function updateInventory(){

    const items =
        inventory.length > 0
        ? inventory.join(", ")
        : "없음";

    document.getElementById("items").innerText =
        items;
}

function message(text){

    document.getElementById("message").innerHTML =
        text;
}

function inspectFrog(){

    if(!gameState.frogChecked){

        gameState.frogChecked = true;

        inventory.push("열쇠");

        updateInventory();

        message(`
        🐸 개구리 인형을 조사했다.<br><br>

        배에 적힌 숫자:
        <h2>7319</h2>

        인형 안에서 열쇠를 발견했다.
        `);

    }else{

        message(
            "개구리 인형이다. 이미 조사했다."
        );
    }
}

function openDoor(){

    if(inventory.includes("열쇠")){

        document.body.innerHTML = `
        <div style="
            padding:100px;
            text-align:center;
            color:white;
            background:black;
            height:100vh;
        ">
            <h1>🎉 탈출 성공</h1>

            <p>
            개구리 연구소를 탈출했다.
            </p>

            <h2>GAME CLEAR</h2>
        </div>
        `;

    }else{

        message(
            "문이 잠겨 있다.<br>열쇠가 필요하다."
        );
    }
}
