const {
    readShoppingList,
    writeShoppingList
} = require("./shoppingListDAO");

const {logger} = require("./util/logger");

// initially load the shopping list from the file

let shoppingList = readShoppingList();

function addItem(name, price){
    const newItem = {
        name,
        price: parseFloat(price).toFixed(2),
        purchased: false
    };
    shoppingList.push(newItem);
    writeShoppingList(shoppingList); // persist the updated list
    logger.info(`Added Item: ${newItem.name}`);
    return `${name} has been added to the shopping list`;
}

function togglePurchased(index){
    if (index >= 0 && index < shoppingList.length){
        shoppingList[index].purchased = !shoppingList[index].purchased;
        writeShoppingList(shoppingList); // persist the updated list
        logger.info(
            `Toggle Purchased: ${shoppingList[index].name}: ${shoppingList[index].purchased}`
        );
        return `Toggle purchase status of ${shoppingList[index].name}`;
    }else{
        logger.error(`Failed to toggle purchase: Invalid index - ${index}`);
        return "Invalid Item Index";
    }
}

function removeItem(index){
    if (index >= 0 && index < shoppingList.length){
        const removedItem = shoppingList.splice(index, 1);
        writeShoppingList(shoppingList); // persist the updated list
        logger.info(
            `Removed Item: ${removedItem[0].name}`
        );
        return `${removedItem[0].name} has been removed`;
    }else{
        logger.error(`Failed to toggle purchase: Invalid index - ${index}`);
        return "Invalid Item Index";
    }
}

module.exports = {
    shoppingList,
    addItem,
    togglePurchased,
    removeItem
}