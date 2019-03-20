const express = require('express');
const Posts = require('./postDb.js');

const router = express.Router();

// server.use('/api/posts', postRouter);
router.get('/', async (req,res) => {
    try {
        const posts = await Posts.get();
        res.status(200).json(posts);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({error:'Error Retrieving the posts.'});
    }
});

module.exports = router;