let stores = [];

function createStore() {
    const storeName = document.getElementById('store-name').value;
    if (storeName) {
        stores.push({ name: storeName, categories: [] });
        document.getElementById('store-name').value = '';
        renderStores();
    }
}

function addCategory(storeIndex) {
    const categoryName = prompt("Enter category name:");
    if (categoryName) {
        stores[storeIndex].categories.push({ name: categoryName, items: [] });
        renderStores();
    }
}

function addItem(storeIndex, categoryIndex) {
    const itemName = prompt("Enter item name:");
    if (itemName) {
        stores[storeIndex].categories[categoryIndex].items.push(itemName);
        renderStores();
    }
}

function selectItem(itemName) {
    const finalList = document.getElementById('final-list');
    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    finalList.appendChild(listItem);
}

function renderStores() {
    const storesDiv = document.getElementById('stores');
    storesDiv.innerHTML = '';
    stores.forEach((store, storeIndex) => {
        const storeDiv = document.createElement('div');
        storeDiv.className = 'store';
        storeDiv.innerHTML = `
            <h3>${store.name}</h3>
            <button onclick="addCategory(${storeIndex})">Add Category</button>
            ${store.categories.map((category, categoryIndex) => `
                <div class="category">
                    <h4>${category.name}</h4>
                    <button onclick="addItem(${storeIndex}, ${categoryIndex})">Add Item</button>
                    <ul>
                        ${category.items.map(item => `<li onclick="selectItem('${item}')">${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        `;
        storesDiv.appendChild(storeDiv);
    });
}

renderStores();
