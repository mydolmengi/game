const INVENTORY_KEY = "inventoryItems";

function getInventory(){
    const data = localStorage.getItem(INVENTORY_KEY);
    return data ? JSON.parse(data) : [];
}

function addItem(item){
    const items = getInventory();
    if(!items.includes(item)){
        items.push(item);
        localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
    }
}

function removeItem(item){
    const items = getInventory().filter(i => i !== item);
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
}

function hasItem(item){
    return getInventory().includes(item);
}

/* =========================
   🔥 수정된 goBack (핵심)
========================= */

function goBack(){

    let lastPage = localStorage.getItem("lastPage");

    // ❗ 안전장치 (혹시 값 이상할 때)
    const validPages = [
        "forest.html",
        "house.html",
        "cave.html"
    ];

    if(validPages.includes(lastPage)){
        location.href = lastPage;
    } else {
        location.href = "room1.html";
    }
}
