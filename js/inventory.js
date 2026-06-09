const INVENTORY_KEY = "inventoryItems";

const ITEM_DATA = {
    goldenApple: {
        name: "황금 사과",
        image: "images/golden_apple.png",
        text: "황금 사과를 얻었다.<br>뭔가 아주 중요한 것 같다"
    },
    axe: {
        name: "도끼",
        image: "images/axe.png",
        text: "도끼를 얻었다.<br>아주 단단한걸~"
    },
    flower: {
        name: "꽃",
        image: "images/flower.png",
        text: "꽃을 얻었다.<br>사과하장"
    }
};

let selectedInventoryItem = null;

function getInventory() {
    const data = localStorage.getItem(INVENTORY_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function saveInventory(items) {
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
}

function addItem(item) {
    const items = getInventory();
    if (!items.includes(item)) {
        items.push(item);
        saveInventory(items);
    }
    renderInventory();
}

function hasItem(item) {
    return getInventory().includes(item);
}

function removeItem(item) {
    const items = getInventory().filter(i => i !== item);
    saveInventory(items);
    renderInventory();
}

function openInventory() {
    const popup = document.getElementById("inventoryPopup");
    if (!popup) return;

    popup.style.display = "flex";
    selectedInventoryItem = null;
    showInventoryList();
    renderInventory();
}

function closeInventory() {
    const popup = document.getElementById("inventoryPopup");
    if (!popup) return;

    popup.style.display = "none";
}

function showInventoryList() {
    const listView = document.getElementById("inventoryListView");
    const detailView = document.getElementById("inventoryDetailView");
    if (!listView || !detailView) return;

    listView.style.display = "block";
    detailView.style.display = "none";
    selectedInventoryItem = null;
}

function openItemDetail(itemKey) {
    const data = ITEM_DATA[itemKey];
    if (!data) return;

    selectedInventoryItem = itemKey;

    const listView = document.getElementById("inventoryListView");
    const detailView = document.getElementById("inventoryDetailView");
    const title = document.getElementById("inventoryDetailTitle");
    const image = document.getElementById("inventoryDetailImage");
    const text = document.getElementById("inventoryDetailText");

    if (!listView || !detailView || !title || !image || !text) return;

    listView.style.display = "none";
    detailView.style.display = "block";

    title.innerHTML = data.name;
    image.src = data.image;
    image.alt = data.name;
    text.innerHTML = data.text;
}

function backToInventoryList() {
    showInventoryList();
    renderInventory();
}

function useSelectedItem() {
    if (!selectedInventoryItem) return;

    removeItem(selectedInventoryItem);
    selectedInventoryItem = null;

    backToInventoryList();
}

function renderInventory() {
    const list = document.getElementById("inventoryItems");
    if (!list) return;

    const items = getInventory();

    if (items.length === 0) {
        list.innerHTML = `<div class="inventory-empty">비어있음</div>`;
        return;
    }

    list.innerHTML = items.map(item => {
        const data = ITEM_DATA[item] || { name: item, image: "", text: "" };
        return `
            <button class="inventory-item-card" onclick="openItemDetail('${item}')">
                <span class="inventory-item-name">${data.name}</span>
            </button>
        `;
    }).join("");
}

window.addEventListener("DOMContentLoaded", () => {
    renderInventory();
});
