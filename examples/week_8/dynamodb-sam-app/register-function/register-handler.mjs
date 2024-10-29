import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, PutCommand} from "@aws-sdk/lib-dynamodb";

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
        let dbResponse = await postUser({username, password});
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "user successfully registered",
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

async function postUser(user){
    const command = new PutCommand({
        TableName: process.env.USERS_TABLE_NAME,
        Item: {
            username: user.username,
            password: user.password
        }
    })
    try {
        const data = await documentClient.send(command);
        return data;
    } catch (error) {
        throw error;
    }
}