const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand} = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({"region": "us-east-1"});

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "UsersTable";

async function getUserByUsername(username){
    const command = new ScanCommand({
        TableName,
        FilterExpression: "#u = :username",
        ExpressionAttributeNames: {"#u": "username"},
        ExpressionAttributeValues: {":username": username}
    });
    try{
        const data = await documentClient.send(command);
        return data.Items[0];
    }catch(err){
        console.error(err);
    }
}

module.exports = {getUserByUsername};