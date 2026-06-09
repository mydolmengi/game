const INVENTORY_KEY = "inventoryItems";

function getInventory(){

    const data =
    localStorage.getItem(
        INVENTORY_KEY
    );

    return data
        ? JSON.parse(data)
        : [];
}

function saveInventory(items){

    localStorage.setItem(
        INVENTORY_KEY,
        JSON.stringify(items)
    );
}

function addItem(item){

    let items =
    getInventory();

    if(
        !items.includes(item)
    ){

        items.push(item);

        saveInventory(items);
    }
}

function hasItem(item){

    return getInventory()
        .includes(item);
}

function removeItem(item){

    let items =
    getInventory()
    .filter(i => i !== item);

    saveInventory(items);
}

function clearInventory(){

    localStorage.removeItem(
        INVENTORY_KEY
    );
}
