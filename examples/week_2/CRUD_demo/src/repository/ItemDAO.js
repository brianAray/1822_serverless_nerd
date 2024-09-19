const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    UpdateCommand,
    DeleteCommand,
    ScanCommand,
    QueryCommand
} = require("@aws-sdk/lib-dynamodb");

const logger = require("../util/logger");

const client = new DynamoDBClient({region: "us-east-1"});

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "ItemsExample";

async function postItem(Item){
    const command = new PutCommand({
        TableName,
        Item
        // ReturnValues: "ALL_OLD"
    });
    try{
        const data = await documentClient.send(command);
        logger.info(`PUT command to database complete ${JSON.stringify(data)}`);
        return data;
    }catch(err){
        logger.error(err);
    }
}

async function getAllItems(){
    const command = new ScanCommand({
        TableName
    });

    try{
        const data = await documentClient.send(command);
        return data.Items;
    }catch(err){
        logger.error(err);
    }
}

async function getItemById(itemId){
    const command = new QueryCommand({
        TableName,
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeNames: {"#id": "item_id"},
        ExpressionAttributeValues: {":id": itemId}
    });

    try{
        const data = await documentClient.send(command);
        return data.Items[0];
    }catch(err){
        logger.error(err);
    }
};

async function getItemByName(itemName){
    const command = new ScanCommand({
        TableName,
        FilterExpression: "#name = :name",
        ExpressionAttributeNames: {"#name": "name"},
        ExpressionAttributeValues: {":name": itemName}
    })
    try{
        const data = await documentClient.send(command);
        return data.Items;
    }catch(err){
        logger.error(err);
    }
};

module.exports = {
    getAllItems,
    getItemById,
    getItemByName,
    postItem
}