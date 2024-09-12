const http = require('http');

const { createLogger, transports, format} = require('winston');

// create the logger instance
const logger = createLogger({
    level: 'info', // log only messages with level 'info' and above
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message}) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console(), // log to the console
        new transports.File({filename: 'app.log'}), // log to a file
    ],
});


const PORT = 3000;

const server = http.createServer((req, res) => {
    // request handling logic

    logger.info(`[${req.method} ${req.url}]`);

    res.setHeader('Content-Type', 'application/json');

    // handle the different HTTP methods
    let body = '';
    switch(req.method){
        case('GET'):
            res.statusCode = 200;
            res.end(JSON.stringify({message: "GET request handled"}))
            break;
        case('POST'):
            // expects there to be a body
            body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                logger.info(`Request body: ${body}`);
                res.statusCode = 201; // created
                res.end(JSON.stringify({message: "POST request handled"}));
            });
            break;
        case('PUT'):
            // expects there to be a body
            body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                logger.info(`Request body: ${body}`);
                res.statusCode = 200; 
                res.end(JSON.stringify({message: "PUT request handled"}));
            });
            break;
        case('DELETE'):
            res.statusCode = 200;
            res.end(JSON.stringify({message: "DELETE request handled"}))
            break;
        default:
            res.statusCode = 405; // method not allowed
            res.end(JSON.stringify({message: "Method not supported"}))
            break;
    }

    // res.writeHead(200, { 'Content-Type': 'text/plain'});
    // res.end("Hello, World!");
});

server.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`)
});
