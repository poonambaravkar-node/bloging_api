const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createPost,
  getAllPosts,
  getPostsByCategory,
  getTrendingPosts
} = require('../controllers/postController');

// console.log("Route.createPost -", createPost);
// console.log("Route.getAllPosts -", getAllPosts);
// console.log("Route.getPostsByCategory -", getPostsByCategory);
// console.log("Route.getTrendingPosts -", getTrendingPosts);

// Public Routes
router.get('/', getAllPosts);
router.get('/category/:categoryName', getPostsByCategory);
router.get('/trending', getTrendingPosts);

// Protected Route to create post
router.post('/', protect, createPost);

module.exports = router;
