// DAO
// Data Access Object
// Design pattern focused on isolating database interaction to a single object that can be used throughout the application whenever a developer wants to do some kind of persistence

const fs = require('fs');
const path = require('path');
const {logger} = require('./util/logger');

// Path to the data file
const filePath = path.join(__dirname, "data.json");

// CRUD
// Create
function writeShoppingList(shoppingList){
    fs.writeFileSync(filePath, JSON.stringify(shoppingList, null, 2));
    // log some info
    logger.info("Shopping list updated in data.json");
}

// Read
function readShoppingList(){
    if (!fs.existsSync(filePath)) {
        // if file does not exist, create an empty shopping list
        fs.writeFileSync(filePath, JSON.stringify([]));
    }

    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Update

// Delete


module.exports = {
    readShoppingList,
    writeShoppingList
}