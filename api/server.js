const express = require('express');

const projectRouter = require('../routes/projectRouter.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);

server.get("/", (req, res) => {
    res.send('Server is running!')
})

module.exports = server;