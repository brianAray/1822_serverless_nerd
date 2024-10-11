const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

const userController = require("./src/controller/userController");

app.use(cors());

app.use(express.json());

app.use("/users", userController);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:4000");
});