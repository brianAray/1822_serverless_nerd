const express = require('express');
const router = express.Router();

// http://localhost:3000/items

router.get("/", (req, res) => {
    res.send("This is the root items route");
});

router.get("/region", (req, res) => {
    res.send("this is an additional endpoint name");
});

router.post("/", validateItemMiddleware, (req, res) => {
    const jsonData = req.body;
    console.log(jsonData);
    res.status(201).json({message: "Data Received"});
});

function validateItemMiddleware(req, res, next){
    // Check if there is a valid name and price
    let jsonBody = req.body;
    if(validateItem(jsonBody)){
        next();
    }else{
        res.status(400).json({
            message: "Invalid Name or Price"
        })
    }
}

function validateItem(data){
    // if(!data.name || !data.price){
    //     return false
    // }else{
    //     return true;
    // }
    return (data.name && data.price);
}

module.exports = router;