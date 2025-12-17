const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const { createCategory, getAllCategories } = require('../controllers/categoryController');


// console.log("Route.createCategory -", createCategory);
// console.log("Route.getAllCategories -", getAllCategories);

// Only admin can create categories
router.post('/', protect, admin, createCategory);
router.get('/', getAllCategories);

module.exports = router;
