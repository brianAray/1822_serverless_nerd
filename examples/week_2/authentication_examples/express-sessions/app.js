const express = require('express');
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false, // set to true in a production environment when you are using https
            maxAge: 24 * 60 * 60 * 1000, // session duration in milliseconds
        }
    })
);

/**
 * Secret: This should be a long random string to sign the session cookie, make it as secure as possible
 * 
 * Resave: This option forces the session to be saved back tot he session store, even if it wasn't modified during the request
 * 
 * saveUnitializaed: This forces an unitialized session to be saved to the session store
 * 
 * cookie.secure: for https requests
 * 
 * cookie.maxAge: session duration
 */

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/set-session", (req, res) => {
    req.session.username = "John Doe"; // store data in the session
    res.send("session data set");
});

app.get("/get-session", (req, res) => {
    const username = req.session.username; // retrieve data from the session
    res.send(`Username: ${username}`);
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err){
            console.error("Error destroying session", err);
        }
        res.redirect("/");
    });
});

app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:3000");
});