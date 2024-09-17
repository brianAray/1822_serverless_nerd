// DAO
// Data Access Object
// This layer is referred in web development as the repository layer
// We do all of our data operations within this layer of code
// This creates a separation of concerns and encourages modularity in development

// This is built around CRUD
// Create Read Update Delete

const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");
const {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    UpdateCommand,
    DeleteCommand
} = require("@aws-sdk/lib-dynamodb")

const client = new DynamoDBClient({region: "us-east-1"});

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "Employees";

// READ
async function getItem(Key){
    const command = new GetCommand({
        TableName,
        Key
    });
    try{
        const data = await documentClient.send(command);
        return data.Item;
    }catch(err){
        console.error(err);
    }
}

async function createItem(Item){
    const command = new PutCommand({
        TableName,
        Item
    });
    try{
        const data = await documentClient.send(command);
        return data;
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    getItem,
    createItem
}