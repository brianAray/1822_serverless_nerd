const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = 3000;

const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const {
    CognitoIdentityProviderClient,
    SignUpCommand,
    ConfirmSignUpCommand,
    InitiateAuthCommand
} = require("@aws-sdk/client-cognito-identity-provider");

const region = "us-east-2";

// AWS Cognito Configuration
const cognitoClient = new CognitoIdentityProviderClient({region});
const userPoolId = "us-east-2_CCjnmJkci"; // user pool ID
const clientId = "798d5un3fo975adnkmk1avlfdu"; // Client ID

// register a new user
app.post("/register", async (req, res) => {
    const { username, password, email} = req.body;

    const params = {
        ClientId: clientId,
        Username: username,
        Password: password,
        UserAttributes: [
            {
                Name: "email",
                Value: email
            },
        ],
    };

    try{
        const command = new SignUpCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "User registered successfully", user: result.UserSub})
    }catch(error){
        res.status(400).send({message: error.message || JSON.stringify(error)})
    }
});

// Confirm user registration
app.post("/confirm", async (req, res) => {
    const {username, confirmationCode} = req.body;

    const params = {
        ClientId: clientId,
        Username: username,
        ConfirmationCode: confirmationCode
    };

    try {
        const command = new ConfirmSignUpCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "Confirmation successful", result});
    } catch (error) {
        res.status(400).send({message: error.message || JSON.stringify(error)});
    }
});

// Login user
app.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const params = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: clientId,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password
        },
    };

    try {
        const command = new InitiateAuthCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "Login successful", session: result.AuthenticationResult})
    } catch (error) {
        res.status(400).send({message: error.message || JSON.stringify(error)});
    }
});

// Cognito JWK setup
const client = jwksClient({
    jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,
})

function getKey(header, callback){
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    })
}

// Protected route
app.get("/protected", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token){
        return res.status(401).send({message: "No token provided"});
    }

    jwt.verify(token, getKey, {algorithms: ["RS256"]}, (err, decoded) => {
        if (err){
            return res.status(401).send({message: "Invalid token"});
        }

        res.send({message: "You accessed protected data", decoded});
    });
})


app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});