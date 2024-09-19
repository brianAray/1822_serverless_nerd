const itemDao = require("../repository/ItemDAO");
const uuid = require("uuid");

async function getAllItems(){
    const items = await itemDao.getAllItems();
    return items;
}

async function getItemById(itemId){
    const item = await itemDao.getItemById(itemId);
    return item;
}

async function getItemByName(itemName){
    const items = await itemDao.getItemByName(itemName);
    return items;
}

async function postItem(item){
    // validate the item
    if(validateItem(item)){
        let data = await itemDao.postItem({
            ...item,
            item_id: uuid.v4()
        });
        return data;
    }
    return null;
};

function validateItem(item){
    return (item.name && item.price);
}

module.exports = {
    postItem,
    getAllItems,
    getItemById,
    getItemByName
}