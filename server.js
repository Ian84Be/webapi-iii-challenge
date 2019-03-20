const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const postRouter = require('./post/post-router.js');
const userRouter = require('./user/user-router.js');

const server = express();

server.use(express.json()); // built-in, no need to yarn add
server.use(helmet()); // third party, need to npm install or yarn add it

// routing
server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);

server.get('/', (req,res) => {
    res.send(` <h1>Welcome to webapi-iii-challenge</h1> `)
});

module.exports = server;