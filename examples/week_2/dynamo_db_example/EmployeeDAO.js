// DAO
// Data Access Object
// This layer is referred in web development as the repository layer
// We do all of our data operations within this layer of code
// This creates a separation of concerns and encourages modularity in development

// This is built around CRUD
// Create Read Update Delete

const { DynamoDBClient, QueryCommand, ScanCommand} = require("@aws-sdk/client-dynamodb");
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

// Query is efficient when retrieving items based on the primary key (partition key) attributes and it can quickly retrieve a range of items
async function queryEmployee(id){
    const command = new QueryCommand({
        TableName,
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeNames: { "#id": "employee_id"},
        ExpressionAttributeValues: { ":id": {S: id}}
    });

    try{
        const data = await documentClient.send(command);
        return data.Items[0];
    }catch(err){
        console.error(err);
    }
}


async function queryEmployeesByRole(role){
    // A GSI is created using role as the partition key and join_date as the sort key
    // The GSI does not need unique keys

    const params = {
        TableName,
        IndexName: "role-join_date-index",
        KeyConditionExpression: "#role = :role",
        ExpressionAttributeNames: {
            "#role": "role"
        },
        ExpressionAttributeValues: {
            ":role" : {S: role}
        }
    };

    const command = new QueryCommand(params);

    try{
        const data = await documentClient.send(command);
        return data.Items;
    }catch(err){
        console.error(err);
    }
}

// Scan Operation
// The scan operation can return up to a maximum of 1 MB of data
// This does mean, for large scans you may have to do repeated scans of the table

async function scanEmployeesByRole(role){
    const command = new ScanCommand({
        TableName,
        FilterExpression: "#r = :r",
        ExpressionAttributeNames: {
            "#r": "role"
        },
        ExpressionAttributeValues: {
            ":r": {S: role}
        }
    })

    try{
        const data = await documentClient.send(command);
        return data.Items;
    }catch(err){
        console.error(err);
    }
}

// CREATE
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
    createItem,
    queryEmployee,
    queryEmployeesByRole,
    scanEmployeesByRole
}