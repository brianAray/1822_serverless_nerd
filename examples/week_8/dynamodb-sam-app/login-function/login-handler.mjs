import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, QueryCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "us-east-1"});

const documentClient = DynamoDBDocumentClient.from(client);

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const lambdaHandler = async (event, context) => {
    const bodyObject = JSON.parse(event.body);
    const {username, password} = bodyObject;

    try {
        let dbResponse = await getUser(username);
        
        // if (dbResponse.password !== password){
        //     return {
        //         statusCode: 400,
        //         body: JSON.stringify({
        //             message: "Login failed",
        //             response: dbResponse
        //         })
        //     }
        // }
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successful login",
                response: dbResponse
            })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        }
    }
};

async function getUser(username){
    const command = new QueryCommand({
        TableName: process.env.USERS_TABLE_NAME,
        KeyConditionExpression: "#username = :username",
        ExpressionAttributeNames: {"#username": "username"},
        ExpressionAttributeValues: {":username": username}
    });

    try{
        const data = await documentClient.send(command);
        return data.Items[0];
    }catch(err){
        logger.error(err);
    }
};