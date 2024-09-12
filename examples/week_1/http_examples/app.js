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
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end("Hello, World!");
});

server.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`)
});
