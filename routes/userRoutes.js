const express = require('express');
const router = express.Router();
const { getProfile, getAllUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

// @route GET /api/users/me
router.get('/me', protect, getProfile);

// @route GET /api/admin/users
router.get('/admin/users', protect, admin, getAllUsers);

module.exports = router;
