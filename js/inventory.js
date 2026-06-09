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

function goBack(){
    const lastPage = localStorage.getItem("lastPage");

    if(lastPage && lastPage !== "inventory.html"){
        location.href = lastPage;
    }else{
        location.href = "room1.html";
    }
}
