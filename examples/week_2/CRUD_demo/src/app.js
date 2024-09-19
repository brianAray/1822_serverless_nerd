const express = require('express');
const app = express();
const logger = require("./util/logger");
const itemRouter = require("./controller/ItemRouter");

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    logger.info(`Incoming ${req.method} : ${req.url}`);
    next();
});

app.use("/items", itemRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});