const INVENTORY_KEY = "inventoryItems";

/* =========================
   인벤토리 불러오기
========================= */
function getInventory(){
    const data = localStorage.getItem(INVENTORY_KEY);
    return data ? JSON.parse(data) : [];
}

/* =========================
   아이템 추가
========================= */
function addItem(item){

    const items = getInventory();

    if(!items.includes(item)){
        items.push(item);
        localStorage.setItem(
            INVENTORY_KEY,
            JSON.stringify(items)
        );
    }
}

/* =========================
   아이템 제거
========================= */
function removeItem(item){

    const items = getInventory().filter(
        i => i !== item
    );

    localStorage.setItem(
        INVENTORY_KEY,
        JSON.stringify(items)
    );
}

/* =========================
   아이템 보유 여부
========================= */
function hasItem(item){
    return getInventory().includes(item);
}

/* =========================
   인벤토리 열기
   모든 페이지 공통 사용
========================= */
function openInventory(){

    localStorage.setItem(
        "returnPage",
        location.pathname.split("/").pop()
    );

    location.href = "inventory.html";
}

/* =========================
   인벤토리에서 돌아가기
========================= */
function goBack(){

    const returnPage =
        localStorage.getItem("returnPage");

    if(
        returnPage &&
        returnPage !== "null" &&
        returnPage !== "undefined"
    ){
        location.href = returnPage;
        return;
    }

    location.href = "room1.html";
}
