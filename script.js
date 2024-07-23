function addToShoppingList(item) {
    const shoppingList = document.getElementById('shopping-list');

    // Check if the item is already in the shopping list
    if ([...shoppingList.children].some(li => li.textContent.trim().startsWith(item))) {
        alert(item + " is already in the shopping list.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = item + ' ';
    
    const removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.onclick = function() {
        shoppingList.removeChild(listItem);
    };
    
    listItem.appendChild(removeButton);
    shoppingList.appendChild(listItem);
}

function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function addNewItem() {
    const newItemInput = document.getElementById('new-item');
    const newItem = newItemInput.value.trim();

    if (newItem) {
        // Capitalize the first letter of the input
        const capitalizedItem = capitalizeFirstLetter(newItem);

        // Check if the item is already in the items list
        const itemsList = document.getElementById('items');
        if ([...itemsList.children].some(li => li.textContent.includes(capitalizedItem))) {
            alert(capitalizedItem + " is already in the items list.");
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = capitalizedItem + ' ';
        
        // Create and append the add button
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.onclick = function() {
            addToShoppingList(capitalizedItem);
        };
        
        // Create and append the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button'; // Add a class for styling
        deleteButton.onclick = function() {
            itemsList.removeChild(listItem);
        };

        listItem.appendChild(addButton);
        listItem.appendChild(deleteButton);
        itemsList.appendChild(listItem);
        
        // Clear the input field
        newItemInput.value = '';
    } else {
        alert("Please enter a valid item.");
    }
}
