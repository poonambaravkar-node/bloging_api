const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// @route POST /api/auth/register
router.post('/register', register);
// console.log("register-", register);


// @route POST /api/auth/login
router.post('/login', login);
// console.log("login-", login);

module.exports = router;
