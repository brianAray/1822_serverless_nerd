const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());

// secret key for JWT signing (make sure to make this more secure in some way)
const secretKey = "your-secret-key";

// dummy user database (connect with a real database)
const users = [];

app.post("/register", async (req, res) => {
    let {username, password, role} = req.body;

    const saltRounds = 10;

    password = await bcrypt.hash(password, saltRounds);
    console.log(password);

    const newUser = { id: users.length + 1, username, password, role};

    users.push(newUser);

    console.log(users);

    res.status(201).json({message: "User successfully registered"});
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // find the user in the database
    const user = users.find((user) => user.username === username);
    
    if (!user || !(await bcrypt.compare(password, user.password))){
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

app.get("/protected", authenticateToken, (req, res) => {
    res.json({message : "Protected Route Accessed", user: req.user});
});

app.get("/admin-protected", authenticateAdminToken, (req, res) => {
    res.json({message : "Protected Admin Route Accessed", user: req.user});
});

async function authenticateToken(req, res, next){
    // authorization: "Bearer tokenstring"

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token){
        res.status(401).json({message: "Unauthorized Access"});
    }else{
        const user = await decodeJWT(token);
        req.user = user;
        next();
    }
}

async function authenticateAdminToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token){
        res.status(401).json({message: "Unauthorized Access"});
    }else{
        const user = await decodeJWT(token);
        if (user.role !== "admin"){
            res.status(403).json({message: "Forbidden Access"});
            return;
        }
        req.user = user;
        next();
    }
}

async function decodeJWT(token){
    try{
        const user = await jwt.verify(token, secretKey)
        return user;
    }catch(err){
        console.error(err);
    }
}

app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:3000");
})
