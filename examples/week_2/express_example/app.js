const express = require('express');
const logger = require('./util/logger');
const bodyParser = require('body-parser');

const itemRouter = require('./routes/itemRoutes');

const app = express();
const PORT = 3000;

/**
 * Middleware are functions that can be used to process and modify http requests and responses
 * They are used to perform repetitive tasks like logging, authentication, and data validation
 * 
 * function middleware(req, res, next){
 * // Perform operation on req and res objects
 * // call next() to pass control to the next middleware or route handler
 * 
 *  next();
 * }
 * 
 */

function loggerMiddleware(req, res, next){
    logger.info(`Incoming ${req.method} : ${req.url}`);
    next();
}

app.use(loggerMiddleware);

// Body parser middleware
app.use(bodyParser.json()); //  Lets you parse incoming and outgoing json requests

// app.use(bodyParser.urlencoded()); // lets you parse URL-encoded form data

// Routes
app.use("/items", itemRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    logger.info(`Server is listening on port: ${PORT}`);
});