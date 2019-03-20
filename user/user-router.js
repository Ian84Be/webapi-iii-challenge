const express = require('express');
const Users = require('./userDb.js');

const router = express.Router();

// server.use('/api/users', userRouter);
router.get('/', async (req,res) => {
    try {
        const users = await Users.get();
        res.status(200).json(users);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const posts = await Users.getUserPosts(req.params.id);
        if (posts) {
            res.status(200).json(posts);
        }
        else {
            res.status(404).json({error:'User ID not found.'});
        }
    }
    catch(err) {
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

module.exports = router;