const express = require("express");
const router = express.Router();

const itemService = require("../service/ItemService");

// Read
router.get("/", async (req, res) => {

    const itemNameQuery = req.query.itemName;

    if(itemNameQuery){
        const items = await itemService.getItemByName(itemNameQuery);
        if(items){
            res.status(200).json({items})
        }else{
            res.status(400).json({message: "Failed to get items by name"});
        }
    }else{
        const items = await itemService.getAllItems();
        if(items){
            res.status(200).json({items})
        }else{
            res.status(400).json({message: "Failed to get all items"});
        }
    }

});

router.get("/:itemId", async (req, res) => {
    const item = await itemService.getItemById(req.params.itemId);

    if (item){
        res.status(200).json({item});
    }else{
        res.status(400).json({message: "Item not found"});
    }
})

// router.get("")

// Create

router.post("/", async (req, res) => {
    const data = await itemService.postItem(req.body);
    if(data){
        res.status(201).json({message: `Created Item ${JSON.stringify(req.body)}`});
    }else{
        res.status(400).json({message: "Was not created", receivedData: req.body});
    }
});

module.exports = router;