const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

app.use(express.json());

// secret key for JWT signing (make sure to make this more secure in some way)
const secretKey = "your-secret-key";

// dummy user database (connect with a real database)
const users = [];

app.post("/register", async (req, res) => {
    const {username, password, role} = req.body;

    const newUser = { id: users.length + 1, username, password, role};

    users.push(newUser);

    res.status(201).json({message: "User successfully registered"});
});


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // find the user in the database
    const user = users.find((user) => user.username === username);
    
    if (!user || user.password !== password){
        res.status(401).json({message: "Invalid Credentials"});
    }else{
        // generate the JWT token

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
                role: user.role
            },
            secretKey,
            {
                expiresIn: "15m", // token expiration time (adjust as needed)
            }
        );

        res.json({token});
    }
});

app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:3000");
})
