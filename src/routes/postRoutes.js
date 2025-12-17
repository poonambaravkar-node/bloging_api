
const express = require('express');
const controller = require('../controllers/postController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, controller.createPost);
router.get('/', controller.getAllPosts);
router.post('/:id/comments', auth, controller.addComment);
router.get('/trending', controller.trendingPosts);

module.exports = router;
