const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addComment } = require('../controllers/commentController');

// console.log("Route.addComment -", addComment);

// Add comment to post
router.post('/:postId/comments', protect, addComment);

module.exports = router;
