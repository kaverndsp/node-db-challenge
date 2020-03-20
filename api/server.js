const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send('Server is running!')
})

module.exports = server;